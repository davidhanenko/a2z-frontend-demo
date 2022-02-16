// transform multi-word item title/name from url format(with '-') to DB format(with ' ')
function formatUrlToDbName(str) {
  // remove encoded spaces
  str = str.trim().replace(/%20/g, '-');
  // replace '-' on spaces to query db
  return str.trim().replace(/-/g, ' ');
}
// transform multi-word item title/name from DB format(with ' ') to DB format(with '-')
function formatUrlToRoute(str) {
  // remove encoded spaces
  str = str.trim().replace(/%20/g, '-');
  // replace spaces on '-'
  return str.replace(/ /g, '-');
}

export { formatUrlToDbName, formatUrlToRoute };
