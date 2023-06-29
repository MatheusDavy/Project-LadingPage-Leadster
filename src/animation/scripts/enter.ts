'use client'
import gsap from "gsap";
import { classAnimation } from "../styles/enter";

// Const / Variables
const percentScreen = 0.99

//  Functions
export function animateElement(){
        const elements = document.querySelectorAll('[data-animate]')
        elements.forEach(el => {
                const distance = el.getBoundingClientRect().top
                const callAnimation = window.screen.height * percentScreen
    
                if (distance < callAnimation) {
                    el.classList.add(classAnimation)
                }
        })
}

function animateSequentialElement(){
    
    const sequential = document.querySelectorAll("[data-sequential]")
    sequential.forEach(container => {
        const staggers = container.querySelectorAll('[data-sequential-stagger]')
        const distance = container.getBoundingClientRect().top
        const callAnimation = window.screen.height * percentScreen

        if (distance < callAnimation) {
            gsap.to(staggers, {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
            });
        }
    })
}

export function charAnimations(el: any){
    
    const element = el.querySelectorAll('.char')
    gsap.fromTo(
        element,
        0.7,
        {
            transformOrigin: "center",
            rotationY: 90,
            x: 30
        },
        {
            rotationY: 0.1,
            x: 0,
            stagger: 0.025,
            opacity: 1,
        })
}

export function animateOneElement(el: any){   
    
        el.classList.add(classAnimation)  
    
}

// Call Animation


    if(typeof window !='undefined'){
        window.addEventListener('scroll', ()=>{
            animateElement()
            animateSequentialElement()
        })
        
        document.body.addEventListener('load', animateElement)
    }    
