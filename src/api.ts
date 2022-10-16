import { addDoc, getDocs, query, where, collection, Timestamp } from 'firebase/firestore';
import type { DocumentReference, DocumentData, Firestore } from 'firebase/firestore';

import { db } from './firebase-config';

// : Promise<DocumentReference<DocumentData>>;

type Callback = (err?: string | null, data?: DocumentData) => void;

interface IApi {
  addTranslation(values: DocumentData, cb?: Callback): void;
}

class Api implements IApi {
  private readonly db: Firestore;

  constructor() {
    this.db = db;
  }

  async addTranslation(values: DocumentData, cb?: Callback) {
    const q = query(collection(db, 'translations'), where('key', '==', values.key));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size) {
      if (cb) cb('Key was already add');
      return;
    }

    const docRef = await addDoc(collection(this.db, 'translations'), {
      ...values,
      timestamp: Timestamp.now(),
    });

    if (cb) cb(null, docRef);
  }

  // getAllTranslations() {
  //   return getDocs(collection(this.db, 'translations'));
  // }
}

export default new Api();
