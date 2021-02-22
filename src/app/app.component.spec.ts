import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SessionStorageStoreService } from './components/data-store/session-storage-store.service';
import { SessionService } from './components/session/session.service';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientModule],
        declarations: [AppComponent],
        providers: [SessionService, SessionStorageStoreService],
      }).compileComponents();
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'affluences-display'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('affluences-display');
  });

  // it('should render title', () => {
  // 	const fixture = TestBed.createComponent(AppComponent);
  // 	fixture.detectChanges();
  // 	const compiled = fixture.nativeElement;
  // 	expect(compiled.querySelector('.content span').textContent).toContain('affluences-display app is running!');
  // });
});
