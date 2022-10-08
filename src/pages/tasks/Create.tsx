import {
  Create,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
  Space,
  Upload,
  Button,
} from '@pankod/refine-antd';
import { UploadOutlined } from '@ant-design/icons';

import { IPost } from 'interfaces';
import type { UploadProps } from 'antd';

const props: UploadProps = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

export const TaskCreate = () => {
  const { formProps, saveButtonProps } = useForm<IPost>();
  const { selectProps: categorySelectProps } = useSelect<IPost>({
    resource: 'categories',
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout='vertical'>
        <Form.Item
          label='Название задачи'
          name='title'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Описание задачи'
          name='description'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label='Статус задачи'
          name='status'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Ожидает выполнения',
                value: 'awaiting',
              },
              {
                label: 'Выполняется',
                value: 'progress',
              },
              {
                label: 'Выполнена',
                value: 'completed',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label='Сложность'
          name='complexity'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Легкая',
                value: 'easy',
              },
              {
                label: 'Средняя',
                value: 'average',
              },
              {
                label: 'Высокая',
                value: 'high',
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
