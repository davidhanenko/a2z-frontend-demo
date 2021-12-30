function formatUrlToDbName(str) {
  return str.toLowerCase().split('-').join(' ');
}

function formatUrlToRoute(str) {
  str = str.toLowerCase().split('%20').join('-');
  return str.split(' ').join('-');
}

export { formatUrlToDbName, formatUrlToRoute };
