import React, { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import './ContactSection.css'
import ufo from '../assets/ufo 2.svg'

export default function ContactSection() {
    const[formData, setFormData] = useState(
        {
            name: '',
            email: '',
            response: '',
        }
    );
    const [isSubmitted, setisSubmitted] = useState(false);

    function onChange(event) {
        setFormData(prev => {
            const newdata = event.target.value;

            return {
                ...prev,
                [event.target.name]: newdata
            }
        })
    }

    async function onSubmit(event) {
        event.preventDefault();
        if(formData.name == '' && formData.email == '' && formData.response == '') return;
        
        setisSubmitted(true);
        const res = await fetch(
            'https://script.google.com/macros/s/AKfycbykpyh5EltQqbJfTxtF5sa4t7BE9113bXsNjKVs5_6d753JZIXYUE0yJUtvXyGNMGCu/exec',
            {
                method: 'POST',
                body: formData
            }
        )
        if(res.ok){
            const data = await res.json();
            alert('Data Submitted Successfully');
        }else{
            alert('Something Wentwrong, not submitted data')
        }
        setisSubmitted(false)
    }

    function randomvw() {
        const arr = [30, -30, 20, 40]
        return arr[Math.floor(Math.random()*4)];
    }

    useLayoutEffect(() => {
        let vw = randomvw();
        let ctx = gsap.context(
            () => {
                gsap.fromTo(
                    '.ufo',
                    {
                        transform: `translate3d(${vw}vw, 25%, 0)`,
                        scale: 1,
                    },
                    {
                        transform: 'translate3d(30vw, -55%, 0)',
                        duration: 8,
                        ease: 'power3.inOut',
                        repeat: -1,
                        yoyo: true,
                        scale: 0,
                    }
                )
            }
        )
        return () => ctx.revert();
    })

    return(
        <div id="contact-section">
            <div id="contact-head">Contact Me</div>

            <img src={ufo} alt="UFO Illustration" className="ufo" />
            <div className="contact-form-container">
                <input type="text" name="name" id="name" placeholder="Name" required onChange={onChange}/>
                <input type="email" name="email" id="email" placeholder="Mail" required onChange={onChange}/>
                <textarea type="text" name="response" id="response" placeholder="Your thoughts..." onChange={onChange} required/>

                {!isSubmitted && <button className="submit" onClick={onSubmit}>Submit</button>}
            </div>
        </div>
    )
}