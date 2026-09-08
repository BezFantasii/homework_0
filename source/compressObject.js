/**
 * Функция, создающая новый объект без ключей,
 * значения которых равны null, undefined или пустой строке.
 *
 * @param {Object} obj - исходный объект для сжатия
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
 * compressObject({ a: null, b: undefined, c: "" });
 *
 * @returns {Object} новый объект, содержащий только ключи с ненулевыми значениями
 */

function compressObject(obj = {}) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return {};
  }
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const processedValue =
      value !== null && typeof value === "object" && !Array.isArray(value)
        ? compressObject(value)
        : value;
    const isEmpty =
      processedValue === null ||
      processedValue === undefined ||
      processedValue === "" ||
      (typeof processedValue === "object" &&
        !Array.isArray(processedValue) &&
        Object.keys(processedValue).length === 0);
    if (!isEmpty) {
      result[key] = processedValue;
    }
  }


  return result;
}