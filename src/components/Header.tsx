import { memo } from 'react';
// import { useNavigate } from 'react-router-dom';
import Headroom from 'react-headroom';


import {
  RiReactjsLine,
//   RiShoppingBag2Line,
} from 'react-icons/ri';
import SearchBar from './SearchBar';
import Transition from './Transition';
import Button from './Button';
import uon_copy from '../assets/uon_copy.png'

function Header() {
//   const { cartItems, setIsCartOpen } = props;
//   const navigate = useNavigate();
//   const navigateToHome = () => navigate('/');
//   const openCart = () => {
//     setIsCartOpen(true);
//     addScrollableSelector('.Items');
//     disablePageScroll();
//   };

  return (
    <Headroom upTolerance={1}>
      <Transition
        className="Header"
        direction="down"
        distance={20}
      >
        <Button
          className="Logo"
        //   handleClick={navigateToHome}
        >
          <img className='uon_logo' src={uon_copy} alt='uon_logo'/> Ecosa
        </Button>
        <SearchBar />
        {/* <Button
          className="Cart"
          handleClick={openCart}
        >
          <RiShoppingBag2Line />
          Cart
          <div>{cartItems.length}</div>
        </Button> */}

        <Button>
            <div>pages</div>
        </Button>
      </Transition>
    </Headroom>
  );
}

export default memo(Header)