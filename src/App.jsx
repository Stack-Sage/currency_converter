import { useState } from 'react'

import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Footer from './components/Footer'

function App() {
  
  const[amount , setAmount] = useState(0)
  const[to,setTo] = useState("inr")
  const[from,setFrom] = useState("usd")
  const[convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    convert();
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (



    <div className='w-full h-screen flex flex-wrap justify-center  bg-cover bg-no-repeat '


    style={{
      backgroundImage: `url('${'https://images.unsplash.com/photo-1707581471193-183252f0d85b?q=80&w=1677&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}')`
    }}>


  
      <h1 className=" mt-10 text-transparent font-serif  tracking-wide bg-cover text-3xl font-bold invert bg-clip-text  " style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') " }}>
        CURRENCY CONVERTER

      </h1>
    



      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

        <form 
        onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }}
        
        >
          <div className='w-full mb-1'>
            <Input 
            label = "From"
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currency)=>setFrom(currency)
            } 
            selectCurrency= {from} 
            onAmountChange={(amount)=> setAmount(amount)}
            />
  
          </div>
          <div className=' relative w-full h-0.5  '>
            <button
            type='button'
            className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 '

            onClick={swap}
            >
              swap
            </button>
          </div>
          <div className='w-full mt-1 mb-4 '>
            <Input
            label = "To"
            amount={convertedAmount}
            currencyOption={options}
            onCurrencyChange= {(currency)=>setTo(currency)}
           
            selectCurrency= {to}
            />


          </div>
          <button type='submit'
          className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg '
          >Convert {from.toUpperCase() } to {to.toUpperCase()}
          </button>
        </form>

        </div>


        <div className='bottom-3 fixed  mx-auto w-full invert brightness-110   '>

          <Footer/>
        </div>
      </div>

    </div>
  )
  
}
  
export default App
