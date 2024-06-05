export default function (
  first_name?: string,
  last_name?: string,
  second_name?: string
) {
  return `${last_name ?? ""} ${first_name ?? ""} ${second_name ?? ""}`.trim();
}
