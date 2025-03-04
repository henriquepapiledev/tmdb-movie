export const API_KEY = '55a9bb22a00e5315b77e12a84f6c24bd';
export const API_URL = `https://api.themoviedb.org/3/movie/popular?language=pt-BR`;

export function MOVIE_GET({ page }) {
  return {
    url: `${API_URL}&page=${page}&api_key=${API_KEY}&language=pt-BR`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
