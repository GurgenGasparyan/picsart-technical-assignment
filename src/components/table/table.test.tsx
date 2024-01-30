import React from 'react';
import { fireEvent, render, waitFor } from 'test-utils';
import { ColumnConfig, Table, TableDataType } from './table';
import { act } from 'react-dom/test-utils';

interface MockDataTypes {
  id: number;
  name: string;
  description: string;
}

const columns: Array<ColumnConfig> = [
  { title: 'ID', key: 'id', sortable: true },
  { title: 'Name', key: 'name', sortable: true },
  { title: 'Description', key: 'description' },
];

const mockData: Array<MockDataTypes> = [
  {
    id: 1,
    name: 'name1',
    description: 'description1',
  },
  {
    id: 2,
    name: 'name2',
    description: 'description2',
  },
  {
    id: 3,
    name: 'name3',
    description: 'description3',
  },
  {
    id: 4,
    name: 'name4',
    description: 'description4',
  },
];

const onSort = jest.fn((data: TableDataType<MockDataTypes>) => data);
const onSearch = jest.fn((data: TableDataType<MockDataTypes>) => data);
const renderAction = jest.fn(() => <span>render action</span>);

describe('<Table/>', () => {
  it('should render data correctly', () => {
    const { getAllByTestId } = render(
      <Table<MockDataTypes> data={mockData} columns={columns} itemsPerPage={5} onSort={onSort} />
    );

    expect(getAllByTestId('tbody-row')).toHaveLength(4);
  });

  it('should call onSort if clicked on sorted column', () => {
    const { getByText } = render(
      <Table<MockDataTypes> data={mockData} columns={columns} itemsPerPage={5} onSort={onSort} />
    );

    act(() => {
      getByText(/ID/i).click();
    });

    expect(onSort).toHaveBeenCalledWith(mockData, 'asc', 'id');

    act(() => {
      getByText(/ID/i).click();
    });

    expect(onSort).toHaveBeenCalledWith(mockData, 'desc', 'id');
  });

  it('should call onSearch if search terms change', async () => {
    const { getByTestId } = render(
      <Table<MockDataTypes>
        data={mockData}
        columns={columns}
        itemsPerPage={5}
        onSearch={onSearch}
      />
    );

    act(() => {
      fireEvent.change(getByTestId('table-search'), { target: { value: 'search' } });
    });

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalledWith(mockData, 'search');
    });
  });

  it('should call onSearch if search terms change', () => {
    const { getAllByText } = render(
      <Table<MockDataTypes>
        data={mockData}
        columns={columns}
        itemsPerPage={5}
        onSearch={onSearch}
        renderActions={renderAction}
      />
    );

    expect(getAllByText('render action')).toHaveLength(4);
  });
});
