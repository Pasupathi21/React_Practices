import React from 'react'

export default function Render(props: any) {
    console.log("Render print")
    return (
        <>
            <div>render</div>
            <input type="text" name="render" value={props?.count} onChange={(e) =>  props.updateCount(e?.target?.value ? Number(e?.target?.value): 0)}/>
            <div>{
                Array(props.count ? props.count : 0).fill("").map((e: any, i: number) => (
                    <div key={i}>
                        <span><p>{i+1}: &nbsp;{Math.random()}</p></span>
                    </div>
                ))}
            </div>
        </>
    )
}
