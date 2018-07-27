import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {Article} from '../model/Article';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.css']
})
export class BlogLandingComponent implements OnInit {

  articles: Article[];

  constructor(private blogService: BlogService, private title: Title) {
    this.title.setTitle('Tout les articles' + ' | ' + environment.base_title);
  }

  ngOnInit() {
    this.blogService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

}
