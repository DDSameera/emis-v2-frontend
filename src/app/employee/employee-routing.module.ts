import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from "./create/create.component";
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";
import {ViewComponent} from "./view/view.component";

// const childRoutes: Routes = [
//
//
//
// ]

const routes: Routes = [

  {
    path: '',
    component: ListComponent,

  },
  {
    path: 'list',
    component: ListComponent,

  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
