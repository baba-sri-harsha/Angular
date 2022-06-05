import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'design'
})
export class DesignPipe implements PipeTransform {

  transform(value: string,type?:string): string {
    if(type=="lowercase") 
      return `****${value.toLowerCase()}!!!`
    else if(type=="uppercase")
      return `****${value.toUpperCase()}!!!`
    else
      return `****${value}!!!`
  }

}
