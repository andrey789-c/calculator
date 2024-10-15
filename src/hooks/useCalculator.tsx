import { useEffect, useState } from "react";

const useCalculator = () => {
	const [input, setInput] = useState<string>("");
	const [result, setResult] = useState<string>("");

	const handleButtonClick = (value: string) => {
		if (value === "C") {
			setInput("");
			setResult("");
			return;
		}

		const operators = ["+", "-", "*", "/"];
		const lastChar = input.slice(-1);

		if (value === "backspace") {
			// Удаляем только последний символ из строки
			if (result) {
				setInput("");
				setResult("");

				return;
			}
			setInput((prev) => prev.slice(0, -1));
			return;
		}

		if (input === "Ошибка") {
			setInput("");
			setResult("");
			return;
		}
		if (result) {
			setInput(value);
			setResult("");
			return;
		}

		if (operators.includes(value) && operators.includes(lastChar)) {
			return;
		}

		if (value === "=") {
			try {
				const evalResult = eval(input);
				setResult(evalResult);
			} catch (error) {
				setInput("Ошибка");
			}
		} else {
			// Обновляем ввод
			setInput((prev) => prev + value);
		}
	};

	return { result, input, handleButtonClick };
};

export default useCalculator;
