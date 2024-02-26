const list2 = [
  {
    id: 15,
    titulo: "Esqueceram de Mim",
    diretor: "Chris Columbus",
    genero: ["Comédia", "Família"],
    anoLancamento: 1990,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "20th Century Fox",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 103,
    elenco: ["Macaulay Culkin", "Joe Pesci", "Daniel Stern"],
    avaliacao: 7.6,
    disponivel: false,
    emprestimos: [
      {
        nomePessoa: "Ricardo",
        dataEmprestimo: "2023-09-18",
        dataDevolucao: "2023-10-18"
      }
    ]
  },
  {
    id: 16,
    titulo: "Clube da Luta",
    diretor: "David Fincher",
    genero: ["Drama"],
    anoLancamento: 1999,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Fox 2000 Pictures",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 139,
    elenco: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    premios: [
      {
        nome: "Saturn Awards",
        categoria: "Melhor Ator Coadjuvante",
        ano: 2000
      }
    ],
    avaliacao: 8.8,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Fernanda",
        dataEmprestimo: "2023-05-15",
        dataDevolucao: "2023-08-15"
      }
    ]
  },
  {
    id: 17,
    titulo: "Gladiador",
    diretor: "Ridley Scott",
    genero: ["Ação", "Drama", "Aventura"],
    anoLancamento: 2000,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "DreamWorks Pictures",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 155,
    elenco: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    premios: [
      {
        nome: "Oscar",
        categoria: "Melhor Filme",
        ano: 2001
      },
      {
        nome: "BAFTA",
        categoria: "Melhor Filme",
        ano: 2001
      }
    ],
    avaliacao: 8.5,
    disponivel: true,
    emprestimos: []
  },
  {
    id: 18,
    titulo: "A Chegada",
    diretor: "Denis Villeneuve",
    genero: ["Ficção Científica", "Drama"],
    anoLancamento: 2016,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "21 Laps Entertainment",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 116,
    elenco: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
    premios: [
      {
        nome: "Oscar",
        categoria: "Melhor Edição de Som",
        ano: 2017
      },
      {
        nome: "BAFTA",
        categoria: "Melhor Filme Britânico",
        ano: 2017
      }
    ],
    avaliacao: 7.9,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Carlos",
        dataEmprestimo: "2023-10-15",
        dataDevolucao: "2023-11-15"
      },
      {
        nomePessoa: "Maria",
        dataEmprestimo: "2024-01-20",
        dataDevolucao: "2024-06-20"
      }
    ]
  },
  {
    id: 19,
    titulo: "Amor Além da Vida",
    diretor: "Vincent Ward",
    genero: ["Romance", "Fantasia"],
    anoLancamento: 1998,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "PolyGram Filmed Entertainment",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 113,
    elenco: ["Robin Williams", "Cuba Gooding Jr.", "Annabella Sciorra"],
    avaliacao: 7.1,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Rafael",
        dataEmprestimo: "2024-02-10",
        dataDevolucao: "2024-06-10"
      }
    ]
  },
  {
    id: 20,
    titulo: "Interestelar",
    diretor: "Christopher Nolan",
    genero: ["Ficção Científica", "Drama"],
    anoLancamento: 2014,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Paramount Pictures",
      localizacao: "Hollywood, EUA"
    },
    duracao: 169,
    elenco: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    avaliacao: 8.6,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Sophie",
        dataEmprestimo: "2023-07-05",
        dataDevolucao: "2023-08-05"
      }
    ]
  },
]

module.exports = {
  list2
}