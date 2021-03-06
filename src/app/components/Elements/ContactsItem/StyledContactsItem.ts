import styled from 'styled-components';

export const StyledContactsItem = styled.div`
  margin-bottom: 15px;

  &:first-child {
    margin-right: 40px;
  }
`;

export const StyledContactsItemTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #ff3a00;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const StyledContactsItemText = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 14px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const StyledTextGrey = styled.span`
  font-weight: 700;
  color: #686868;
`;
