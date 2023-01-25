import { configureStore } from '@reduxjs/toolkit'
import { contactsSlice } from "../redux/contacts.slice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import rootReducer from './reducers'

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
}

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)


export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
    }
})

export const persistor = persistStore(store)