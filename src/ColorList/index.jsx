import { render } from "@testing-library/react";
import React, {useContext} from "react";
import Color from "../Color";
import {ColorContext} from '../index'
 
const ColorList = ({onRemoveColor = f => f, onRateColor = f => f}) => {
  const {colors} = useContext(ColorContext)
  if (!colors.length) return <div>No Color Listed.</div>;
  return(
    <>
      {colors.map((el) => (
        <Color key={el.id} {...el} onRemove={onRemoveColor} onRate={onRateColor}/>
      ))}
    </>
  );
};


export default ColorList;
