import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverseTableNavComponent } from './inverse-table-nav.component';

describe('InverseTableNavComponent', () => {
  let component: InverseTableNavComponent;
  let fixture: ComponentFixture<InverseTableNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InverseTableNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InverseTableNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
