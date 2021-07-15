import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SettingPageRoutingModule } from './setting-routing.module';
import { SettingPage } from './setting.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPageRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  declarations: [SettingPage]
})
export class SettingPageModule {}
