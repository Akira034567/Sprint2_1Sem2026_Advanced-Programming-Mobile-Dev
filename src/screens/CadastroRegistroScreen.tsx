import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { RegistroIndustrial, RegistroStatus } from "../types/RegistroIndustrial";

type Props = {
  onCancelar: () => void;
  onSalvar: (registro: Omit<RegistroIndustrial, "id" | "data">) => void;
};

const statusOptions: { label: string; value: RegistroStatus }[] = [
  { label: "Normal", value: "normal" },
  { label: "Alerta", value: "alerta" },
  { label: "Critico", value: "critico" }
];

export function CadastroRegistroScreen({ onCancelar, onSalvar }: Props) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState<RegistroStatus>("normal");

  function handleSalvar() {
    if (!nome.trim() || !descricao.trim()) {
      Alert.alert("Campos obrigatorios", "Informe o nome e a descricao.");
      return;
    }

    onSalvar({
      nome: nome.trim(),
      descricao: descricao.trim(),
      status
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.screen}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={onCancelar} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Novo registro</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            placeholder="Ex: Caldeira principal"
            placeholderTextColor="#94a3b8"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Descricao</Text>
          <TextInput
            multiline
            placeholder="Descreva a situacao encontrada"
            placeholderTextColor="#94a3b8"
            value={descricao}
            onChangeText={setDescricao}
            style={[styles.input, styles.textArea]}
            textAlignVertical="top"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Status</Text>
          <View style={styles.segmentedControl}>
            {statusOptions.map((option) => {
              const selected = status === option.value;

              return (
                <TouchableOpacity
                  key={option.value}
                  onPress={() => setStatus(option.value)}
                  style={[
                    styles.segmentedButton,
                    selected && styles.segmentedButtonSelected
                  ]}
                >
                  <Text
                    style={[
                      styles.segmentedButtonText,
                      selected && styles.segmentedButtonTextSelected
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
        <Text style={styles.saveButtonText}>Salvar registro</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24
  },
  header: {
    gap: 16,
    marginBottom: 24
  },
  title: {
    color: "#0f172a",
    fontSize: 28,
    fontWeight: "800"
  },
  form: {
    flex: 1,
    gap: 18
  },
  field: {
    gap: 8
  },
  label: {
    color: "#334155",
    fontSize: 14,
    fontWeight: "700"
  },
  input: {
    minHeight: 50,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    color: "#0f172a",
    fontSize: 16
  },
  textArea: {
    minHeight: 120
  },
  segmentedControl: {
    flexDirection: "row",
    gap: 8
  },
  segmentedButton: {
    flex: 1,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    backgroundColor: "#ffffff"
  },
  segmentedButtonSelected: {
    borderColor: "#0f766e",
    backgroundColor: "#ccfbf1"
  },
  segmentedButtonText: {
    color: "#475569",
    fontSize: 14,
    fontWeight: "700"
  },
  segmentedButtonTextSelected: {
    color: "#115e59"
  },
  secondaryButton: {
    alignSelf: "flex-start",
    paddingVertical: 8
  },
  secondaryButtonText: {
    color: "#0f766e",
    fontSize: 16,
    fontWeight: "700"
  },
  saveButton: {
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#0f766e"
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800"
  }
});
