import React, { useEffect } from 'react'
import welcomeJS from '../javascript/hello'

const Home = () => {

    useEffect(() => {
        welcomeJS();
    }, []);

    return (
        <>
            <div>
                <span> == Javascript Basics == </span><br />
                <code> console.log('to check compilation') </code><br />
                <code> `inspect and check the console to analyze the output` </code>
                {/* call to handle */}
            </div>
        </>

    )
}

export default Home