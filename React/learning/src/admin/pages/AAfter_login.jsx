import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function AAfter_login() {

  const s_aid = sessionStorage.getItem('s_aid');
  return (
    <div>

      {
        s_aid ? <Outlet /> : <Navigate to='/admin-login' />
      }

    </div>
  )
}

export default AAfter_login