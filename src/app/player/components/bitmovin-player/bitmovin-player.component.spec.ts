import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitmovinPlayerComponent } from './bitmovin-player.component';

describe('BitmovinPlayerComponent', () => {
  let component: BitmovinPlayerComponent;
  let fixture: ComponentFixture<BitmovinPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitmovinPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitmovinPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
