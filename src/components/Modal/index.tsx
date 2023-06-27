import { ContentDownloads, LinksDownload, ContentText, Iframe, ModalContent, ModalLayer, Title, ButtonClose, Loader } from "./style"
import { SlCloudDownload } from 'react-icons/sl'
import { GrFormClose } from 'react-icons/gr'
import { useEffect, useState } from "react"
import { useModalPostContext } from "@/context/modal"
import { PostProps } from "../Filter"
import postsDatas from '../../assets/data/cards.json'

interface Props {
    id: string | number
}

export function ModalView({ id }: Props) {
    const { openCloseModal, modalProps } = useModalPostContext()
    const [postData, setPostData] = useState<PostProps | void>()



    function handleCloseModal() {
        openCloseModal(undefined, false)
        setPostData(undefined)
    }

    useEffect(() => {
        if (modalProps.postId) {
            postsDatas.forEach((post: PostProps) => {
                if(post.id == modalProps.postId){
                    setTimeout(()=>{
                        setPostData(post)
                    }, 3000)
                }
            })
        }
    }, [modalProps])

    console.log(postData)

    return (
        <ModalLayer className={modalProps.isOpen ? 'opening' : ''}>
            <ModalContent>
                {postData != undefined ? (

                    <>
                        <ButtonClose onClick={handleCloseModal}>
                            <GrFormClose />
                        </ButtonClose>


                        <Title className="title">{postData.title}</Title>
                        <Iframe className="video-modal" src={postData.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                        <ContentText>
                            <p className="title">Descrição</p>
                            <hr />
                            <p className="description">{postData.description}</p>
                        </ContentText>

                        <ContentDownloads>
                            <p className="title">Downloads</p>
                            <hr />

                            <div className="buttons">

                                {postData.downloadExcel != '' ? (
                                    <LinksDownload download={''} type="excel">
                                        <div className="icon">
                                            <SlCloudDownload />
                                        </div>
                                        <span className="text">Spreadsheet.xls</span>
                                    </LinksDownload>
                                ) : ('')}

                                {postData.downloadDocs != '' ? (
                                    <LinksDownload download={''} type="docs">
                                        <div className="icon">
                                            <SlCloudDownload />
                                        </div>
                                        <span className="text">Document.doc</span>
                                    </LinksDownload>
                                ) : ('')}

                                
                                {postData.downloadPowerPoint != '' ? (
                                    <LinksDownload download={''} type="powerpoint">
                                        <div className="icon">
                                            <SlCloudDownload />
                                        </div>
                                        <span className="text">Presentation.ppt</span>
                                    </LinksDownload>
                                ) : ('')}

                                
                            </div>
                        </ContentDownloads>
                    </>
                ) : (
                    <Loader />
                )}

            </ModalContent>
        </ModalLayer>
    )
}