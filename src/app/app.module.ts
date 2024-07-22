import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationBarComponent } from './template/top-navigation-bar/top-navigation-bar.component';
import { S3BucketComponent } from './components/s3-bucket/s3-bucket.component';
import { NfsComponent } from './components/nfs/nfs.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    S3BucketComponent,
    NfsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
