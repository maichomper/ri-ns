import { Routes } from '@angular/router';

import { HomeNewsComponent } from './home/home-news.component';

export const PagesRoutes: Routes = [
    {
      	path: '',
      	children: [ 
	      	{
	        	path: 'home',
	        	component: HomeNewsComponent
	      	}
		]
    }
];
