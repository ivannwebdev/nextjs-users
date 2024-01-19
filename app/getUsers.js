const getUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=7', { credentials: 'include' })
  const parsedRes = await response.json()

  return parsedRes.results
}

export { getUsers }
