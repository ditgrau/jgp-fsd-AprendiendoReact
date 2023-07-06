import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    // createSlice devuelve un objeto (name, initialState, reducers) - metodo de Redux
    name: "user", //nombre de esta slice
    initialState: { //estado inicial del superestado de esta slice
        credentials: {
            token: "",
        },
        data: {
            name: "",
            role: "",
        },
    },
    reducers: { // funciones que especifican como actualizar el estado
        // name: login , value (state, action) => {}
        login: (state, action) => { //estado actual y accion como argumentos
            // action me viene del dispatch (escribir)
            let { payload } = action;
            (state.credentials = {
                token: payload.token,
            }),
                (state.data = {
                    name: payload.name,
                    role: payload.role,
                });
        },
        logout: (state) => {
            return {
                ...state,
                credentials: {
                    token: "",
                },
                data: {
                    name: "",
                    role: "",
                },
            };
        },
    },
});

export const userData = (state) => state.user;
// toma el estado global como argumento y devuelve la porcion del estado correspondiente a la slice .user 
export const { login, logout } = userSlice.actions; // las claves de los reducers son 'actions'
export default userSlice.reducer;