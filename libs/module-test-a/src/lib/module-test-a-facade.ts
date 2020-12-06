import { Injectable } from '@angular/core';
import { ModuleTestAStore } from './store/module-test-a.store';
import { ModuleTestAStoreQuery } from './store/module-test-a.query';

@Injectable({
  providedIn: 'root',
})
export class ModuleTestAFacade {
  constructor(private store: ModuleTestAStore, private storeQuery: ModuleTestAStoreQuery) {}

  setInitialized() {
    this.store.update({ isInitialized: true });
  }

  getLoadStatus() {
    return this.storeQuery.getInitializedStatus();
  }

  resetStore() {
    this.store.reset();
  }
}
