import { Component } from '@angular/core';
import { SortComponent } from '../sort/sort.component';
import { MusicAllComponent } from '../music-all/music-all.component';

@Component({
  selector: 'app-beat-page',
  standalone: true,
  imports: [SortComponent, MusicAllComponent],
  templateUrl: './beat-page.component.html',
  styleUrl: './beat-page.component.scss'
})
export class BeatPageComponent {



}
