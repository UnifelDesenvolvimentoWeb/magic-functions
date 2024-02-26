const { list2 } = require("./list2");
const { list3 } = require("./list3");

const list1 = [
 {
    id: 1,
    titulo: "Cidade de Deus",
    diretor: "Fernando Meirelles",
    genero: ["Drama", "Crime"],
    anoLancamento: 2002,
    paisOrigem: "Brasil",
    idiomaOriginal: "Português",
    estudio: {
      nome: "O2 Filmes",
      localizacao: "São Paulo, Brasil"
    },
    duracao: 130,
    elenco: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen"],
    premios: [
      {
        nome: "Globo de Ouro",
        categoria: "Melhor Filme Estrangeiro",
        ano: 2003
      },
      {
        nome: "BAFTA",
        categoria: "Melhor Edição",
        ano: 2004
      }
    ],
    avaliacao: 8.6,
    disponivel: false,
    emprestimos: [
      {
        nomePessoa: "Ana",
        dataEmprestimo: "2023-09-05",
        dataDevolucao: "2023-10-05"
      }
    ]
  },
  {
    id: 2,
    titulo: "Jogos Mortais",
    diretor: "James Wan",
    genero: ["Terror", "Suspense"],
    anoLancamento: 2004,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Twisted Pictures",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 103,
    elenco: ["Cary Elwes", "Leigh Whannell", "Danny Glover"],
    avaliacao: 7.6,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "André",
        dataEmprestimo: "2023-08-15",
        dataDevolucao: "2023-09-15"
      }
    ]
  },
  {
    id: 3,
    titulo: "Matrix",
    diretor: "Lana Wachowski, Lilly Wachowski",
    genero: ["Ficção Científica", "Ação"],
    anoLancamento: 1999,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Warner Bros.",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 136,
    elenco: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    avaliacao: 8.7,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "João",
        dataEmprestimo: "2023-11-01",
        dataDevolucao: "2023-12-01"
      }
    ]
  },
  {
    id: 4,
    titulo: "Senhor dos Anéis: A Sociedade do Anel",
    diretor: "Peter Jackson",
    genero: ["Fantasia", "Aventura"],
    anoLancamento: 2001,
    paisOrigem: "Nova Zelândia",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "New Line Cinema",
      localizacao: "Wellington, Nova Zelândia"
    },
    duracao: 178,
    elenco: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    avaliacao: 8.9,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Sophia",
        dataEmprestimo: "2023-10-25",
        dataDevolucao: "2023-11-25"
      }
    ]
  },
  {
    id: 5,
    titulo: "Tropa de Elite",
    diretor: "José Padilha",
    genero: ["Ação", "Drama"],
    anoLancamento: 2007,
    paisOrigem: "Brasil",
    idiomaOriginal: "Português",
    estudio: {
      nome: "Zazen Produções",
      localizacao: "Rio de Janeiro, Brasil"
    },
    duracao: 115,
    elenco: ["Wagner Moura", "André Ramiro", "Caio Junqueira"],
    avaliacao: 8.1,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Lucas",
        dataEmprestimo: "2023-12-10",
        dataDevolucao: "2024-01-10"
      }
    ]
  },
  {
    id: 6,
    titulo: "O Grito",
    diretor: "Takashi Shimizu",
    genero: ["Terror", "Suspense"],
    anoLancamento: 2002,
    paisOrigem: "Japão",
    idiomaOriginal: "Japonês",
    estudio: {
      nome: "Pioneer LDC",
      localizacao: "Tóquio, Japão"
    },
    duracao: 92,
    elenco: ["Sarah Michelle Gellar", "Jason Behr", "Clea DuVall"],
    avaliacao: 6.7,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Mariana",
        dataEmprestimo: "2023-07-20",
        dataDevolucao: "2023-08-20"
      }
    ]
  },
  {
    id: 7,
    titulo: "Pearl Harbor",
    diretor: "Michael Bay",
    genero: ["Ação", "Drama", "Romance"],
    anoLancamento: 2001,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Touchstone Pictures",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 183,
    elenco: ["Ben Affleck", "Josh Hartnett", "Kate Beckinsale"],
    avaliacao: 6.2,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Roberto",
        dataEmprestimo: "2023-10-05",
        dataDevolucao: "2023-11-05"
      }
    ]
  },
  {
    id: 8,
    titulo: "Homem de Ferro",
    diretor: "Jon Favreau",
    genero: ["Ação", "Ficção Científica"],
    anoLancamento: 2008,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Marvel Studios",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 126,
    elenco: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges"],
    avaliacao: 7.9,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Patrícia",
        dataEmprestimo: "2023-09-15",
        dataDevolucao: "2023-10-15"
      }
    ]
  },
  {
    id: 9,
    titulo: "Diário de uma Paixão",
    diretor: "Nick Cassavetes",
    genero: ["Romance", "Drama"],
    anoLancamento: 2004,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
        nome: "New Line Cinema",
        localizacao: "Los Angeles, EUA"
    },
    duracao: 123,
    elenco: ["Ryan Gosling", "Rachel McAdams", "James Garner"],
    avaliacao: 7.8,
    disponivel: true,
    emprestimos: [
        {
        nomePessoa: "Julia",
        dataEmprestimo: "2023-11-20",
        dataDevolucao: "2023-12-20"
        }
    ]
  },    
  {
    id: 10,
    titulo: "O Alto da Compadecida",
    diretor: "Guel Arraes",
    genero: ["Comédia", "Aventura"],
    anoLancamento: 2000,
    paisOrigem: "Brasil",
    idiomaOriginal: "Português",
    estudio: {
      nome: "Globo Filmes",
      localizacao: "Rio de Janeiro, Brasil"
    },
    duracao: 104,
    elenco: ["Matheus Nachtergaele", "Selton Mello", "Fernanda Montenegro"],
    avaliacao: 8.6,
    disponivel: false,
    emprestimos: []
  },
  {
    id: 11,
    titulo: "300",
    diretor: "Zack Snyder",
    genero: ["Ação", "Drama"],
    anoLancamento: 2006,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Warner Bros.",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 117,
    elenco: ["Gerard Butler", "Lena Headey", "David Wenham"],
    avaliacao: 7.7,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Pedro",
        dataEmprestimo: "2023-08-20",
        dataDevolucao: "2023-09-20"
      }
    ]
  },
  {
    id: 12,
    titulo: "Rei Arthur",
    diretor: "Antoine Fuqua",
    genero: ["Ação", "Aventura"],
    anoLancamento: 2004,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Touchstone Pictures",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 126,
    elenco: ["Clive Owen", "Ioan Gruffudd", "Keira Knightley"],
    avaliacao: 6.3,
    disponivel: true,
    emprestimos: []
  },
  {
    id: 13,
    titulo: "O Jogo da Imitação",
    diretor: "Morten Tyldum",
    genero: ["Biografia", "Drama"],
    anoLancamento: 2014,
    paisOrigem: "Reino Unido",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Black Bear Pictures",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 114,
    elenco: ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"],
    avaliacao: 8.0,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Laura",
        dataEmprestimo: "2023-11-10",
        dataDevolucao: "2023-12-10"
      }
    ]
  },
  {
    id: 14,
    titulo: "A Lagoa Azul",
    diretor: "Randal Kleiser",
    genero: ["Aventura", "Drama"],
    anoLancamento: 1980,
    paisOrigem: "Estados Unidos",
    idiomaOriginal: "Inglês",
    estudio: {
      nome: "Columbia Pictures",
      localizacao: "Los Angeles, EUA"
    },
    duracao: 104,
    elenco: ["Brooke Shields", "Christopher Atkins", "Leo McKern"],
    avaliacao: 5.8,
    disponivel: true,
    emprestimos: [
      {
        nomePessoa: "Luciana",
        dataEmprestimo: "2023-06-15",
        dataDevolucao: "2023-07-15"
      }
    ]
  },
];

module.exports = {
  list1
}