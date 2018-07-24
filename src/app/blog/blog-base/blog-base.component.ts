import {AfterViewChecked, Component, OnInit} from '@angular/core';

// tinymce imports
import 'tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';

// prism imports :
// Note: we could use babel plugin
import 'prismjs';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-php';
import {Router} from '@angular/router';

declare var Prism: any;


@Component({
  selector: 'app-blog-base',
  templateUrl: './blog-base.component.html',
  styleUrls: ['./blog-base.component.css']
})
export class BlogBaseComponent implements OnInit, AfterViewChecked {

  isLanding = false;

  constructor(private router: Router) {
    this.isLanding = (this.router.url === '/');
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    Prism.highlightAll();
  }


}
