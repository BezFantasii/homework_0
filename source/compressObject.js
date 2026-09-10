'use strict';

/**
 * Функция, создающая новый объект без ключей,
 * значения которых равны null, undefined или пустой строке.
 * Вложенные объекты обрабатываются рекурсивно по тем же правилам,
 * объекты, ставшие пустыми после сжатия, удаляются.
 *
 * @param {Object} [obj={}] - исходный объект для сжатия
 *
 * @example
 * // returns { name: "Андрей", country: "Россия" }
 * compressObject({
 *     name: "Андрей",
 *     age: null,
 *     city: "",
 *     country: "Россия",
 *     occupation: undefined
 * });
 *
 * @example
 * // returns {}
 * compressObject({ a: { c: undefined, d: null }, b: undefined, c: "" });
 *
 * @returns {Object} новый объект, содержащий только ключи с ненулевыми значениями
 */
const compressObject = (obj) => {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return null;
  }

  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    let newValue;

    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      newValue = compressObject(value);
    } else {
      newValue = value;
    }

    const isEmpty = newValue === null || newValue === undefined || newValue === '';
    const isEmptyObject =
      newValue !== null &&
      typeof newValue === 'object' &&
      !Array.isArray(newValue) &&
      Object.keys(newValue).length === 0;

    if (!isEmpty && !isEmptyObject) {
      result[key] = newValue;
    }
  }

  return result;
};