import React, {useState, useEffect, Component} from 'react';
import appstyles from './App.module.css';
import btnstyles from './Button.module.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { register } from './auth'; // login/signup, register is the same as signup

// https://blog.logrocket.com/user-authentication-firebase-react-apps/
const Home2 = () => {
	const [form,setForm] = useState({
		email:'',
		password:''
	})
	const handleSubmit = async(e)=>{
		alert("test");
		e.preventDefault();
		await register(form);

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
			<p className={appstyles.headertext}>Your ✨learning portal✨ of free coding projects</p>
				<form onSubmit={handleSubmit} >
					<input type="text" className={appstyles.homeinput}
						placeholder="Enter Email" id="mail"
					onChange={(e) =>
					setForm({...form, email: e.target.value})} />
					<br/>
					{/*<label for="password">Password</label>*/}
					<input type="password" placeholder="Create Password"
						className={appstyles.homeinput}
					onChange={(e) =>
					setForm({...form, password: e.target.value})}/>
					<br/>
					<button type="submit" className={btnstyles.primarybtn}>
						Submit
					</button>
				</form>
			</div>
		</div>


	)
}

export default Home2
