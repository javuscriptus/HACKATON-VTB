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

export const TasksList: React.FC = () => {
  const { tableProps } = useTable<IPost>({
    metaData: {
      locale: 'ru',
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey='id'>
        <Table.Column dataIndex='title' title='Задача' />
        <Table.Column
          dataIndex='status'
          title='Статус'
          render={(value) => <TagField value={value} />}
        />
        <Table.Column dataIndex='countView' title='Исполнитель' />
        <Table.Column
          dataIndex='createdAt'
          title='Дата создания'
          render={(value) => <DateField format='LLL' value={value} />}
        />
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
