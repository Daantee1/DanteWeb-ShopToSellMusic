import { Component, Output } from '@angular/core';
import { Music } from '../../types/music';
import { CommonModule } from '@angular/common';
import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SortService } from '../../services/sort.service';

import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-music-all',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './music-all.component.html',
  styleUrl: './music-all.component.scss'
})
export class MusicAllComponent {

  isLogged = false;

 

musicList: Music[] = [
  {id: 1,
    name: 'Central Cee Type Beat - Obsessed with you',
  priceB: 150,
  priceE: 300,
  shortLink: 'yE7CxleNmaA',
  date: new Date('2024-01-16'),
  musicLicense: null,
  addedToCart: false},
  {id: 2,
    name: 'Guitar x Drake Type Beat - Gitarka',
  priceB: 170,
  priceE: 320,
  shortLink: 'S3GAWQwBZZ0',
  date: new Date('2024-01-15'),
  musicLicense: null,
  addedToCart: false},
  {id: 3,
    name: 'Rage Type Beat - HypnoRage',
  priceB: 100,
  priceE: 200,
  shortLink: 'bytT-ECj92c',
  date: new Date('2024-01-14'),
  musicLicense: null,
  addedToCart: false},
  {id: 4,
    name: 'Lil Uzi Vert x Lil Yachty - Rage',
  priceB: 200,
  priceE: 400,
  shortLink: 'uWsLaSCI6Ik',
  date: new Date('2024-01-13'),
  musicLicense: null,
  addedToCart: false},
  {id: 5,
    name: 'Rich Amiri Type Beat - Bitter Candy',
  priceB: 100,
  priceE: 200,
  shortLink: '-fq1wIr5k60',
  date: new Date('2024-01-18'),
  musicLicense: null,
  addedToCart: false},
  {id: 6,
    name: 'Trap Type Beat x 808 - White Lotus',
  priceB: 80,
  priceE: 160,
  shortLink: 'EULEQ7F_rwk',
  date: new Date('2024-01-18'),
  musicLicense: null,
  addedToCart: false},
  {id: 7,
    name: 'Chłopaki z Baraków Type Beat - Porpan Butan',
  priceB: 60,
  priceE: 120,
  shortLink: 'fuJL9GsLINg',
  date: new Date('2024-01-18'),
  musicLicense: null,
  addedToCart: false},
  {id: 8,
    name: 'PRO8L3M x Avi TYPE BEAT - AMG',
  priceB: 120,
  priceE: 240,
  shortLink: 'zZ2kCHyNFFs',
  date: new Date('2024-01-18'),
  musicLicense: null,
  addedToCart: false},
  {id: 9,
    name: 'Drum and Bass x Rage Type Beat - New Type Beat',
  priceB: 100,
  priceE: 200,
  shortLink: '8wgfKdMAhXA',
  date: new Date('2024-01-18'),
  musicLicense: null,
  addedToCart: false},
  {id: 10,
    name: '2020 Label Type Beat x Oki x Young Igi - Club2020',
  priceB: 110,
  priceE: 210,
  shortLink: 'qRhFoqPU7To',
  date: new Date('2024-01-17'),
  musicLicense: null,
  addedToCart: false},
  {id: 11,
    name: 'Trap Type Beat x Western - Cowboy',
  priceB: 130,
  priceE: 260,
  shortLink: 'QhGoN9-pShw',
  date: new Date('2024-01-19'),
  musicLicense: null,
  addedToCart: false},
  {id: 12,
    name: 'NLE Choppa Type Beat - Shotta Flow',
  priceB: 110,
  priceE: 210,
  shortLink: 'hhMtW3pPQCU',
  date: new Date('2024-01-19'),
  musicLicense: null,
  addedToCart: false},
  {id: 13,
    name: 'Drill Type Beat x Mata - Rodzinny biznes',
  priceB: 110,
  priceE: 210,
  shortLink: 'EffZxQJc8mY',
  date: new Date('2024-01-19'),
  musicLicense: null,
  addedToCart: false},
  {id: 14,
    name: 'Italian Guitar x Mafia Type Beat - Kiss Of Death"',
  priceB: 130,
  priceE: 260,
  shortLink: 'xGHJgTXLX4w',
  date: new Date('2024-01-19'),
  musicLicense: null,
  addedToCart: false},
  
]

constructor(private sanitizer: DomSanitizer, private sortService: SortService, private cartService: CartService, private auth: AuthService){
  
  this.sortService.sortType$.subscribe((sortType: string) => {
    this.onSortChanged(sortType);
  })
  this.auth.isLogged.subscribe((isLogged: boolean) => {
    this.isLogged = isLogged;
  })
 
}



getSafeUrl(shortLink: string): SafeResourceUrl {
  const url = `https://www.youtube.com/embed/${shortLink}`;
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

addToCart(music: any){
  let musicItem = {
    id: music.id,
    name: music.name,
    license: music.musicLicense
  }
  this.cartService.addToCart(musicItem);
  music.addedToCart = true
}

onSortChanged(sortType: string) {
  switch (sortType) {
    case 'new':
      this.musicList = this.sortService.sortByNew([...this.musicList]);
      break;
    case 'old':
      this.musicList = this.sortService.sortByOld([...this.musicList]);
      break;
    case 'low':
      this.musicList = this.sortService.sortByLow([...this.musicList]);
      break;
    case 'high':
      this.musicList = this.sortService.sortByHigh([...this.musicList]);
      break;
    default:
      break;
  }
}
}


