import { Button } from 'bootstrap'
import React from 'react'
import { Link } from "react-router-dom"

export default function Landing() {

  return (
    <div>
        <h2>
            Equitive Landing page
        </h2>
        <Link to="/login">
            LOG IN
        </Link>
        <div></div>
        <Link to="/signup">
            SIGN UP
        </Link>
    </div>
  )
}
