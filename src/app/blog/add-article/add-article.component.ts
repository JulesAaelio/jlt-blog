import { Component, OnInit } from '@angular/core';
import {conf} from './../editor-conf';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  conf = conf;
  content;
  constructor() { }
  ngOnInit() {
  }

}
