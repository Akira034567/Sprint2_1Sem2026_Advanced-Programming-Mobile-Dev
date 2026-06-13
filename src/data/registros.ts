import { RegistroIndustrial } from "../types/RegistroIndustrial";

export const mockRegistros: RegistroIndustrial[] = [
  {
    id: 1,
    nome: "Linha de envase A",
    descricao: "Operacao dentro dos parametros esperados de pressao e vazao.",
    status: "normal",
    data: "2026-06-10T09:30:00.000Z"
  },
  {
    id: 2,
    nome: "Compressor central",
    descricao: "Temperatura acima da media. Requer acompanhamento no turno.",
    status: "alerta",
    data: "2026-06-11T14:15:00.000Z"
  },
  {
    id: 3,
    nome: "Esteira de separacao",
    descricao: "Parada critica detectada no sensor de tracao.",
    status: "critico",
    data: "2026-06-12T18:45:00.000Z"
  }
];
