import { TestBed } from '@angular/core/testing';

import { GandamUiService } from './gandam-ui.service';

describe('GandamUiService', () => {
  let service: GandamUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GandamUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
