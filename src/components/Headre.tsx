
import { Link, Outlet } from 'react-router-dom'

function Headre() {
  return (
    <div>
      <div className='px-4  sm:px-32 py-4 bg-gray-600 text-white flex items-center justify-center '>
        <div className='flex gap-2 xs:gap-4 sm:gap-10 md:gap-16 lg:gap-24 xl:gap-40 sm:text-xl font-semibold items-center justify-between'>
        <Link className='hover: hover:translate-1 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500  rounded-lg' to="/">Home</Link>
        <Link className='hover: hover:translate-1 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500  rounded-lg' to="/">Feature</Link>
        <Link className='hover: hover:translate-1 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500  rounded-lg' to="/">Download</Link>
        <Link className='hover: hover:translate-1 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500  rounded-lg' to="/">Owner</Link>
        <Link className='hover: hover:translate-1 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500  rounded-lg' to="/">Pricing</Link>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Headre
