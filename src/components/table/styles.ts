import styled from 'styled-components';

interface TableHeaderColumnStyledProps {
  sortable?: boolean;
}

export const TableStyled = styled.table`
  width: 100%;
  overflow: hidden;
  border-spacing: 0;
  border-radius: 8px;
  border: ${(props) => `1px solid ${props.theme.border}`};
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

export const TableHeaderColumnStyled = styled.th<TableHeaderColumnStyledProps>`
  padding: 16px;
  color: ${(props) => props.theme.text};
  text-align: left;
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-bottom: ${(props) => `1px solid ${props.theme.border}`};
  cursor: ${({ sortable }) => (sortable ? 'pointer' : 'default')};

  > div {
    display: flex;
    align-items: center;
  }
`;

export const TableBodyRowStyled = styled.td`
  padding: 16px;
  color: ${(props) => props.theme.text};
  border-bottom: ${(props) => `1px solid ${props.theme.border}`};
`;

export const SearchStyled = styled.input`
  width: 320px;
  padding: 6px 12px;
  align-items: center;
  border: ${(props) => `1px solid ${props.theme.border}`};
  color: ${(props) => props.theme.text};
  border-radius: 6px;
  background: ${(props) => props.theme.background};
`;

export const PaginationWrapper = styled.div`
  padding: 16px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationButtonStyled = styled.button`
  margin: 0 10px;
  font-size: 20px;
  padding: 2px 10px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid silver;
`;

export const PageCount = styled.strong`
  color: ${(props) => props.theme.text};
`;
