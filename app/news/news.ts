export class News {
	constructor(
		public id: number, 
		public title: string, 
		public tema: string,
		public author: string,
		public imageUrl: string, 
		public content: string,
		public excerpt: string, 
		public date: string,
		public reading_time: string,
		public hierarchy: string,
		public type: string,
		public section: string,
		public position: number
	){}
}