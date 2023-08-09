import {createSlice} from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
    name: 'counter',
    initialState:{
        value: 0,
        currName:"",
        i:0,
        flag:true,

    },
    reducers:{
        increment : (state) =>{ state.value += 1},
        decrement : (state) =>{ state.value -= 1 },
        addChar : (state,x) => {
            if(state.i < 24){
            state.currName += x.payload;
            state.i += 1;
            }
            else{
                state.flag = false;
            }
                            },
        deleteChar : (state) => {
                                    if(state.i >=0){
                                        state.currName = state.currName.substring(0, state.currName.length - 1);
                                    state.i -= 1;
                                    }

                                    else{
                                        state.i = 0;
                                        state.flag = true;
                                    }
                                }
    }
})

export const {increment, decrement,addChar,deleteChar} = CounterSlice.actions
export default CounterSlice.reducer