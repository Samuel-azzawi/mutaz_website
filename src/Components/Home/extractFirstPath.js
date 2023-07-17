function extractFirstPath(location) {
  const pathSegments = location.split("/");
  return pathSegments[1];
}
module.exports = extractFirstPath;
