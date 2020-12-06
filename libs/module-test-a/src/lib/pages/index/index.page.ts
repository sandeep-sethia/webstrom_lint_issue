import { Component } from '@angular/core';
import { ApiTestAService } from '@lint-sample/api-test-a';

@Component({
  selector: 'ktb-module-test-a-index-page',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class ModuleTestAIndexPage {
  constructor(
    private apiAService: ApiTestAService
  ) {
  }

  onClick() {
    this.apiAService.string_concat('test1', 'test2');
  }
}
