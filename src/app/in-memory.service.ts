
import {Team, Grade } from './data-model';
import {DataService } from './data.service';

export class InMemoryService  {
  service: DataService;
  teams: Team[];
  createDb() {
    const teams = this.service.getTeams();
    return {teams};
  }
}
