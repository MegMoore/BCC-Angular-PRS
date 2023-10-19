import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {

  transform(bool: boolean, locale: string = "en"): string {
    if(locale === 'fr')
      return bool ? "Yes" : "No";
    return bool ? "Oui" : "Non";
  }

}
