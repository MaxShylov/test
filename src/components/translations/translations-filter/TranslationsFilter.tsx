import React, { FC, useCallback, ChangeEvent } from 'react';

import { Collapse, Input, Space } from 'antd';

import { useAppDispatch } from 'hooks';
import { setFilter, IFilterState } from 'store/filterSlice';

import styles from './TranslationsFilter.module.scss';

const { Panel } = Collapse;

let timeout: NodeJS.Timeout;

export const TranslationsFilter: FC = () => {
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (field: keyof IFilterState) => (e: ChangeEvent<HTMLInputElement>) => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        const { value } = e.target;
        dispatch(setFilter({ field, value }));
      }, 300);
    },
    [dispatch],
  );

  return (
    <Collapse destroyInactivePanel>
      <Panel key="1" header="Filters">
        <Space className={styles.wrap}>
          <Input onChange={handleChange('key')} placeholder="Filter by key" />
          <Input onChange={handleChange('textUk')} placeholder="Filter by text in Ukrainian" />
          <Input onChange={handleChange('textEn')} placeholder="Filter by text in English" />
        </Space>
      </Panel>
    </Collapse>
  );
};
