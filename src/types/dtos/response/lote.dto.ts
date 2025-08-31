import { FazendaDTO } from "../fazenda.dto";
import { PastoDTO } from "../pasto.dto";

export interface LoteResponseDTO {
  id: string;
  nome: string;
  pasto?: PastoDTO;
  pastoId?: string;
  fazenda?: FazendaDTO;
  fazendaId?: string;
  imagem?: string;
  _count?: {
    animais?: number;
  };
}
