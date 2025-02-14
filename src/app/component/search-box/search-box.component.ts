import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SearchCatalogItemService} from "../../service/search-catalog-item.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-box',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit {

  searchForm!: FormGroup;

  http!: HttpClient;

  itemList: any;

  item: any;

  i: any;


  private _url_search: any;

  @Input()

  set url_search(value: any) {
    this._url_search = value;
  }

  get url_search(): any {
    return this._url_search;
  }



  constructor(private formBuilder: FormBuilder,
              private searchCatalogItemService: SearchCatalogItemService,
              private route: ActivatedRoute,
              private routs: Router,
              private previousPage: Location) {

    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  currentPage!: string;

  clickIntoTheBox() {

    this.currentPage = this.routs.url;

    console.log(this.currentPage);

  }


  type(event:any) {


    if (event.target.value.length > 0)
    {


      this.routs.navigate(['/search', event.target.value]);
    }

    else {
      console.log(document.head.baseURI)

      this.routs.navigate([this.currentPage])


    }

    console.log(event.target.value);



  }


  // @ViewChild('search') search: NgForm;


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
    // Get the ID from the URL and patch the form
    this.route.paramMap.subscribe((params) => {
      const search = params.get('id');
      if (search) {
        this.searchForm.patchValue({ search });
        this.onSubmit();
      }
    });
  }




  onSubmit() {

    if (this.searchForm.valid) {
      this.searchCatalogItemService.sendData(this.searchForm.value).subscribe(
        (response) => {

          this.itemList = response

          console.log('POST response:', this.itemList);
        },
        (error) => {
          console.error('POST error:', error);
        }
      );


    }

    else {
      console.error('Form is invalid');
    }
  }











}
