import { FontSizeOutlined, ReadOutlined, CommentOutlined } from '@ant-design/icons';

import { Posts, Reviews, Translations } from 'pages';

const routes = [
  {
    element: Translations,
    exact: true,
    icon: FontSizeOutlined,
    id: 'translations',
    name: 'Translations',
    path: '/translations',
  },
  { element: Posts, exact: true, icon: ReadOutlined, id: 'posts', name: 'Posts', path: '/posts' },
  {
    element: Reviews,
    exact: true,
    icon: CommentOutlined,
    id: 'reviews',
    name: 'Reviews',
    path: '/reviews',
  },
];

export default routes;
