import React, { FC, useCallback, useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';

import { FormAddTranslation } from 'components/forms';

export const AddTranslation: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <Button icon={<PlusOutlined />} onClick={showModal} type="primary">
        Add translation
      </Button>
      <Modal
        destroyOnClose
        footer={null}
        onCancel={closeModal}
        open={isModalOpen}
        title="Add translation"
      >
        <FormAddTranslation onSuccess={closeModal} />
      </Modal>
    </>
  );
};
