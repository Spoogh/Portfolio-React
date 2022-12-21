import React from 'react'
import { LinkedIn, GitHub, Email } from "@mui/icons-material";

import "../index.css";

export default function Footer() {

    return (
       <footer >
          
        <div className='socialmedia'>
        <a href="https://www.linkedin.com/in/joshua-flores-7834a9254/" target='_blank'>
        <LinkedIn />
        </a>
            <a href='https://github.com/Spoogh' target='_blank'>
            <GitHub />
            </a>
            <a href="mailto:joshuafloresjjf@gmail.com" target='_blank'>
            <Email />
            </a>
        </div>
        <p> &copy; 2022 Joshua Flores</p>
    
       </footer>
    )
    }