import { AnimalSexo, AnimalStatus } from "../response/animal.dto";

export interface CreateAnimalDtoReq {
  dataNascimento: Date;
  vacinado: boolean;
  status: AnimalStatus;
  sexo: AnimalSexo;
  loteId: string;
  maeId?: string;
}
