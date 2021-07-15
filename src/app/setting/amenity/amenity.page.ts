import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { AmenityService } from 'src/app/shared/services/amenity.service';
import { DataService } from '../../shared/services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-amenity',
  templateUrl: './amenity.page.html',
  styleUrls: ['./amenity.page.scss'],
})
export class AmenityPage implements OnInit {

  placeList;
  isAdd: boolean = false;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  @ViewChild('reset', { static: false }) reset?: ElementRef<HTMLElement>;

  constructor( public toastController: ToastController, public dataService: DataService, public amenityService: AmenityService ) {

    this.amenityService.init();

    this.dataService.getAmenityFields().subscribe((fields: any) => {
      this.form = new FormGroup({});
      this.fields = fields;
    });

  }

  ngOnInit(): void {
    this.amenityService.placeList$.subscribe((data: any) => {
      this.placeList = data;
    });
  }

  save(): void {
    this.amenityService.add(this.model);
    this.presentToast();
    this.resetFields();
  }

  delete(name): void {
    this.amenityService.remove(name);
  }

  resetFields(): void {
    if (this.reset) {
      const el: HTMLElement = this.reset.nativeElement;
      el.click();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }

}
