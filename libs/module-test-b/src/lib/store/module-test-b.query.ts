import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { ModuleTestBState } from './module-test-b.model';
import { ModuleTestBStore } from './module-test-b.store';

@Injectable({
  providedIn: 'root',
})
export class ModuleTestBStoreQuery extends Query<ModuleTestBState> {
  moduleIsLoaded$ = this.select('isInitialized');

  constructor(protected store: ModuleTestBStore) {
    super(store);
  }

  getInitializedStatus() {
    return this.store.getValue().isInitialized;
  }
}
