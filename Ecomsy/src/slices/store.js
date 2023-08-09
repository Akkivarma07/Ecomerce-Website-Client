import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice'
import selectedSlice from './selectedSlice'

export default configureStore({
    reducer: {
        counter: CounterSlice,
        selected: selectedSlice,
    }
}
)