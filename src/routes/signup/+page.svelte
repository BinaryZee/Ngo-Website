<h1>Signup page</h1>
<form>
	<label>
		Email
		<input name="email" type="email" bind:value={email} required>
	</label>
	<label>
		Password
		<input name="password" type="password" bind:value={pass} required>
	</label>
	<button on:click={signUp}>Signup</button>
</form>
<script>
	import { auth } from "$lib/firebase/firebase.client";
	import { createUserWithEmailAndPassword } from "firebase/auth";
	import { goto } from "$app/navigation"
	var email=''
	var pass=''
	let verified=false;
	async function signUp(){
		await createUserWithEmailAndPassword(auth,email,pass)
			.then((usercred)=>{
				goto("/login")
			})
			.catch((err)=>{
				alert("the user doesn't exist")
			})
	}
</script>