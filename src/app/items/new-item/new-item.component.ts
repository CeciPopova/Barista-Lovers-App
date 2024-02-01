import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.css'
})
export class NewItemComponent {


  newItemSubmitHandler(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }
}
