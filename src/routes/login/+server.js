import {json} from '@sveltejs/kit';
import {v4 as uuidv4} from "uuid"
const id = uuidv4()
export async function POST({ request,cookies }) {
    const {email}= await request.json()
    cookies.set("uid",id,{
        path:"/",
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60
    })
    return json(id)
}    