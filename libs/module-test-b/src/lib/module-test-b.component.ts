import { Component, OnDestroy } from '@angular/core';
import { ModuleTestBFacade } from './module-test-b-facade';

@Component({
  selector: 'ktb-module-test-b',
  template: `<router-outlet></router-outlet>`,
})
export class ModuleTestBComponent implements OnDestroy {
  constructor(private facade: ModuleTestBFacade) {
    this.facade.setInitialized();
  }

  ngOnDestroy() {}
}
