import { TestBed } from '@angular/core/testing';
import { ModuleTestBFacade } from './module-test-b-facade';

describe('ModuleTestBFacade', () => {
  let facade: ModuleTestBFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleTestBFacade],
    });
    facade = TestBed.inject(ModuleTestBFacade);
  });

  it('should be created', async () => {
    expect(facade).toBeTruthy();
  });
});
