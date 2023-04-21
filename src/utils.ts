export function httpBuildQuery(params: Record<string, any>) {
  const query = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    query.append(key, value)
  }
  return query.toString()
}
