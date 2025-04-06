import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SearchCatalogItemService} from "../../service/search-catalog-item/search-catalog-item.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";


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

  searchForm: FormGroup;

  http!: HttpClient;

  private itemList: any;

  private _url_search: any;

  currentPage: string = "";


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
              private routs: Router) {


    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required, Validators.minLength(3)]]
    });
  }


  clickIntoTheBox() {

    this.currentPage = this.routs.url;

  }


  type(event:any) {

    if (event.target.value.length > 0) {
      this.routs.navigate(['/search', event.target.value]);
    }

    else {

      this.routs.navigate([this.currentPage])

    }
  }


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

          this.itemList = response;

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
