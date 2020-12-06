import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { ModuleTestAState } from './module-test-a.model';

export function createInitialState(): ModuleTestAState {
  return {
    isInitialized: false,
  };
}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'module-test-a', resettable: true })
export class ModuleTestAStore extends Store<ModuleTestAState> {
  constructor() {
    super(createInitialState());
  }
}
