import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as L from "leaflet";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, AfterViewInit {

  map: L.Map;

  constructor( public HttpClient: HttpClient, public router: Router ) { }

  ngOnInit() {

    this.map = L.map('map', {
      center: [33.6396965, -84.4304574],
      zoom: 4,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 1000);

  }

  ngAfterViewInit() {
    this.HttpClient.get('https://nominatim.openstreetmap.org/search/Gdansk?format=json&polygon=1&polygon_geojson=1&limit=9999')
    .subscribe(restaurants => {
      this.initMap(restaurants);
    });
  }

  initMap(restaurants) {

    const customMarkerIcon = L.icon({
      iconUrl: './assets/images/custom-marker-icon.png',
      iconSize: [32, 32], 
      popupAnchor: [0, -20]
    });

    restaurants.forEach((restaurant) => {
      L.marker([restaurant.lat, restaurant.lon], {icon: customMarkerIcon})
      .bindPopup(`<b>${restaurant.display_name}</b>`, { autoClose: false })
      .on('click', () => this.router.navigateByUrl('/tabs/place'))
      .addTo(this.map).openPopup();
    });
  }

}
