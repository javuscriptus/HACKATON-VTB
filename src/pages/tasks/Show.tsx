import { useShow, useOne } from '@pankod/refine-core';
import { Show, Typography, Tag } from '@pankod/refine-antd';

import { IPost, ICategory } from 'interfaces';

const { Title, Text, Paragraph } = Typography;

export const TaskShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: categoryData } = useOne<ICategory>({
    resource: 'categories',
    id: record?.category.id || '',
    queryOptions: {
      enabled: !!record?.category.id,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Название курса</Title>
      <Text>{record?.title}</Text>
      <Title level={5}>Описание курса</Title>
      <Text>
        {record?.description ||
          'Курс по работе с клиентами для менеджера продаж. В этом курсе мы подробно разберем как быть эффективным менеджером и повысить свои навыки.'}
      </Text>
      <Title level={5}>Статус</Title>
      <Text>
        <Tag>{record?.status}</Tag>
      </Text>
      <Title level={5}>Дата создания</Title>
      <Text>{record?.createdAt}</Text>
      <Title level={5}>Количество сотрудников прошедших курс</Title>
      <Text>{record?.countCompletedCourse || '22'}</Text>
      <Title level={5}>Ссылка на видео</Title>
      <Text>
        {record?.linkVideo ||
          'http://localhost/23hurndsf9uajsdiasjd971uh2i3e.mov'}
      </Text>
      <Title level={5}>Вознаграждение за пройденный курс</Title>
      <Text>{record?.reward || 'NFT'}</Text>

      <Title level={5}>Вопрос</Title>
      <Text>
        {record?.question ||
          'Как долго может работать менеджер по продажам без сна?'}
      </Text>
      <Title level={5}>Ответы</Title>
      <Paragraph>
        <ul>
          <li>9 час</li>
          <li>33 часа</li>
          <li>48 часов</li>
          <li>Пока не кончится кофе</li>
        </ul>
      </Paragraph>
      <Title level={5}>Правильный ответ</Title>
      <Text>{record?.rightAnswer || 'Пока не кончится кофе'}</Text>
    </Show>
  );
};
