import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterndetailsComponent } from './interndetails.component';

describe('InterndetailsComponent', () => {
  let component: InterndetailsComponent;
  let fixture: ComponentFixture<InterndetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterndetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterndetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
