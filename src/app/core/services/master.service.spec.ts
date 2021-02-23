import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService without Angular testing support', () => {

    let masterService: MasterService;

    it('#getValue should return real value from the real service', () => {
        masterService = new MasterService(new ValueService());
        expect(masterService.getValue()).toBe('real value');
    });

    it('#getValue should return faked value from a fake object', () => {
        const fake =  { getValue: () => 'fake value' };
        masterService = new MasterService(fake as ValueService);
        expect(masterService.getValue()).toBe('fake value');
    });

    it('#getValue should return stubbed value from a spy', () => {
        // `getValue` 메소드가 정의된 스파이 객체를 정의합니다.
        const valueServiceSpy =
        jasmine.createSpyObj('ValueService', ['getValue']);

        // `getValue` 스파이 메소드가 반환할 값을 정의합니다.
        const stubValue = 'stub value';
        valueServiceSpy.getValue.and.returnValue(stubValue);

        masterService = new MasterService(valueServiceSpy);

        expect(masterService.getValue()).toBe(stubValue, 'service returned stub value');
        expect(valueServiceSpy.getValue.calls.count()).toBe(1, 'spy method was called once');
        expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
    });
});
