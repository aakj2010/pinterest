import { useState, useEffect } from 'react'
import './Login.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import PinterestIcon from '@mui/icons-material/Pinterest';
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth)

    useEffect(() => {
        if (isError) {
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

        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name, email, password
            }
            dispatch(register(userData))
        }
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
                <h2 className='heading'>Welcome to Pinterest</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Enter your name</label>
                        <input
                            type="text"
                            className="form-control"
                            id='name'
                            name='name'
                            value={name}
                            placeholder='Enter your name'
                            onChange={onChange}
                        />
                    </div>
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
                        <label>Confirm password</label>
                        <input
                            type="password"
                            className="form-control"
                            id='password2'
                            name='password2'
                            value={password2}
                            placeholder='Confirm password'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='btn btn-red'>Continue</button>
                    </div>
                    <Link>
                        <span className='small'>Already a member? Login</span>
                    </Link>
                </form>
            </div>

        </>
    )
}

export default Register