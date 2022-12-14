import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BikesModule } from './bikes/bikes.module';
import { CoreModule } from './core/core.module';
import { HasUser } from './shared/guards/hasUser.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BikesModule,
    AuthModule,
    CoreModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [HasUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
