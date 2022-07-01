import React,{FC, ReactNode} from 'react'
import {Wrapper,StyledGender} from './Card.styles'
type Props = {
    name :string;
    imgUrl:string;
    gender:string;
}

const Card = ({name,imgUrl,gender}:Props) => {
    return (
      <Wrapper>
            
          <p>{name}</p>
          <img src={imgUrl} alt='character-thumb'/>
         
          <StyledGender color="green" gender={gender}/>

         
      </Wrapper>
      
      )
  }

/* const Card:FC<Props> = ({name,imgUrl}) => {
  return (
    <Wrapper>
        <p>{name}</p>
        <p>{imgUrl}</p>
    </Wrapper>
    
    )
} */

export default Card