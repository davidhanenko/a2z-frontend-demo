export default function capitalizeStr(str) {
  str = str.trim();
  return str[0].toUpperCase() + str.slice(1);
}
