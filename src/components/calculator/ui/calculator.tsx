import s from "./calculator.module.scss";
import useCalculator from "../../../hooks/useCalculator";
import { Button } from "../../button";
import { Display } from "../../display/ui/display";
import { useEffect } from "react";
import { handleKeyDown } from "../../../utils/handleKeyDown";

export const Calculator = () => {
	const { result, input, handleButtonClick } = useCalculator();

	useEffect(() => {
		const handleKeyEvent = (event: KeyboardEvent) =>
			handleKeyDown(event, handleButtonClick);
		document.addEventListener("keydown", handleKeyEvent);

		return () => {
			document.removeEventListener("keydown", handleKeyEvent);
		};
	}, [handleButtonClick]);

	return (
		<div className={s.calculator}>
			<Display value={input} result={result}/>
			<div className={s.buttons}>
				{["7", "8", "9", "/"].map((btn) => (
					<Button key={btn} onClick={() => handleButtonClick(btn)}>
						{btn}
					</Button>
				))}
				{["4", "5", "6", "*"].map((btn) => (
					<Button key={btn} onClick={() => handleButtonClick(btn)}>
						{btn}
					</Button>
				))}
				{["1", "2", "3", "-"].map((btn) => (
					<Button key={btn} onClick={() => handleButtonClick(btn)}>
						{btn}
					</Button>
				))}
				{["0", "=", "+", "C"].map((btn) => (
					<Button key={btn} onClick={() => handleButtonClick(btn)}>
						{btn}
					</Button>
				))}
			</div>
		</div>
	);
};
