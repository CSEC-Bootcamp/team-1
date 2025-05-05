import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import React from 'react'

function Fotter() {
  return (
    <div className='text-neutral-50 text-base font-normal font-Poppins not-first:leading-normal'>
        
        <div>
            <h1>Subscribe</h1>
            <p></p>
            <input type="text" />
        </div>
        <div>
            <h1>Support</h1>
            <p></p>
            <p>dev@gmail.com</p>
            <p></p>
            <p></p>

        </div>
        <div>
        <h1>Support</h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div>
        <h1>Support</h1>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div>
        <h1>Follow us on socials </h1>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <LinkedinIcon/>
        </div>
    </div>
  )
}

export default Fotter