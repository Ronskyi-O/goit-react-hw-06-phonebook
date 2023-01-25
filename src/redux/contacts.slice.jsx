import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    contacts: [],
    filter: ""
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    redusers: {
    }
})

// export const { } = contactsSlice.actions
