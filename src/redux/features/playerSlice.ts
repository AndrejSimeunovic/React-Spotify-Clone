import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Displayname, HubType, Track, TrackType } from "../../types";

interface Player {
  genreListId: string;
  isPlaying?: boolean;
  activeSong: Track;
  trackList: Track[];
  currentIndex: number;
  isActive: boolean;
}
const initialState: Player = {
  genreListId: "",
  isPlaying: false,
  activeSong: {
    highlightsurls: {},
    hub: {
      displayname: Displayname.AppleMusic,
      explicit: false,
      image: "",
      options: [],
      type: HubType.Applemusic,
    },
    key: "",
    layout: "",
    properties: "",
    share: {
      href: "",
      html: "",
      snapchat: "",
      subject: "",
      text: "",
      twitter: "",
    },
    subtitle: "",
    title: "",
    type: TrackType.Music,
    url: "",
  },
  trackList: [],
  currentIndex: -1,
  isActive: false,
};

interface TrackPayLoad {
  track: Track;
  trackList: Track[];
  index: number;
}

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeGenreListId: (state, action: PayloadAction<string>) => {
      state.genreListId = action.payload;
    },
    playPause: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    getCurrentTrack: (state, action: PayloadAction<TrackPayLoad>) => {
      state.activeSong = action.payload.track;
      state.trackList = action.payload.trackList;
      state.currentIndex = action.payload.index;
    },

    nextSong: (state, action: PayloadAction<number>) => {
      if (action.payload < state.trackList.length) {
        state.activeSong = state.trackList[action.payload];
        state.currentIndex = action.payload;
      } else {
        state.isPlaying = false;
      }
    },
    prevSong: (state, action: PayloadAction<number>) => {
      if (action.payload > -1) {
        state.activeSong = state.trackList[action.payload];
        state.currentIndex = action.payload;
      }
    },
  },
});

export const {
  changeGenreListId,
  playPause,
  getCurrentTrack,
  nextSong,
  prevSong,
} = playerSlice.actions;
export default playerSlice.reducer;
