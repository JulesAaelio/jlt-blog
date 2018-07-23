import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article/add-article.component';
import { BlogBaseComponent } from './blog-base/blog-base.component';
import {RouterModule} from '@angular/router';
import {EditorModule} from '@tinymce/tinymce-angular';
import {FormsModule} from '@angular/forms';
import { ReadArticleComponent } from './read-article/read-article.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditorModule,
    FormsModule
  ],
  declarations: [
    AddArticleComponent,
    BlogBaseComponent,
    ReadArticleComponent
  ],
  exports: [
    BlogBaseComponent
  ]
})
export class BlogModule { }
