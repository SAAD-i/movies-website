import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { builders } from "prettier/doc";

const initialState = {
    movies : {
        popularMovies : [],
        topRatedMovies : [],
        upcomingMovies : [],
    },
    tv_series : {
        series : [],
    },
    isLoading:false,
}

export const getPopularMovies = createAsyncThunk("getPopularMovies", async () => {
    let results=[];
      for(let i=1;i<=1;i++){
        let response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=7ff2b8ed34325fa1f74a09be9cc731b9&page=${i}`
          );
          let data = response.data;
          results = results.concat(data.results);
      }
      return results;
    });
export const getTopMovies = createAsyncThunk("getTopMovies",async()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=7ff2b8ed34325fa1f74a09be9cc731b9`);
    const data = response.data;
    return data;
})
export const getTVSeries = createAsyncThunk("getTVSeries",async()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=7ff2b8ed34325fa1f74a09be9cc731b9`);
    const data = response.data;
    return data;
})

const Slice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
    },
    extraReducers : (builder)=>{
        builder.addCase(getPopularMovies.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.movies.popularMovies = action.payload
        })
        .addCase(getTopMovies.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.movies.topRatedMovies=action.payload.results
        })
        .addCase(getTVSeries.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.tv_series.series = action.payload.results
        })
    },
})

export const {} = Slice.actions
export default Slice.reducer