import { FC } from "react";
import s from "./display.module.scss";

interface IDisplayProps {
	value: string;
  result: string
}

export const Display:FC<IDisplayProps> = ({value, result}) => {
	return <div className={s.display}>
    {result ? <span>{value}</span> : null}
    <div className={s.result}>{result ? result : value}</div>
  </div>;
};
