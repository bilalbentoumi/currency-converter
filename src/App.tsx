import Logo from './components/Logo'
import Select from './components/Select'

const App = () => {

  return (
    <>

      <div className="navbar border-b">
        <div className="container py-4 sm:py-10">
          <Logo />
        </div>
      </div>

      <div className="main">

        <div className="container py-4 sm:py-16">

          <h2 className="text-slate-700 text-3xl font-semibold">Currency Converter</h2>
          <span className="text-slate-500 text-xs font-medium">Today, 2022-10-07</span>

          <div className="flex items-center gap-10 mt-10">

            <Select label="From" className="flex-1" />

            <button className="flex justify-center items-center w-12 h-12 bg-[#3589e7] hover:ring-8 hover:ring-blue-100 rounded-full duration-75">
              <svg className="fill-current text-white" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" fill="inherit" />
              </svg>
            </button>

            <Select label="To" className="flex-1" />

          </div>

          <div className="flex items-center gap-10 mt-10">

            <input type="text" className="w-full text-6xl" placeholder="1000" />

            <input type="text" className="w-full text-6xl" placeholder="1000" />

          </div>

        </div>
        
      </div>

    </>
  )
}

export default App
