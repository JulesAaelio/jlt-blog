import { Component, OnInit } from '@angular/core';
import {conf} from './../editor-conf';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  conf = conf;
  title;
  content;
  editor;

  constructor(private blogService: BlogService) {
  }
  ngOnInit() {
  }

  uploadArticle() {
    this.editor
      .uploadImages()
      .then(
        this.blogService.postArticle(this.title, this.content)
          .subscribe()
      );
    return;
  }
}
