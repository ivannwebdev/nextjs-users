import { cache } from "react"

const getUsers = cache(async () => {
  const response = await fetch('https://randomuser.me/api/?results=7', { credentials: 'include', cache: 'force-cache' })
  const parsedRes = await response.json()

  return parsedRes.results
})

export { getUsers }
