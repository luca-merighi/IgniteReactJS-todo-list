import React from 'react'

import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { Footer } from './components/Footer'

import './styles/global.scss'

export function App() {
    return (
        <React.Fragment>
            <Header />

            <main>
                <TaskList />
            </main>

            <Footer />
        </React.Fragment>
    )
}