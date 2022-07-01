import React,{FC, MouseEvent, useEffect, useRef, useState} from 'react';
import {fetchCharacter} from './api'
import Card from './components/Card';
import Item from './components/Item';
import {Character} from './api'
import {Wrapper} from './App.styles'
import { useCharacterId } from './context';
const App:FC = () =>{
 const [character,setCharacter] = useState<Character>({} as Character);
 const [isLoading, setLoading] = useState<boolean>(false);
 //const [characterId, setCharacterId] = useState<number>(1); 
const {characterId,setCharacterId} = useCharacterId();
const inputRef = useRef<HTMLInputElement>(null);
 useEffect(() =>{ 
  const fetchFromApi = async() => {
    setLoading(true);
    const result = await fetchCharacter(characterId);
    setLoading(false);
    setCharacter(result);
  }
  fetchFromApi();

 },[characterId]);

 const handleButtonClick = (e:MouseEvent<HTMLButtonElement>):void => {
    console.log(e.currentTarget);
    const characterNumber = Number(inputRef.current?.value);
    if(characterNumber > 10){
      alert('Please enter value between 1 to 10.');
    }else{
      setCharacterId(characterNumber);
    }
 }
 return (
    <Wrapper characterId={characterId}>
      {isLoading ? <p>Loading...</p>:<>
        <Card name={character.name} imgUrl={character.img_url} gender={character.gender}/>
        <Item<typeof character> item={character} onClick={(item) => console.log(item.origin)}/>
        <input type="text" ref={inputRef}/>
        <button onClick={handleButtonClick}>Get Character</button>
      </>}
    </Wrapper>
  );
}

export default App;
