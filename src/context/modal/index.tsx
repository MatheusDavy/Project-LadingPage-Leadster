import { memo,  useContext, useState } from "react"
import { ChildrenProviderProps, ModalPostsProps } from "./interfaces"
import { ModalViewContext } from "./context"


function ModalPostProvider({ children }: ChildrenProviderProps) {
    const [modalProps, setModalProps] = useState<ModalPostsProps>({
        postId: undefined,
        isOpen: false,
    })

    function openCloseModal(id: string | number | undefined, open: boolean){
        const data: ModalPostsProps = {
            postId: id,
            isOpen: open,
        }

        setModalProps(data)
    }


    return (
        <ModalViewContext.Provider
            value={{
                openCloseModal,
                modalProps
            }}
        >
            {children}
        </ModalViewContext.Provider>
    )
}

export default memo(ModalPostProvider)

export const useModalPostContext = ()=>{
    const context = useContext(ModalViewContext)

    if(typeof context === 'undefined'){
        throw new Error(
            "You have to use useModalPostContext inside <ModalPostProvider />"
        )
    }

    return {...context}
}