import { TestBed } from '@angular/core/testing';
import { ModuleTestAFacade } from './module-test-a-facade';

describe('ModuleTestAFacade', () => {
  let facade: ModuleTestAFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleTestAFacade],
    });
    facade = TestBed.inject(ModuleTestAFacade);
  });

  it('should be created', async () => {
    expect(facade).toBeTruthy();
  });
});
