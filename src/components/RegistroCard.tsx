import { Pressable, StyleSheet, Text, View } from "react-native";

import { RegistroIndustrial, RegistroStatus } from "../types/RegistroIndustrial";

type Props = {
  registro: RegistroIndustrial;
  onPress: (id: number) => void;
};

const statusConfig: Record<
  RegistroStatus,
  { label: string; backgroundColor: string; color: string }
> = {
  normal: {
    label: "Normal",
    backgroundColor: "#dcfce7",
    color: "#166534"
  },
  alerta: {
    label: "Alerta",
    backgroundColor: "#fef3c7",
    color: "#92400e"
  },
  critico: {
    label: "Critico",
    backgroundColor: "#fee2e2",
    color: "#991b1b"
  }
};

export function RegistroCard({ registro, onPress }: Props) {
  const status = statusConfig[registro.status];

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => onPress(registro.id)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{registro.nome}</Text>
        <View style={[styles.badge, { backgroundColor: status.backgroundColor }]}>
          <Text style={[styles.badgeText, { color: status.color }]}>
            {status.label}
          </Text>
        </View>
      </View>

      <Text numberOfLines={2} style={styles.description}>
        {registro.descricao}
      </Text>

      <Text style={styles.date}>
        {new Date(registro.data).toLocaleDateString("pt-BR")}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    backgroundColor: "#ffffff"
  },
  cardPressed: {
    opacity: 0.76
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12
  },
  title: {
    flex: 1,
    color: "#0f172a",
    fontSize: 17,
    fontWeight: "700"
  },
  badge: {
    minWidth: 72,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700"
  },
  description: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 20
  },
  date: {
    color: "#64748b",
    fontSize: 13,
    fontWeight: "600"
  }
});
