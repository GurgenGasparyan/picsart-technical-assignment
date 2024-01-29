import React, { FC, useCallback, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Table, TableDataType, ColumnConfig, TableOrderType, Loader } from '../../components';
import { useUsers } from '../../hooks';

import { ViewUserDetailsStyled } from './styles';
import { UserModel } from '../../models';

const columns: Array<ColumnConfig> = [
  { title: 'ID', key: 'id', sortable: true },
  { title: 'Name', key: 'name', sortable: true },
  { title: 'Username', key: 'username' },
  { title: 'Email', key: 'email' },
  { title: 'Phone', key: 'phone' },
];

const UsersList: FC = ({}) => {
  const { users, fetchUsers, isLoading } = useUsers();

  const onSearch = useCallback(
    (data: Array<UserModel>, searchTerm: string) =>
      data.filter((item) => item.name.includes(searchTerm)),
    []
  );

  const onSort = useCallback(
    (data: TableDataType<UserModel>, order: TableOrderType, field: string) => {
      return [...data].sort((a, b) => {
        if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
        if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
        return 0;
      });
    },
    []
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Table<UserModel>
      itemsPerPage={5}
      columns={columns}
      onSearch={onSearch}
      onSort={onSort}
      data={Object.values(users)}
      renderActions={(user) => (
        <ViewUserDetailsStyled>
          <Link to={`/users/${user.id}`}>
            <FaEye size={18} />
          </Link>
        </ViewUserDetailsStyled>
      )}
    />
  );
};

export default UsersList;
