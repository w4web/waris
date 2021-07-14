import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  constructor( public dataService: DataService ) {

    this.dataService.getSettingFields().subscribe((fields: any) => {
      this.form = new FormGroup({});
      this.fields = fields;
    });

  }

  ngOnInit(): void {
    
  }

  save(): void {
    console.log("Data", this.model);
  }

}
