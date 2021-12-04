import React from "react";

export enum ButtonTypes {
  button="button" ,
  submit="submit" ,
  reset="reset"
}

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
  className?:string;
  type?: ButtonTypes ;
  text: number | string | string[]
}

//const c:string[]=['', 10]

function Button({
  type=ButtonTypes.submit,
  ...props
}:Props):JSX.Element {
  return (
    <button onClick={props.onClick}
            className={props.className}
            type={type}>
      {props.text}
    </button>
  );
}

export default Button;