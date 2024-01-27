import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AuthActivate } from '../core/guargs/auth.activate';

const routes: Routes = [
  {
    path: 'item-details',
    component: ItemDetailsComponent
  },
  {
    path: 'new-item',
    component: NewItemComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'edit-item',
    component: EditItemComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
 
