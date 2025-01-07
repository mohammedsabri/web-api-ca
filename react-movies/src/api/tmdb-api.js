export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

















export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/discover', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};



export const getUpcomingMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/genres', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};
  
// export const getMovie = (args) => {
//   //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export const getGenres = async () => {
//   const response = await fetch(
//     'http://localhost:8080/api/movies/tmdb/genres', {
   
//   }
//   )
//   return response.json();
// };
  
// export const getGenres = () => {
//   return fetch(
//     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//       process.env.REACT_APP_TMDB_KEY +
//       "&language=en-US"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
// };
// export const getMovieImages = ({ queryKey }) => {
//   const [, idPart] = queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export const getMovieReviews = ({ queryKey }) => {
//   const [, idPart] = queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then((error) => {
//           throw new Error(error.status_message || "Something went wrong");
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
// };
  // export const getTrendingMovies = () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         return response.json().then((error) => {
  //           throw new Error(error.status_message || "Something went wrong");
  //         });
  //       }
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // };
  export const getTrendingMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/trending', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getTopRatedMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/topRated', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  

  export const searchMovies = async (query) => {
    try{
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/search?query=${encodeURIComponent(query)}`,
      {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return await response.json();
  } catch (error) {
    throw error;
  }
  };

  export const getMovie = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    try {
        const response = await fetch(
            `http://localhost:8080/api/movies/tmdb/${id}`,
            {
                headers: {
                    'Authorization': window.localStorage.getItem('token'),
                },
            }
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
};
  

export const getMovieImages = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  try {
      const response = await fetch(
          `http://localhost:8080/api/movies/tmdb/${id}/images`,
          {
              headers: {
                  'Authorization': window.localStorage.getItem('token'),
              },
          }
      );
      return await response.json();
  } catch (error) {
      throw error;
  }
};

export const getMovieReviews = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  try {
      const response = await fetch(
          `http://localhost:8080/api/movies/tmdb/${id}/reviews`,
          {
              headers: {
                  'Authorization': window.localStorage.getItem('token'),
              },
          }
      );
      return await response.json();
  } catch (error) {
      throw error;
  }
};

export const getRecommendedMovies = async (movieId) => {
  try {
      const response = await fetch(
          `http://localhost:8080/api/movies/tmdb/${movieId}/recommended`,
          {
              headers: {
                  'Authorization': window.localStorage.getItem('token'),
              },
          }
      );
      return await response.json();
  } catch (error) {
      throw error;
  }
};


  // export const getUpcomingMovies = async () => {
  //   const response = await fetch(
  //     'http://localhost:8080/api/movies/tmdb/upcoming', {
     
  //   }
  //   )
  //   return response.json();
  // };
  // export const getUpcomingMovies = async (page = 1) => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         return response.json().then((error) => {
  //           throw new Error(error.status_message || "Something went wrong");
  //         });
  //       }
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // };

  export const getPopularMovies = (page = 1) => {

    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });

  }
  export const getNowplayingMovies = (page = 1) => {

    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });

  }

  // export const getRecommendedMovies = (movieId) => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         return response.json().then((errorData) => {
  //           throw new Error(errorData.message || "Failed to fetch recommendations");
  //         });
  //       }
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching recommended movies:", error);
  //       throw error;
  //     });
  // };

  export const getPerson = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  

  export const getPopularPeople = () => {
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  
  
  export const getMovieCredits = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
  
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`,
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  export const getPersonWithCredits = async ({ queryKey }) => {
    const [_key, { id }] = queryKey;
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=combined_credits`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };
  // export const searchMovies = async (query) => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         return response.json().then((error) => {
  //           throw new Error(error.status_message || "Something went wrong");
  //         });
  //       }
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // };

  