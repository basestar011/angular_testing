import { ValueService } from './value.service';

// Angular가 제공하는 테스트 유틸리티를 사용하지 않고 Jasmine을 그대로 사용합니다.
describe('ValueService', () => {

    let service: ValueService;

    beforeEach(() => { service = new ValueService(); });

    it('#getValue should return real value', () => {
        expect(service.getValue()).toBe('real value');
    });

    it('#getObservableValue should return value from observable',
        (done: DoneFn) => {
            service.getObservableValue().subscribe(value => {
                expect(value).toBe('observable value');
                done();
            });
        }
    );

    it('#getPromiseValue should return value from a promise',
        (done: DoneFn) => {
            service.getPromiseValue().then(value => {
                expect(value).toBe('promise value');
                done();
            });
        }
    );
});
