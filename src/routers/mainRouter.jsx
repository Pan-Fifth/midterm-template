import { createBrowserRouter } from "react-router"
import MainLayouts from "../layouts/MainLayouts"
import Login from '../pages/Login'
import TodoList from "../pages/TodoList"
import PageNotFound from "../pages/PageNotFound"

const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "todo",
                element: <TodoList />
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
])

export default mainRouter