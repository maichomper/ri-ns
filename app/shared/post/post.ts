export class Post {
	constructor(
		public id: number, 
		public title: string, 
		public tema: string,
		public autor: string,
		public imageUrl: string, 
		public content: string,
		public excerpt: string, 
		public date: string
	){}
}