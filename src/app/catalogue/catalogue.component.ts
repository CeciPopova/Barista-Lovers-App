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

  isLoading: boolean = true;
  thereAreNoThemes: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        console.log({themes});
        this.themesList = themes;
        this.isLoading = false;
        if (this.themesList.length === 0) {
          this.thereAreNoThemes = true
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`)
      }
    })

    // this.apiService.getPosts().subscribe({
      // next: (posts) => {
        // console.log({posts});
        // this.postsList = posts;
        // this.isLoading = false;
      // },
      // error: (err) => {
        // this.isLoading = false;
        // console.error(`Error: ${err}`)
      // }
    // })
    
  }
}
