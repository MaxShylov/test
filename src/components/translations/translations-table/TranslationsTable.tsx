import React, { FC, useEffect, useState } from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { Table, Button } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

import api from 'api';

import { RemoveTranslation } from './components';
import styles from './TranslationsTable.module.scss';

interface DataType {
  id: string;
  key: string;
  textUk: string;
  textEn: string;
  createAt: number;
}

const textSorter = (prop: keyof DataType) => (a: DataType, b: DataType) =>
  a[prop] > b[prop] ? 1 : -1;

const columns: ColumnsType<DataType> = [
  {
    dataIndex: 'id',
    title: 'ID',
  },
  {
    dataIndex: 'key',
    sorter: textSorter('key'),
    title: 'Key',
  },
  {
    dataIndex: 'textUk',
    sorter: textSorter('textUk'),
    title: 'Text Uk',
  },
  {
    dataIndex: 'textEn',
    sorter: textSorter('textEn'),
    title: 'Text En',
  },
  {
    dataIndex: 'createAt',
    defaultSortOrder: 'descend',
    render: (ms: number) => new Date(ms).toLocaleString(),
    sorter: (a, b) => a.createAt - b.createAt,
    title: 'Create At',
  },
  {
    key: 'action',
    render: ({ id }: DataType) => <RemoveTranslation id={id} />,
    title: 'Action',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export const TranslationsTable: FC = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const unsub = api.watchAllTranslations((err, translations) => {
      setData(translations as DataType[]);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={onChange} showSorterTooltip={false} />
    </div>
  );
};
