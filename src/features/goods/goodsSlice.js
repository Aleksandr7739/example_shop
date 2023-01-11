import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    goods: [],
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducer: {
        setGoods: (state, action) => {
            state.goods = [...state.goods, action.payload]
        }
    }
})

export const { setGoods } = goodsSlice.actions
export default goodsSlice.reducer;