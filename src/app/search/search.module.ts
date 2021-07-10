import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicRatingComponentModule } from 'ionic-rating-component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    FontAwesomeModule,
    IonicRatingComponentModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
