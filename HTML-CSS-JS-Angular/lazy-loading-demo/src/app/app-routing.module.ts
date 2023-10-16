import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { NonlazyComponent } from './nonlazy/nonlazy.component';
import { protectmylinkGuard } from './protectmylink.guard';

const routes: Routes = [
  //{ 
    {path: 'blog', loadChildren: () =>
     import('./blog/blog.module').then(m => m.BlogModule)},
    { path: 'nonlazy', component: NonlazyComponent ,canActivate: [protectmylinkGuard]}
   //}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
