import{ News } from './news';

export class EspecialNews extends News {
	public posts: Array<any>;
	
	constructor(id: number, title: string, imageUrl: string, section: string, posts: Array<any>){
		super(id, title, '', '', imageUrl,  '', '',  '', '', '', '', section, 1);
		this.posts = posts;
	}
}