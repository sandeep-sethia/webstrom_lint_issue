import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleTestAComponent } from './module-test-a.component';
import { ModuleTestAIndexPage } from './pages/index/index.page';

/**
 * Module routes
 */
const routes: Routes = [
  {
    path: '',
    component: ModuleTestAComponent,
    children: [
      {
        path: '',
        component: ModuleTestAIndexPage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleTestARoutingModule {}
