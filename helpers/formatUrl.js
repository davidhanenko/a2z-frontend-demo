function formatUrlToDbName(str) {
  return str.toLowerCase().split('_').join(' ');
}

function formatUrlToRoute(str) {
  str = str.toLowerCase().split('%20').join('_');
  return str.split(' ').join('_');
}

export { formatUrlToDbName, formatUrlToRoute };
