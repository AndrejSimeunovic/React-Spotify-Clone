import { configureStore } from "@reduxjs/toolkit";
import { shazamApi } from "./services/Shazam";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware().concat(shazamApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
