import { TestBed } from '@angular/core/testing';

import { ListaFavoritaService } from './lista-favorita.service';

describe('ListaFavoritaService', () => {
  let service: ListaFavoritaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaFavoritaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
