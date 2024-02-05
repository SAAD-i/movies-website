import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { builders } from "prettier/doc";

const initialState = {
    movies : {
        popularMovies : [],
        topRatedMovies : [],
        upcomingMovies : [],
    },
    isLoading:false,
}

export const getPopularMovies = createAsyncThunk("getPopularMovies", async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7ff2b8ed34325fa1f74a09be9cc731b9`
      );
      const data = response.data;
      console.log(data.results);
      return data;
  });

const Slice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        // getCountPopularMovies : (state, action)=>{
        //     const length = state.movies.popularMovies.length
        //     const count = action.payload>length ? length : action.payload;
        //     const movie = []
        //     for(let i = 0 ; i < count ; i++){
        //         const index = Math.ceil(Math.random()*(length-1));
        //         movie[i] = state.movies.popularMovies[index]
        //     }
        //     return movie;
        // }
    },
    extraReducers : (builder)=>{
        builder.addCase(getPopularMovies.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.movies.popularMovies = action.payload.results
            console.log("Api Called")
        })
    }
})

export const {} = Slice.actions
export default Slice.reducer