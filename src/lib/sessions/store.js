import { writable } from 'svelte/store';
export const user = writable([
    {
        id:'',
        email:'',
        password: ''
    }
]);
export const createUser=(/** @type {{ id: string; email: string; password: string; }} */ newuser)=>{
    const currUser= find(newuser)
    if(currUser){
        return false
    }
    user.update((u)=>[...u,newuser])
}

export const find = (/** @type {{id: string;  email: string; password: any; }} */ obj)=>{
    let newUser;
    user.subscribe((value)=>{
        if(value){
            if(obj.email){
                newUser=value.find((item)=>{
                    item.email===obj.email
                    })
            }
            else{
                if(obj.id){
                    newUser=value.find((item)=>{item.id===obj.id})
                }
            }
        }
    })
    return newUser;
}