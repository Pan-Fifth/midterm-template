import { useEffect, useState } from "react"
import todoApi from "../apis/todoApi"
import TodoItem from "../components/TodoItem"
import useUserStore from "../stores/userStore"

function TodoList() {
    const [input, setInput] = useState("")
    const setTodoList = useUserStore(state => state.setTodoList)
    const todoList = useUserStore(state => state.todoList)
    useEffect(() => {
        fetchTodos()
    }, [])


    const fetchTodos = async () => {
        try {
            const res = await todoApi.get("/")
            const todoList = res.data
            setTodoList(todoList)
        } catch (error) {
            console.log(error)
        }
    }
    const hdlSubmit = async () => {
        try {
            await todoApi.post("/", { content: input })
            fetchTodos()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="flex flex-col min-h-screen w-full items-center pt-20 gap-8">

            <p className="text-4xl font-bold">Todo list</p>
            <form className="w-full max-w-2xl flex gap-2 px-4" onSubmit={hdlSubmit}>

                <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="New todo"
                    onChange={(e) => { setInput(e.target.value) }}
                />
                <button type="submit" className="btn btn-neutral">Add Task</button>
                <button type="button" className="btn btn-error">Log out</button>
            </form>
            <div className="overflow-y-auto w-[40%] max-h-150 flex flex-col justify-start gap-3">
                {todoList.map((e) => (<TodoItem todo={e} fetchTodos={fetchTodos} />))}

            </div>
        </div>
    )
}
export default TodoList