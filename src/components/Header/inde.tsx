import { HeaderContent, LinkLogo } from "./styles";
// Images
import Image from "next/image";
import logo from '../../assets/images/logo.png'

export default function Header(){
    return(
        <HeaderContent>
            <div className="container">
                <LinkLogo href=""><Image src={logo} alt='Logo'/></LinkLogo>
            </div>
        </HeaderContent>
    )
}