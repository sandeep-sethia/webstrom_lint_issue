import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTestBIndexPage } from './index.page';

describe('ModuleTestBIndexPage', () => {
  let component: ModuleTestBIndexPage;
  let fixture: ComponentFixture<ModuleTestBIndexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleTestBIndexPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTestBIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
