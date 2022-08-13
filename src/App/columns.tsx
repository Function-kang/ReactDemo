import { MenuProps } from 'antd';
import {
  MailOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
  {
    key: "/exam",
    label: "考试",
    icon: <MailOutlined />,
    children: [
      {
        key: "/exam/even",
        label: "整卷模式",
      },
      {
        key: "/exam/odd",
        label: "单题模式",
      }
    ],
  }
];

