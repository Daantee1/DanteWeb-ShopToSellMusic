import { Injectable, Input } from '@angular/core';
import { Music } from '../types/music';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {
 
  sortedMusicList: Music[] = [];
  private sortType: BehaviorSubject<string> = new BehaviorSubject<string>('new');
  sortType$: Observable<string> = this.sortType.asObservable();

  constructor() { }

  sortByNew(musicList: any[]){
   this.sortedMusicList =  musicList.sort((a: any, b: any) => b.date.getTime() - a.date.getTime())
   return this.sortedMusicList
  }
  sortByOld(musicList: any[]){
    this.sortedMusicList = musicList.sort((a: any, b: any) => a.date.getTime()- b.date.getTime())
    return this.sortedMusicList
  }
  sortByHigh(musicList: any[]){
    this.sortedMusicList = musicList.sort((a: any, b: any) => b.priceB - a.priceB)
    return this.sortedMusicList
  }
  sortByLow(musicList: any[]){
    this.sortedMusicList = musicList.sort((a: any, b: any) => a.priceB - b.priceB)
    return this.sortedMusicList
  }


  setSortType(sortType: string) {
    this.sortType.next(sortType);
  }
}
