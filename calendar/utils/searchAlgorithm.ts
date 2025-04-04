import { FictiveCalendarCalendarSystemMap } from '../types/fictiveCalendarCalendarSystemMap';
import DateResponse from '../types/dateResponse';

export default function returnWeekday(day: number, month: number, year: number) {
  
    //Determine what calender "type" is used (Gregorian, Julian or fictive)
    if (year < 1582) {
        // Julian calendar
        return "Julian";
    } else if (year > 1582) {
        // Gregorian calendar
        return 
    }
}