import {Link} from "react-router-dom"

export default function transacation() {
  return (
  <div className='flex justify-between bg-white drop-shadow-sm rounded-[16px] flex-row  items-center m-0 px-3 h-20 w-96'>
    <div className='flex flex-row '>
       <div className='bg-blue-200 px-4 py-3 rounded-[10px]'>
         <i className='bx bx-user text-blue-500'></i>
       </div>
       <div className='flex justify-items-start  flex-col px-3'>
         <div className='font-bold text-md'>Milk</div>
         <div className=' text-sm'>Rishabh Malviya</div>
       </div>
     </div>
     <div className='text-green-500 text-xl'>+ ₹20</div>
   </div>
  );
}
