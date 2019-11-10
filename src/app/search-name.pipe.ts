import { Pipe, PipeTransform } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {
      args = args.toLowerCase();
    }

    let filterData = [];
    for (let emp of value) {
      let name = emp.firstName + ' ' + emp.lastName;
      if (name.toLowerCase().startsWith(args)) {
        filterData.push(emp);
      }
    }

    return filterData;
  }
}
