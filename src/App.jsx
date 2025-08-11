import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Layout from './compo/Layout'
import Login from './compo/Login'
import Home from './compo/Home'
import { useState } from 'react'

function App() {

  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/react-site/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/react-site/login" element={<Login />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
