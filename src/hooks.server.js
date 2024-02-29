// src/+hooks.server.js
import { redirect } from "@sveltejs/kit";
import {json} from "@sveltejs/kit"
// define the routes of we want to be possible to access without auth
const public_paths = [
    '/signup',
    '/login'
];

// function to verify if the request path is inside the public_paths array

function isPathAllowed(/**@type{string}*/path) {
    return public_paths.some(allowedPath =>
        path === allowedPath || path.startsWith(allowedPath + '/')
    );
}

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve}) => {
    var uid = null
  // check if the cookie exist, and if exists, parse it to the user variable
    if(event.cookies.get('uid') != undefined && event.cookies.get('uid') != null){
        uid = json(event.cookies.get("uid"))
    }
    const url = new URL(event.request.url);
  // validate the user existence and if the path is acceesible
    if (!uid && !isPathAllowed(url.pathname)) {
    throw redirect(302, '/login');
    }
    if(uid){
    // redirect user if he is already logged if he try to access signin or signup
        if(url.pathname == '/signup' || url.pathname == '/login'){
        throw redirect(302, '/homepage')
        }
    }
    const response = await resolve(event)
    return response
}