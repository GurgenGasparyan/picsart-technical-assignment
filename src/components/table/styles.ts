import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 100%;
  overflow: hidden;
  border-spacing: 0;
  border-radius: 8px;
  border: 1px solid #e3e9ef;
`;

export const HeaderStyled = styled.div`
  padding-bottom: 16px;
`;

export const TableHeaderStyled = styled.thead``;

export const TableRowStyled = styled.tr`
  &:last-child > td {
    border-bottom: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.background};
  }
`;

export const TableHeaderColumnStyled = styled.th`
  padding: 16px;
  color: ${(props) => props.theme.textOnContainer};
  text-align: left;
  position: relative;
  background-color: ${(props) => props.theme.container};
  > div {
    display: flex;
    align-items: center;
  }
`;

export const TableBodyRowStyled = styled.td`
  padding: 16px;
  color: ${(props) => props.theme.textOnContainer};
  border-bottom: 1px solid #e3e9ef;
`;

export const SearchStyled = styled.input`
  width: 320px;
  padding: 6px 12px;
  align-items: center;
  border: 1px solid #a1a9b8;
  border-radius: 6px;
  background: white;
`;

export const PaginationWrapper = styled.div`
  padding: 16px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  margin: 0 10px;
  font-size: 20px;
  padding: 2px 10px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid silver;
`;
