import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.css',
})
export class NewItemComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  newItemSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;
    this.apiService.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/themes']);
    });
  }
}