import { useState, useEffect } from 'react'
import './Login.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import PinterestIcon from '@mui/icons-material/Pinterest';
import { IconButton } from '@mui/material';


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth)

    useEffect(() => {
        if (isError) {
            alert("username or Password is Wrong")
            toast.error(message)
        }

        if (isSuccess || user) {
            // alert("logged in Successfully")
            navigate('/')
        }

        dispatch(reset())


    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='form'>
                <div className='pinterest'>
                    <PinterestIcon />
                </div>
                <p className='heading'>Welcome to Pinterest</p>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter your password'
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-red'>Log in</button>
                    </div>
                    <Link to="/register">
                        <span className='small'>Not on Pinterest yet? Sign up</span>
                    </Link>
                    {/* <span>Or</span>
                    <div>
                        <button type='submit' className="btn btn-block">Continue with Google</button>
                    </div> */}
                </form>
            </section>

        </>
    )
}

export default Login