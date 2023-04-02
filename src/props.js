import React from 'react'
function MyName(props)
{
    return(
        <>
        <p> My name is {props.name} </p>
        </>
    )
}
export default function DisplayNames()
{
     const names=[]
     return(
        <>
         {names.map((n)=><MyName name={n}/>)}
        </>
     )
}