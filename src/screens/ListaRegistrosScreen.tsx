import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RegistroCard } from "../components/RegistroCard";
import { RegistroIndustrial } from "../types/RegistroIndustrial";

type Props = {
  registros: RegistroIndustrial[];
  onCadastrar: () => void;
  onSelecionarRegistro: (id: number) => void;
};

export function ListaRegistrosScreen({
  registros,
  onCadastrar,
  onSelecionarRegistro
}: Props) {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.eyebrow}>Monitoramento industrial</Text>
          <Text style={styles.title}>Registros</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onCadastrar}>
          <Text style={styles.buttonText}>Novo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.list}
        data={registros}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <RegistroCard registro={item} onPress={onSelecionarRegistro} />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>Nenhum registro cadastrado</Text>
            <Text style={styles.emptyDescription}>
              Crie o primeiro registro para acompanhar o status da operacao.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 20
  },
  headerText: {
    flex: 1,
    gap: 4
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
  button: {
    minWidth: 86,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#0f766e"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700"
  },
  list: {
    gap: 12,
    paddingBottom: 24
  },
  empty: {
    alignItems: "center",
    gap: 8,
    padding: 24,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    backgroundColor: "#ffffff"
  },
  emptyTitle: {
    color: "#0f172a",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center"
  },
  emptyDescription: {
    color: "#64748b",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center"
  }
});
