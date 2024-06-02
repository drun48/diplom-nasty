type Indexed = Record<string, unknown> | Array<Indexed>;

function isIndexed(x: unknown): x is Indexed {
  return (typeof x === "object" && x !== null) || Array.isArray(x);
}

export function checkEmpty(value: Indexed | unknown): boolean {
  if (!isIndexed(value)) {
    return Boolean(value);
  }
  let checked = true;
  let obj: Record<string, unknown> = {};
  if (Array.isArray(value)) {
    Object.assign(obj, value);
  } else {
    obj = value;
  }
  for (let key in obj) {
    if (!checked) return checked;
    checked = checkEmpty(obj[key]);
  }
  return checked;
}
