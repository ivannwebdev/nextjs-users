import { Suspense } from "react"
import User from "../components/User"
import { getUsers } from "./getUsers"

const Users = async () => {
  const users = await getUsers()

  return (
    <Suspense>
      <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Users list</h3>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {
              users.map(({ name, picture, location, email }, i) =>
                <User
                  name={`${name.title} ${name.first}`}
                  thumbnail={picture.thumbnail}
                  country={location.country}
                  email={email}
                  key={email} // ID from response is null sometimes, but email must be unique
                  path={`${++i}`}
                />
              )
            }
          </ul>
        </div>
      </div>
    </Suspense>
  )
}

export default Users
