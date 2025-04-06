import { TestBed } from '@angular/core/testing';

import { SearchCatalogItemService } from './search-catalog-item.service';

describe('SearchCatalogItemService', () => {
  let service: SearchCatalogItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCatalogItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
