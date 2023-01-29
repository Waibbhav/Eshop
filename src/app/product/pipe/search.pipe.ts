import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filterstring: any) {
    if (value === 0) {
      return value;
    }
    
    else {
      return value?.filter((search: any) => {
        return (
          search.name.toLowerCase().indexOf(filterstring.toLowerCase()) > -1
        );
      });
    }
  }

}
