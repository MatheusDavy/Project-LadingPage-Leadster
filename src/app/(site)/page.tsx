'use client'

import HeroBanner from "@/components/HeroBanner";
import { BannerContent, BannerImage, BannerText, HomeContent } from "./styles";
import FilterCard from "@/components/Filter";

import Image from "next/image";
import ImageBanner from '../../assets/images/banner-cta.png'
import ImageIconCard from '../../assets/images/Icons/no-card-dark.webp'

import cardData from '../../assets/data/cards.json'


export default function Home() {
    


    return (
        <HomeContent>
            <HeroBanner />
            <FilterCard datas={cardData}/>
            <BannerContent>
                <div className="container">
                    <BannerImage src={ImageBanner} alt='' />
                    
                    <BannerText>
                        <h2 className="title"></h2>
                        <p className="description"></p>
                        <div className="call-to-action">
                            <div className="btn--cta">

                            </div>

                            <p>
                                <Image src={ImageIconCard} alt='Cartão de Crédito'/>
                                Não é necessário Cartão de Crédito
                                |
                                <Image src={ImageIconCard} alt='Cartão de Crédito'/>
                                4.9/5 média de satisfação
                            </p>
                        </div>
                    </BannerText>
                </div>
            </BannerContent>
        </HomeContent>
    )
}
