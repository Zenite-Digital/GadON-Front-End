import { FazendaDTO } from "../fazenda.dto";
import { LoteResponseDTO } from "./lote.dto";

export enum AnimalSexo {
  M = "M",
  F = "F",
}

export enum AnimalStatus {
  PROPRIEDADE = "PROPRIEDADE",
  VENDIDO = "VENDIDO",
  MORTO = "MORTO",
  VIVO = "VIVO",
}

export interface AnimalResponseDTO {
  id: string;
  dataNascimento?: string;
  status?: AnimalStatus;
  vacinado?: boolean;
  sexo?: AnimalSexo;
  criadoEm?: string;
  atualizadoEm?: string | null;
  excluidoEm?: string | null;
  loteId?: string | null;
  maeId?: string | null;
  lote?: LoteResponseDTO;
}

export interface FazendaAnimaisDTO {
  fazenda: FazendaDTO;
  animais: AnimalResponseDTO[];
}
