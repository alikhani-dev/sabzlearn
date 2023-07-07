export const convertToPersianNumber = (number: number) => {
	const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

	const numberString = number.toString()
	let convertedString = ''

	for (let i = 0; i < numberString.length; i++) {
		const digit = parseInt(numberString[i])

		if (!isNaN(digit)) {
			convertedString += persianDigits[digit]
		} else {
			convertedString += numberString[i]
		}
	}

	return convertedString
}
