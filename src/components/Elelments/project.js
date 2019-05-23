import React from "react"
import styled from 'styled-components'
import {u1F528} from 'react-icons-kit/noto_emoji_regular/u1F528'
import { Icon } from 'react-icons-kit'
import {ic_list} from 'react-icons-kit/md/ic_list'
import Todolist from "../Elelments/Projects/Todolist"


const List = () => <Icon size={45} icon={ic_list} />
const Hamer = () => <Icon size={45} icon={u1F528} />


const Pro = styled.h2`
     color:red;
`



const Projects = () => (
  <section >
     <div>
      <br></br>
      <Hamer></Hamer>
     <Pro>Projects</Pro>
    <h2>Current Site</h2>
     <p>This site is was created by me using React, Gatsby, Styled-Components, Rebass, Styled Icons</p>
     </div>
     <div>
    <List></List>
    <br></br>
    <h2>Todo List </h2>
    <p>Todo List was created using React, CSS</p>
    <Todolist></Todolist>
     </div>
  </section>
)



export default Projects