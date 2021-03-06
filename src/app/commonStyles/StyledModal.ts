import { IStyledModalCloseButton } from './../commonInterfaces/IModal';
import styled, { css } from 'styled-components';
import { IStyledModal } from '../commonInterfaces/IModal';

export const StyledModal = styled.div<IStyledModal>`
  z-index: 1000;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 420px;
  padding: 60px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px ${(props) => props.theme.colors.lightGrey};
  background-color: #fff;
  transform: translate(-50%, -50%);

  form {
    margin: 0 auto;
  }

  h2 {
    text-align: center;
  }

  button {
    display: block;
    margin: 0 auto;
    margin-top: 30px;
  }

  ${({ active }) =>
    active &&
    css`
      display: flex;
      flex-direction: column;
    `};

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const StyledModalCloseButton = styled.button<IStyledModalCloseButton>`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 20px;
  width: 15px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.primary};
  transform: rotate(45deg);

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0px;
    right: 0px;
    width: 15px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    transform: rotate(90deg);
  }
`;
