import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], order: string): any[] {
    if (!items || !order) {
      return items;
    }
    if (order === 'asc') {
      return items.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      return items.sort((a, b) => b.price - a.price);
    }
    return items; // added return statement 
  }
}

