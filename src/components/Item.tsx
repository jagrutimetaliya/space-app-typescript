import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align:center;
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background:papayawhip;
  border-radius:1rem;
  box-sizing:border-box;
  p{}
  span{
    font-weight:bold;
    text-transform:
  }
  `;

type Props<ItemType> = {
    item:ItemType;
    onClick: (item:ItemType) => void;
}

function Item<ItemType>({item,onClick} : Props<ItemType>){
    return (<Wrapper>{Object.keys(item).map((property,i) => (
        <p key={i}><span>{property}</span>: {item[property as keyof ItemType]}</p>
    ))}
   {/*  <button onClick={() => onClick(item)}>Click Me !</button> */}
    </Wrapper>)
}

export default Item;