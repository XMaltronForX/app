import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Data1Page } from './data1.page';

describe('Data1Page', () => {
  let component: Data1Page;
  let fixture: ComponentFixture<Data1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Data1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
