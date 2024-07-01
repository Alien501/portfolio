import React, { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import './ContactSection.css'
import ufo from '../../assets/ufo 2.svg'


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
        const fo = document.querySelector('form');
        event.preventDefault();
        if(formData.name == '' || formData.email == '' || formData.response == '') {
            alert('Fill all fields!')
            return
        };
        const f = new FormData(fo);
        setisSubmitted(true);
        try {
            const res = await fetch(
                'https://script.google.com/macros/s/AKfycbyXnvWBctTilJ4Hg_7fNfc8u9QpAliiU18CiHy0veP08VBwZmGU55zQQ3klMgOZcF0uAw/exec',
                {
                    method: 'POST',
                    body: f
                }
            )
            if(res.ok){
                const data = await res.json();
                setFormData(prev => {
                    return {
                        name: '',
                        email: '',
                        response: ''
                    }
                })
                alert('Your response has been submitted successfully!');
            }else{
                alert('Something went wrong, couldn\'t submit your request! 1')
            }
        }catch(e) {
            alert('Something went wrong, couldn\'t submit your request! 2')
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
                        transform: 'translate3d(60vw, -50%, 0)',
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
    }, [])


    useLayoutEffect(() => {
        let vw = randomvw();
        let ctx = gsap.context(
            () => {
                gsap.fromTo(
                    '.ufo',
                    {
                        rotate: 0
                    },
                    {
                        rotate: 145,
                        duration: 5,
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
            <form name="mf">
                <div className="contact-form-container">
                    <input type="text" value={formData.name} name="name" id="name" placeholder="Name" required onChange={onChange}/>
                    <input type="email" value={formData.email} name="email" id="email" placeholder="Mail" required onChange={onChange}/>
                    <textarea type="text" value={formData.response} name="response" id="response" placeholder="Your thoughts..." onChange={onChange} required/>

                    {
                        (isSubmitted)?
                        <button disabled className="submit" onClick={onSubmit}>Submitting</button>:
                        <button className="submit" onClick={onSubmit}>Submit</button>
                    }
                </div>
            </form>
        </div>
    )
}