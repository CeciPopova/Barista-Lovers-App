import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { Post } from '../types/post';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit{

  themesList: Theme[] = [];
  postsList: Post[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      console.log({themes});
      this.themesList = themes;
    })

    this.apiService.getPosts().subscribe((posts) => {
      console.log({posts});
      this.postsList = posts;
    })
    
  }
}
