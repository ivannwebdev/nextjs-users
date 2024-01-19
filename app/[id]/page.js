import { Suspense } from "react"
import { getUsers } from "../getUsers"

const UserDetails = async ({ params }) => {
  const users = await getUsers()

  const id = params.id
  const user = users[id - 1]
  const picture = user.picture.large
  const name = `${user.name.title} ${user.name.first}`
  const gender = user.gender
  const email = user.email
  const country = user.location.country
  const city = user.location.city
  const phone = user.phone

  return (
    <Suspense>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <h2 className="text-center font-medium">User details</h2>
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img className="w-32 h-32 rounded-full mx-auto" src={picture} alt="No photo" />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{name}</h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Just user</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Gender</td>
                    <td className="px-2 py-2">{gender}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{email}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Country</td>
                    <td className="px-2 py-2">{country}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">City</td>
                    <td className="px-2 py-2">{city}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">{phone}</td>
                  </tr>
                </tbody></table>
              <div className="text-center my-3">
                <a
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  target="_blank"
                  href="https://github.com/ivannwebdev"
                >
                  Follow
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default UserDetails
