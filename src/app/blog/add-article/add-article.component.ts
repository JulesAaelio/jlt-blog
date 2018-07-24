import {Component, OnInit} from '@angular/core';
import {conf} from './../editor-conf';
import {BlogService} from '../blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../model/Article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  conf = conf;
  editor;
  article = new Article();

  constructor(private blogService: BlogService, private ar: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      if (params.id) {
        this.blogService.getArticle(params.id).subscribe(article => {
          this.article = article;
        });
      }
    });
  }

  uploadArticle() {
    this.editor
      .uploadImages()
      .then(() => {
        let promise;
        if (this.article.id) {
          promise = this.blogService.putArticle(this.article.id, this.article.title, this.article.content);
        } else {
          promise = this.blogService.postArticle(this.article.title, this.article.content);
        }

        promise.subscribe(article => {
          this.router.navigate(['/articles/' + article.id]);
        });
      });
    return;
  }
}
