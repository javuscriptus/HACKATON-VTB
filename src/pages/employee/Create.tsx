import {
  Create,
  Form,
  Input,
  Select,
  useForm,
  useSelect,
} from '@pankod/refine-antd';

import { IPost } from 'interfaces';

export const EmployeeCreate = () => {
  const { formProps, saveButtonProps } = useForm<IPost>();

  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};
