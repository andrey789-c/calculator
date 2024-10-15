export const handleKeyDown = (
	event: KeyboardEvent,
	handleButtonClick: (value: string) => void
) => {
	const { key } = event;
	event.preventDefault();

	// Разрешенные символы: цифры, операторы и специальные клавиши
	const allowedKeys = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"+",
		"-",
		"*",
		"/",
		"Enter",
		"Return",
		"Backspace",
	];

	// Если нажатая клавиша разрешена, выполняем действие
	if (allowedKeys.includes(key)) {
		// Если нажата клавиша Enter, выполняем расчет
		if (key === "Enter" || key === "Return") {
			handleButtonClick("=");
		} else if (key === "Backspace") {
			// Удаление последнего символа
			handleButtonClick("backspace");
		} else {
			handleButtonClick(key);
		}
	}

	
};
