import { TestBed } from '@angular/core/testing';
import { UserService } from '../core/services/user.service';
import { WelcomeComponent } from './welcome.component';

class MockUserService {
    isLoggedIn = true;
    user = { name: 'Test User' };
}

describe('WelcomeComp', () => {
    let comp: WelcomeComponent;
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // 테스트할 컴포넌트의 의존성으로 주입될 서비스를 프로바이더에 등록한다.
            providers: [
                WelcomeComponent,
                { provide: UserService, useClass: MockUserService }
            ]
        });

        comp = TestBed.inject(WelcomeComponent);
        userService = TestBed.inject(UserService);
    });

    it('should not have welcome message after construction', () => {
        expect(comp.welcome).toBeUndefined();
    });

    it('should welcome logged in user after Angular calls ngOnInit', () => {
        comp.ngOnInit();
        expect(comp.welcome).toContain(userService.user.name);
    });

    it('should ask user to log in if not logged in after ngOnInit', () => {
        userService.isLoggedIn = false;
        comp.ngOnInit();
        expect(comp.welcome).not.toContain(userService.user.name);
        expect(comp.welcome).toContain('log in');
    });
});
