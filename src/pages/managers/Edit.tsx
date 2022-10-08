import {
  useForm,
  Form,
  Input,
  Select,
  Edit,
  useSelect,
} from '@pankod/refine-antd';
import { IPost } from 'interfaces';

export const ManagerEdit: React.FC = () => {
  const { formProps, saveButtonProps } = useForm<IPost>();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout='vertical'>
        <Form.Item
          label='Имя'
          name='firstName'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Фамилия'
          name='lastName'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Почта'
          name='email'
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
