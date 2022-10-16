import React, { FC } from 'react';

import { AddTranslation } from './components';
import styles from './TranslationsHeader.module.scss';

export const TranslationsHeader: FC = () => (
  <div>
    <AddTranslation />
  </div>
);
