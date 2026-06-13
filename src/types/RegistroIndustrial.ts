export type RegistroStatus = "normal" | "alerta" | "critico";

export type RegistroIndustrial = {
  id: number;
  nome: string;
  descricao: string;
  status: RegistroStatus;
  data: string;
};
