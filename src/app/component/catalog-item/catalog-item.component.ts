import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-catalog-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.scss'
})

export class CatalogItemComponent {

  private _category: string = "";

  private _img: string = "";

  private _name: string = "";

  private _type: string = "";

  private _color: string = "";

  private _product_id: string = "";

  private default_value: string = "nincs";


  @Input()
  set category(value: string) {
    this._category = value;
  }

  get category(): string {
    return this._category;
  }


  @Input()
  set img(value: string) {

    // TODO: put the img_url_prefix in a environment file

    let img_url_prefix: string = "/public/assets/img/content/catalog/";

    this._img = img_url_prefix + value;

  }

  get img(): string {
    return this._img;
  }


  @Input()
  set name(value: string) {
    this._name = value;
  }

  get name(): string {
    return this._name;
  }


  @Input()
  set type(value: string) {
    if(value == null){
      this._type = this.default_value;
    }

    else {
      this._type = value;
    }
  }

  get type(): string {
    return this._type;
  }


  @Input()
  set color(value: string) {

    if(value == null){
      this._color = this.default_value;
    }

    else {
      this._color = value;
    }
  }

  get color(): string {
    return this._color;
  }


  @Input()
  set product_id(value: string) {

    if(value == null){

      this._product_id = this.default_value;
    }

    else {

      this._product_id = value;
    }
  }

  get product_id(): string {
    return this._product_id;
  }


}
