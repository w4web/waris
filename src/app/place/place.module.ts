import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlacePageRoutingModule } from './place-routing.module';
import { PlacePage } from './place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacePageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [PlacePage]
})
export class PlacePageModule {}
