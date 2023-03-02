import React,{ useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
    const navigate = useNavigate();

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:2000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate('/login');
		}
	}
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add a new ToDo</h2>
        <form onSubmit={registerUser}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
                    class="form-control"></input>
                
            </div>
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
            <div class="form-check"> 
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <input type="submit" value="Register" />
            <button><Link to='/login'>login</Link></button>
        </form>
           
          </div>
        </div>
      </div>
  )
}
