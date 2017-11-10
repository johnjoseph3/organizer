import { Component, Output } from '@angular/core';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.css']
})
export class NewGoalComponent {
    constructor(private goalsService: GoalsService) {}
    goal: any;

    onSubmit({ value, valid }: { value: any, valid: boolean }) {
        if (!valid) return
        this.goalsService.createGoal(value.goal);
    }
}
