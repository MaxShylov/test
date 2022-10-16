import React, { FC } from 'react';

import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

import styles from './TranslationsTable.module.scss';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    title: 'Name',
  },
  {
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    title: 'Age',
  },
  {
    dataIndex: 'address',
    title: 'Address',
  },
];

const data = [
  {
    address: 'New York No. 1 Lake Park',
    age: 32,
    key: '1',
    name: 'John Brown',
  },
  {
    address: 'London No. 1 Lake Park',
    age: 42,
    key: '2',
    name: 'Jim Green',
  },
  {
    address: 'Sidney No. 1 Lake Park',
    age: 32,
    key: '3',
    name: 'Joe Black',
  },
  {
    address: 'London No. 2 Lake Park',
    age: 32,
    key: '4',
    name: 'Jim Red',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

type TranslationsTableProps = {
  data?: any;
};

export const TranslationsTable: FC<TranslationsTableProps> = () => (
  <div>
    <Table columns={columns} dataSource={data} onChange={onChange} />
  </div>
);
