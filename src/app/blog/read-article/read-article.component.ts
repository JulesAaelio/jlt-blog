import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.css']
})
export class ReadArticleComponent implements OnInit {

  content = '<p></p>';

  constructor(private blogService: BlogService, private ar: ActivatedRoute) {
  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.blogService.getArticle(params.id).subscribe(article => {
        this.content = article.content;
      });
    });
  }

}
