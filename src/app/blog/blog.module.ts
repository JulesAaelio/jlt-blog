import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article/add-article.component';
import { BlogBaseComponent } from './blog-base/blog-base.component';
import {RouterModule} from '@angular/router';
import {EditorModule} from '@tinymce/tinymce-angular';
import {FormsModule} from '@angular/forms';
import {ReadArticleComponent} from './read-article/read-article.component';
import {BlogLandingComponent} from './blog-landing/blog-landing.component';
import {ArticleCardComponent} from './article-card/article-card.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditorModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AddArticleComponent,
    BlogBaseComponent,
    ReadArticleComponent,
    BlogLandingComponent,
    ArticleCardComponent
  ],
  exports: [
    BlogBaseComponent
  ]
})
export class BlogModule { }
