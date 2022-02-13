import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any[],searchKey:string): any[] {

    if(searchKey && searchKey.length > 0){
      searchKey = searchKey.toLowerCase();
      return value.filter((item:any)=>{
        if(item.toLowerCase().includes(searchKey)){
          return item;
        }
      })
    }

    return value;
  }

}
