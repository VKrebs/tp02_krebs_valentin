import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(tel: string): string {
    if (tel == null) return tel;

    let cleaned:string = tel.trim().replace(/\s/g, '');

    let holder:string[] = [];

    for (let i = 0; i < cleaned.length; i+=2)
    {
      holder.push(cleaned.substring(i, i+2));
    }

    let res:string = holder.join(' ');

    return res;
  }
}
