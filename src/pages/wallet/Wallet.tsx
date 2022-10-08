import { Button, Table } from 'antd';

export const Wallet = () => {
  const dataSource = [
    {
      key: '1',
      type: 'Отправлено',
      value: 32000,
      user: '123@123.com',
    },
    {
      key: '2',
      type: 'Получено',
      value: 32000,
      user: '123@123.com',
    },
  ];

  const columns = [
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Сумма',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Пользователь',
      dataIndex: 'user',
      key: 'user',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        <div
          style={{
            border: ' 1px solid',
            borderRadius: '20px',
            padding: '20px',
            width: '100%',
          }}
        >
          <h2>Мой баланс:</h2>
          <span style={{ fontSize: '36px' }}>777 777</span>
        </div>
        <div
          style={{
            border: '1px solid',
            borderRadius: '20px',
            padding: '20px',
            width: '100%',
          }}
        >
          <h2>На подтверждении:</h2>
          <span style={{ fontSize: '36px' }}>333 333</span>
        </div>
      </div>
      <div style={{}}>
        <Button type='primary' size='large'>
          Отправить валюту
        </Button>
      </div>
      <div>
        <h2>Последние транзакции: </h2>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
};
