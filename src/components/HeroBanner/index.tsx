import Image from "next/image"
// Images
import detailText from '../../assets/images/details-text.png'
// Components
import { BannerContent, Description, Separator, Text, Title } from "./styles"
import { useEffect, useRef } from "react"



export default function HeroBanner() {

    return (
        <BannerContent>
            <div className="container">
                <Text >WEBNARS EXCLUSIVOS</Text>
                <Title >Menos Conversinha,
                    <br />
                    <span>
                        Mais Conversão
                            <Image
                                src={detailText}
                                alt="details"
                            />
                        
                    </span>
                </Title>
                <Separator />
                <Description >Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio</Description>
            </div>
        </BannerContent>
    )
}
