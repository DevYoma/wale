import React from 'react'
import './FormSocials.css';
import {AiOutlineGoogle, AiOutlineTwitter, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'


const FormSocials = () => {
  return (
    <section id="formSocials">
        <div className="formSocials__container">
                <AiOutlineGoogle  size={24}/>
                <AiFillLinkedin size={24}/>
                <AiOutlineTwitter size={24}/>
                <AiFillFacebook size={24}/>
        </div>
    </section>
  )
}

export default FormSocials