import Logo from './Logo'

const NavBar = () => {

  return (
    <div className="navbar border-b bg-white">
      <div className="container flex justify-between items-center gap-10">

        <Logo />

        <ul className="gap-10 hidden sm:flex">
          <li>
            <a href="/" className="block text-indigo-600 text-sm font-medium border-b-2 border-indigo-600 py-10">Home</a>
          </li>
          <li>
            <a href="/" className="block text-slate-500 hover:text-slate-800 text-sm font-medium py-10">Bank currency</a>
          </li>
          <li>
            <a href="/" className="block text-slate-500 hover:text-slate-800 text-sm font-medium py-10">Bank reviews</a>
          </li>
          <li>
            <a href="/" className="block text-slate-500 hover:text-slate-800 text-sm font-medium py-10">Currency info</a>
          </li>
        </ul>

        <button className="block sm:hidden py-8">
          <svg width="22" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="23" height="3" rx="1.5" fill="black"></rect>
              <rect y="7" width="23" height="3" rx="1.5" fill="black"></rect>
              <rect y="14" width="23" height="3" rx="1.5" fill="black"></rect>
          </svg>
        </button>


      </div>
    </div>
  )
}

export default NavBar