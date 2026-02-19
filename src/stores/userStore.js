import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(persist(
    (set, get) => ({
        user: null,
        token: null,
        todoList: [],
        setUser: (input) => set({ user: input }),
        setToken: (input) => set({ token: input }),
        setTodoList: (input) => set({ todoList: input }),
        setLogOut: () => set({ user: null, token: null, todoList: [] })
    }), {
    name: "userStore"
}
))

export default useUserStore