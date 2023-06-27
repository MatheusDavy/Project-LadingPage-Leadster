import { PostProps } from "@/components/Filter"
import { ReactNode } from "react"

export interface ContextProps {
    openCloseModal: (id: string | number | undefined, open: boolean) => void
    modalProps: ModalPostsProps
}

export interface ModalPostsProps {
    isOpen: boolean
    postId: string | number | void
}

export interface ChildrenProviderProps {
    children: ReactNode
}