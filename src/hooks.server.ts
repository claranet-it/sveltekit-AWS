import type { Handle } from "@sveltejs/kit";


function redirect(location: string, body?: string) {
    return new Response(body, {
        status: 303,
        headers: { location }
    });
}

export const handle: Handle = async ({ event, resolve }) => {
    console.log('***** Start Hook');

    const session = event.cookies.get('session');
    const email = session as string;

    console.log('*****Email: ', email);

    if (email) {
        event.locals.user = {
            isAuthenticated: true,
            email: email
        };
    } else {
       return redirect('/', 'Not a valid user');
    }
    console.log('*****Event: ', event);
    return resolve(event);
};