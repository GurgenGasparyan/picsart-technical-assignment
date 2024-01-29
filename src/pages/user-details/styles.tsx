import styled from 'styled-components';

export const UserDetailsWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const UserDetailsHeaderStyled = styled.div`
  display: flex;
`;

export const UserDetailsHeaderLeftStyled = styled.div`
  padding-right: 10px;
`;

export const UserDetailsHeaderRightStyled = styled.div`
  flex-grow: 1;
  padding-left: 10px;
`;

export const UserDetailStyled = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const UserDetailContentSection = styled.div`
  margin-bottom: 5px;
`;

export const UserDetailContentSectionTitle = styled.h2`
  margin-bottom: 5px;
`;

export const UserDetailContentSectionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserDetailGoBackStyled = styled.span`
  top: 0;
  left: 0;
  cursor: pointer;
  padding: 4px 8px;
  position: absolute;
  border-radius: 4px;
  display: inline-block;
  background-color: #0e3b5c;
  &:hover {
    background-color: #e3f2fd;
    > a {
      color: black;
    }
  }
  > a {
    color: white;
    text-decoration: none;
  }
`;
