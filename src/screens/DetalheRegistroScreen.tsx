import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RegistroIndustrial, RegistroStatus } from "../types/RegistroIndustrial";

type Props = {
  registro?: RegistroIndustrial;
  onVoltar: () => void;
};

const statusLabel: Record<RegistroStatus, string> = {
  normal: "Normal",
  alerta: "Alerta",
  critico: "Critico"
};

export function DetalheRegistroScreen({ registro, onVoltar }: Props) {
  if (!registro) {
    return (
      <View style={styles.screen}>
        <TouchableOpacity onPress={onVoltar} style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Registro nao encontrado</Text>
          <Text style={styles.emptyText}>
            O item selecionado nao esta mais disponivel na lista local.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={onVoltar} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.eyebrow}>Detalhe do registro</Text>
        <Text style={styles.title}>{registro.nome}</Text>

        <View style={styles.infoGrid}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Status</Text>
            <Text style={styles.infoValue}>{statusLabel[registro.status]}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Data</Text>
            <Text style={styles.infoValue}>
              {new Date(registro.data).toLocaleString("pt-BR")}
            </Text>
          </View>
        </View>

        <View style={styles.descriptionBox}>
          <Text style={styles.infoLabel}>Descricao</Text>
          <Text style={styles.description}>{registro.descricao}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    marginBottom: 18
  },
  backButtonText: {
    color: "#0f766e",
    fontSize: 16,
    fontWeight: "700"
  },
  content: {
    gap: 18
  },
  eyebrow: {
    color: "#0f766e",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase"
  },
  title: {
    color: "#0f172a",
    fontSize: 30,
    fontWeight: "800"
  },
  infoGrid: {
    gap: 12
  },
  infoBox: {
    gap: 6,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    backgroundColor: "#ffffff"
  },
  infoLabel: {
    color: "#64748b",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase"
  },
  infoValue: {
    color: "#0f172a",
    fontSize: 17,
    fontWeight: "700"
  },
  descriptionBox: {
    gap: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    backgroundColor: "#ffffff"
  },
  description: {
    color: "#334155",
    fontSize: 16,
    lineHeight: 24
  },
  empty: {
    gap: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    backgroundColor: "#ffffff"
  },
  emptyTitle: {
    color: "#0f172a",
    fontSize: 18,
    fontWeight: "800"
  },
  emptyText: {
    color: "#64748b",
    fontSize: 15,
    lineHeight: 22
  }
});
