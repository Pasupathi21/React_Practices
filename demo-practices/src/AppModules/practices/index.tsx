import { useState, useEffect } from 'react'
import  ComponentOne from './components/component-one'



export default function Practices() {
    useEffect(() => {
        console.log("Index file", Date.now())
        // return statement in useEffect works as a componentDidUnMount
        return () => {
            console.log("Component UnMount", Date.now())
        }
    }, [])
    return <>
    <h1>Practices component render </h1>
    <ComponentOne />
    </>
}