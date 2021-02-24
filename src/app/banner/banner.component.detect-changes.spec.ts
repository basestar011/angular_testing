import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, waitForAsync } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [ BannerComponent ],
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: true }
        ]
    });

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  }));

  it('should display original title', () => {
    // 만세! `fixture.detectChanges()`는 더이상 필요 없습니다.
    expect(h1.textContent).toContain(component.title);
  });

  it('should still see original title after comp.title change', () => {
    const oldTitle = component.title;
    component.title = 'Test Title';
    // 화면에 표시되는 문자열은 갱신되지 않습니다. 이 경우에는 변화감지 로직이 실행되지 않았습니다 :(
    expect(h1.textContent).toContain(oldTitle);
  });

  it('should display updated title after detectChanges', () => {
    component.title = 'Test Title';
    fixture.detectChanges(); // 명시적으로 변화감지 로직을 실행합니다.
    expect(h1.textContent).toContain(component.title);
  });
});
