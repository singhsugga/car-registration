import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarRegistrationService } from '../services/car-registration.service';

@Component({
  selector: 'app-car-registration',
  templateUrl: './car-registration.component.html',
  styleUrls: ['./car-registration.component.less']
})
export class CarRegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private carService: CarRegistrationService) { }
  carForm !: FormGroup;
  carList: string[] = [];
  partsList: string[] = [];
  previewMessage !:string;
  ngOnInit(): void {
    this.carForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(75), Validators.pattern('^[a-zA-Z ]+$')]],
      model: [[]],
      parts: [[]],
      color: [''],
    });

    this.getCarList();
    this.getPartsList();
    this.onChanges();
  }

  getCarList(){
    this.carService.fetchCars().subscribe({
      next: (cars: any) => {
        if (cars.length) {
          this.carList = cars.map((car: any) => car?.brand)
        }
      }
    })
  }

  getPartsList(){
    this.carService.fetchParts().subscribe({
      next: (parts: any) => {
        if (parts.length) {
          this.partsList = parts.map((part: any) => part['List of auto parts'])
        }
      }
    })
  }
  onChanges(): void {
    this.carForm.valueChanges.subscribe(val => {
      let message = '';
      if(val?.name?.trim()?.length){message +=`<b>Car Name:</b> ${val.name}`};
      if(val?.model?.length){message +=`<br><b>Car Model:</b> ${val.model.join()}`}
      if(val?.parts?.length){message +=`<br><b>Selected Parts:</b> ${val.parts.join(', &nbsp;')}`}
      if(val?.color?.trim()?.length){message +=`<br><b>Car Color<b>: <input disabled type ="color" value="${val?.color}"/>`}
      this.previewMessage = message;
    });
  }
 
  saveCar(car:any){
    console.log(car?.value)
  }


}
