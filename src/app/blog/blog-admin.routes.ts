import {Routes} from '@angular/router';
import {AddArticleComponent} from './add-article/add-article.component';

export const routes: Routes = [
  {path: 'articles/add', component: AddArticleComponent},
  {path: 'articles/:id', component: AddArticleComponent}
];
