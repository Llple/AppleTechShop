import axios from 'axios'
import { stubFalse } from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../redux/store'
import { setIsAuth } from '../redux/slices/adminSlice'
import AdminPanel from '../components/AdminPanel'

export default function Login
() {
    const [loginInput,setLoginInput] = React.useState("")
    const [loginIn,setLoginIn] = React.useState(true)

    const [passwordInput,setPasswordInput] = React.useState("")
    const [passwordIn,setPasswordIn] = React.useState(true)
    const [buttonDisabled,setButtonDisabled] = React.useState(true)

    

    const dispatch = useDispatch<AppDispatch>()
    interface Users {
        id: string,
        name: string,
        login: string,
        password: string,
            
          
    }

    const [dataUsers,setDataUsers] = React.useState<Users[]>()
    const nav = useNavigate()

    const onSubmitForm = (e : FocusEvent) =>{
        e.preventDefault()
        console.log("click")
    }
    const [localSrorageState, setLocalSrorageState] = React.useState(false);
    useEffect(()=>{
        (async()=>{
            const {data} = await axios.get<Users[]>("https://679ba69e33d316846324a48e.mockapi.io/login")
            setDataUsers(data)

        })()
        const localStorageData = (localStorage.getItem("isAuth"))
        if(localStorageData){
            setLocalSrorageState(JSON.parse(localStorageData))

        }
    },[])
    
    useEffect(()=>{
        console.log(buttonDisabled)
        console.log("buttonDisabled")
        if(passwordIn && loginIn){
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    },[loginIn,passwordIn])
  return localSrorageState ? <AdminPanel/> :(
    <div className='login-block'>
        <form action="submit" >
            <label htmlFor="login__login-label" className={loginIn?'login__login-label':'login__login-label-none'}>Логин</label>
            <input value={loginInput} onBlur={()=>{
                if(loginInput){
                    setLoginIn(true)
                }
                else{
                    setLoginIn(false)
                }}} onChange={(e)=>{
                setLoginInput(e.target.value)
                
                
            }} id ={"login__login-input"} className={loginIn?'login__login-input':'login__login-input-none'} type="text" />
            <label htmlFor="login__password-input" className={passwordIn?'login__password-label':'login__password-label-none'}>Пароль</label>
            <input value={passwordInput} onBlur={()=>{
                if(passwordInput){
                    setPasswordIn(true)
                }
                else{
                    setPasswordIn(false)
                }}} onChange={(e)=>{
                setPasswordInput(e.target.value)
                
                
            }} id ={'login__password-input'} className={passwordIn?'login__password-input':'login__password-input-none'} type="text" />
            
            <button className={buttonDisabled?'disabled':""} disabled={buttonDisabled} onClick={(e)=>{e.preventDefault() 
        console.log("click")
         const thisUser =  dataUsers?.find(user=>user.login===loginInput && user.password===passwordInput)
                if(thisUser?.name === "admin"){
                    dispatch(setIsAuth(true))
                    nav("/adminPanel")
                    localStorage.setItem("isAuth",JSON.stringify(true))
                    
                }
                else{
                    console.log("это не админ")
                }
        }}>Войти</button>
        </form>
    </div>
  )
}
