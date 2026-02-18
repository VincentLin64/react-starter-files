// 每一個檔案只能一個預設匯出
export default {
	myName: 'default',
	fn() {
		console.log('My name is ' + this.myName);
	}
};

// 具名匯出：每個檔案能有多個具名匯出
export const myName = 'default';
export function fn() {
	console.log('My name is ' + myName);
}
