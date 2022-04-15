import React, {useState} from 'react'
import './App.css';
import Menu from './Menu'
import AddColorForm from './AddColorForm'
import StarRating from './StarRating'
import ColorList from './ColorList'
import { v4 } from "uuid";

function App({color_data}) {
  const [colors, setColors] = useState(color_data);
 
  return (
    <div className="App">
      {/* <Menu recipes={data}  title="Menu"/> */}
      {/* <StarRating  style={{ backgroundColor: "lightblue" }} onDoubleClick={() => alert('doooouble')}/> */}
      <ColorList colors={colors}
        onRemoveColor={id => {
            const newColors = colors.filter(color => color.id !== id)
            setColors(newColors)
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color => color.id === id ? {...color, rating} : color)
          setColors(newColors)
        }}
      />
      <AddColorForm 
        onNewColor={(title, color) => {
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
        }}
      />
    </div>
  );
}

export default App;
