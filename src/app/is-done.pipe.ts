import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isDone'
})
export class IsDonePipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    return values.filter((item) => item.done);
  }

}