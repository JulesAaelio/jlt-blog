import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {Article} from '../model/Article';

@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.css']
})
export class BlogLandingComponent implements OnInit {

  articles: Article[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

}
