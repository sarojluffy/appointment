import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addauth from "./slices/authslice";
import loggedd from "./slices/Loggedinslice";
import booked from "./slices/Bookedslice";
import authadmin from "./slices/authAdmin";
import appointment from "./slices/AppointmentSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "log", "book", "admin", "appoint"],
};

const rootReducer = combineReducers({
  auth: addauth,
  log: loggedd,
  book: booked,
  admin: authadmin,
  appoint: appointment,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["register"],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
