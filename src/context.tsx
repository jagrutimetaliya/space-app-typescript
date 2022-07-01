import React,{createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react';

type CharacterIdType ={
    characterId:number;
    setCharacterId:Dispatch<SetStateAction<number>>;
}

const Context = createContext<CharacterIdType>({} as CharacterIdType);

const characterIdProvider: FC = ({children}) => {
    const [characterId,setCharacterId] = useState(1);

    return (<Context.Provider value={{characterId, setCharacterId}}>
        {children}
    </Context.Provider>)
}

export default characterIdProvider;

export const useCharacterId = () => useContext(Context)