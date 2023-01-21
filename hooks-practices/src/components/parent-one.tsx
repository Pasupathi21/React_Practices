import React, { useState, useEffect, useMemo } from 'react'

export const ParentOne = () => {

    /** Variables */

    /**********************************************************Hook */
    // 1) useState

    // Eeach time state called when change the state
    const [firstStateData, firstSetState] = useState(() => {
        // console.log('First useState')
        return {
            inputName: ''
        }
    })

    // Only once called State useState
    // const [secondStateData, secondSetState] = useState((function() {
    //     console.log("Called Each time when render the function", firstStateData.inputName)
    // })())

    const [displayStateData, displaySetState] = useState('')

    const [thisValuebasedInvokeMemo, setColorState] = useState(() => { return false })


    // 2) useEffect

    // It takes two parameters useEffect never return any value
    // Whenever the second parameter changed all those time called useEffect
    // We will clear the some unwanted data in useEffect using return state ment

    //useEffet not worked in referential equality 'objects' or 'array'

    useEffect(()=> {
        console.log('first useEffect called', firstStateData.inputName)

        return () => {
            console.log('useEffect RETURN', firstStateData.inputName)
        }


    }, [firstStateData])



    // 3) useMemo -> Memo -> (Memory cacheing)

    /* This hook help to optimize the component based on 'OVER TIME CONSUMING' operation or 
         'REFERENTIAL OBJECTS' handle inside this hooks
        
        This worked similar to useEffect data changes
        
    */

    // This useMemo also used for some Time consuming functionality

    const color = useMemo(() => {
        console.log('use memo called')
        return {
            backgroundColor: thisValuebasedInvokeMemo ? 'green' :'red' 
        }

    }, [thisValuebasedInvokeMemo])

    useEffect(()=> {
        console.log('Second useEffect called')
    }, [color])
     // 


    /*************************************************************** */

    const displayData = () => {
        displaySetState((predisplayStateData) => {
            return predisplayStateData = firstStateData.inputName
        })
        setColorState(pre => pre = true)
        
    }

    const updateInputValue = (event: any) => {
        // console.log("updateInputValue")
        const { name, value } = event.target; 
        firstSetState((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })

    }

    return (
        <>
        <div style={ color }>

            <input type="text" name="inputName" value={ firstStateData.inputName } onChange={ updateInputValue }/>
            <button onClick={ displayData}> Click</button>
            {displayStateData}
        </div>
        </> 
    )
}