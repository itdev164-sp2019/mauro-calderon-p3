import React from "react"
import styled from "styled-components"
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import { Icon } from 'react-icons-kit'
import {github} from 'react-icons-kit/icomoon/github'
import {ic_email} from 'react-icons-kit/md/ic_email'
import {twitter} from 'react-icons-kit/fa/twitter'

const Twitter = () => <Icon size={45} icon={twitter} />
const Email = () => <Icon size={45} icon={ic_email} />
const Git = () => <Icon size={45} icon={github} />
const Link = () => <Icon size={45} icon={linkedinSquare} />

const ContactInfo = styled.div`
   background: #0ad7f7;
`

const Contact = () => (
  <section>
     <ContactInfo>
         <h1>CONTACT INFORMATION</h1>
         <br></br>
         <a href="mailto:maurocrdev@gmail.com"><Email></Email>
         </a>
         <br></br>
         <a href="https://www.linkedin.com/in/mauro-calderon-37a687107"><Link></Link>
         </a>
         <br></br>
         <a href="https://github.com/caldem11"><Git></Git></a>
         <br></br>
         <a href="https://twitter.com/maurocrdev"><Twitter></Twitter></a>
     </ContactInfo>    
  </section>
)



export default Contact