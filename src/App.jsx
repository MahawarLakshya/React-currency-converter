import { useState } from 'react';
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/usecurrencyinfo';


function App() {
    
    const[amount,setAmount]=useState(0);
    const[from,setFrom]=useState("usd");
    const[to,setTo]=useState("inr");
    const[convertedAmt,setConvertAmt]=useState(0);

    const currencyInfo=useCurrencyInfo(from);
    const options= Object.keys(currencyInfo);
    const swap=()=>
        {
            setFrom(to);
            setTo(from);
            setConvertAmt(amount);
            setAmount(convertedAmt);
        }
    
    const convert=()=>{
        setConvertAmt(amount*currencyInfo[to])
    }
  return (
    
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-teal-400"
         
          // style={{
          //     backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          // }}
      >
         <h1 className='bg-white/50 flex flex-wrap  justify-center items-center text-black w-full max-w-md mx-auto  px-4 py-3 rounded-lg'>Currency Converter</h1>
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
             
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label={`From:${from.toUpperCase()}`}
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setFrom(currency)}
                              selectCurrency={from}
                              onAmountChange={(amount)=>setAmount(amount)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:text-black hover:bg-white"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label={`To:${to.toUpperCase()}`}
                              amount={convertedAmt}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              selectCurrency={to}
                              amountDisable={true}
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg  hover:text-black hover:bg-white">
                          Convert {from.toUpperCase()} to{to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
} 
export default App;