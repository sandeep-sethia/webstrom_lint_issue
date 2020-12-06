import { Component, OnDestroy } from '@angular/core';
import { ModuleTestAFacade } from './module-test-a-facade';

@Component({
  selector: 'ktb-module-test-a',
  template: `<router-outlet></router-outlet>`,
})
export class ModuleTestAComponent implements OnDestroy {
  constructor(private facade: ModuleTestAFacade) {
    this.facade.setInitialized();
  }

  ngOnDestroy() {}
}
