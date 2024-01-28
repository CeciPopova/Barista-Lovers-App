import { Component, OnInit } from '@angular/core';
import { Theme } from '../../types/theme';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../types/post';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css',
})
export class ItemDetailsComponent implements OnInit {
  theme: Theme | undefined;
  post: Post | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }
  ngOnInit(): void {
    this.fetchTheme();
  }

  fetchPost(): void {
    const id = this.activatedRoute.snapshot.params['postId'];
    this.apiService.getPost(id).subscribe((post) => {
      this.post = post;
      console.log(post);
    });
  }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];

    this.apiService.getTheme(id).subscribe((theme) => {
      this.theme = theme;
      console.log(theme);
    });
  }
}
