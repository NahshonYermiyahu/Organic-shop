import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthLimit'
})
export class LengthLimitPipe implements PipeTransform {

  transform(value: string, arg?: number): string {
    if (!value) {
      return null;
    }
    const limit = arg ? arg : 12;
    return value.substr(0, limit);
  }

}
