import {Routes} from '@angular/router';
import {ReadArticleComponent} from './read-article/read-article.component';

export const routes: Routes = [
  // {path: 'articles', component: ReadArticleComponent},
  {path: 'articles/:id', component: ReadArticleComponent}
];
