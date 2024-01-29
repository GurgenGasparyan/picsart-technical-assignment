import React, { useState, useEffect, ReactElement } from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { FaLongArrowAltUp } from 'react-icons/fa';

import {
  TableStyled,
  ButtonStyled,
  HeaderStyled,
  SearchStyled,
  TableRowStyled,
  TableHeaderStyled,
  PaginationWrapper,
  TableBodyRowStyled,
  TableHeaderColumnStyled,
} from './styles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

let debounce: NodeJS.Timeout;

export type TableOrderType = 'desc' | 'asc';
export type TableDataType<T> = Array<T>;

export interface ColumnConfig {
  key: string;
  title: string;
  sortable?: boolean;
}

interface TableProps<T> {
  columns: Array<ColumnConfig>;
  data: TableDataType<T>;
  itemsPerPage: number;
  renderActions?: (rowData: T) => ReactElement;
  onSearch?: (data: TableDataType<T>, searchTerm: string) => TableDataType<T>;
  onSort?: (data: TableDataType<T>, order: TableOrderType, key: string) => TableDataType<T>;
}

export const Table = <T,>({
  columns,
  data,
  itemsPerPage,
  renderActions,
  onSearch,
  onSort,
}: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sorting, setSorting] = useState({ field: '', order: '' });
  const [currentData, setCurrentData] = useState(data);

  // Pagination
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Sorting
  const onSortingChange = (columnConfig: ColumnConfig) => () => {
    const order = columnConfig.key === sorting.field && sorting.order === 'asc' ? 'desc' : 'asc';

    setSorting({ field: columnConfig.key, order });
    onSort && setCurrentData(onSort(data, order, columnConfig.key));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      clearTimeout(debounce);
      setCurrentPage(0);

      debounce = setTimeout(() => {
        setCurrentData(onSearch(data, e.target.value));
      }, 200);
    }
  };

  useEffect(() => {
    if (!currentData.length && data.length) {
      setCurrentData(data);
    }
  }, [data, currentData]);

  return (
    <>
      <HeaderStyled>
        <SearchStyled placeholder="Search..." onChange={handleSearch} />
      </HeaderStyled>
      <TableStyled>
        <TableHeaderStyled>
          <TableRowStyled>
            {columns.map((column, index) => (
              <TableHeaderColumnStyled
                key={index}
                onClick={column.sortable ? onSortingChange(column) : undefined}
              >
                <div>
                  {column.title}
                  {sorting.field === column.key &&
                    (sorting.order === 'asc' ? <FaLongArrowAltDown /> : <FaLongArrowAltUp />)}
                </div>
              </TableHeaderColumnStyled>
            ))}
            {renderActions ? <TableHeaderColumnStyled></TableHeaderColumnStyled> : null}
          </TableRowStyled>
        </TableHeaderStyled>
        <tbody>
          {currentData.slice(startIndex, endIndex).map((row, index) => (
            <TableRowStyled key={index}>
              {columns.map((column, index) => (
                <TableBodyRowStyled key={index}>{row[column.key]}</TableBodyRowStyled>
              ))}
              {renderActions ? <TableBodyRowStyled>{renderActions(row)}</TableBodyRowStyled> : null}
            </TableRowStyled>
          ))}
        </tbody>
      </TableStyled>
      <PaginationWrapper>
        <ButtonStyled onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>
          <MdKeyboardArrowLeft />
        </ButtonStyled>
        <strong>
          {currentPage + 1} / {Math.ceil(currentData.length / itemsPerPage)}
        </strong>{' '}
        <ButtonStyled
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage + 1 === Math.floor(currentData.length / itemsPerPage)}
        >
          <MdKeyboardArrowRight />
        </ButtonStyled>{' '}
      </PaginationWrapper>
    </>
  );
};
