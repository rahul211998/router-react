import React from 'react'

export default function About() {
  let names = [1,2,3,4,5,6]
  let t = [100]
  t = [...t,...names]
  return (
    <div>About
            <div>
        {t.map((v,i,lists)=>{
          return <>
           <h1>Elements: {v}</h1>
           <h4>Index: {i}</h4>
           <strong>array: [{lists}]</strong>
          </>
        })}
        {/* <Hello/> */}
      </div>
    </div>
  )
}

