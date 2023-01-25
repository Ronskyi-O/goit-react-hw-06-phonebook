import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contacts: [],
    filter: ""
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
    }
})

export const { addContact } = contactsSlice.actions;
