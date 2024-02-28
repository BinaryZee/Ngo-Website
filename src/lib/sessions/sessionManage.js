import { createUser } from "./store";
import { find } from "./store";
import {v4 as uuidv4 } from "uuid"
export const createSession=(/** @type {string}*/email,/** @type{string}*/password)=>{
    let user={
        id:uuidv4(),
        email:email,
        password:password
    }
    createUser(user)
}