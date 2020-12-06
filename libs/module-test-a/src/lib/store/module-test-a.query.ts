import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { ModuleTestAState } from './module-test-a.model';
import { ModuleTestAStore } from './module-test-a.store';

@Injectable({
  providedIn: 'root',
})
export class ModuleTestAStoreQuery extends Query<ModuleTestAState> {
  moduleIsLoaded$ = this.select('isInitialized');

  constructor(protected store: ModuleTestAStore) {
    super(store);
  }

  getInitializedStatus() {
    return this.store.getValue().isInitialized;
  }
}
