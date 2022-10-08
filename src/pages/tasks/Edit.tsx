import {
  useForm,
  Form,
  Input,
  Select,
  Edit,
  useSelect,
  Upload,
  message,
  Space,
  Button,
} from '@pankod/refine-antd';
import { IPost } from 'interfaces';
import { UploadOutlined } from '@ant-design/icons';
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

export const TaskEdit: React.FC = () => {
  const { formProps, saveButtonProps, queryResult } = useForm<IPost>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout='vertical'>
        <Form.Item
          label='Название курса'
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
          label='Описание курса'
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
          label='Загрузить видео'
          name='uploadVideo'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label='Статус курса'
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
                label: 'Опубликован',
                value: 'published',
              },
              {
                label: 'Черновик',
                value: 'draft',
              },
              {
                label: 'Завершенный',
                value: 'finished',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label='Вознаграждение'
          name='reward'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'NFT',
                value: 'nft',
              },
              {
                label: 'Валюта',
                value: 'currency',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label='Вопрос'
          name='question'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Ответы'
          name='answers'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Space direction='vertical' style={{ width: '100%' }}>
            <Input />
            <Input />
            <Input />
            <Input />
          </Space>
        </Form.Item>
        <Form.Item
          label='Правильный ответ'
          name='rightAnswer'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
