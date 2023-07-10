import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { Produto } from '../../App'
import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const cart = useSelector((state: RootReducer) => state.carrinho)
  const fav = useSelector((state: RootReducer) => state.favoritos)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{fav.count} favoritos</span>
        <img src={cesta} />
        <span>
          {cart.count} itens, valor total: {cart.value}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
