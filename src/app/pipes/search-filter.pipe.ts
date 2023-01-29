import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, prop: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;
    searchTerm = searchTerm.toLowerCase();
    return items.filter(it => {
      // return String(it[prop]).toLowerCase().startsWith(searchTerm)
      return String(it[prop]).toLowerCase().includes(searchTerm)
    });
  }
}
