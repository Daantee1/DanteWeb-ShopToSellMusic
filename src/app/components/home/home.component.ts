import { Component } from '@angular/core';
import { SortComponent } from '../sort/sort.component';
import { MusicComponent } from '../music/music.component';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SortComponent, MusicComponent]
})
export class HomeComponent {

}
