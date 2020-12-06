import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTestA/componentTestOneComponent } from './module-test-a/component-test-one.component';

@NgModule({
  declarations: [ModuleTestA/componentTestOneComponent],
  imports: [CommonModule],
  exports: [ModuleTestA/componentTestOneComponent],
})
export class ModuleTestA/componentTestOneModule {}
