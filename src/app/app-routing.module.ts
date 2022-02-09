import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './static/layout/layout.component';
import { LoginComponent } from './static/login/login.component';

const routes: Routes = [
  {
   path: 'login',
   component:LoginComponent
  },
  {path: '**',redirectTo: 's1/404'},
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  
  {
    path:'am',
    component: LayoutComponent,
    children:[
      {
        path:'',
        loadChildren:() => import('./Base/inventory/inventory.module').then(m=>m.InventoryModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
