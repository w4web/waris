import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as L from "leaflet";
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  map: L.Map;
  places: any;
  placeName :any;

  marker: any;
  markers = [];

  @ViewChild(IonContent) content: IonContent;

  constructor( public HttpClient: HttpClient, public router: Router, public activatedRoute: ActivatedRoute ) {

    this.placeName = this.activatedRoute.snapshot.params.name;

  }

  ngOnInit() {

    this.map = L.map('map', {
      center: [40.713829, -73.989667],
      zoom: 11,
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
      iconSize: [32, 45], 
      popupAnchor: [0, -20]
    });

    places.forEach((place) => {
      this.marker = L.marker([place.latlng.lat, place.latlng.lng], {icon: customMarkerIcon});
      this.marker.bindPopup(`<div class="pop-card"><b>${place.name}</b><p><small>${place.address}</small></p></div>`, { autoClose: false });
      this.marker["id"] = place.id;
      this.marker.addTo(this.map);
      this.markers.push(this.marker);
    });

  }

  showPopup(id): void {

    for(let i = 0; i < this.markers.length; i++) {
      if (this.markers[i].id == id) {
        this.markers[id-1].openPopup();
      } else {
        this.markers[i].closePopup();
      }
    }

    this.content.scrollToTop(300);

  }

}
