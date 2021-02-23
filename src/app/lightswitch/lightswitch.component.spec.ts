import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComp', () => {
    it('#clicked() should toggle #isOn', () => {
        // new 키워드로 컴포넌트 인스턴스 생성
        const comp = new LightswitchComponent();
        expect(comp.isOn).toBe(false, 'off at first');
        // 2. 컴포넌트 메소드 실행
        comp.clicked();
        // 3. 컴포넌트 내부 상태가 변경된 것을 확인
        expect(comp.isOn).toBe(true, 'on after click');
        comp.clicked();
        expect(comp.isOn).toBe(false, 'off after second click');
    });

    it('#clicked() should set #message to "is on"', () => {
        const comp = new LightswitchComponent();
        expect(comp.message).toMatch(/is off/i, 'off at first');
        comp.clicked();
        expect(comp.message).toMatch(/is on/i, 'on after clicked');
    });

});
