import React, { FC } from 'react';

import { TranslationsTable, TranslationsHeader, TranslationsFilter } from 'components';

// import styles from './Translations.module.scss';

export const Translations: FC = () => (
  <div>
    <TranslationsHeader />
    <TranslationsFilter />
    <TranslationsTable />
  </div>
);
