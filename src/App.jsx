import Login from './pages/Login'
import TodoList from './pages/TodoList'
import Register from './pages/Register'
import PageNotFound from './pages/PageNotFound'
import { RouterProvider } from 'react-router'
import mainRouter from './routers/mainRouter'
function App() {

  return (
    <RouterProvider router={mainRouter} />
  )
}

export default App
