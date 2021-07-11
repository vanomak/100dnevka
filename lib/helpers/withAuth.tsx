import React, {useEffect, useState} from 'react';
import router from 'next/router';
import { auth } from '../firebase/index';

const withAuth = (Component) => {
    return function (props) {
        const [status, setStatus] = useState('LOADING');
        useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged(authUser => {
                console.log("authUser", authUser);
                if(authUser) {
                    setStatus('SIGNED_IN')
                }else {
                    router.push('/');
                }
            });
            return () => unsubscribe();
        }, [])
        return <>
            {status == 'LOADING' && <h1>Loading ......</h1>}
            {status != 'LOADING' && <Component { ...props } />}
        </>
    };
}
export default withAuth;