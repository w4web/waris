import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'custom-select',
  template: `
    <div class="form-group">
      <label>{{to.label}}</label>
      <ng-select [formControl]="formControl" [formlyAttributes]="field">
        <ng-option *ngFor="let item of itemList" [value]="item">{{ item }}</ng-option>
      </ng-select>
    </div>
  `,
})
export class CustomSelectComponent extends FieldType {
  public formControl: any;
  public itemList: any;

  constructor(private http: HttpClient) {
    super();
    this.http
      .get<any>(
        './assets/amenity.json'
      )
      .subscribe(data => {
        const arr: any = Object.values(data);
        this.itemList = [].concat(...arr);
      });
  }
}
