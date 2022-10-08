import { useEffect, useRef, useState } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'

const options = [
  { value: 'usd', text: 'USD' },
  { value: 'eur', text: 'EUR' },
  { value: 'dzd', text: 'DZD' },
]

const Select = ({ label, value, className, stateChanger }: any) => {

  const ref = useRef<any>()

  const [open, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<any>(options[0])

  useEffect(() => {

    if (value) {

      setSelectedOption(options.filter((option) => option.value == value).pop() ?? options[0])
    }
  }, [])

  const select = (option: any) => {

    setSelectedOption(option)
    stateChanger(option.value)
    setOpen(false)
  }

  useOnClickOutside(ref, () => setOpen(false))

  return (     
    <div className={`relative mt-1 ${className}`}>
      
      <button onClick={() => setOpen(open => (!open))} type="button" className="relative w-full cursor-default border-b bg-white py-4 text-left hover:border-blue-200 focus:border-blue-600 sm:text-sm">
        
        <span className="block text-xs font-semibold text-slate-400">{label}</span>
        <span className="block text-xl">{selectedOption.text}</span>
        
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
          </svg>
        </span>

      </button>

      {open && <ul ref={ref} className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

        {options.map((option) => (
          <li key={option.value} onClick={() => {select(option)}} className="hover:bg-gray-100 text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9">
            
            <div className="flex items-center">
              <span className="font-normal block truncate">{option.text}</span>
            </div>

            {option.value == selectedOption && <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
            </span>}

          </li>
        ))}

      </ul>}

    </div>
  )
}
  
export default Select