import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MyPageComponent} from "./my-page/my-page.component";
import { HomeComponent} from "./home/home.component";
import { ImageComponentComponent} from "./image-component/image-component.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mypage', component: MyPageComponent},
  {path: 'image', component: ImageComponentComponent},


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
