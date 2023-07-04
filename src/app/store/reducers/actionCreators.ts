import axios from "axios";
import {FetchItemsResponse} from "./types";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
    'item/fetchAll',
    async (searchText: string, thunkAPI) => {
        try {
            const response = await axios.get<FetchItemsResponse>("https://api.github.com/search/repositories", {
                params: {
                    q: searchText
                }
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить данные")
        }
    }
)