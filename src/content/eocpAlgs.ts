// EOCP algorithm cases example
export interface EOCPAlg {
  id: string
  label: string
  state?: string
  algs: { moves: string; name?: string }[]
}

export const eocpAlgs: EOCPAlg[] = [
  {
    id: 'EOCP-01',
    label: '2-flip adjacent',
    state: 'UF UR flipped',
    algs: [
      { moves: "R U R' U'", name: 'Standard' },
      { moves: "U R U' R'", name: 'Alternative' },
    ],
  },
  {
    id: 'EOCP-02',
    label: '2-flip opposite',
    state: 'UF UB flipped',
    algs: [{ moves: 'R2 U2 R2', name: 'Optimal' }],
  },
]
