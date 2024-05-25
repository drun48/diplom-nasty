type Indexed = {
  [key in string]: unknown;
};

function isIndexed(x: unknown): x is Indexed {
  return typeof x === "object" && x !== null;
}
export function mapped<T extends Indexed = Indexed>(
  a: T | unknown,
  b: T | unknown,
  defaultValue: T | unknown
): T {
  if (!isIndexed(a) || !isIndexed(b) || !isIndexed(defaultValue))
    return {} as T;
  const a_copy = (Array.isArray(a) ? [...a] : { ...a }) as Indexed;
  const b_copy = (Array.isArray(b) ? [...b] : { ...b }) as Indexed;

  const keysB = Object.keys(b);

  for (const key of keysB) {
    if (!defaultValue[key] === undefined)
      throw new Error("Объект по умолчанию должен совпадать с объектом начальным");
    if (isIndexed(a[key]) && isIndexed(b[key])) {
      a_copy[key] = mapped(a[key], b[key], defaultValue[key]);
    } else if (a[key] !== b[key] && b[key]) {
      a_copy[key] = b[key];
    } else {
      a_copy[key] = defaultValue[key];
    }
  }
  return a_copy as T;
}
