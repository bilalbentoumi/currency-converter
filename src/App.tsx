import { useEffect, useState } from 'react'
import moment from 'moment'
import NavBar from './components/NavBar'
import Select from './components/Select'
import { convert, getCurrencies } from './utils/currency'

const App = () => {
  
  const [baseCurrency, setBaseCurrency] = useState<string>('eur')
  const [targetCurrency, setTargetCurrency] = useState<string>('usd')
  const [amount, setAmount] = useState<any>('')
  const [result, setResult] = useState<any>('')

  const options = getCurrencies()

  useEffect(() => {

    convert(baseCurrency, targetCurrency, amount).then(res => {

      setResult(res)
    })
  }, [baseCurrency, targetCurrency, amount])

  const swap = () => {

    let tmp = baseCurrency
    setBaseCurrency(targetCurrency)
    setTargetCurrency(tmp)
  }

  return (
    <>

      <NavBar />

      <div className="main">

        <div className="container py-4 sm:py-16">

          <h2 className="text-slate-700 text-2xl sm:text-3xl font-semibold">Currency Converter</h2>
          <span className="text-slate-500 text-xs font-medium">{'Today ' + moment().format('Y-M-DD HH:mm')}</span>

          <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-10 mt-6 sm:mt-10">

            <div className="flex-1 bg-white p-4 shadow rounded-md">
              <Select label="From" value={baseCurrency} options={options} stateChanger={setBaseCurrency} />
              <input type="text" className="w-full text-3xl sm:text-6xl mt-4 sm:mt-10" placeholder={baseCurrency.toUpperCase()} value={amount}
                onChange={(e) => setAmount(e.target.value)} />
            </div>

            <button onClick={swap} className="flex justify-center items-center w-12 h-12 bg-indigo-600 hover:ring-[12px] hover:ring-indigo-100 rounded-full duration-75">
              <svg className="fill-current text-white" width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" fill="inherit" />
              </svg>
            </button>

            <div className="flex-1 bg-white p-4 shadow rounded-md">
              <Select label="To" value={targetCurrency} options={options} stateChanger={setTargetCurrency} />
              <input type="text" className="w-full text-3xl sm:text-6xl mt-4 sm:mt-10" placeholder={targetCurrency.toUpperCase()} value={result !== 0 ? result : ''} readOnly />
            </div>

          </div>

        </div>
        
      </div>

      <footer className="footer">
        <div className="container flex flex-col items-center py-6 border-t">
            <p className="text-slate-500">Made with <span className="text-red-400 text-xl">♥</span> by Bilal Bentoumi</p>
            <a href="https://github.com/bilalbentoumi/currency-converter" target="_blank">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mt-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
        </div>
    </footer>

    </>
  )
}

export default App
