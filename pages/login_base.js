
import {useState} from "react";

function Login_base() {

    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(0)

    const handleLogin = async (email, password, remember) => {
        console.log(email)
        console.log(password)
        console.log(remember)

        setLoading(true)

        // todo: await fetch results
        setResponse(2)
    }

    const returnOnFailed = () => {
        setLoading(false);
        setResponse(0)
    }

    return (
        <div className={"h-screen grid grid-cols-1 lg:grid-cols-2 bg-agadez-900 lg:bg-white"}>
            <div className={"hidden lg:block bg-agadez-900"}>

            </div>
            <div className={"flex justify-center items-center "}>

                <div className={"bg-white rounded-agadez py-8 px-8"}>
                    {(!loading && response==0 ?
                        <div>
                        <h1 className={"text-xl lg:text-2xl font-semibold lg:font-bold pb-8"}>Sign In</h1>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin(e.target.email.value, e.target.password.value, e.target.remember.checked)
                        }}>
                            <input className={"w-full py-3 px-4 rounded-agadez ring-1 focus:outline-none focus:ring-2 ring-opacity-25 focus:ring-opacity-75 ring-agadez-900 mb-3"} name={"email"} type={"text"} placeholder={"Email"} required />
                            <input className={"w-full py-3 px-4 rounded-agadez ring-1 focus:outline-none focus:ring-2 ring-opacity-25 focus:ring-opacity-75 ring-agadez-900 mb-3"} name={"password"} type={"password"} placeholder={"Password"} required />
                            <span className={"flex justify-between"}>
                            <span><input className={"w-4 h-4 focus:bg-agadez-900"} name={"remember"} type={"checkbox"} /> Remember me</span>
                            <span>Forgot Password?</span>
                        </span>
                            <button className={"px-8 py-3 w-full lg:w-auto text-white font-semibold bg-agadez-700 hover:bg-agadez-800 focus:bg-agadez-900 focus:ring focus:ring-agadez-200 mt-4 rounded-agadez"} type={"submit"}>Login</button>
                        </form>
                        </div>: null)}
                    {(loading && response==0 ? <div className={"grid justify-items-center px-4 py-4"}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 animate-spin mb-3 text-agadez-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <div>
                            <h1 className={"text-l font-light mb-3"}>Requesting Authorization...</h1>
                        </div>
                        <small className={"text-xs font-bold text-agadez-600"}>Please de not refresh the page while loading...</small>
                    </div> : null)
                    }

                    {(response==1) ? <div className={"grid justify-items-center px-4 py-4"}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className={"text-l font-light mb-3"}>Request Failed</h1>
                        </div>
                        <small className={"text-xs font-bold text-agadez-600"}>The credentials you entred seem to be incorrect. If you believe this is an error contact the webmaster.</small>
                        <div className={"w-full"}>
                        <button className={"px-8 py-3 w-full lg:w-auto text-white font-semibold bg-agadez-700 hover:bg-agadez-800 focus:bg-agadez-900 focus:ring focus:ring-agadez-200 mt-4 rounded-agadez float-right"} type={"button"} onClick={returnOnFailed}>Return</button>
                        </div>
                        </div> : null}

                    {(response==2 ? <div className={"grid justify-items-center px-4 py-4"}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className={"text-l font-light mb-3"}>Request Authorized</h1>
                        </div>
                        <small className={"text-xs font-bold text-agadez-600"}>You will be redirected shortly.</small>
                    </div> : null)
                    }

                </div>
            </div>

        </div>
    )
}

export default Login_base