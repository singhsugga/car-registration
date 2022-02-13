import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  providers: [CONTROL_ACCESSOR]
})

export class SelectComponent implements OnInit {

  private onTouch!: Function;
  private onModelChange!: Function;

  registerOnTouched(fn:Function) {
    this.onTouch = fn;
  }
  
  registerOnChange(fn:Function) {
    this.onModelChange = fn;
  }
  
  writeValue(value:any) {
    this.value = value || [];
  }

  optionList!: ElementRef;
  isDropDownVisible = false;
  
  //These variables are used for positioning
  getTop!: number;
  getLeft: any;
  getWidth: any;
  maxWidth!: number;

  searchKey !:any;
  @Input() multiple = false;
  @Input() placeholder = "Select"
  value : any= []
  constructor() { }
  @ViewChild('optionList') set content(content: ElementRef) {
    if (content) {
      // initially setter gets called with undefined
      this.optionList = content;
    }
  }
  ngOnInit(): void {
  }
  openDropdown(event: any): void {
   this.searchKey = '';
    this.isDropDownVisible = true;
    setTimeout(() => {
      const dropdown = event.target.getBoundingClientRect();
      const selectOption = this.optionList.nativeElement.offsetHeight;
      if (dropdown.top + selectOption + 50 > window.innerHeight) {
        this.getTop = dropdown.top - selectOption;
      } else {
        this.getTop = dropdown.top + dropdown.height;
      }
      this.getLeft = dropdown.left;
      this.getWidth = dropdown.width;
      this.maxWidth = dropdown.width * 1.25;

    }, 10);
  }

  closeDropdown(){
    this.isDropDownVisible = false;
  }
 
//This method is responsible for selecting element
  addValue(val:string){
    if(this.multiple){
      this.value = [...new Set(this.value.concat(val))];
    }else{
      this.value = [val];
      this.isDropDownVisible = false;
    }
    this.onModelChange(this.value);
    this.onTouch();
     console.log(this.value);
  }
  removeValueFromCheckbox(val:any){
    if(this.multiple){
      this.value = this.value.filter((ele:any) => ele !== val);
    }else{
      //this.value = [];
      this.isDropDownVisible = false;
    }
    this.onModelChange(this.value);
    this.onTouch();
    
    console.log(this.value);
  }
}
