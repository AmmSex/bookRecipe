import { render } from "@testing-library/react";
import React, { useContext } from "react";
import Color from "../Color";
import  ColorProvider from "../ColorProvider";
import useColors from '../ColorProvider'

const ColorList = () => {
 
  const {colors} = useColors()
  return (
    <ColorProvider.Consumer>
      {() => {
        if (!colors.length) return <div>No Color Listed.</div>;
        
        return (
          <>
            {colors.map((el) => (
              <Color
                key={el.id}
                {...el}
                // onRemove={onRemoveColor}
                // onRate={onRateColor}
              />
            ))}
          </>
        );
      }}
    </ColorProvider.Consumer>
  );
};

export default ColorList;
