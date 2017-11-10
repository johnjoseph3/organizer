import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class GoalsService {

  constructor(private http: HttpClient) { }
  private goalsSource = new BehaviorSubject<any>([])
  allGoals = this.goalsSource.asObservable()

  getGoals() {
    return this.http.get('/api/goals').subscribe(data => {
        this.goalsSource.next(data)
    });
  }

  createGoal(goal: string) {
    this.http.post('/api/goals', { goal }).subscribe(data => this.getGoals())
  }

  deleteGoal(id: string) {
    this.http.delete(`/api/goals/${id}`).subscribe(data => this.getGoals())
  }

}
