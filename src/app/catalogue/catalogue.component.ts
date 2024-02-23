import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Recipe } from '../types/recipe';
import { Post } from '../types/post';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit{

  recipeList: Recipe[] = [];
  postsList: Post[] = [];

  isLoading: boolean = true;
  thereAreNoThemes: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (recipes) => {
        console.log({recipes});
        this.recipeList = recipes;
        this.isLoading = false;
        if (this.recipeList.length === 0) {
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
