export class Animal {
  id: number;
  brinco: string;
  fazenda: string;
  lote: string;
  sexo: "macho" | "femea";
  idade: number;
  vacinado: boolean;
  imagem?: string;

  constructor(
    id: number,
    brinco: string,
    fazenda: string,
    lote: string,
    sexo: "macho" | "femea",
    idade: number,
    vacinado: boolean,
    imagem?: string
  ) {
    this.id = id;
    this.brinco = brinco;
    this.fazenda = fazenda;
    this.lote = lote;
    this.sexo = sexo;
    this.idade = idade;
    this.vacinado = vacinado;
    this.imagem = imagem;
  }
}