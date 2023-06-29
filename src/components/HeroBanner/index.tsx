import Image from "next/image"
// Images
import detailText from '../../assets/images/details-text.png'
// Components
import { BannerContent, Description, Separator, Text, Title } from "./styles"



export default function HeroBanner() {

    return (
        <BannerContent>
            <div className="container">
                <Text data-animate='down'>WEBNARS EXCLUSIVOS</Text>
                <Title data-animate='left'>Menos Conversinha,
                    <br />
                    <p data-animate='right'>
                        Mais Conversão
                        
                            <Image
                                src={detailText}
                                alt="details"
                                data-animate
                            />
                        
                    </p>
                </Title>
                <Separator />
                <Description data-animate='up'>Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio</Description>
            </div>
        </BannerContent>
    )
}
