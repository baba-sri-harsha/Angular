import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arrays: any[], propertyName: string, choice: string): any[] {
    if (choice == '') {
      return arrays;
    }

    let resultArray: any = [];

    for (const arr of arrays) {
      console.log(arr);
      let type = arr[propertyName];
      console.log(type);
      if (isNaN(type)) {
        if (type.toLowerCase() == choice.toLowerCase()) {
          resultArray.push(arr);
        }
      }
      if (!isNaN(type)) {
        // let num = parseInt(type)
        if (parseInt(type) <= parseInt(choice)) {
          resultArray.push(arr);
        }
      }
    }
    return resultArray;
  }
}
