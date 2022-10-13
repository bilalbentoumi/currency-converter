import { useEffect, useState } from 'react'
import moment from 'moment'
import NavBar from './components/NavBar'
import Select from './components/Select'
import Footer from './components/Footer'
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

      <Footer />

    </>
  )
}

export default App
