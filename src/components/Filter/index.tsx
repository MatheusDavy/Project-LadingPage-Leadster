'use client'
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion'

import { Button, CardGrid, FilterContent, FilterGroup, NavigateContent, Navigate, SelectGroup, SelectInput } from "./styles";
import { Card } from "../Cards";

// Interfaces
export interface PostProps {
    id: string
    url: string
    category: string
    publicationDate: string
    relevance: number
    title: string
    description: string
    downloadExcel: string
    downloadPowerPoint: string
    downloadDocs: string
    image?: string
}
interface ButtonProps {
    text: any
    index: number
    activeFunction: (index: number) => void;
    isActive: boolean
}

interface SelectProps {
    setFilter: (value: string) => void
}

interface FilterCardProps {
    datas: PostProps[]
    postPerView?: number
}



// Components
export default function FilterCard({ datas, postPerView = 9, }: FilterCardProps) {
    /*------------------ Const / Variables ------------*/
    const [offset, setOffset] = useState<number>(0)

    const [categoryActive, setCategoryActive] = useState(0)
    const [categories, setCategories] = useState<string[]>([])

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [filteredPost, setFilteredPost] = useState<PostProps[]>([])
    const [paginationPost, setPostPagination] = useState<PostProps[]>(datas)

    /*------------------ UseEffects ------------*/
    useEffect(() => {
        let category: string[] = []
        datas.forEach((videos: any) => {
            if (!category.includes(videos.category)) {
                category.push(videos.category)
            }
        });

        setCategories(category)

        let postsFiltered = datas.filter((post: PostProps) => post.category == category[0]);
        setFilteredPost(postsFiltered)
        setCurrentPage(1)
    }, [])


    useEffect(() => {
        if (filteredPost) setOffset(Number.isInteger(filteredPost.length / postPerView) ? (filteredPost.length / postPerView) : Math.floor(filteredPost.length / postPerView) + 1)
        console.log(paginationPost.length)
        let postsFiltered
        if (currentPage == 1) {
            postsFiltered = filteredPost.slice(0, postPerView)
        } else {
            postsFiltered = filteredPost.slice(((currentPage - 1) * postPerView), (currentPage) * postPerView)
        }
        setPostPagination(postsFiltered)
    }, [currentPage, filteredPost])

    /*------------------ Function ------------*/
    function handleFilterBySelection(filterBy: string) {
        let postsFiltered = [...paginationPost]

        if (filterBy == 'publish') {
            postsFiltered.sort((a, b) => {
                const dateA = new Date(a.publicationDate);
                const dateB = new Date(b.publicationDate);

                if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
                    return 0; 
                }

                return dateB.getTime() - dateA.getTime();
            });
        }
        if (filterBy == 'relevance') postsFiltered.sort((a, b) => b.relevance - a.relevance)
        if (filterBy == 'none') postsFiltered.sort((a, b) => Number(b.id) - Number(a.id))

        setPostPagination(postsFiltered)
    }

    function handlePageChange(event: any, page: number) {
        if (currentPage != page) {
            setCurrentPage(page)
        }
    }

    function handleActiveCategory(index: number) {
        if (index != categoryActive) {
            setCategoryActive(index);
        }
        let postsFiltered = datas.filter((post: PostProps) => post.category === categories[index]);
        setCurrentPage(1)
        setFilteredPost(postsFiltered)
    }

    return (
        <>
            <FilterContent>
                <div className="container">
                    <FilterGroup>
                        {categories.map((category, index) => {
                            return (
                                <ButtonsCategory key={index} index={index} text={category} activeFunction={handleActiveCategory} isActive={index == categoryActive ? true : false} />
                            )
                        })}
                    </FilterGroup>

                    <SelectGroup>
                        <label htmlFor="">Ordenar por</label>
                        <SelectFilter setFilter={handleFilterBySelection} />
                    </SelectGroup>

                </div>
            </FilterContent>

            <CardGrid >
                <div className="container">
                    <AnimatePresence>
                        {paginationPost?.map((card: PostProps) => (
                            <Card key={card.id} image={''} title={'Como aumentar a sua geração de Leads feat. Traktor'} tag="h3" />
                        ))}
                    </AnimatePresence>
                </div>
            </CardGrid>

            <NavigateContent>
                <span className='label'>Página</span>
                <Navigate onChange={handlePageChange} count={offset} shape="rounded" />
            </NavigateContent>
        </>
    )
}

const ButtonsCategory = ({ text, index, activeFunction, isActive }: ButtonProps) => {
    /*------------------ Function ------------*/
    function handleActiveThisButton() {
        activeFunction(index)
    }

    return (
        <Button key={index} onClick={handleActiveThisButton} className={isActive ? 'selected' : ''}>
            {text}
        </Button>
    )
}

const SelectFilter = ({ setFilter }: SelectProps) => {
    const options = [
        { value: 'none', label: 'Limpar' },
        { value: 'publish', label: 'Data de Pulicação' },
        { value: 'relevance', label: 'Relevancia' },
    ]

    function handleSetFilter(value: any) {
        setFilter(value.value)
    }


    return (
        <SelectInput options={options} placeholder={'Selecione'} onChange={handleSetFilter} />
    )
}
