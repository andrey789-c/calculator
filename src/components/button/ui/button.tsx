import { FC } from "react";
import s from "./button.module.scss";

interface IButtonProps {
	onClick: () => void;
	children: React.ReactNode;
}

export const Button:FC<IButtonProps> = ({children, onClick}) => {
	return (
		<button className={s.button} onClick={onClick}>
			{children}
		</button>
	);
};
