import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'icon-select',
  template: `
    <div class="form-group">
      <label>{{to.label}}</label>
      <ng-select placeholder="Select icon..." [formControl]="formControl" [formlyAttributes]="field">
        <ng-option *ngFor="let item of iconList" [value]="item"><fa-icon icon="{{ item }}"></fa-icon>{{ item }}</ng-option>
      </ng-select>
    </div>
  `,
})
export class IconSelectComponent extends FieldType {
  public formControl: any;
  public iconList: any;
  public selectedIcon: any;

  constructor(private http: HttpClient) {
    super();
    this.http
      .get<any>(
        './assets/FontAwesomeIcons.json'
      )
      .subscribe(data => {
        const arr: any = Object.values(data);
        this.iconList = [].concat(...arr);
      });
  }
}
