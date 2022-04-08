import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Input/Input';
import Label from '../../Elements/Label/Label';
import { StyledForm } from '../../../commonStyles/StyledForm';
import { MouseEvent, FC, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRegistration } from '../../../redux/reducers/auth/authReducer';
import TextOrange from '../../Elements/TextOrange/TextOrange';
import { StyledTextSimple } from '../../../commonStyles/StyledTextSimple';
import { StyledFlexWrapper } from '../../../commonStyles/StyledFlexWrapper';
import { StyledTextLightGrey } from '../../../commonStyles/StyledTextLightGrey';

const FormRegistration: FC = () => {
  const [registr, setRegistr] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    city: '',
    street: '',
    houseNumber: '',
    floor: '',
    flatNumber: '',
    postIndex: '',
    role: 'User',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registrClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(
      setRegistration(
        registr.username,
        registr.email,
        registr.password,
        registr.passwordConfirm,
        registr.phone,
        registr.city,
        registr.street,
        registr.houseNumber,
        registr.floor,
        registr.flatNumber,
        registr.postIndex,
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
        setRegistr({ ...registr, phone: event.target.value });
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
    <StyledForm>
      <Label id="#username" text="Имя и Фамилия *" />
      <Input
        id="username"
        type="text"
        name="username"
        placeholder="Ваши имя и фамилия"
        value={registr.username}
        onChange={inputChangeHandler}
      />
      <Label id="#email" text="Адрес электронной почты *" />
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="mail@email.kz"
        value={registr.email}
        onChange={inputChangeHandler}
      />
      <Label id="#password" text="Пароль *" />
      <Input
        id="password"
        type="password"
        name="password"
        placeholder="********"
        value={registr.password}
        onChange={inputChangeHandler}
      />
      <Label id="#passwordConfirm" text="Повторите пароль *" simple />
      <Input
        id="passwordConfirm"
        type="passwordConfirm"
        name="passwordConfirm"
        placeholder="********"
        value={registr.passwordConfirm}
        onChange={inputChangeHandler}
      />
      <Label id="#phone" text="Контактный номер телефона *" />
      <Input
        id="phone"
        type="text"
        name="phone"
        placeholder="+7 (...) .. .."
        value={registr.phone}
        onChange={inputChangeHandler}
      />
      <TextOrange text="Адрес и почтовый индекс *" />
      <StyledTextSimple>Республика Казахстан</StyledTextSimple>
      <Label id="#city" text="Город или поселок" simple />
      <Input
        id="city"
        type="text"
        name="city"
        placeholder="Ваш город"
        value={registr.city}
        onChange={inputChangeHandler}
      />
      <StyledFlexWrapper>
        <div>
          <Label id="#street" text="Улица" simple />
          <Input
            id="street"
            type="text"
            name="street"
            placeholder="Наименование улицы"
            value={registr.street}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <Label id="#houseNumber" text="Номер дома" simple />
          <Input
            id="houseNumber"
            type="text"
            name="houseNumber"
            placeholder="-"
            value={registr.houseNumber}
            width={'85px'}
            onChange={inputChangeHandler}
          />
        </div>
      </StyledFlexWrapper>
      <StyledFlexWrapper>
        <div>
          <Label id="#floor" text="Этаж" simple />
          <Input
            id="floor"
            type="text"
            name="floor"
            placeholder="-"
            value={registr.floor}
            width={'85px'}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <Label id="#flatNumber" text="Номер квартиры" simple />
          <StyledTextLightGrey> (если есть)</StyledTextLightGrey>
          <Input
            id="flatNumber"
            type="text"
            name="flatNumber"
            placeholder="-"
            value={registr.flatNumber}
            width={'85px'}
            onChange={inputChangeHandler}
          />
        </div>
      </StyledFlexWrapper>
      <Label id="#postIndex" text="Почтовый индекс" simple />
      <Input
        id="postIndex"
        type="text"
        name="postIndex"
        placeholder="-"
        value={registr.postIndex}
        onChange={inputChangeHandler}
      />
      <Button
        type="submit"
        text="Зарегистрироваться"
        clickHandler={registrClickHandler}
      />
    </StyledForm>
  );
};

export default FormRegistration;
