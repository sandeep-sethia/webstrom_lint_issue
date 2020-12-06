import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModuleTestBComponent } from './module-test-b.component';
import { ModuleTestBIndexPage } from './pages/index/index.page';

/**
 * Module routes
 */
const routes: Routes = [
  {
    path: '',
    component: ModuleTestBComponent,
    children: [
      {
        path: '',
        component: ModuleTestBIndexPage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleTestBRoutingModule {}
