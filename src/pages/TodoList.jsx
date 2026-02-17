import TodoItem from "../components/TodoItem"

function TodoList() {
    return (
        <div className="flex flex-col min-h-screen w-full items-center pt-20 gap-8">

            <p className="text-4xl font-bold">Todo list</p>
            <form className="w-full max-w-2xl flex gap-2 px-4">

                <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="New todo"

                />
                <button className="btn btn-neutral" >Add Task</button>
            </form>

            <TodoItem />
        </div>
    )
}
export default TodoList