import React from "react"
import styled from "styled-components"
import {Hackicon} from '../icons/codingicon'
import {Language} from '../icons/languageicon'
import profile from '../../images/images.jpg'
import {
    Box,
    Card,
    Image,
    Heading,
    Text
  } from 'rebass'

const Sectop = styled.section`
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;
`
const Titles = styled.h3`
  color: black;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom:0px;
  font-weight: 500px;
`
const MainTitle = styled.h2`
  display:block;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    color: #66666;
    position: relative;
    margin-top: 0;
    margin-bottom: px;
`
const SectionTwo = () => (
  <section className="aside aside-2">
      <Box >
        <Card
            align = 'center'
            p={1}
            borderRadius={2}
            boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
            <Image src={profile} />
            <Box px={2}>
            <Heading as='h3'>
                Mauro Calderon
            </Heading>
            <Text fontSize={0}>
                
            </Text>
            </Box>
        </Card>
       </Box>
      <MainTitle><div><Hackicon></Hackicon></div>
        Programing Languages
        </MainTitle>
      <div>
         <Sectop>
           <Titles>React</Titles>
           <Titles>C#</Titles>
           <Titles>Java</Titles>
           <Titles>Java-Script</Titles>
           <Titles>HTML</Titles>
           <Titles>SQL</Titles>
         </Sectop>
      </div>
      <br></br>
      <MainTitle><div><Language></Language></div>
        Languages
        </MainTitle>
      <div>
         <Sectop>
           <Titles>English</Titles>
           <Titles>Spanish</Titles>
         </Sectop>
      </div>
  </section>
)



export default SectionTwo