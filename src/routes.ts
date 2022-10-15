import { FC } from 'react';

import { FontSizeOutlined, ReadOutlined, CommentOutlined } from '@ant-design/icons';

import { Posts, Reviews, Translations } from './pages';

export interface IRoute {
  element: FC;
  icon: FC;
  id: string;
  name: string;
  path: string;
}

const routes: IRoute[] = [
  {
    element: Translations,
    icon: FontSizeOutlined,
    id: 'translations',
    name: 'Translations',
    path: '/translations',
  },
  {
    element: Posts,
    icon: ReadOutlined,
    id: 'posts',
    name: 'Posts',
    path: '/posts',
  },
  {
    element: Reviews,
    icon: CommentOutlined,
    id: 'reviews',
    name: 'Reviews',
    path: '/reviews',
  },
];

export default routes;
