import {
  addDoc,
  getDocs,
  query,
  where,
  collection,
  onSnapshot,
  Timestamp,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import type { DocumentData, Firestore, Unsubscribe } from 'firebase/firestore';

import { db } from './firebase-config';

// : Promise<DocumentReference<DocumentData>>;

type Callback = (err?: string | null, data?: DocumentData) => void;

interface IApi {
  addTranslation(values: DocumentData, cb?: Callback): void;
  deleteTranslation(id: string, cb?: Callback): void;
  watchAllTranslations(cb?: Callback): Unsubscribe;
}

class Api implements IApi {
  private readonly db: Firestore;

  constructor() {
    this.db = db;
  }

  async addTranslation(values: DocumentData, cb?: Callback) {
    const q = query(collection(db, 'translations'), where('key', '==', values.key));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      if (cb) cb('Key was already add');
      return;
    }

    const docRef = await addDoc(collection(this.db, 'translations'), {
      ...values,
      createAt: Timestamp.now().seconds * 1000,
    });

    if (cb) cb(null, docRef);
  }

  async deleteTranslation(id: string) {
    await deleteDoc(doc(this.db, 'translations', id));
  }

  watchAllTranslations(cb: Callback) {
    return onSnapshot(collection(this.db, 'translations'), querySnapshot => {
      const data: DocumentData[] = [];

      querySnapshot.forEach(document => {
        data.push({ id: document.id, ...document.data() });
      });

      if (cb) cb(null, data);
    });
  }
}

export default new Api();
