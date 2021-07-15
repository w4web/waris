import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AmenityPageRoutingModule } from './amenity-routing.module';
import { AmenityPage } from './amenity.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared/shared.module';
import { FormlyModule } from '@ngx-formly/core';
import { IconSelectComponent } from '../../shared/components/icon-select.component';
import { CustomSelectComponent } from '../../shared/components/custom-select.component';
import { CustomInputComponent } from 'src/app/shared/components/custom-input.component';

export function minlengthValidationMessages(err: any, field: any): any {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmenityPageRoutingModule,
    FontAwesomeModule,
    SharedModule,
    FormlyModule.forRoot({
      types: [
        { name: 'iSelect', component: IconSelectComponent },
        { name: 'customSelect', component: CustomSelectComponent },
        { name: 'customInput', component: CustomInputComponent }

      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessages },
      ],
  }),
  ],
  declarations: [AmenityPage, IconSelectComponent, CustomSelectComponent, CustomInputComponent]
})
export class AmenityPageModule {}
