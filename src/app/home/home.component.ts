import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  startTime: string = '';
  endTime: string = '';
  timeDifference: string = '';

  calculateTimeDifference() {
    if (!this.startTime || !this.endTime) {
      this.timeDifference = 'Please select both start and end times';
      return;
    }

    const [startHours, startMinutes] = this.startTime.split(':').map(Number);
    const [endHours, endMinutes] = this.endTime.split(':').map(Number);

    // Calculate total minutes
    let totalMinutes = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);

    // Handle negative result (end time past midnight)
    if (totalMinutes < 0) {
      totalMinutes += 1440; // 24 hours * 60 minutes
    }

    // Calculate hours and minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    this.timeDifference = `${hours} hour${hours !== 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }
}
