import { toast } from "sonner-native";
import api from "./api";
import {
  AnimalResponseDTO,
  FazendaAnimaisDTO,
} from "src/types/dtos/response/animal.dto";
import { CreateAnimalDtoReq } from "src/types/dtos/req/animal.dto";

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

export const createAnimal = async (data: CreateAnimalDtoReq) => {
  try {
    const response = await api.post<AnimalResponseDTO>(ANIMAIS_URL, data);
    const { status } = response;

    if (status !== 201) {
      toast.error("Erro ao criar o animal");
      throw new Error("Failed to create animal:", response.request);
    }

    toast.success("Animal criado com sucesso!");
    return response.data;
  } catch (e) {
    console.error("Error creating animal:", e);
  }
};
