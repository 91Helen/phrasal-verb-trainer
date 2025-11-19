import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

import verbsReducer from '../features/verbs/verbsSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
import trainerReducer from '../features/trainer/trainerSlice';
import settingsReducer from '../features/settings/settingsSlice';
import progressReducer from '../features/progress/progressSlice';

// объединяем редьюсеры
const rootReducer = combineReducers({
  verbs: verbsReducer,
  favorites: favoritesReducer,
  trainer: trainerReducer,
  settings: settingsReducer,
  progress: progressReducer,
});

// конфигурация persist — сохраняем только избранное
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// для инициализации persist
export const persistor = persistStore(store);
