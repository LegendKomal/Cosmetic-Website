
import { useContext } from 'react'
import { Flex, Input, Button, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react"
import footer_bg from "./footer_top_bg.svg";
import footer_icon from "./footer_sugar_icon.png"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { AiFillMail } from "react-icons/ai"
import { FaFacebookF, FaTumblr, FaYoutube, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa"
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import { color } from 'framer-motion';

const Footer = () => {

    let { isLoginPage } = useContext(GlobalContext);

    return (

        <>
            

            <Flex display={isLoginPage ? "none" : "flex"} className='footer' direction="column" alignItems="center" position="relative">

                <Flex bg="black" h="300px" w="100%" direction="column" alignItems="center" bgRepeat="no-repeat" backgroundSize="cover" position="absolute">

                    <Flex w="100%" h="50px" justifyContent="center" alignItems="center" gap="15px" mt="20px" whiteSpace="nowrap">
                        <Box h="2px" w={["30px", "50px", "50px", "50px"]} bg="white"></Box>
                        <Heading textColor="white"  as="h2" fontSize={["20px", "25px", "25px", "25px"]}> LET’S STAY IN TOUCH </Heading>
                        <Box h="2px" w={["30px", "50px", "50px", "50px"]} bg="#fc2779"></Box>
                    </Flex>

                    <Flex h="40px" justifyContent="center" alignItems="center" pb="20px" whiteSpace={["normal", "nowrap", "nowrap", "nowrap"]} fontSize={["12px", "14px", "15px", "15px"]}>
                        <p style={{ textAlign: "center" , color:"white" }}> Get the latest beauty tips straight to your inbox. Can’t wait to connect! </p>
                    </Flex>

                    <Flex w={["80%", "80%", "60%", "40%"]} h="45px" border="1px solid gray" borderRadius="8px" overflow="hidden">
                        <Input
                            placeholder='Enter Email'
                            border="none"
                            _focusVisible={false}
                            borderRadius="none"
                            bg="white"
                            color="black"
                            style={{ caretColor: "#fc2779" }}
                            h="100%"
                        />

                        <Button borderRadius="0px" variant="ghost" colorScheme="black" h="100%" pl="40px" pr="40px" bg="black" color="white"> SUBSCRIBE </Button>
                    </Flex>
                </Flex>

                <Flex direction="column" bg="#000000" w="100%" alignItems="center">
                    <Flex h="100px" w="100%" justifyContent="center" zIndex="1" mt="230px">
                        
                    </Flex>
                    <Flex h="50px" mt="60px" fontSize="17px" color="black" justifyContent="center" alignItems="center" gap="20px">
                        <Flex w={["25px", "30px", "30px", "30px"]}
                            h={["25px", "30px", "30px", "30px"]}
                            borderRadius="50%"
                            bg="#999999"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ background: 'white' }}
                            cursor="pointer"
                            onClick={() => { window.open("") }}> <FaFacebookF />
                        </Flex>

                        <Flex w={["25px", "30px", "30px", "30px"]}
                            h={["25px", "30px", "30px", "30px"]}
                            borderRadius="50%"
                            bg="#999999"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ background: 'white' }}
                            cursor="pointer"
                            onClick={() => { window.open("") }}> <FaTumblr />
                        </Flex>

                        <Flex w={["25px", "30px", "30px", "30px"]}
                            h={["25px", "30px", "30px", "30px"]}
                            borderRadius="50%"
                            bg="#999999"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ background: 'white' }}
                            cursor="pointer"
                            onClick={() => { window.open("") }}
                        > <FaYoutube />
                        </Flex>

                        <Flex w={["25px", "30px", "30px", "30px"]}
                            h={["25px", "30px", "30px", "30px"]}
                            borderRadius="50%"
                            bg="#999999"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ background: 'white' }}
                            cursor="pointer"
                            onClick={() => { window.open("") }}> <FaTwitter /> </Flex>


                        <Flex w={["25px", "30px", "30px", "30px"]}
                            h={["25px", "30px", "30px", "30px"]}
                            borderRadius="50%"
                            bg="#999999"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ background: 'white' }}
                            cursor="pointer"
                            onClick={() => { window.open("") }}> <FaInstagram
                            /> </Flex>

                        <Flex w={["25px", "30px", "30px", "30px"]}
                            h={["25px", "30px", "30px", "30px"]}
                            borderRadius="50%"
                            bg="#999999"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ background: 'white' }}
                            cursor="pointer"
                            onClick={() => { window.open("") }}
                        > <AiFillMail />
                        </Flex>
                        <Flex w={["25px", "30px", "30px", "30px"]}
                            h={["25px", "30px", "30px", "30px"]}
                            borderRadius="50%"
                            bg="#999999"
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ background: 'white' }}
                            cursor="pointer"
                            onClick={() => { window.open("") }}> <FaPinterestP
                            /> </Flex>

                    </Flex>
                    <Flex justifyContent={["space-around", "space-around", "space-around", "center"]} gap={["10px", "10px", "0px", "100px"]} w="94%" h="80px" alignItems="center" borderTop="1px solid #c4c4c4" borderBottom="1px solid #c4c4c4" whiteSpace="nowrap">
                        <Heading as="h1" fontSize={["11px", "15px", "18px", "18px"]} color="white" cursor="pointer" _hover={{ textDecoration: "underline" }}> Stores </Heading>
                        <Heading as="h1" fontSize={["11px", "15px", "18px", "18px"]} color="white" cursor="pointer" _hover={{ textDecoration: "underline" }}> Terms & Conditions </Heading>
                        <Heading as="h1" fontSize={["11px", "15px", "18px", "18px"]} color="white" cursor="pointer" _hover={{ textDecoration: "underline" }}> Returns </Heading>
                        <Heading as="h1" fontSize={["11px", "15px", "18px", "18px"]} color="white" cursor="pointer" _hover={{ textDecoration: "underline" }}> FAQs </Heading>
                        <Heading as="h1" fontSize={["11px", "15px", "18px", "18px"]} color="white" cursor="pointer" _hover={{ textDecoration: "underline" }}> About Us </Heading>
                    </Flex>
                    <Flex direction="column" color="white" borderBottom="1px solid #c4c4c4" w="94%">

                        <Flex w="100%" h="80px" alignItems="center" pl="100px">
                            <Heading as="h2" fontSize="22px"> GET IN TOUCH </Heading>
                        </Flex>

                        <SimpleGrid columns={[1, 2, 3, 5]} spacing={10} pb="30px" mt="30px">
                            <Flex direction="column">
                                <Heading as="h2" size="md"> Call us at </Heading>
                                <br />
                                <Heading as="h2" size="sm" opacity="50%" cursor="pointer" _hover={{ textDecoration: "underline" }}> 1800-209-9933 </Heading>
                                <Heading as="h2" size="sm" opacity="50%" mt="5px"> Monday to Friday : 9 AM to 7 PM  </Heading>
                            </Flex>

                            <Flex direction="column">
                                <Heading as="h2" size="md"> Support </Heading>
                                <Heading as="h2" size="sm" opacity="50%" mt="3px" cursor="pointer" _hover={{ textDecoration: "underline" }}> hello@uianduc.com </Heading>
                            </Flex>

                            <Flex direction="column">
                                <Heading as="h2" size="md"> Careers </Heading>
                                <Heading as="h2" size="sm" opacity="50%" mt="3px" cursor="pointer" _hover={{ textDecoration: "underline" }}> We're hiring! </Heading>
                            </Flex>

                            <Flex direction="column">
                                <Heading as="h2" size="md"> Press & Media </Heading>
                                <Heading as="h2" size="sm" opacity="50%" mt="5px" cursor="pointer" _hover={{ textDecoration: "underline" }}> pr@uiux.com </Heading>
                            </Flex>

                            <Flex direction="column">
                                <Heading as="h2" size="md"> Influencer Collab </Heading>
                                <Heading as="h2" size="sm" opacity="50%" mt="5px" cursor="pointer" _hover={{ textDecoration: "underline" }} onClick={() => { window.open("") }}> Join Us </Heading>
                            </Flex>
                        </SimpleGrid>

                    </Flex>
                    
                </Flex>
            </Flex >
        </>


    )
}

export default Footer;
