import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuth } from '../../../redux/reducers/auth/authReducer';
import NavItem from '../NavItem/NavItem';
import TextOrange from '../TextOrange/TextOrange';
import { IAuthorizedButtons } from './IAuthorizedButtons';
import {
  StyledAuthButtons,
  StyledAuthTitle,
  StyledCabinetLink,
} from './StyledAuthButtons';

const AuthorizedButtons: FC<IAuthorizedButtons> = ({
  username,
  authButtonHandler,
}) => {
  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    dispatch(setAuth({ userName: '', userEmail: '' }));
    authButtonHandler(false);
  };

  return (
    <StyledAuthButtons>
      <StyledAuthTitle>
        Добро пожаловать, <TextOrange text={username} />
      </StyledAuthTitle>

      <Link to="/cabinet">
        <StyledCabinetLink>Мой профиль</StyledCabinetLink>
      </Link>
      <div>
        <NavItem
          text="Выйти"
          type="desktop"
          clickHandler={logoutClickHandler}
        />
      </div>
    </StyledAuthButtons>
  );
};

export default AuthorizedButtons;