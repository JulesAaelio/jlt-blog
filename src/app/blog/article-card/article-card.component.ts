import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../model/Article';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: Article = new Article();

  constructor() {
  }

  ngOnInit() {
  }

  getIllustrationAddress() {
    return environment.rest_end_point + '/' + this.article.illustration;
  }

}
