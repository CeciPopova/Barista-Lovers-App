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
    const {appUrl} = environment;
    return this.http.get<Theme>(`${appUrl}/themes/${id}`);
  }

  getThemes() {
    const {appUrl} = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`);
  }

  getPost(id: string) {
    const {appUrl} = environment;
    return this.http.get<Post>(`${appUrl}/posts/${id}`);
  }

  getPosts() {
    const {appUrl} = environment;
    return this.http.get<Post[]>(`${appUrl}/posts`);
  }


}
