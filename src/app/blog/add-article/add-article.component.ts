import {Component, OnInit} from '@angular/core';
import {conf} from './../editor-conf';
import {BlogService} from '../blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../model/Article';
import {of} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  conf = conf;
  editor;
  file: File = null;
  article = new Article();

  constructor(private blogService: BlogService, private ar: ActivatedRoute, private router: Router, private title: Title) {
    conf.images_upload_handler = (b, s, f) => {
      this.blogService.postImage(b, s, f);
    };

    this.title.setTitle('Rédiger un article | ' + environment.base_title);
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
      .then((a) => {
        console.log(a);
        let promise;
        const content = this.editor.getContent();
        const plainContent = this.editor.getContent({format: 'text'});
        this.article.sample = plainContent.slice(0, 245);
        if (this.article.id) {
          promise = this.blogService.putArticle(this.article.id, this.article.title, content, this.article.sample);
        } else {
          promise = this.blogService.postArticle(this.article.title, content, this.article.sample);
        }

        promise.subscribe(article => {
          this.article = article;
          this.uploadImage().subscribe(() => {
            this.router.navigate(['/articles/' + article.id]);
          });
        });
      });
    return;
  }

  uploadImage() {
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file);

      return this.blogService.patchArticleIllustration(this.article.id, formData);
    } else {
      return of({});
    }
  }

  onFileChanged(event) {
    if (event.target.files.length === 0) {
      console.log('No file selected!');
      this.file = null;
      return;
    }

    this.file = event.target.files[0];
  }
}
