/* eslint-disable no-console */
import axios from 'axios';
import axiosInstance from './base.axios';
import {HTTP_METHODS, IPokemonPage} from '../../types/index';

export async function apiRequest(
  url: string,
  method: HTTP_METHODS,
  params?: unknown,
  data?: unknown
) {
  try {
    const response = await axiosInstance({
      url,
      method,
      params: {
        ...(params as Record<string, unknown>),
      },
      data,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(error.response);
      throw error.response;
    } else if (axios.isAxiosError(error) && error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error(error.request);
      throw error.request;
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('Different error than axios');
    }
  }
}

export async function getPokemonByPage(
  limit = 20,
  offset = 0
): Promise<IPokemonPage> {
  return apiRequest('pokemon', HTTP_METHODS.GET, {limit, offset});
}
