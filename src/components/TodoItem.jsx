function TodoItem() {
    return (
        <div className="flex items-center gap-4 justify-between w-[40%]">
            <input type="checkbox" className="checkbox checkbox-xl border-amber-950 border-4" />
            <p className="flex-1"></p>
            <button className="btn btn-soft btn-warning">edit</button>
            <button className="btn btn-neutral">X</button>
        </div>
    )
}
export default TodoItem