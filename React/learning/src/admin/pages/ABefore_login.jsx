import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ABefore_login() {

  const s_aid = sessionStorage.getItem('s_aid');
  return (
    <div>

      {
        s_aid ? <Navigate to='/dashboard' /> : <Outlet />
      }

    </div>
  )
}

export default ABefore_login