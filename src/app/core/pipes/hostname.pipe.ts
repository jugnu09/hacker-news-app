import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hostname'
})
export class HostnamePipe implements PipeTransform {

  transform(url: any, args?: any): any {
    return url ? new URL(url).hostname.replace('www.', '') : '';
  }

}