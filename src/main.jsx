import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './features/store.js'
import { Provider } from 'react-redux'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/landing.jsx'
import TodoDashboard from './components/todo.dashboard.jsx'
import TodoList from './components/todoList.jsx'
import DeletedTodos from './components/deletedTodos.jsx'
import Signup from './components/signup.jsx'
import Signin from './components/signin.jsx'
import ProtectedRoute from './components/protectedRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />

          {/* Protected Routes */}
          <Route path='/todo-dashboard' element={<ProtectedRoute element={<TodoDashboard />} />} />
          <Route path='/todo-dashboard/todo-list' element={<ProtectedRoute element={<TodoList />} />} />
          <Route path='/todo-dashboard/todo-deleted' element={<ProtectedRoute element={<DeletedTodos />} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
