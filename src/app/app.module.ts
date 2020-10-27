import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionStorageStoreService } from './components/data-store/session-storage-store.service';
import { ServerHostPreInterceptor } from './components/http-interceptors/server-host.pre-interceptor';
import { HttpExampleService } from './components/http-services/http-example.service';
import { SessionService } from './components/session/session.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, HeaderComponent],
	imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
	// Http Pre Interceptor used to set server host at each http call
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ServerHostPreInterceptor, multi: true },
		SessionService,
		SessionStorageStoreService,
		HttpExampleService,
		DatePipe,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
