'use client'
import { HeaderContent, LinkLogo } from "./styles";
// Images
import Image from "next/image";
import logo from '../../assets/images/logo.png'
import { useEffect, useRef } from "react";
import { animateOneElement } from "@/animation/scripts/enter";

export default function Header(){
    const image = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        animateOneElement(image.current)
    }, [])
    return(
        <HeaderContent>
            <div data-animate ref={image} className="container">
                <LinkLogo href=""><Image src={logo} alt='Logo'/></LinkLogo>
            </div>
        </HeaderContent>
    )
}