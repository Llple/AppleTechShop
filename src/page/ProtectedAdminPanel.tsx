import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import AdminPanel from '../components/AdminPanel'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ProtectedAdminPanel() {
    const isAuth = useSelector((state:RootState) => state.admin.isAuth)
  return isAuth? <AdminPanel/> : <Navigate to="/" replace />
}
