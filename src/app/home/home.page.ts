import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  placeList;

  constructor( public dataService: DataService ) { }

  ngOnInit() {

    this.dataService.getPlaceList().subscribe((data: any) => {
      this.placeList = data;
    });

  }

}
