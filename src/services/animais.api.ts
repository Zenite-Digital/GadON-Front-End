import { toast } from "sonner-native";
import api from "./api";
import {
  AnimalResponseDTO,
  FazendaAnimaisDTO,
} from "src/types/dtos/response/animal.dto";

const ANIMAIS_URL = "/animals";

export const findAllAnimais = async () => {
  const response = await api.get<AnimalResponseDTO>(ANIMAIS_URL);
  const { data, status } = response;

  if (status !== 200) {
    toast.error("Erro ao listar os animais");
    throw new Error("Failed to fetch animais", response.request);
  }

  return data;
};

export const listAllAnimaisGroupedByFazenda = async () => {
  const response = await api.get<FazendaAnimaisDTO[]>(
    ANIMAIS_URL + "/all-grouped"
  );
  const { data, status } = response;

  if (status !== 200) {
    toast.error("Erro ao listar os animais agrupados");
    throw new Error("Failed to fetch animais agrupados:", response.request);
  }

  return data;
};
