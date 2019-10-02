import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  pure: true
})
export class PhoneFormatPipe implements PipeTransform {

  countryPatterns = {
    'czech republic': '+420-3-3-3',
    'swiss': '+41-2-3-4',
    'montenegro': '+380-2-3-3',
    'italy': '+39-2-3-3-2'
  };

  transform(phone: string, country: string, separator: string = ' ', parentheses: boolean = false): string {

    const countryPhonePattern: string = this.countryPatterns[country.toLowerCase()];
    const splitedPhone = phone.split('');
    const patternParts: string [] = countryPhonePattern.split('-');
    const result: string [] = [];
    patternParts.forEach((part, index, array) => {
      if (index === 0) {
        result.push(splitedPhone.splice(0, part.length).join(''));
        return;
      }
      if (index === 1 && parentheses) {
        result.push(`(${splitedPhone.splice(0, +part).join('')})`);
        return;
      }
      result.push(splitedPhone.splice(0, +part).join(''));
    });
    return result.join(separator);
  }

}
