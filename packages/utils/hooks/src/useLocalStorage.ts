import { useEffect, useState } from 'react';

import { ExistHelpers } from '@utils/helpers';

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const storageAvailable = ExistHelpers.localStorageAvailable();

  const [value, setValue] = useState(() => {
    const storedValue = storageAvailable ? localStorage.getItem(key) : null;

    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
      }
    };

    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue: T) => {
    setValue((currentValue: T) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      if (storageAvailable) {
        localStorage.setItem(key, JSON.stringify(result));
      }

      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
