import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
      name: localStorage.getItem('name') || null,
      email: localStorage.getItem('email') || null,
      loggedIn: localStorage.getItem('loggedIn') === 'true' || false,
    },
  };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state , action) => {
            state.user = action.payload
            localStorage.setItem('name', action.payload.name || '');
            localStorage.setItem('email', action.payload.email || '');
            localStorage.setItem('loggedIn', action.payload.loggedIn || false);
        },

        clearUser: (state) => {
            state.user = {
              name: null,
              email: null,
              loggedIn: false,
            };
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('loggedIn');
          },
        },
      });


export const{setUser , clearUser} = userSlice.actions;
export default userSlice.reducer;