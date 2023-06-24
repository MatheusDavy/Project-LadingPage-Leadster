import Image from "next/image"
// Images
import detailText from '../../assets/images/details-text.png'
import { BannerContent, Description, Separator, Text, Title } from "./styles"

interface Props {
    title?: string
    message?: string
}

export default function HeroBanner({ title, message }: Props) {
    return (
        <BannerContent>
            <div className="container">
                <Text>WEBNARS EXCLUSIVOS</Text>
                <Title>Menos Conversinha,
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
                <Description>Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio</Description>
            </div>
        </BannerContent>
    )
}