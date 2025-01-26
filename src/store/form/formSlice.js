import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del formulario
const initialState = {
  MODULE: 'React Mod7', // Valor predeterminado
  USERNAME: '',
  EMAIL: '',
  PASSWORD: 'mod7USIP-jorge',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // Acción para actualizar los valores del formulario
    setFormData: (state, action) => {
      const { MODULE, USERNAME, EMAIL, PASSWORD } = action.payload;

      // Guardar únicamente si PASSWORD es igual al valor predeterminado
      if (PASSWORD === 'mod7USIP-jorge') {
        state.MODULE = MODULE || state.MODULE; // MODULE siempre será React Mod7
        state.USERNAME = USERNAME;
        state.EMAIL = EMAIL;
        state.PASSWORD = PASSWORD;
      } else {
        console.warn('PASSWORD inválido, no se guardaron los datos en el store.');
      }
    },
    // Acción para limpiar los datos del formulario
    clearFormData: (state) => {
      state.USERNAME = '';
      state.EMAIL = '';
      state.PASSWORD = 'mod7USIP-jorge';
    },
  },
});

export const { setFormData, clearFormData } = formSlice.actions;

export default formSlice.reducer;
