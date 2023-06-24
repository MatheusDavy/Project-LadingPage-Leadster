'use client'

import HeroBanner from "@/components/HeroBanner";
import { HomeContent } from "./styles";
import FilterCard from "@/components/Filter";

export default function Home(){
    return(
        <HomeContent>
            <HeroBanner />
            <FilterCard />
        </HomeContent>
    )
}