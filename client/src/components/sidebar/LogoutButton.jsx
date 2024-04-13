import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading, logout} = useLogout();

  return (
    <div className='mt-auto'>
        {loading ? <span className='loading loading-spinner'></span> : (
          <BiLogOut className='w-6 h-6 mt-3 text-white cursor-pointer hover:text-slate-400 transition-all duration-200'
            onClick={logout}
        />
        )}
    </div>
  )
}

export default LogoutButton