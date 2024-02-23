import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Recipe } from './types/recipe';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  getTheme(id: string) {
    const {apiUrl} = environment;
    return this.http.get<Recipe>(`${apiUrl}/data/recipes/${id}`);
  }

  getThemes() {
    const {apiUrl} = environment;
    return this.http.get<Recipe[]>(`${apiUrl}/data/recipes`);
  }

  getPost(id: string) {
    const {apiUrl} = environment;
    return this.http.get<Post>(`${apiUrl}/posts/${id}`);
  }

  getPosts() {
    const {apiUrl} = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts`);
  }

  createTheme(themeName: string, postText: string) {
    return this.http.post<Recipe>('http://localhost:3030/data/recipes', {themeName, postText});
  }
  
}
