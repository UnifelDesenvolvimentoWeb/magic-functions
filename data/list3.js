const list3 = [
  {
    id: 21,
    titulo: "Pantera Negra",
    diretor: "Ryan Coogler",
    genero: ["Ação", "Aventura", "Fantasia"],
    anoLancamento: 2018,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Marvel Studios",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 134,
    elenco: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
    premios: [
      {
        nome: "Oscar",
        categoria: "Melhor Design de Produção",
        ano: 2019
      },
      {
        nome: "MTV Movie & TV Awards",
        categoria: "Melhor Filme",
        ano: 2018
      }
    ],
    avaliacao: 7.3,
    disponivel: true,
    emprestimos: []
  },
  {
    id: 22,
    titulo: "Vingadores: Ultimato",
    diretor: "Anthony Russo, Joe Russo",
    genero: ["Ação", "Aventura", "Ficção Científica"],
    anoLancamento: 2019,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Marvel Studios",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 181,
    elenco: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    premios: [
      {
        nome: "MTV Movie & TV Awards",
        categoria: "Melhor Filme",
        ano: 2019
      },
      {
        nome: "Teen Choice Awards",
        categoria: "Melhor Filme de Ação",
        ano: 2019
      }
    ],
    avaliacao: 8.4,
    disponivel: true,
    emprestimos: []
  },
  {
    id: 23,
    titulo: "Mad Max: Estrada da Fúria",
    diretor: "George Miller",
    genero: ["Ação", "Aventura", "Ficção Científica"],
    anoLancamento: 2015,
    paisOrigem: "Austrália",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Warner Bros. Pictures",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 120,
    elenco: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    premios: [
      {
        nome: "Oscar",
        categoria: "Melhor Design de Produção",
        ano: 2016
      },
      {
        nome: "BAFTA",
        categoria: "Melhor Maquiagem e Penteado",
        ano: 2016
      }
    ],
    avaliacao: 8.1,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Neto",
        dataEmprestimo: "2024-01-12",
        dataDevolucao: "2024-04-05"
      }
    ]
  },
  {
    id: 24,
    titulo: "Um Lugar Silencioso",
    diretor: "John Krasinski",
    genero: ["Suspense", "Drama", "Terror"],
    anoLancamento: 2018,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Platinum Dunes",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 90,
    elenco: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
    premios: [
      {
        nome: "Critics' Choice Movie Awards",
        categoria: "Melhor Filme de Terror",
        ano: 2019
      },
      {
        nome: "MTV Movie & TV Awards",
        categoria: "Melhor Performance Assustadora",
        ano: 2019
      }
    ],
    avaliacao: 7.5,
    disponivel: true,
    emprestimos: []
  },
  {
    id: 25,
    titulo: "Se Beber, Não Case",
    diretor: "Todd Phillips",
    genero: ["Comédia"],
    anoLancamento: 2009,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Warner Bros. Pictures",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 100,
    elenco: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
    premios: [
      {
        nome: "MTV Movie Awards",
        categoria: "Melhor Comediante Revelação",
        ano: 2009
      },
      {
        nome: "Teen Choice Awards",
        categoria: "Melhor Comédia",
        ano: 2009
      }
    ],
    avaliacao: 7.7,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Julio",
        dataEmprestimo: "2024-02-01",
        dataDevolucao: "2024-06-01"
      },
      {
        nomePessoa: "Fernanda",
        dataEmprestimo: "2023-12-15",
        dataDevolucao: "2024-01-15"
      }
    ]
  },
  {
    id: 26,
    titulo: "Star Wars: Episódio IV - Uma Nova Esperança",
    diretor: "George Lucas",
    genero: ["Ficção Científica", "Aventura", "Fantasia"],
    anoLancamento: 1977,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Lucasfilm Ltd.",
      localizacao: "San Francisco, EUA"
    },
    duracao: 121,
    elenco: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    premios: [
      {
        nome: "Oscar",
        categoria: "Melhor Design de Produção",
        ano: 1978
      },
      {
        nome: "Globo de Ouro",
        categoria: "Melhor Filme - Drama",
        ano: 1978
      }
    ],
    avaliacao: 8.6,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Fagundes",
        dataEmprestimo: "2024-02-03",
        dataDevolucao: "2024-05-20"
      },
    ]
  }
]

module.exports = {
  list3
}