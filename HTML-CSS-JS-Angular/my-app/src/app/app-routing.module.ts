import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {ChildComponent} from './child/child.component';
import {MyHomeComponent} from './my-home/my-home.component'
import {AppComponent} from './app.component'
import { ComponeComponent} from './compone/compone.component'
import { CourseGuardService } from './services/course-guard.service';
import { dummyguardGuard } from './dummyguard.guard';

const routes: Routes = [
  { path:'about',  component : ChildComponent},
  { path:'home/:id',  component : MyHomeComponent,canActivate:[dummyguardGuard]},
  { path: '', redirectTo: 'ComponeComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

