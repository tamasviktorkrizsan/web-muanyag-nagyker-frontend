import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-catalog-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.scss',
  // template: `<p>Received value: {{ category }}</p>`,
})


export class CatalogItemComponent {

  @Input() item!: any;



 /* @Input({ required: false }) category: string = '';

  @Input({ required: false }) name!: string;

  @Input({ required: false }) type!: string;

  @Input({ required: false }) color!: string;

  @Input({ required: false }) img!: string;

  @Input({ required: false }) product_id!: string;*/


 /* constructor(item: object) {


    this.product_id = item.product_id;

  }*/



}

/*

item = {

  category: "virágcserepek",

  img: "/public/assets/img/content/contact/warehouse.jpg",

  name: 'Ravenna cserép',

  type: '12cm',

  color: 'fehér,terracotta',

  productId: '500014'

}

*/


/*constructor(private category: string,
            private name: string,
            private type: string,
            private product_id: string,
            private color: string,
            private img: string){

            type: string = ''
  product_id: string = ''
  color: string = ''
  img: string = ''

}

*/
