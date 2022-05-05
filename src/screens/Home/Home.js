import React from 'react'
import './Home.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe.js'
import MyWorks from '../MyWorks/MyWorks.js'
import Reviews from '../Reviews/Reviews.js'
import Book from '../Book/Book.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'

export default function Home() {
    return (
        <Router>
            
            <div className="main-body">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<MyWorks />}></Route>
                    <Route path="/aboutMe" element={<AboutMe />}></Route>
                    <Route path="/reviews" element={<Reviews />}></Route>
                    <Route path="/book" element={<Book />}></Route>

                </Routes>
            </div>
        </Router>
    )
}