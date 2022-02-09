import { configureStore } from "@reduxjs/toolkit";
import avatarReducer from "../test/service/charachter.slice";

export const store = configureStore({
  reducer: {
    counter: avatarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
