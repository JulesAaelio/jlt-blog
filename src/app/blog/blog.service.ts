import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Article} from './model/Article';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {
  }

  postArticle(title, content, sample) {
    return this.http.post<Article>(environment.rest_end_point + '/articles', {
      title,
      content,
      sample
    });
  }

  patchArticleIllustration(id, formData) {
    return this.http.patch<Article>(environment.rest_end_point + '/articles/' + id + '/illustration', formData);
  }

  putArticle(id, title, content, sample) {
    return this.http.put<Article>(environment.rest_end_point + '/articles/' + id, {
      title,
      content,
      sample
    });
  }

  getArticle(id) {
    return this.http.get<Article>(environment.rest_end_point + '/articles/' + id);
  }

  getArticles() {
    return this.http.get<Article[]>(environment.rest_end_point + '/articles');
  }

  postImage(blobInfo, success, failure) {
    const formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());
    console.log('caca');
    this.http.post(environment.rest_end_point + '/articles/images', formData).subscribe(response => {
      success(environment.rest_end_point + '/' + response['location']);
    }, error => {
      failure(error);
    });

  }

  getUserInformations() {
    return this.http.get(environment.resume_rest_end_point + '/cvs/' + environment.default_resume);
  }
}
