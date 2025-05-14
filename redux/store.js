import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userSlice";
import themeReducer from "./themeSlice";

const persistConfig = {
  key: "user",
  storage,
};

const themePersistConfig = {
  key: "theme",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    theme: persistedThemeReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
