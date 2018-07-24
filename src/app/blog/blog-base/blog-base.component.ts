import {AfterViewChecked, Component, OnInit} from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'app-blog-base',
  templateUrl: './blog-base.component.html',
  styleUrls: ['./blog-base.component.css']
})
export class BlogBaseComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    Prism.highlightAll();
  }


}
