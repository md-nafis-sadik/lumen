//  time-ago.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {
    const now = new Date();
    const msgDate = new Date(value);
    const diffMs = now.getTime() - msgDate.getTime();
    const diffMinutes = Math.floor(diffMs / 60000);

    if (this.isToday(msgDate)) {
      if (diffMinutes < 1) return 'Just now';
      return `${diffMinutes} min${diffMinutes !== 1 ? 's' : ''} ago`;
    }
    return msgDate.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  }

  private isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }
}