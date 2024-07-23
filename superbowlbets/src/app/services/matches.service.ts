import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private http: HttpClient) {}

  public getTodayMatches() {
    return this.http.get<any[]>(`http://localhost:3000/todayMatches`);
  }
}
