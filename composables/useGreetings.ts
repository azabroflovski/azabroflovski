import { randomNumber } from '~/utils/number'

export function useGreetings() {
	const greetings = ref('Hello')
	const list = [
		'Hello',
		'Привет',
		'Hola',
		'Bonjour',
		'Hallo',
		'Ciao',
		'Olá',
		'你好',
		'こんにちは',
		'안녕하세요',
		'مرحبا',
		'Merhaba',
		'Γειά σου',
		'Hallo',
		'Hej',
		'Hei',
		'Halo',
		'Xin chào',
		'Salom'
	]

	return {
		greetings,
		updateGreetings() {
			const index = randomNumber(0, list.length - 1)
			greetings.value = list[index]
		}
	}
}
