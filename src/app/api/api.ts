import { IUsersState } from './../redux/reducers/users/IusersReducer';
import axios from 'axios';
import { IUser } from '../commonInterfaces/IUser';
import { IGoodsState } from '../redux/reducers/goods/IgoodsReducer';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const fetchGoods = (): Promise<IGoodsState> => {
  return instance.get('goods').then((res) => {
    return res.data;
  });
};

export const fetchUsers = (): Promise<IUsersState> => {
  return instance.get('users').then((res) => {
    return res.data;
  });
};

export const login = (email: string, password: string): Promise<IUser> => {
  return instance
    .post('auth/login', { email, password })
    .then((res: any) => {
      localStorage.setItem('token', res.data.token);
      return res.data.dataValues;
    })
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};

export const loginWithToken = (): Promise<IUser> => {
  return instance
    .get('auth', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res: any) => {
      return res.data;
    })
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};

export const registration = (
  username: string,
  email: string,
  password: string,
  phone: string,
  city: string,
  street: string,
  houseNumber: string,
  floor: string,
  flatNumber: string,
  postIndex: string,
  role: string,
): Promise<IUser> => {
  return instance
    .post('auth/registration', {
      username,
      email,
      password,
      phone,
      role,
      city,
      street,
      houseNumber,
      floor,
      flatNumber,
      postIndex,
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      return res.data.dataValues;
    })
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};

export const updateUser = (user: IUser) => {
  return instance
    .put(`users/${user.id}`, user)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};
