import React, {createContext, useState, useContext} from 'react'
import color_data from '../store.jsx'
import { v4 } from "uuid";
 

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);
//export const useColors = () => useContext(ColorContext) // возвращаем контекст с помощью пользовательского хука

function ColorProvider({children}){    //пользовательский поставщик для provider
    const [colors, setColors] = useState(color_data);  //состояние для color_data

    const onRemoveColor= id => {
        const newColors = colors.filter(color => color.id !== id)
        setColors(newColors)
    }

    const onRateColor=(id, rating) => {
      const newColors = colors.map(color => color.id === id ? {...color, rating} : color)
      setColors(newColors)
    }

    const onNewColor=(title, color) => {
        const addNewColor = [
          ...colors,
          {
            id: v4(),
            rating: 0,
            title,
            color
          }
        ];
        setColors(addNewColor)
      }

    return(
        <ColorContext.Provider value={{colors, onNewColor, onRateColor, onRemoveColor }}>
            {children}
        </ColorContext.Provider>
    )
}


export default ColorProvider