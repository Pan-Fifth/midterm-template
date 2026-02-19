import { useState } from "react"
import authApi from "../apis/authApi"
import useUserStore from "../stores/userStore"
import { useNavigate } from "react-router"

function Login() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const setUser = useUserStore(state => state.setUser)
    const setToken = useUserStore(state => state.setToken)

    const navigate = useNavigate()

    const hdlChange = (e) => {
        const { name, value } = e.target
        setFormData(prv => ({ ...prv, [name]: value }))
    }

    const hdlSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await authApi.post("/login", formData)
            console.log(res.data)
            const { token, username } = res.data.user
            setUser(username)
            setToken(token)
            navigate("/todo")
        } catch (error) {
            console.log(error)
        }
    }

    console.log(formData)
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={hdlSubmit}>
                <label className="text-center text-3xl">Login</label>

                <label className="label">Username</label>
                <input type="text"
                    className="input"
                    placeholder="Username"
                    name="username"
                    onChange={hdlChange}
                    value={formData.username} />

                <label className="label">Password</label>
                <input type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    onChange={hdlChange}
                    value={formData.password} />

                <button className="btn btn-neutral mt-4">Login</button>

            </form>
        </div>
    )
}
export default Login