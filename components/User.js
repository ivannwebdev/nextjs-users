import Link from "next/link"

const User = ({ name, email, thumbnail, country, path }) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={thumbnail}
            alt="No picture ;("
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {email}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {country}
        </div>
        <Link href={path}>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Details
          </button>
        </Link>
      </div>
    </li>
  )
}

export default User
