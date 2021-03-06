import styled, { css } from 'styled-components';
import { IStyledUserCabinetBtnWrapper, IStyledGoodImage } from './IImage';

export const StyledImageWrapper = styled.div<IStyledGoodImage>`
  padding: 35px;
  height: max-content;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-right: none;
  box-shadow: 0px 5px #d1d1d1;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 6px;
    border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
  }

  @media (max-width: 576px) {
    padding: 0;
    height: 480px;
    border-bottom: none;
  }

  ${({ mode }) =>
    mode === 'good' &&
    css`
      height: min-content;
      padding: 0;

      div {
        margin-bottom: 0;
      }

      @media (max-width: 768px) {
        padding: 0px;
      }

      @media (max-width: 576px) {
        height: max-content;
      }
    `}

  ${({ mode }) =>
    mode === 'profile' &&
    css`
      height: auto;

      @media (max-width: 768px) {
        height: 500px;
      }

      @media (max-width: 576px) {
        height: 385px;
      }
    `}
`;

export const StyledImage = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 378px;
  height: 455px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.superLightGrey};
  background-size: cover;

  @media (max-width: 992px) {
    width: 345px;
  }

  @media (max-width: 576px) {
    border: none;
    width: 318px;
    height: 385px;
  }
`;
export const StyledImageBtnWrapper = styled.div<IStyledUserCabinetBtnWrapper>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;

  ${({ mode }) =>
    mode === 'center' &&
    css`
      justify-content: center;
    `}
`;
