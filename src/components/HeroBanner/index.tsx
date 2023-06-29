import Image from "next/image"
// Images
import detailText from '../../assets/images/details-text.png'
// Components
import { BannerContent, Description, Separator, Text, Title } from "./styles"
import { useEffect, useRef } from "react"



export default function HeroBanner() {

    const text = useRef<HTMLParagraphElement | null>()
    const title = useRef<HTMLHeadingElement>()
    const description = useRef<HTMLParagraphElement>()

    useEffect(()=>{

    }, [])

    return (
        <BannerContent>
            <div className="container">
                <Text  data-animate='down'>WEBNARS EXCLUSIVOS</Text>
                <Title  data-animate='left'>Menos Conversinha,
                    <br />
                    <span data-animate='right'>
                        Mais Conversão
                        
                            <Image
                                src={detailText}
                                alt="details"
                            />
                        
                    </span>
                </Title>
                <Separator />
                <Description  data-animate='up'>Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio</Description>
            </div>
        </BannerContent>
    )
}
