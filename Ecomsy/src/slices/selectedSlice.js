import {createSlice} from '@reduxjs/toolkit';

export const selectedSlice = createSlice({
    name:"selected",
    initialState:{
        selectedItems:[],
        isAdded:false,
    },
    reducers: {
        add: (state,value) => {
            state.selectedItems.push(value.payload);
        },
        remove : (state,value) => {
            let index = state.selectedItems.indexOf(value.payload);
            if(index > -1){
                state.selectedItems.splice(index, 1);
            }
        },
        removeAll: (state) => {
            state.selectedItems = [];
        }
    }
}
)

export const {add,remove,removeAll} = selectedSlice.actions;
export default selectedSlice.reducer;