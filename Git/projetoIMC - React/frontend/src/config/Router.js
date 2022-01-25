import React from "react"
import { Routes, Route } from 'react-router'

import Home from '../components/home/Home'
import User from '../components/user/User'
import AdminUsers from "../components/admin/AdminUsers"
import ImcCalc from "../components/calc/ImcCalc"

function Router(props) {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<AdminUsers />} /> 
            <Route path='/criar' element={<User />}/>
            <Route path='/imc' element={<ImcCalc />}/>
        </Routes>
    )
}

export default Router