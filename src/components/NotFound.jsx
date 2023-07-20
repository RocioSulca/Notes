import React from 'react';
import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <>
            <section className='container-not-found'>
                <h2>404</h2>
                <h4>Página no encontrada</h4>
                <Link className='back-home' to='/'>Home</Link>
            </section>
        </>
    )
}
