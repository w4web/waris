import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlacePageRoutingModule } from './place-routing.module';
import { PlacePage } from './place.page';
import { IonicRatingComponentModule } from 'ionic-rating-component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacePageRoutingModule,
    FontAwesomeModule,
    IonicRatingComponentModule
  ],
  declarations: [PlacePage]
})
export class PlacePageModule {}
