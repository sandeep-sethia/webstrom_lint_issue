import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Import libraries
 */
import { UiModule } from '@ktb/ui';

/**
 * Import component
 */
import { ModuleTestAComponent } from './module-test-a.component';

/**
 * Import router module
 */
import { ModuleTestARoutingModule } from './module-test-a-routing';

/**
 * Import pages
 */
import { ModuleTestAIndexPage } from './pages/index/index.page';

@NgModule({
  declarations: [ModuleTestAComponent, ModuleTestAIndexPage],
  imports: [CommonModule, ModuleTestARoutingModule, UiModule],
})
export class TestAModule {}
