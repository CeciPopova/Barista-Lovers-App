import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { AuthActivate } from '../core/guargs/auth.activate';
import { CatalogueComponent } from '../catalogue/catalogue.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CatalogueComponent,
      },
      {
        path: ':themeId',
        component: ItemDetailsComponent,
      },
    ],
  },

  {
    path: 'add-theme',
    component: NewItemComponent,
    canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
