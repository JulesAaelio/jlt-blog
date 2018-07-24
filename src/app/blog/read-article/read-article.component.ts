import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../model/Article';
import {Meta, Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.css']
})
export class ReadArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(private blogService: BlogService, private ar: ActivatedRoute, private meta: Meta, private title: Title) {
  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.blogService.getArticle(params.id).subscribe(article => {
        this.article = article;
        this.meta.addTag({name: 'author', content: 'Jules LAURENT'});
        this.meta.addTag({property: 'og:image', content: this.getIllustrationAddress()});
        this.meta.addTag({property: 'og:title', content: this.article.title});
        this.meta.addTag({property: 'og:type', content: 'blog'});
        this.title.setTitle(this.article.title + this.title.getTitle());
      });
    });
  }

  getIllustrationAddress() {
    return environment.rest_end_point + '/' + this.article.illustration;
  }
}
