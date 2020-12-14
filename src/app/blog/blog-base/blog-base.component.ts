import {AfterViewChecked, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';

// // tinymce imports
// import 'tinymce';
// import 'tinymce/themes/modern/theme';
// import 'tinymce/plugins/paste';
// import 'tinymce/plugins/link';
// import 'tinymce/plugins/code';
// import 'tinymce/plugins/codesample';
// import 'tinymce/plugins/image';

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
import {BlogService} from '../blog.service';
import {isPlatformBrowser} from '@angular/common';

declare var Prism: any;


@Component({
  selector: 'app-blog-base',
  templateUrl: './blog-base.component.html',
  styleUrls: ['./blog-base.component.css']
})
export class BlogBaseComponent implements OnInit, AfterViewChecked {

  isLanding = false;
  sidebarData = {};
  constructor(private router: Router, private blogService: BlogService, @Inject(PLATFORM_ID) private platformId: string) {
    this.isLanding = (this.router.url === '/blog');
    console.log(this.isLanding);
  }

  ngOnInit() {
    this.blogService.getUserInformations().subscribe(informations => {
      this.sidebarData = informations;
    });
  }

  ngAfterViewChecked(): void {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }


}
