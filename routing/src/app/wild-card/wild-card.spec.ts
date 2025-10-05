import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCard } from './wild-card';

describe('WildCard', () => {
  let component: WildCard;
  let fixture: ComponentFixture<WildCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
