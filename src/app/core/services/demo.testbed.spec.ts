import { TestBed } from '@angular/core/testing';
import { ValueService } from './value.service';

let service: ValueService;

beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ValueService] });
    // 의존성 객체 인스턴스 미리 받아두기
    // service = TestBed.inject(ValueService);
});

it('should use ValueService', () => {
    service = TestBed.inject(ValueService);
    expect(service.getValue()).toBe('real value');
});

