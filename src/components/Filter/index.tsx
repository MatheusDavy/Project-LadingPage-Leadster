'use client'
import { useEffect, useState } from "react";
import { Button, FilterContent, FilterGroup, SelectGroup, SelectInput } from "./styles";
import cardData from '../../assets/data/cards.json'

// Interfaces
interface ButtonProps {
    text: any
    index: number
    activeFunction: (index: number) => void; 
    isActive : boolean
}



// Components
export default function FilterCard(){
    /*------------------ Const / Variables ------------*/
    const [categories, setCategories] = useState<Array<string>>([])
    const [categoryActive, setCategoryActive] = useState(0)

    /*------------------ Function ------------*/
    function setActiveCategy(index: number){
        if(index != categoryActive){
            setCategoryActive(index);
        }
    }

    /*------------------ UseEffects ------------*/
    useEffect(()=>{
        let category: Array<string>  = []
        cardData.forEach(videos => {
            if(!category.includes(videos.category)){
                category.push(videos.category)
            }
        });
        setCategories(category)
    }, [])

    return(
        <FilterContent>
            <div className="container">
                <FilterGroup>
                    {categories.map((category, index) => {
                        return (
                            <ButtonsCategory key={index} index={index} text={category} activeFunction={setActiveCategy} isActive={index == categoryActive ? true : false}/>
                        )
                    })}
                </FilterGroup>

                <SelectGroup>
                    <label htmlFor="">Ordenar por</label>
                    <SelectFilter />
                </SelectGroup>

            </div>
        </FilterContent>
    )
}

const ButtonsCategory = ({text, index, activeFunction, isActive}: ButtonProps ) => {
    /*------------------ Function ------------*/
    function handleActiveThisButton(){
        activeFunction(index)
    }

    return(
        <Button key={index} onClick={handleActiveThisButton} className={isActive ? 'selected' : ''}>
            {text}
        </Button>
    )
}

const SelectFilter = ()=>{
    const options = [
        { value: 'publish', label: 'Data de Pulicação' },
        { value: 'relevance', label: 'Relevancia' },
    ]


    return(
        <SelectInput options={options} placeholder={'Selecione'}/>
    )
}
