const movies = require( "../data/movies" );

function classifyMovies ( movies )
{
  const avaliacao = {
    "0-4.9": [],
    "5.0-7.9": [],
    "8.0-10.0": []
  };
  const disponibilidade = {
    disponiveis: [],
    naoDisponiveis: []
  };

  if ( movies.length === 0 ) return { avaliacao, disponibilidade };

  for ( const movie of movies )
  {
    const filme = {
      titulo: movie.titulo,
      diretor: movie.diretor,
      genero: movie.genero,
      anoLancamento: movie.anoLancamento,
      avaliacao: movie.avaliacao
    };

    // Classificação por avaliação
    if ( filme.avaliacao >= 0 && filme.avaliacao < 5 )
    {
      avaliacao[ "0-4.9" ].push( filme );
    } else if ( filme.avaliacao >= 5 && filme.avaliacao < 8.0 )
    {
      avaliacao[ "5.0-7.9" ].push( filme );
    } else if ( filme.avaliacao >= 8 && filme.avaliacao <= 10 )
    {
      avaliacao[ "8.0-10.0" ].push( filme );
    } else
    {
      console.warn( `Avaliação fora do intervalo esperado: ${ filme.titulo } - ${ filme.avaliacao }` );
    }

    // Classificação por disponibilidade
    if ( movie.disponivel )
    {
      disponibilidade.disponiveis.push({titulo: filme.titulo});
    } else
    {
      disponibilidade.naoDisponiveis.push({titulo: filme.titulo});
    }
  }

  // Ordenação dos filmes dentro de cada intervalo de avaliação por título
  for ( const intervalo in avaliacao )
  {
    avaliacao[ "0-4.9" ].sort( ( a, b ) => a.titulo.toUpperCase() > b.titulo.toUpperCase() ? 1 : -1 )
    avaliacao[ "5.0-7.9" ].sort( ( a, b ) => a.titulo.toUpperCase() > b.titulo.toUpperCase() ? 1 : -1 )
    avaliacao[ "8.0-10.0" ].sort( ( a, b ) => a.titulo.toUpperCase() > b.titulo.toUpperCase() ? 1 : -1 )
  }

  // Ordenação dos filmes disponíveis e indisponíveis por título
  disponibilidade.disponiveis.sort( ( a, b ) => a.titulo.toUpperCase( b.titulo ) );
  disponibilidade.naoDisponiveis.sort( ( a, b ) => a.titulo.toUpperCase( b.titulo ) );

  return { avaliacao, disponibilidade };
}

module.exports = {
  classifyMovies
};
