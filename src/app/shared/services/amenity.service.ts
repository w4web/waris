import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmenityService {

  public placeList;
  public placeList$ = new Subject<string>();

  constructor(private http: HttpClient) {
    this.init();
  }

  serveIt(): any {
    this.placeList$.next(JSON.parse(localStorage.getItem('places')));
  }

  init(): any {
    this.http.get<any>('./assets/placeList.json').subscribe((data) => {
      this.placeList = data;
      this.load();
      this.serveIt();
    })
  }

  load(): any {
    if (localStorage.getItem('places') === null || localStorage.getItem('places') == undefined) {
      localStorage.setItem('places', JSON.stringify(this.placeList));
    }
  }

  add(place): any {
    let places = JSON.parse(localStorage.getItem('places'));
    places.push(place);
    localStorage.setItem('places', JSON.stringify(places));
    this.serveIt();
  }

  remove(name) {
    let places = JSON.parse(localStorage.getItem('places'));
    for (let i = 0; i < places.length; i++) {
      if (places[i].name == name) {
        places.splice(i, 1);
      }
    }
    localStorage.setItem('places', JSON.stringify(places));
    this.serveIt();
  }

}
