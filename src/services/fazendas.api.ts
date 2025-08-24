import { FazendaDTO } from "src/types/dtos/fazenda.dto";
import api from "./api";
import { toast } from "sonner-native";

const FAZENDAS_URL = "/fazendas";

export const findAllFazendas = async (): Promise<FazendaDTO[]> => {
  const response = await api.get(FAZENDAS_URL);
  const { data, status } = response;

  if (status !== 200) {
    toast.error("Erro ao listar as fazendas");
    throw new Error("Failed to fetch fazendas:", data);
  }

  return data;
};

export const getFazenda = async (id: string): Promise<FazendaDTO> => {
  const response = await api.get(`${FAZENDAS_URL}/${id}`);
  const { data, status } = response;

  if (status !== 200) {
    toast.error(`Erro ao buscar a fazenda`);
    throw new Error("Failed to fetch fazenda:", data);
  }

  return data;
};
