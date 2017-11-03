import{ News } from './news';

export class ColumnaNews extends News {
	public columna: string;
	
	constructor(id: number, title: string, tema:string, author:string, imageUrl: string, excerpt:string, date:string, readingTime:string, section: string, columna: string){
		super(id, title, tema, author, imageUrl,  '', excerpt,  date, readingTime, '', '', section, 1, '');
		this.columna = columna;
	}
}