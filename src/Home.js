import React, {useState, useEffect, Component} from 'react';
import appstyles from './App.module.css';
import btnstyles from './Button.module.css';
import Button from './Button';
import { useNavigate} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { register } from './auth'; // login/signup, register is the same as signup
import { login } from './auth'; 
const Home = () => {
	const navigate = useNavigate();
	
	const [form,setForm] = useState({
		email:'',
		password:''
	})
	const handleSubmit = async(e)=>{
		e.preventDefault();
		await login(form);
		 navigate('/interest');


	}

	const signUp = () => {
		navigate('/signup')
	}

	return (
		<div className={appstyles.container}>
			
				<ul>
					<li><a href="mailto:peter423@wwu.edu">Say Hello</a></li>
					<li><a href="https://medium.com/@softwaresista">Blog</a></li>
					<li><span className={appstyles.logoname}>Starcoder.io</span></li>
					<img className="logo" src="star2.png"/>
				</ul>
			<div className={appstyles.box}>
			<p className={appstyles.headertext}>Build the future by getting in the zone✨</p>
				<form onSubmit={handleSubmit} >
					<input type="text" className={appstyles.homeinput}
						placeholder="Email" id="mail"
					onChange={(e) =>
					setForm({...form, email: e.target.value})} />
					<br/>
					{/*<label for="password">Password</label>*/}
					<input type="password" placeholder="Password"
						className={appstyles.homeinput}
					onChange={(e) =>
					setForm({...form, password: e.target.value})}/>
					<br/>
					<button type="submit" className={btnstyles.primarybtn}>
						Submit
					</button>
				</form>
					<button onClick={signUp}>
						Submit
					</button>
			</div>
		</div>



	)
}

export default Home
