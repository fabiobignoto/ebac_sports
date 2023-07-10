import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  count: number
  itensId: number[]
}

const initialState: FavoritosState = {
  count: 0,
  itensId: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,

  reducers: {
    toggleFav: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (
        state.itensId.find((produto) => {
          return produto === product.id
        })
      ) {
        state.itensId.splice(state.itensId.indexOf(product.id), 1)
        state.count -= 1
      } else {
        state.count += 1
        state.itensId.push(product.id)
      }
    }
  }
})

export const { toggleFav } = favoritosSlice.actions
export default favoritosSlice.reducer
