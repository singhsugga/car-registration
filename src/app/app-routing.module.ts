import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
   redirectTo:'car-registration',
  pathMatch:'full'},
  {
    path:'car-registration',
    loadChildren: () => import('./car-registration/car-registration.module').then(module => module.CarRegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
