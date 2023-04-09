import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import colorReducer from './colorSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// Data Persist Config
const persistConfig = {
  key: 'shoppingCart',
  storage,
}
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedColorReducer = persistReducer(persistConfig, colorReducer);
// Part2: Combine Reducers and Create a Store
export const store = configureStore({
   reducer: {
    //  cart: cartReducer,
    //  color: colorReducer,
    cart: persistedCartReducer,
    color: persistedColorReducer,
   },
   devTools: process.env.NODE_ENV !== 'production',
   middleware: [thunk]
 });

//  export store to global
export const persistor = persistStore(store);