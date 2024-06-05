/**
 * Exclude specified fields from an object.
 * @param obj The object from which fields need to be excluded.
 * @param keys Fields that need to be excluded from the object.
 * @returns A new object with specified fields excluded.
 */
export const excludeField = <T>(obj: T, ...keys: (keyof T)[]): Partial<T> => {
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};
