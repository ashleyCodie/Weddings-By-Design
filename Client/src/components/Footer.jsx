import { Link } from "react-router"


const Footer = () => {
  return (
    <div className="">
        <footer className="fixed bottom-0 bg-pink-300 shadow dark:bg-pink-300 mt-10 w-full">
    <div className="brush w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-2xl text-zinc-500 sm:text-center dark:text-zinc-500">© 2025 <Link to="/" className="hover:underline">Weddings By Design™</Link>. All Rights Reserved.
    </span>
    <ul className="brush flex flex-wrap items-center mt-3 text-2xl font-medium text-zinc-500 dark:text-zinc-500 sm:mt-0">
        <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        {/* <li>
            <a href="#" className="hover:underline me-4 md:me-6">Sign Up</a>
        </li> */}
        <li>
            <Link to="/login" className="hover:underline me-4 md:me-6">Login</Link>
        </li>
        <li>
            <Link to="/contact-us" className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>
    </div>
  )
}

export default Footer