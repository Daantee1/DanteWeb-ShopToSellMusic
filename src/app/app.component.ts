import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SortComponent } from './components/sort/sort.component';
import { BeatPageComponent } from './components/beat-page/beat-page.component';
import { FormsModule } from '@angular/forms';
import { MusicAllComponent } from './components/music-all/music-all.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, HeaderComponent, FooterComponent, BeatPageComponent, RouterModule, FormsModule, MusicAllComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DanteInfoWeb';
  
}
