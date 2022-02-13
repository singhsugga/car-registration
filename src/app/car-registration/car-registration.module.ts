import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRegistrationComponent } from './car-registration/car-registration.component';
import { RouterModule } from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { OptionComponent } from './components/option/option.component';
import { SearchPipe } from './components/search.pipe';
import {HttpClientModule} from '@angular/common/http';
import {SanitizeHtmlPipe } from './components/pipes/sanatize-html.pipe'




@NgModule({
  declarations: [
    CarRegistrationComponent,
    SelectComponent,
    OptionComponent,
    SearchPipe,
    SanitizeHtmlPipe
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path:'',
      component:CarRegistrationComponent
    }])
  ]
})
export class CarRegistrationModule { }
