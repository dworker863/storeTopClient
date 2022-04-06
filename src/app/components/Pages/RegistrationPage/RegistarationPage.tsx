import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRegistration } from '../../../redux/reducers/auth/authReducer';
import Container from '../../Blocks/Container/Container';
import Button from '../../Elements/Button/Button';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import {
  StyledRegistrationInput,
  StyledRegistrationLabel,
  StyledRegistrationPage,
} from './StyledRegistrationPage';

const RegistrationPage: FC = () => {
  const [registr, setRegistr] = useState({
    username: '',
    email: '',
    tel: '',
    password: '',
    role: 'User',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registrClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(
      setRegistration(
        registr.username,
        registr.tel,
        registr.email,
        registr.password,
        registr.role,
      ),
    );
    navigate('/');
  };

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    switch (event.target.name) {
      case 'username': {
        setRegistr({ ...registr, username: event.target.value });
        break;
      }

      case 'tel': {
        setRegistr({ ...registr, tel: event.target.value });
        break;
      }

      case 'email': {
        setRegistr({ ...registr, email: event.target.value });
        break;
      }

      case 'password': {
        setRegistr({ ...registr, password: event.target.value });
        break;
      }

      default:
        return;
    }
  };

  return (
    <Container type="common">
      <StyledRegistrationPage>
        <SectionTitle text="Регистрация" primary={false} />
        <StyledRegistrationLabel htmlFor="#username">
          Имя
        </StyledRegistrationLabel>
        <StyledRegistrationInput
          id="username"
          type="text"
          name="username"
          value={registr.username}
          onChange={inputChangeHandler}
        />
        <StyledRegistrationLabel htmlFor="#tel">
          Телефон
        </StyledRegistrationLabel>
        <StyledRegistrationInput
          id="tel"
          type="text"
          name="tel"
          value={registr.tel}
          onChange={inputChangeHandler}
        />
        <StyledRegistrationLabel htmlFor="#email">
          Email
        </StyledRegistrationLabel>
        <StyledRegistrationInput
          id="email"
          type="text"
          name="email"
          value={registr.email}
          onChange={inputChangeHandler}
        />
        <StyledRegistrationLabel htmlFor="#password">
          Пароль
        </StyledRegistrationLabel>
        <StyledRegistrationInput
          id="password"
          type="password"
          name="password"
          value={registr.password}
          onChange={inputChangeHandler}
        />
        <Button text="Зарегистрироваться" clickHandler={registrClickHandler} />
      </StyledRegistrationPage>
    </Container>
  );
};

export default RegistrationPage;
