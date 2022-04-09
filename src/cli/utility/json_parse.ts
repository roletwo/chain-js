export function json_parse<T = any>(json: string): T {
  let parsed: T;
  try {
    parsed = JSON.parse(json);
  } catch (e) {
    console.error("Invalid JSON input");
    process.exit(1);
  }

  return parsed;
}
