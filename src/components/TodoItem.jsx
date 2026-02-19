import todoApi from "../apis/todoApi"

function TodoItem({ todo, fetchTodos }) {
    const hdlDelete = async () => {
        try {
            console.log(todo.id)
            const res = await todoApi.delete(`delete/${todo.id}`)
            console.log(res.data)
            fetchTodos()
        } catch (error) {
            console.log(error)
        }
    }
    const hdlEdit = async (e) => {
        console.log(todo.id)
        const done = e.target.checked
        console.log(done)
        try {
            await todoApi.patch(`/update/${todo.id}`, {
                content: todo.content, isdone: done
            })
            fetchTodos()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="flex w-full items-center gap-4 justify-between">
            <input type="checkbox" className="checkbox checkbox-xl border-amber-950 border-4"
                defaultChecked={todo.isdone}
                onChange={hdlEdit} />
            {todo.isdone
                ? <p className="flex-1 line-through">{todo.content}</p>
                : <p className="flex-1">{todo.content}</p>
            }

            <button className="btn btn-soft btn-warning">edit</button>
            <button className="btn btn-neutral" onClick={hdlDelete}>X</button>
        </div>
    )
}
export default TodoItem