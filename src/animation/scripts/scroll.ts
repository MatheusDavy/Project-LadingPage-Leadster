'use client'
import Lenis from '@studio-freight/lenis'

const initScrolling = ()=> {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    })
    
    function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    
   
}

if (typeof window !== "undefined") {
    initScrolling()
}