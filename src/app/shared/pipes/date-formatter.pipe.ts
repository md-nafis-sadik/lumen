// date-formatter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter',
  standalone: true
})
export class DateFormatterPipe implements PipeTransform {
  transform(value: Date): string {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const inputDate = new Date(value);
    inputDate.setHours(0, 0, 0, 0);

    const diff = today.getTime() - inputDate.getTime();
    const dayDiff = Math.floor(diff / (1000 * 3600 * 24));

    if (dayDiff === 0) return 'Today';
    if (dayDiff === 1) return 'Yesterday';
    return inputDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }
}
