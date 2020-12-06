import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTestAIndexPage } from './index.page';

describe('ModuleTestAIndexPage', () => {
  let component: ModuleTestAIndexPage;
  let fixture: ComponentFixture<ModuleTestAIndexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleTestAIndexPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTestAIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
