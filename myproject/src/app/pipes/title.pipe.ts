import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  
   
    transform(value: string, gender?: string): string {

      let result :string=''
      if(gender == 'f'){return result = 'Ms.'+value}
      if(gender == 'm'){return result ='Mr.'+value}
  
      if(gender) result = value;
      return result
  
  
  }
  
}

