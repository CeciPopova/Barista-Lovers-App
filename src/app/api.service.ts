import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  getTheme(id: string) {
    const {apiUrl} = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  getThemes() {
    const {apiUrl} = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getPost(id: string) {
    const {apiUrl} = environment;
    return this.http.get<Post>(`${apiUrl}/posts/${id}`);
  }

  getPosts() {
    const {apiUrl} = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts`);
  }


}
