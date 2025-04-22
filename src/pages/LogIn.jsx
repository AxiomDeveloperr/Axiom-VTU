import { loginImage } from "../assets/images"
import Button from "../components/Button"

const LogIn = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full">
        {/* Left side: Login form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-100">
            <div className="max-w-md w-full">
            <h2 className="text-3xl font-bold mb-3 primary-text">Welcome back</h2>
            {/* <p className="mb-6">Enter your details</p> */}
            <button className="w-full flex items-center justify-center gap-2 mb-4 p-3 border rounded-md hover:bg-gray-200">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" className="w-5 h-5" />
                Log in with Google
            </button>
            {/* <div className="">
                <div className="mb-6 w-full">
                    <Button text="Log in with Google" type="outline" />
                </div>
                <div>
                    <Button text="Log in with GitHub" type="outline" />
                </div>
            </div> */}
            <button className="w-full flex items-center justify-center gap-2 mb-4 p-3 border rounded-md hover:bg-gray-200">
                <img src="https://www.svgrepo.com/show/452091/github.svg" alt="GitHub logo" className="w-5 h-5" />
                Log in with GitHub
            </button>
            <div className="flex items-center my-4">
                <hr className="flex-grow border-t primary-text" />
                <span className="px-4 text-gray-500">OR</span>
                <hr className="flex-grow border-t primary-text" />
            </div>
            <form>
                <input
                type="text"
                placeholder="Email or username"
                className="w-full p-3 mb-4 border rounded-md"
                />
                <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mb-4 border rounded-md"
                />
                <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Keep me signed in
                </label>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                    Forgot password
                </a>
                </div>
                <Button text="Sign in" />
            </form>
            <p className="mt-6 text-sm text-center">
                Don't have an account?{' '}
                <a href="#" className="text-blue-500 hover:underline">
                Create an account
                </a>
            </p>
            </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${loginImage})` }}>
        </div>
    </div>
    )
}

export default LogIn
