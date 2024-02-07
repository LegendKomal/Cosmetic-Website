
import React from 'react'
import { Image } from "@chakra-ui/react"

const Logo = ({ h, display, onClick }) => {
    return (
        <Image
            cursor="pointer"
            onClick={onClick}
            h={h}
            display={display}
            src='https://user-images.githubusercontent.com/122547611/266762780-19933637-35d5-4a07-9974-e753f8c9c06f.png'
        />
    )
}

export { Logo };
