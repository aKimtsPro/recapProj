/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoitureApiConsumeService } from './voiture-api-consume.service';

describe('Service: VoitureApiConsume', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoitureApiConsumeService]
    });
  });

  it('should ...', inject([VoitureApiConsumeService], (service: VoitureApiConsumeService) => {
    expect(service).toBeTruthy();
  }));
});
