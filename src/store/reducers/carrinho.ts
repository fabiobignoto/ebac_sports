import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  count: number
  value: number
  itensId: number[]
}

const initialState: CarrinhoState = {
  count: 0,
  value: 0,
  itensId: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (
        state.itensId.find((produto) => {
          return produto === product.id
        })
      ) {
        alert('Item já adicionado!')
      } else {
        state.count += 1
        state.value += product.preco
        state.itensId.push(product.id)
      }
    }
  }
})

export const { addToCart } = carrinhoSlice.actions
export default carrinhoSlice.reducer
