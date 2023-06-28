import Image from "next/image"
// Images
import detailText from '../../assets/images/details-text.png'
import { BannerContent, Description, Separator, Text, Title } from "./styles"
import { useEffect, useRef } from "react"
import splitting from "splitting";
import { animateOneElement, charAnimations } from "@/animation/scripts/enter";


export default function HeroBanner() {

    const textAnimate = useRef<HTMLDivElement>(null);
    const titleAnimate = useRef<HTMLDivElement>(null);
    const image = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textAnimate.current && titleAnimate.current && image.current) {
        splitting({ target: textAnimate.current, by: 'chars' });
        splitting({ target: titleAnimate.current, by: 'chars' });

        setTimeout(async ()=>{
            await charAnimations(titleAnimate.current)
            setTimeout(()=>{
                animateOneElement(image.current)
            }, 2200)
        }, 1000)
    }
  }, []);
    return (
        <BannerContent>
            <div className="container">
                <Text >WEBNARS EXCLUSIVOS</Text>
                <Title ref={titleAnimate}>Menos Conversinha,
                    <br />
                    <p ref={textAnimate}>
                        Mais Conversão 
                        <Image
                            src={detailText}
                            alt="details"
                            ref={image}
                            data-animate
                        />
                    </p>
                </Title>
                <Separator />
                <Description>Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no seu negócio</Description>
            </div>
        </BannerContent>
    )
}
