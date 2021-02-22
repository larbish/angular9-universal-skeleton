import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerHostPreInterceptor } from './components/http-interceptors/server-host.pre-interceptor';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  // Http Pre Interceptor used to set server host at each http call
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServerHostPreInterceptor, multi: true }, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
