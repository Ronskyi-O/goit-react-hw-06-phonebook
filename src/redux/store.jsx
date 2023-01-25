import { configureStore } from '@reduxjs/toolkit'
import { contactsSlice } from "../redux/contacts.slice"

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
    }
})