import React from 'react';
import { AutoCompleteProperties } from '../types/automplete-properties';

type TextInputProps = {
  id: string
}

export default function TextInput(props: TextInputProps) {


  return (
    <>
      <label htmlFor={props.id}></label>
      <input id={props.id} autoComplete={AutoCompleteProperties.TEL}></input>
    </>
  )
}