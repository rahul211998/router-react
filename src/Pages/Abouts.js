import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Abouts = () => {
    const navgate = useNavigate()
    const {n} = useParams() // returns a object of key/value pairs 

    const navigatetohome = ()=>navgate('/')
  return (
    <div>
        <h4>{n}</h4>
        <button onClick={navigatetohome}>click to navigate</button>
    </div>
  )
}

export default Abouts