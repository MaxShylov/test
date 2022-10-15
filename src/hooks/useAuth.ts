import { useState, useEffect } from 'react';

import type { User } from '@firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from 'firebase-config';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  return [currentUser, isLoading];
};
