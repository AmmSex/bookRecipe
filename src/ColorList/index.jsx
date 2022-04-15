import { render } from "@testing-library/react";
import React, { useContext } from "react";
import Color from "../Color";
import { ColorContext } from "../index";

const ColorList = ({ onRemoveColor = (f) => f, onRateColor = (f) => f }) => {
  //const {colors} = useContext(ColorContext)

  return (
    <ColorContext.Consumer>
      {context => {
        if (!context.colors.length) return <div>No Color Listed.</div>;
        return (
          <>
            {context.colors.map((el) => (
              <Color
                key={el.id}
                {...el}
                onRemove={onRemoveColor}
                onRate={onRateColor}
              />
            ))}
          </>
        );
      }}
    </ColorContext.Consumer>
  );
};

export default ColorList;
