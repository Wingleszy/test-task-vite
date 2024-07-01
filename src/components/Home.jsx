import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const Home = () => {

  return (
    <div className='home-container'>
        <Sidebar />
        <main className="main">
            <Header active='one'/>
            <h2>Пустая домашняя страница</h2>
        </main>
    </div>

  )
}
