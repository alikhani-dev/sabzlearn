export function toFarsiNumber(n: number) {
	const farsiDigits: { [key: number]: string } = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

	return n.toLocaleString().replace(/\d/g, x => farsiDigits[parseInt(x)])
}
