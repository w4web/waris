import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as L from "leaflet";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  map: L.Map;
  places:any;

  placeName;

  constructor( public HttpClient: HttpClient, public router: Router, public activatedRoute: ActivatedRoute ) {

    this.placeName = this.activatedRoute.snapshot.params.name;

  }

  ngOnInit() {

    this.map = L.map('map', {
      center: [33.6396965, -84.4304574],
      zoom: 12,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 1000);

    this.HttpClient.get('./assets/placeData.json')
    .subscribe(data => {
      this.places = data;
      this.initMap(this.places[this.placeName]);
    });

  }

  initMap(places) {

    const customMarkerIcon = L.icon({
      iconUrl: './assets/images/custom-marker-icon.png',
      iconSize: [32, 32], 
      popupAnchor: [0, -20]
    });

    places.forEach((place) => {
      L.marker([place.latlng.lat, place.latlng.lng], {icon: customMarkerIcon})
      .bindPopup(`<div class="pop-card">
                    <b>${place.name}</b>
                    <p><small>${place.address}</small></p>
                  </div>`, { autoClose: false })
      .on('click', () => this.router.navigateByUrl('/tabs/place'))
      .addTo(this.map).openPopup();
    });
  }

}
