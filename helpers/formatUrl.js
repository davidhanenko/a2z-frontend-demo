// transform multiword item title/name from url format(with '-') to DB format(with ' ')
function formatUrlToDbName(str) {
  // remove encoded spaces
  str = str.replace(/%20/g, '-');
  // replce '-' on spaces to query db
  return str.replace(/-/g, ' ');
}
// transform multiword item title/name from DB format(with ' ') to DB format(with '-')
function formatUrlToRoute(str) {
  // remove encoded spaces
  str = str.replace(/%20/g, '-');
  // replace spaces on '-'
  return str.replace(/ /g, '-');
}

export { formatUrlToDbName, formatUrlToRoute };
