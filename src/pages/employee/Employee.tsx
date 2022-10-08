import { useMany } from '@pankod/refine-core';
import {
  List,
  TextField,
  TagField,
  DateField,
  Table,
  useTable,
  FilterDropdown,
  Select,
  useSelect,
  Space,
  EditButton,
  ShowButton,
  DeleteButton,
} from '@pankod/refine-antd';

import { IPost } from 'interfaces';

export const EmployeesList: React.FC = () => {
  const { tableProps } = useTable<IPost>();

  return (
    <List>
      <Table {...tableProps} rowKey='id'>
        <Table.Column dataIndex='id' title='ID' />
        <Table.Column dataIndex='firstName' title='Имя' />
        <Table.Column dataIndex='lastName' title='Фамилия' />
        <Table.Column dataIndex='email' title='Почта' />
        <Table.Column dataIndex='countMoney' title='Денег' />
        <Table.Column dataIndex='countNft' title='NFT' />

        <Table.Column<IPost>
          title='Действия'
          dataIndex='actions'
          render={(_text, record): React.ReactNode => {
            return (
              <Space>
                <ShowButton size='small' recordItemId={record.id} hideText />
                <EditButton size='small' recordItemId={record.id} hideText />
                <DeleteButton size='small' recordItemId={record.id} hideText />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  );
};
