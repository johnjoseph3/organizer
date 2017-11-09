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

    updateGoal(event: any) {
      this.goal = event.target.value;
    }

    createGoal() {
        this.goalsService.createGoal(this.goal).subscribe(data => {
            this.goalsService.getGoals();
        })
    }
}
