import { LoteResponseDTO } from "src/types/dtos/response/lote.dto";
import api from "./api";
import { toast } from "sonner-native";
import { CreateLoteDtoReq } from "src/types/dtos/req/lote.dto";

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
  const response = await api.get<LoteResponseDTO[]>(
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

export const findLotesByQuery = async (query: {
  nome?: string;
  fazendaId?: string;
}) => {
  const response = await api.get<LoteResponseDTO[]>(`${LOTES_URL}/search`, {
    params: { ...query },
  });
  const { data, status } = response;

  if (status !== 200) {
    toast.error(`Erro ao buscar lotes com query`);
    throw new Error("Failed to fetch lotes by name");
  }

  return data;
};

export const createLote = async (data: CreateLoteDtoReq) => {
  try {
    const response = await api.post<LoteResponseDTO>(LOTES_URL, data);
    const { status } = response;

    if (status !== 201) {
      toast.error("Erro ao criar o lote");
      console.log("status diferente de 200");
      throw new Error("Failed to create lote:", response.request);
    }

    toast.success("Lote criado com sucesso!");
    console.log(status);
    return response.data;
  } catch (e) {
    console.error("Error creating lote:", e);
  }
};
