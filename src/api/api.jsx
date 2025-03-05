export const API_KEY = '55a9bb22a00e5315b77e12a84f6c24bd';
export const API_URL = `https://api.themoviedb.org/3/`;

export function MOVIE_GET({ page }) {
  return {
    url: `${API_URL}movie/popular?/&page=${page}&api_key=${API_KEY}&language=pt-BR`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function MOVIE_CATEGORY_GET() {
  return {
    url: `${API_URL}genre/movie/list?/&api_key=${API_KEY}&language=pt-BR`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function MOVIE_GET_ID(id) {
  return {
    url: `${API_URL}movie/${id}?&api_key=${API_KEY}&language=pt-BR`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
