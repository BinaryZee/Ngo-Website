<h1>Login page</h1>
<label for="">Email</label>
<input type="text" name="email" placeholder="Enter the Email" bind:value={email} required>
<label for="">password</label>
<input type="password" name="password" placeholder="Enter the password" bind:value={pass} required>
<button on:click={login}>submit</button>
<div></div>
<label for="">newUser:</label>
<a href="/signup">signup</a>
<style>
	a{
		color: blue;
	}
</style>
<script>
	import {auth} from "$lib/firebase/firebase.client"
	import {signInWithEmailAndPassword} from "firebase/auth"
	import { goto } from "$app/navigation"
	var email=''
	
	var pass=''
	async function login(){
		await signInWithEmailAndPassword(auth,email,pass)
			.then(async (usercred)=>{
				const id= await fetch("/login",{
					method:"POST",
					body:JSON.stringify({email:email}),
					headers:{
						"Content-Type":"application/json"
					}
				})
				const response = await id.json()
				console.log(response)
				goto("/homepage")
			})
			.catch((err)=>{
				alert("the user doesn't exist")
			})
	}
</script>
