export const getObjectFromLocalStorage = <T>(
    key: string,
    defaultValue: T | null,
  ): any => {
    const item = localStorage.getItem(key);
    if (item && item.length > 0) {
      const obj: T = JSON.parse(item);
      return obj;
    }
    return defaultValue;
  };
  