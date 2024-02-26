const list2OverdueLoansMock = [
    {
       "dataDevolucao": "2023-10-18",
       "dataEmprestimo": "2023-09-18",
       "id": 15,
       "nomePessoa": "Ricardo",
       "titulo": "Esqueceram de Mim",
     },
      {
       "dataDevolucao": "2023-08-15",
       "dataEmprestimo": "2023-05-15",
       "id": 16,
       "nomePessoa": "Fernanda",
       "titulo": "Clube da Luta",
     },
      {
       "dataDevolucao": "2023-11-15",
       "dataEmprestimo": "2023-10-15",
       "id": 18,
       "nomePessoa": "Carlos",
       "titulo": "A Chegada",
     },
      {
       "dataDevolucao": "2023-08-05",
       "dataEmprestimo": "2023-07-05",
       "id": 20,
       "nomePessoa": "Sophie",
       "titulo": "Interestelar",
     },
]

const list3OverdueLoansMock = [
  {
    "dataDevolucao": "2024-01-15",
    "dataEmprestimo": "2023-12-15",
    "id": 25,
    "nomePessoa": "Fernanda",
    "titulo": "Se Beber, Não Case",
  },
]

const classifyMoviesList2Mock = {
  avaliacao:  {
    '0-4.9': [],
    '5.0-7.9': [
      {
        titulo: "A Chegada",
        diretor: "Denis Villeneuve",
        genero: ["Ficção Científica", "Drama"],
        anoLancamento: 2016,
        avaliacao: 7.9,
      },
      {
        titulo: "Amor Além da Vida",
        diretor: "Vincent Ward",
        genero: ["Romance", "Fantasia"],
        anoLancamento: 1998,
        avaliacao: 7.1,
      },
      {
        titulo: "Esqueceram de Mim",
        diretor: "Chris Columbus",
        genero: ["Comédia", "Família"],
        anoLancamento: 1990,
        avaliacao: 7.6,
      }
    ],
    '8.0-10.0': [
      {
        titulo: "Clube da Luta",
        diretor: "David Fincher",
        genero: ["Drama"],
        anoLancamento: 1999,
        avaliacao: 8.8,
      },
      {
        titulo: "Gladiador",
        diretor: "Ridley Scott",
        genero: ["Ação", "Drama", "Aventura"],
        anoLancamento: 2000,
        avaliacao: 8.5,
      },
      {
        titulo: "Interestelar",
        diretor: "Christopher Nolan",
        genero: ["Ficção Científica", "Drama"],
        anoLancamento: 2014,
        avaliacao: 8.6,
      }
    ]
  },
  disponibilidade: {
    disponiveis: [
      { titulo: 'Clube da Luta' },
      { titulo: 'Gladiador' },
      { titulo: 'A Chegada' },
      { titulo: 'Amor Além da Vida' },
      { titulo: 'Interestelar' },
    ],
    naoDisponiveis: [
      { titulo: 'Esqueceram de Mim' }
    ],
  },
};

const classifyMoviesList3Mock = {
  avaliacao:  {
    '0-4.9': [],
    '5.0-7.9': [
      {
        titulo: "Pantera Negra",
        diretor: "Ryan Coogler",
        genero: ["Ação", "Aventura", "Fantasia"],
        anoLancamento: 2018,
        avaliacao: 7.3,
      },
      {
        titulo: "Se Beber, Não Case",
        diretor: "Todd Phillips",
        genero: ["Comédia"],
        anoLancamento: 2009,
        avaliacao: 7.7,
      },
      {
        titulo: "Um Lugar Silencioso",
        diretor: "John Krasinski",
        genero: ["Suspense", "Drama", "Terror"],
        anoLancamento: 2018,
        avaliacao: 7.5,
      }
    ],
    '8.0-10.0': [
      {
        titulo: "Mad Max: Estrada da Fúria",
        diretor: "George Miller",
        genero: ["Ação", "Aventura", "Ficção Científica"],
        anoLancamento: 2015,
        avaliacao: 8.1,
      },
      {
        titulo: "Star Wars: Episódio IV - Uma Nova Esperança",
        diretor: "George Lucas",
        genero: ["Ficção Científica", "Aventura", "Fantasia"],
        anoLancamento: 1977,
        avaliacao: 8.6,
      },
      {
        titulo: "Vingadores: Ultimato",
        diretor: "Anthony Russo, Joe Russo",
        genero: ["Ação", "Aventura", "Ficção Científica"],
        anoLancamento: 2019,
        avaliacao: 8.4,
      },
    ]
  },
  disponibilidade: {
    disponiveis: [
      { titulo: 'Pantera Negra' },
      { titulo: 'Um Lugar Silencioso' },
      { titulo: 'Se Beber, Não Case' },
      { titulo: 'Vingadores: Ultimato' },
      { titulo: 'Mad Max: Estrada da Fúria' },
      { titulo: 'Star Wars: Episódio IV - Uma Nova Esperança' },
    ],
    naoDisponiveis: [],
  },
};

const filmeExtraMock = {
  id: 35,
  titulo: "A volta dos que não foram 2: O retorno",
  diretor: "JavaScript",
  genero: ["Comédia", "Família"],
  anoLancamento: 1990,
  paisOrigem: "Por que 'tudo junto' se escreve separado e 'separado' se escreve tudo junto?",
  idiomaOriginal: "Inglês",
  estudio: {
    nome: "20th Century Fox",
    localizacao: "Los Angeles, EUA"
  },
  duracao: 103,
  elenco: ["Joe Pesci", "Daniel Stern"],
  avaliacao: 3.5,
  disponivel: false,
  emprestimos: [
    {
      nomePessoa: "Ricardo",
      dataEmprestimo: "2023-09-18",
      dataDevolucao: "2023-10-18"
    }
  ]
}



module.exports = {
  list2OverdueLoansMock,
  list3OverdueLoansMock,
  classifyMoviesList2Mock,
  filmeExtraMock,
  classifyMoviesList3Mock
}