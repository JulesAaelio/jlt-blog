import {Routes} from '@angular/router';
import {ReadArticleComponent} from './read-article/read-article.component';
import {BlogLandingComponent} from './blog-landing/blog-landing.component';

export const routes: Routes = [
  {path: '', component: BlogLandingComponent},
  {path: 'articles/:id', component: ReadArticleComponent}
];
