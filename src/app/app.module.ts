import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyPageComponent } from './my-page/my-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageComponentComponent } from './image-component/image-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyPageComponent,
    ImageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
