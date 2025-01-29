import { configureStore } from "@reduxjs/toolkit"

// slices
import { taskSlice } from "./slices/taskSlice"
import { settingsSlice } from "./slices/settingsSlice"

export const store = configureStore({
    reducer: {
        tasks: taskSlice.reducer,
        settings: settingsSlice.reducer
    }
})