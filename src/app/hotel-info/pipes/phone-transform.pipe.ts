import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'phoneTransform'
})
export class PhoneTransformPipe implements PipeTransform{

  countryPatterns = {
    'czech republic': '+420-3-3-3',
    'swiss': '+41-2-3-4',
    'montenegro': '+382-2-3-3',
    'italy': '+39-2-3-3-2',
    'israel': '+972-1-3-4',
    'germany': '+49-2-4-4',
    'ukraine': '+38-2-3-4'
  };

  transform(phoneNumber: string, country: string, separator: string = ' ', parentheses: boolean): any {
    let pattern = this.countryPatterns[country.toLowerCase()];
    let result = [];
    let splitted = phoneNumber.split('');
    pattern.split('-').forEach((partSize,index) => {
      if(index === 0){
        result.push(splitted.splice(0,partSize.length).join(''));
      }
      else if(index === 1 && parentheses){
        result.push(`(${splitted.splice(0,partSize).join('')})`);
      }
      else{
        const part = splitted.splice(0,partSize).join('');
        result.push(part);
      }
    });
    return result.join(separator);
  }
}
