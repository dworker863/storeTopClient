import { FC, useState } from 'react';
import Cart from '../../Blocks/Cart/Cart';
import Contacts from '../../Blocks/Contacts/Contacts';
import Container from '../../Blocks/Container/Container';
import NavMobile from '../../Blocks/NavMobile/NavMobile';
import Search from '../../Blocks/Search/Search';
import TopLine from '../../Blocks/TopLine/TopLine';
import Hamburger from '../../Elements/Hamburger/Hamburger';
import { IHeader } from './IHeader';
import { StyledHeader } from './StyledHeader';

const Header: FC<IHeader> = ({ authButtonHandler }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const hamburgerClickHndler = () => {
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <StyledHeader>
      <NavMobile
        isActive={hamburgerActive}
        authButtonHandler={authButtonHandler}
      />
      <Container type="header">
        <Hamburger
          hamburgerActive={hamburgerActive}
          clickHandler={hamburgerClickHndler}
        />
        <TopLine authButtonHandler={authButtonHandler} />
        <Contacts />
        <Search />
        <Cart />
      </Container>
    </StyledHeader>
  );
};

export default Header;
