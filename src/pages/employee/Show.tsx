import { useShow } from '@pankod/refine-core';
import { Show, Typography } from '@pankod/refine-antd';

const { Title, Text } = Typography;

export const EmployeeShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <Text>{record?.id}</Text>
      <Title level={5}>Имя</Title>
      <Text>{record?.firstName}</Text>
      <Title level={5}>Фамилия</Title>
      <Text>{record?.lastName}</Text>
      <Title level={5}>Почта</Title>
      <Text>{record?.email}</Text>
      <Title level={5}>Количество сотрудников</Title>
      <Text>{record?.count}</Text>
    </Show>
  );
};
