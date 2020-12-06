import { Injectable } from '@angular/core';
import { ModuleTestBStore } from './store/module-test-b.store';
import { ModuleTestBStoreQuery } from './store/module-test-b.query';

@Injectable({
  providedIn: 'root',
})
export class ModuleTestBFacade {
  constructor(private store: ModuleTestBStore, private storeQuery: ModuleTestBStoreQuery) {}

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
