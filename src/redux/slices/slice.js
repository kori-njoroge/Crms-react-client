import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const state = {
    loggedUser:[],
    products:[],
    user:[]
}

const users = createSlice({
    name:'usersSlice',
    initialState:state,
    reducers:{

    },
    extraReducers:{

    }
})


export default users.reducer

