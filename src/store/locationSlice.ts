import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    prev : "/"
}


const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers : {
        addPrevLocation: (state, { payload }) => {
            state.prev = payload
        },
        resetPrevLocation: (state) => {
            state.prev = "/"
        }

    }
})

export const { addPrevLocation, resetPrevLocation } = locationSlice.actions
export default locationSlice.reducer