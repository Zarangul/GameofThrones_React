import React,{useEffect,useState} from 'react';

import { ENDPOINTS } from '../../api/routing';
import {GET} from '../../api/api';

import Char from './Char';
import style from './Chars.module.css';

export const Chars = () => {
  const [items, setItems] = useState([]);
  useEffect(()=>{
   GET(ENDPOINTS.GET_CHARS(), setItems)
  },[])

  return (
    <div className={style.chars}>
      {
        items ? items.map(item=><Char item={item}/>) : <h1>Loading ...</h1>
      }
    </div>
  )
}
