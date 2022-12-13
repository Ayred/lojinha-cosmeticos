import { HiOutlineShoppingCart } from 'react-icons/hi';
import logo from '../../assets/logo.png';
import css from './Header.module.css';

const Header = ({
  cart,
  setCart,
  isOpenModal,
  setIsOpenModal
}) => {

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="Logo da Lojinha de cosméticos" />
      
        <span>Lojinha de Cosméticos</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Quem Somos</li>
            <li>Nossos Produtos</li>
            <li>Novos</li>
            <li>PT-BR</li>
          </ul>
        </div>
        <div>
          <div onClick={openModal} className={css.iconBadgeContainer}>
            
            <HiOutlineShoppingCart className={`${css.cart} ${css.iconBadgeIcon}`}/>
            
            {cart.length > 0 && (<div className={css.iconBadge}>{cart.length}</div>)}
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Header