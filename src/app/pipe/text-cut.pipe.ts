import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCut',
  standalone: true
})
export class TextCutPipe implements PipeTransform {

  transform(value : string , limit : number =10 , overflow: string ="..."): unknown {
   if(!value) return '';
   return value.length > limit ? value.substring(0, limit) + overflow : value
  }

}
