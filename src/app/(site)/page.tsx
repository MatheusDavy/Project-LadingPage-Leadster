'use client'

import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import { BannerContent, BannerImage, BannerText, HomeContent } from "./styles";
import FilterCard, { PostProps } from "@/components/Filter";

import Image from "next/image";
import ImageBanner from '../../assets/images/banner-cta.png'
import ImageIconCard from '../../assets/images/Icons/no-card-dark.webp'
import ImageRating from '../../assets/images/Icons/rating.webp'
import ImageSealRd from '../../assets/images/selo_RD.png'

import postsData from '../../assets/data/cards.json'
import ModalPostProvider from "@/context/modal/index";

export default function Home() {

    return (
        <ModalPostProvider>
            <HomeContent>
                <HeroBanner />
                <FilterCard datas={postsData} />
                <BannerContent>
                    <div className="container">
                        <BannerImage src={ImageBanner} alt='' data-animate='right' />

                        <BannerText data-animate='left'>
                            <h2 className="title">
                                Pronto para triplicar sua <br />
                                <b>Geraçao de Leads?</b>
                            </h2>
                            <p className="description">Criação e ativação em 4 minutos.</p>
                            <hr className="separator" />
                            <div className="call-to-action">
                                <div className="call-to-action--content">
                                    <Link className="call-to-action--button" href={'/'}>VER DEMONSTRAÇÃO</Link>

                                    <Image src={ImageSealRd} alt='Selo RD STATION' />
                                </div>

                                <p className="call-to-action--description">
                                    <Image src={ImageIconCard} alt='Cartão de Crédito' />
                                    Não é necessário Cartão de Crédito
                                    |
                                    <Image src={ImageRating} alt='Cartão de Crédito' />
                                    4.9/5 média de satisfação
                                </p>
                            </div>
                        </BannerText>
                    </div>
                </BannerContent>
            </HomeContent>
        </ModalPostProvider>
    )
}
