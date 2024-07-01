import { Button, Input, TextField } from '@mui/material'
import React, { useState } from 'react'

export const Login = (props) => {

    const {setUser} = props

    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')

    const sendHandler = (e) => {

        const req = new URLSearchParams();
        req.append('email', mail)
        req.append('password', pass)

        fetch('https://gps.autotracker.group/api/session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: req.toString()
        }).then(res => res.json()).then(data => {
            setUser(data)
            localStorage.setItem('user', JSON.stringify(data))
        });
        e.preventDefault()
    }

  return (
    <div className='container'>
        <form className='login-form' onSubmit={e => sendHandler(e)}>
            <h2>Авторизация</h2>
            <TextField  label='Почта' variant="outlined" className='login-input' color='secondary' required type='email' value={mail} onChange={(e) => setMail(e.target.value)}/>
            <TextField  label='Пароль' variant="outlined" className='login-input' color='secondary' type='password' required value={pass} onChange={(e) => setPass(e.target.value)}/>
            <Button variant='outlined' color='secondary' className='login-submit' type='submit' size='large'>Войти</Button>
        </form>
    </div>
  )
}
