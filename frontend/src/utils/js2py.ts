export function js2py<T>(transformValue: T) {
  if (transformValue === null) {
    return "None";
  } else if (typeof transformValue === "boolean") {
    return transformValue ? "True" : "False";
  } else if (typeof transformValue === "string") {
    return `"${transformValue}"`;
  }
  return JSON.stringify(transformValue);
}

export function py2js(transformValue: string) {
  if (transformValue === "None") {
    return null;
  } else if (transformValue === "True") {
    return true;
  } else if (transformValue === "False") {
    return false;
  } else if (transformValue.startsWith('"')) {
    return transformValue.slice(1, -1);
  }

  if (transformValue.includes("(") || transformValue.includes(")")) {
    return JSON.parse(transformValue.replace(/\(/g, "[").replace(/\)/g, "]"));
  }

  return JSON.parse(transformValue);
}
