import { Component, OnInit } from '@angular/core';
import { AmenityService } from '../shared/services/amenity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  placeList;

  constructor( public amenityService: AmenityService ) {

    this.amenityService.init();

  }

  ngOnInit() {

    this.amenityService.placeList$.subscribe((data: any) => {
      this.placeList = data;
    });

  }

}
