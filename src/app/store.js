import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

import verbsReducer from '../features/verbs/verbsSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
import trainerReducer from '../features/trainer/trainerSlice';
import settingsReducer from '../features/settings/settingsSlice';
import progressReducer from '../features/progress/progressSlice';

// persist настройки — сохраняем только избранное
const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    verbs: verbsReducer,
    favorites: persistedFavoritesReducer, // только избранное сохраняется
    trainer: trainerReducer,
    settings: settingsReducer,
    progress: progressReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
