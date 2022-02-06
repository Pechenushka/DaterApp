export class Helper{
	static pointsTextArray = ['точка', 'точки', 'точок'];
	static pronunciation(count: number, txtArr: Array<string>) {
		let cases = [2, 0, 1, 1, 1, 2];
		return txtArr[
			count % 100 > 4 && count % 100 < 20
				? 2
				: cases[count % 10 < 5 ? count % 10 : 5]
			];
	}
}

export function numberWithSpaces(x:string) {
	if (x !== undefined) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	} else {
		return x
	}
}

export  function dateMoreThenToday(date:any){
	return new Date().getTime() < date.getTime();
}
