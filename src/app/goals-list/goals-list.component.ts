import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {
    constructor(private goalsService: GoalsService) {}
    goals: any;

    ngOnInit() {
        this.goalsService.getGoals()
        this.goalsService.allGoals.subscribe(goals => this.goals = goals)
    }

}
