import React from "react"
import {IconHome} from '../icons/icon'
import styled from 'styled-components'
import SectionThree from './worexp'

const MainTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: #2d7788;
    position: relative;
    margin-top: 0;
    margin-bottom: 20px;
`

const SectionOne = () => (
  <section className="aside aside-1">
      <MainTitle><div><IconHome></IconHome></div>
        CARRER PROFILE
        </MainTitle>
      <div>
          <p>
          Currently enrolled at Milwaukee Area Technical College in the IT Web and Software Developer Program.
          </p>
      </div>
      <div>
      <SectionThree></SectionThree>
      </div>
  </section>
)



export default SectionOne