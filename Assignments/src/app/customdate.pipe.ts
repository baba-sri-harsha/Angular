import { LocalizedString } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {

  transform(date: string, type?:string): number|string|object{
    let date1: Date = new Date(date);
    
    if (type == 'month') 
      return (date1.getMonth()+1);
    else if(type=="date")
      return date1
    else if(type=="year")
      return date1.getFullYear().toLocaleString();
    else if(type=="day")
      return date1.getDay().toLocaleString();
    else if(type=="time")
      return `${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`
    else if(type=="monthName")
      return date1.toLocaleString('default',{month:'long'}) 
    else if(type=="dayName"){
      return date1.toLocaleString('en-us', {weekday: 'long'});
    }else return `${date1.getDay()}/${date1.toLocaleString('default',{month:'long'}) }/${date1.getFullYear()}`
    
       

  }

}
