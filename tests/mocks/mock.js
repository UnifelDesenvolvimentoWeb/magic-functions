const mockTitles1 = [
  'Cidade de Deus',
  'Jogos Mortais',
  'Matrix',
  'Senhor dos Anéis: A Sociedade do Anel',
  'Tropa de Elite',
  'O Grito',
  'Pearl Harbor',
  'Homem de Ferro',
  'Diário de uma Paixão',
  'O Alto da Compadecida',
  '300',
  'Rei Arthur',
  'O Jogo da Imitação',
  'A Lagoa Azul'
]

const mockTitles2 = [
  'Esqueceram de Mim',
  'Clube da Luta',
  'Gladiador',
  'A Chegada',
  'Amor Além da Vida',
  'Interestelar'
]

const mockTitles3 = [
  'Pantera Negra',
  'Vingadores: Ultimato',
  'Mad Max: Estrada da Fúria',
  'Um Lugar Silencioso',
  'Se Beber, Não Case',
  'Star Wars: Episódio IV - Uma Nova Esperança'
]

const moviesList2Mock = [
  {  id: 23,
    titulo: "Mad Max: Estrada da Fúria",
    diretor: "George Miller",
    genero: ["Ação", "Aventura", "Ficção Científica"],
    anoLancamento: 2015, },
  {  id: 24,
    titulo: "Um Lugar Silencioso",
    diretor: "John Krasinski",
    genero: ["Suspense", "Drama", "Terror"],
    anoLancamento: 2018, },
  {  id: 25,
    titulo: "Se Beber, Não Case",
    diretor: "Todd Phillips",
    genero: ["Comédia"],
    anoLancamento: 2009, }
];
const expectedList2Mock = [
  { id: 25,
    titulo: "Se Beber, Não Case",
    diretor: "Todd Phillips",
    genero: ["Comédia"],
    anoLancamento: 2009, 
  },
  {  id: 23,
    titulo: "Mad Max: Estrada da Fúria",
    diretor: "George Miller",
    genero: ["Ação", "Aventura", "Ficção Científica"],
    anoLancamento: 2015, 
  },
  {  id: 24,
    titulo: "Um Lugar Silencioso",
    diretor: "John Krasinski",
    genero: ["Suspense", "Drama", "Terror"],
    anoLancamento: 2018,
  }
];

const moviesList1Mock = [
  {  id: 12,
    titulo: "Rei Arthur",
    diretor: "Antoine Fuqua",
    genero: ["Ação", "Aventura"],
    anoLancamento: 2004,
  },
  {  id: 7,
    titulo: "Pearl Harbor",
    diretor: "Michael Bay",
    genero: ["Ação", "Drama", "Romance"],
    anoLancamento: 2001, 
  },
  {  id: 11,
    titulo: "300",
    diretor: "Zack Snyder",
    genero: ["Ação", "Drama"],
    anoLancamento: 2006,
  },
];
const expectedList1Mock = [
  {  id: 7,
    titulo: "Pearl Harbor",
    diretor: "Michael Bay",
    genero: ["Ação", "Drama", "Romance"],
    anoLancamento: 2001, 
  },
  {  id: 12,
    titulo: "Rei Arthur",
    diretor: "Antoine Fuqua",
    genero: ["Ação", "Aventura"],
    anoLancamento: 2004,
  },
  {  id: 11,
    titulo: "300",
    diretor: "Zack Snyder",
    genero: ["Ação", "Drama"],
    anoLancamento: 2006,
  },
];

module.exports = {
  mockTitles1,
  mockTitles2,
  mockTitles3,
  moviesList2Mock,
  expectedList2Mock,
  expectedList1Mock,
  moviesList1Mock
}