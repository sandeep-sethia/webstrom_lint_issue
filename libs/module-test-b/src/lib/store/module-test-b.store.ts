import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { ModuleTestBState } from './module-test-b.model';

export function createInitialState(): ModuleTestBState {
  return {
    isInitialized: false,
  };
}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'module-test-b', resettable: true })
export class ModuleTestBStore extends Store<ModuleTestBState> {
  constructor() {
    super(createInitialState());
  }
}
