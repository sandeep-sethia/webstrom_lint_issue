import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Import libraries
 */
import { UiModule } from '@ktb/ui';

/**
 * Import component
 */
import { ModuleTestBComponent } from './module-test-b.component';

/**
 * Import router module
 */
import { ModuleTestBRoutingModule } from './module-test-b-routing';

/**
 * Import pages
 */
import { ModuleTestBIndexPage } from './pages/index/index.page';

@NgModule({
  declarations: [ModuleTestBComponent, ModuleTestBIndexPage],
  imports: [CommonModule, ModuleTestBRoutingModule, UiModule],
})
export class TestBModule {}
