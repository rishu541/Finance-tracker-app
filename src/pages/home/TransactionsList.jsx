import { XCircleIcon } from "@heroicons/react/solid";
import { useFirestore } from "../../hooks/useFirestore";


export default function TransactionsList({transactions}) {

    const {deleteDocument ,response} = useFirestore('transactions')
    console.log(response);
    const formatMovmentsDate = function (date, locale) {
        const calcDaysPassed = (date1, date2) =>
          Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));      
        const daysPassed = calcDaysPassed(new Date(), date);
        if (daysPassed == 0) return 'Today';
        if (daysPassed == 1) return 'Yesterday';
        if (daysPassed <= 7) return `${daysPassed} Days Ago`;
       
        return new Intl.DateTimeFormat(locale).format(date);
      };
  return (
    <div>
        <ul>
            {transactions.map((transaction)=>(
                <li key={transaction.id}>                   
                    <div className="my-5 bg-white rounded-xl py-5 px-5 ease-in-out duration-500">
                    <div className="flex justify-between items-center w-full group relative  overflow-hidden ">
                        <div className="group-hover:text-red-500">
                        <div className="font-bold text-lg">{transaction.name}</div>
                        <div className="text-gray-500 justify-self-end text-sm group-hover:text-red-500">{transaction.userName}</div>
                        </div>
                        <div className="flex flex-col group-hover:hidden">
                        <div className="text-green-500 text-right justify-self-end font-bold ">+₹{transaction.amount}</div>
                        <div className="text-gray-500 text-right justify-self-end text-xs ">{formatMovmentsDate((transaction.createdAt.seconds)*1000,"hi-IN")}</div>
                        </div>
                        <button className="absolute flex justify-center items-center  drop-shadow-5xl -right-20 duration-200  group-hover:right-0 
                         px-5 py-5" onClick = {() => deleteDocument(transaction.id)}>
                        <XCircleIcon className="h-7 w-7 text-red-500 bg-clip-text   "/>
                        </button>
                    </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

// new Intl.DateTimeFormat(locale).format(date);
// appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm