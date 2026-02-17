function Login() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" >
                <label className="text-center text-3xl">Login</label>

                <label className="label">Email</label>
                <input type="text" className="input" placeholder="Username" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    )
}
export default Login