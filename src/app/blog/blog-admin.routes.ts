import {Routes} from '@angular/router';
import {AddArticleComponent} from './add-article/add-article.component';

export const routes: Routes = [
  {path: 'add', component: AddArticleComponent},
  {path: 'articles/:id', component: AddArticleComponent}
];
