import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/landing.jsx'
import TodoDashboard from './components/todo.dashboard.jsx'
import TodoList from './components/todoList.jsx'
import DeletedTodos from './components/deletedTodos.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/todo-dashboard' element={<TodoDashboard />} />
        <Route path='/todo-dashboard/todo-list' element={<TodoList />} />
        <Route path='/todo-dashboard/todo-deleted' element={<DeletedTodos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
