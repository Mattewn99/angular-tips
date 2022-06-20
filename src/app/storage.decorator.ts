const enum StorageType {
  Local,
  Session,
}

const isNull = (item: unknown) => item === null || item === undefined;

export function Storage<T>(
  key: string,
  defaultValue: T,
  storageType: StorageType = StorageType.Local
): PropertyDecorator {
  return (target: { [key: string]: any }, propertyKey: string | symbol) => {
    const storage = storageType === StorageType.Local ? localStorage : sessionStorage;

    let _currentValue: T = target[propertyKey as string];

    Object.defineProperty(target, propertyKey, {
      get(): T | unknown {
        if (!isNull(_currentValue)) {
          return _currentValue;
        }

        let item = JSON.parse(storage.getItem(key)!);

        if (isNull(item)) {
          _currentValue = defaultValue;
          item = defaultValue;

          storage.setItem(key, JSON.stringify(item));
        }

        return item;
      },
      set(item: T): void {
        _currentValue = item;

        storage.setItem(key, JSON.stringify(item));
      },
    });
  };
}
