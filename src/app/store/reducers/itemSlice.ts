import {FetchItemsResponse, Item} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchItems} from "./actionCreators";

interface ItemState {
    items: Item[]
    isLoading: boolean
    error: string
    totalItemsCount: number
}

const initialState: ItemState = {
    items: [],
    isLoading: false,
    error: '',
    totalItemsCount: 0
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchItems.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchItems.fulfilled.type]: (state, action: PayloadAction<FetchItemsResponse>) => {
            state.isLoading = false
            state.error = ''
            state.items = action.payload.items
            state.totalItemsCount = action.payload.total_count
        },
        [fetchItems.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default itemSlice.reducer