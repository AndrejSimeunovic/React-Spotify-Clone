import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  ArtistDetails,
  ChartList,
  SearchTrack,
  SongDetails,
  Tracks,
} from "../../types";

const rapidApiKey = import.meta.env.VITE_RAPID_API_SHAZAM_KEY;

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "shazam.p.rapidapi.com");
    },
  }),

  endpoints: (builder) => ({
    getAllCharts: builder.query<ChartList, void>({
      query: () => "charts/list",
    }),
    getAllSongsByGenre: builder.query<Tracks, string>({
      query: (listId) => `charts/track?listId=${listId}`,
    }),
    getSongDetails: builder.query<SongDetails, string>({
      query: (songId) => `songs/v2/get-details?id=${songId}`,
    }),
    getRelatedSongs: builder.query<SongDetails, string>({
      query: (songId) => `songs/get-related-artist?id=${songId}`,
    }),
    getArtistDetails: builder.query<ArtistDetails, string>({
      query: (artistId) => `artists/get-details?id=${artistId}`,
    }),
    getTopSongs: builder.query<ArtistDetails, string>({
      query: (artistId) => `artists/get-top-songs?id=${artistId}`,
    }),
    getSearch: builder.query<SearchTrack, string>({
      query: (searchTerm) => `search?term=${searchTerm}`,
    }),
  }),
});

export const {
  useGetAllChartsQuery,
  useGetAllSongsByGenreQuery,
  useLazyGetAllSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetTopSongsQuery,
  useGetSearchQuery,
} = shazamApi;
