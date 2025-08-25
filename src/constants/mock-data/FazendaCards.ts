// export type Lote = {
//   id: string;
//   fazenda: string;
//   numero: number;
//   animais: number;
//   area: number; // hectares
//   rentavel: boolean;
//   custoHectare?: number;
//   receitaEstimada?: number;
//   dataInicio?: string;
//   status: 'ativo' | 'inativo' | 'manutencao';
// };

export const proprietarios = [
  { id: 'p1', nome: 'João Silva' },
  { id: 'p2', nome: 'Maria Souza' },
  { id: 'p3', nome: 'Carlos Almeida' },
];

export default [
  {
    id: '1',
    fazenda: "Fazenda Santa Luzia",
    numero: 1,
    animais: 120,
    area: 18,
    rentavel: true,
    custoHectare: 850,
    receitaEstimada: 25600,
    dataInicio: "2024-01-15",
    status: 'ativo' as const,
    proprietario: 'p1'
  },
  {
    id: '2', 
    fazenda: "Fazenda Santa Luzia",
    numero: 2,
    animais: 85,
    area: 12,
    rentavel: false,
    custoHectare: 920,
    receitaEstimada: 18200,
    dataInicio: "2024-02-10",
    status: 'ativo' as const,
    proprietario: 'p1'
  },
  {
    id: '3',
    fazenda: "Fazenda São João",
    numero: 1,
    animais: 200,
    area: 28,
    rentavel: true,
    custoHectare: 750,
    receitaEstimada: 42000,
    dataInicio: "2024-01-08",
    status: 'ativo' as const,
    proprietario: 'p2'
  },
  {
    id: '4',
    fazenda: "Fazenda Boa Vista",
    numero: 1,
    animais: 150,
    area: 22,
    rentavel: true,
    custoHectare: 800,
    receitaEstimada: 33000,
    dataInicio: "2024-03-01",
    status: 'ativo' as const,
    proprietario: 'p3'
  },
  {
    id: '5',
    fazenda: "Fazenda São João",
    numero: 2,
    animais: 95,
    area: 15,
    rentavel: false,
    custoHectare: 1050,
    receitaEstimada: 19500,
    dataInicio: "2024-02-20",
    status: 'manutencao' as const,
    proprietario: 'p2'
  },
  {
    id: '6',
    fazenda: "Fazenda Boa Vista",
    numero: 2,
    animais: 175,
    area: 25,
    rentavel: true,
    custoHectare: 780,
    receitaEstimada: 38500,
    dataInicio: "2024-01-22",
    status: 'ativo' as const,
    proprietario: 'p3'
  }
]