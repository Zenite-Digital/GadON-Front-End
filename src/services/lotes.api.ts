import { LoteResponseDTO } from "src/types/dtos/response/lote.dto";
import api from "./api";
import { toast } from "sonner-native";

const LOTES_URL = "/lotes";

export const findAllLotes = async (): Promise<LoteResponseDTO[]> => {
  const response = await api.get(LOTES_URL);
  const { data, status } = response;

  if (status !== 200) {
    toast.error("Erro ao listar os lotes");
    throw new Error("Failed to fetch lotes:", data);
  }

  return data;
};

export const findAllLotesByFazendaId = async (fazendaId: string) => {
  const response = await api.get<LoteResponseDTO>(
    LOTES_URL + `/fazenda/${fazendaId}`
  );
  const { data, status } = response;

  if (status !== 200) {
    toast.error("Erro ao listar os lotes da fazenda");
    throw new Error(`Failed to fetch lotes by fazenda ${fazendaId}`);
  }

  return data;
};

export const getLote = async (id: string): Promise<LoteResponseDTO> => {
  const response = await api.get(`${LOTES_URL}/${id}`);
  const { data, status } = response;

  if (status !== 200) {
    toast.error(`Erro ao buscar o lote`);
    throw new Error("Failed to fetch lote:", data);
  }

  return data;
};
