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
                <button type="submit" className="btn btn-neutral">Add Task</button>
                <button type="button" className="btn btn-error">Log out</button>
            </form>
            <div className="overflow-y-auto w-[40%] max-h-150 flex flex-col justify-start gap-3">
                <TodoItem />

            </div>
        </div>
    )
}
export default TodoList