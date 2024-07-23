import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MatchesService],
})
export class HomeComponent {
  todayMatches?: Observable<any[]>;
  currentUser?: any;

  constructor(private matchesService: MatchesService) {}

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
    this.todayMatches = this.matchesService.getTodayMatches();
  }
}
