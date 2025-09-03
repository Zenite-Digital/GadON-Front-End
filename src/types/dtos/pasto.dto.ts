import { FazendaDTO } from "./fazenda.dto";
import { LoteResponseDTO } from "./response/lote.dto";

export interface PastoDTO {
  id?: string;
  nome: string;
  alqueire?: number;
  fazenda?: FazendaDTO;
  fazendaId?: string;
  lote?: LoteResponseDTO;
  loteId?: string;
}
