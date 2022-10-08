import { Refine } from '@pankod/refine-core';
import {
  Layout,
  ReadyPage,
  notificationProvider,
  ErrorComponent,
} from '@pankod/refine-antd';
import routerProvider from '@pankod/refine-react-router-v6';
import dataProvider from '@pankod/refine-simple-rest';
import { useTranslation } from 'react-i18next';
import { TasksList, TaskShow, TaskEdit, TaskCreate } from './pages/tasks';

import {
  ManagersList,
  ManagerShow,
  ManagerEdit,
  ManagerCreate,
} from './pages/managers';
import {
  EmployeesList,
  EmployeeShow,
  EmployeeEdit,
  EmployeeCreate,
} from './pages/employee';
import '@pankod/refine-antd/dist/styles.min.css';
import { Wallet } from './pages/wallet/Wallet';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <Refine
      Title={() => (
        <img
          src='/img/logo.png'
          alt='Refine'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            margin: '20px auto',
          }}
        />
      )}
      routerProvider={routerProvider}
      dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
      Layout={Layout}
      ReadyPage={ReadyPage}
      notificationProvider={notificationProvider}
      catchAll={<ErrorComponent />}
      i18nProvider={i18nProvider}
      resources={[
        {
          name: 'tasks',
          list: TasksList,
          show: TaskShow,
          edit: TaskEdit,
          create: TaskCreate,
          canDelete: true,
        },
        {
          name: 'wallet',
          list: Wallet,
        },
        {
          name: 'managers',
          list: ManagersList,
          show: ManagerShow,
          edit: ManagerEdit,
          create: ManagerCreate,
          canDelete: true,
        },
        {
          name: 'employees',
          list: EmployeesList,
          show: EmployeeShow,
          edit: EmployeeEdit,
          create: EmployeeCreate,
          canDelete: true,
        },
      ]}
    />
  );
};

export default App;
