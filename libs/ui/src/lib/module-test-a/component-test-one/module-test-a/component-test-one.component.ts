import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uiModuleTestA/componentTestOne',
  templateUrl: './module-test-a/component-test-one.component.html',
  styleUrls: ['./module-test-a/component-test-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleTestA/componentTestOneComponent {}
