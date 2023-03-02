import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate();
	
	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:2000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			
			navigate('/');
		} else {
			alert('Please check your username and password')
		}
	}

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Add a new ToDo</h2>
    <form onSubmit={loginUser}>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
                    class="form-control"></input>
            
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
                    class="form-control"></input>
        </div>
        <input type="submit" value="Login" />
        <button><Link to='/register'>register</Link></button>
    </form>
       
      </div>
    </div>
  </div>
  )
}
