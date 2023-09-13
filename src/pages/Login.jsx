import { useState, useEffect } from 'react'
import './Login.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import PinterestIcon from '@mui/icons-material/Pinterest';


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
            navigate('/home')
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
            <div className='form login-form-section'>
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
                            placeholder='Email'
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
                            placeholder='Password'
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-red'>Log in</button>
                    </div>

                    <div className='privacy-policy'>
                        By continuing, you agree to Pinterest's <br /><b>Terms of Service</b> and acknowledge that you've read <br /> our <b>Privacy Policy. Notice at Collection</b>
                    </div>

                    <Link to="/">
                        <span className='small'><b>Not on Pinterest yet? Sign up</b></span>
                    </Link>
                </form>
            </div>


        </>
    )
}

export default Login