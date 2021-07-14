import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { FormlyModule } from '@ngx-formly/core';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyIonicModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    NgSelectModule
  ],
  exports: [
    ReactiveFormsModule,
    FormlyIonicModule,
    NgSelectModule
  ]
})

export class SharedModule { }
