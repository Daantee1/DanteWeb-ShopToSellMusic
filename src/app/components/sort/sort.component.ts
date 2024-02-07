import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss'
})
export class SortComponent {



  constructor(private sortService: SortService) { }

  byNew: boolean = true;
  byOld: boolean = false;
  byLow: boolean = false;
  byHigh: boolean = false;

  byNewSort(){
      this.byNew = true
      this.byOld = false;
      this.byLow = false;
      this.byHigh = false;
      this.sortService.setSortType('new');
  }
  byOldSort(){
      this.byOld = true;
      this.byNew = false;
      this.byLow = false;
      this.byHigh = false;
      this.sortService.setSortType('old');
  }
  byLowSort(){
      this.byLow = true;
      this.byNew = false;
      this.byOld = false;
      this.byHigh = false;
      this.sortService.setSortType('low');
  }
  byHighSort(){
      this.byHigh = true;
      this.byNew = false;
      this.byOld = false;
      this.byLow = false;
      this.sortService.setSortType('high');
  }

}
