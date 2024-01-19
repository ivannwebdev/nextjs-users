import { cache } from "react"

async function fetchUsers() {
  const response = await fetch('https://randomuser.me/api/?results=7')

  if (!response.ok) throw new Error('Failed to fetch')

  const parsedRes = await response.json()

  return parsedRes.results
}

export const getUsers = cache(fetchUsers)
