// Primeiro, carregue as variáveis de ambiente
import dotenv from 'dotenv';

// Use as variáveis do ambiente ao invés de hardcoded
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export function MOVIE_AND_CATEGORY_GET({ currentPage, selectedGenres }) {
  return {
    url: `${API_URL}discover/movie?/&page=${currentPage}&with_genres=${selectedGenres.join(
      ',',
    )}&api_key=${API_KEY}&language=pt-BR`,
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

export function MOVIE_RECOMMENDATIONS_GET(id) {
  return {
    url: `${API_URL}movie/${id}/recommendations?&api_key=${API_KEY}&language=pt-BR`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function MOVIE_TRAILER_GET(id) {
  return {
    url: `${API_URL}movie/${id}/videos?&api_key=${API_KEY}&language=pt-BR`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function MOVIE_CAST_GET(id) {
  return {
    url: `${API_URL}movie/${id}/credits?&api_key=${API_KEY}&language=pt-BR`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function MOVIE_AGE_RANGE_GET(id) {
  return {
    url: `${API_URL}movie/${id}/release_dates?&api_key=${API_KEY}&language=pt-BR`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function MOVIE_CREDITS_GET(id) {
  return {
    url: `${API_URL}movie/${id}/credits?&api_key=${API_KEY}&language=pt-BR`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
