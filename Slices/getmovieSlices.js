import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const getmovieAdapter = createEntityAdapter({
    selectId: (e) => e.id
  });
  const initialState = getmovieAdapter.getInitialState({
    status: 'idle',
    movieData:null

})
export const getmovieItems = createAsyncThunk('getmovie/getmovieItems', async (item) => {

    const options = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/title/v2/find',
        params: {title: 'game of', limit: '25', paginationKey:item.page.toString()},
        headers: {
          'X-RapidAPI-Key': '5e587038edmsh3e426559592ccafp1a7a06jsnc7cd5fde34cb',
          'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
      };
        let response = await axios.request(options)
          return response;
   



})

export const getmovieslices = createSlice({
    name: 'getmovie',
    initialState,
    reducers:{
        remove(state, action) {
            getmovieAdapter.removeAll(state);
      
          },
    },
    extraReducers: {
        [getmovieItems.pending]: (state, action) => {

            state.status = 'loading'
        },
        [getmovieItems.fulfilled]: (state, action) => {

            state.status = 'succeeded'
            state.movieData=action.payload.data.results
            getmovieAdapter.addMany(state,action.payload.data.results)
        },
        [getmovieItems.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
});
export const { remove } = getmovieslices.actions;
export default getmovieslices.reducer;
export const { selectAll: selectAllWaiting, selectEntities: select } = getmovieAdapter.getSelectors((state) => state.getmovie);
