import React from "react";
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Header from '../components/templates/header/Header'
import Nav from '../components/routes/Nav'
import Footer from '../components/templates/footer/Footer'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Nav />
                <Router />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;
