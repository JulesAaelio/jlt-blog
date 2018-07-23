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

  postArticle(title, content) {
    return this.http.post<Article>(environment.rest_end_point + '/articles', {
      title,
      content
    });
  }

  getArticle(id) {
    return this.http.get<Article>(environment.rest_end_point + '/articles/' + id);
  }
}
