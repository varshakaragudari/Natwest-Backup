import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { ReactivedemoComponent } from './reactivedemo/reactivedemo.component';
import { ProductscompComponent } from './productscomp/productscomp.component';
import { FiltercompComponent } from './filtercomp/filtercomp.component';
import { ConvertToUSDPipe } from './convert-to-usd.pipe';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { ComponeComponent } from './compone/compone.component';
import { CourseGuardService } from './services/course-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    ReactivedemoComponent,
    ProductscompComponent,
    FiltercompComponent,
    ConvertToUSDPipe,
    ChildComponent,
    FooterComponent,
    MyHomeComponent,
    ComponeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CourseGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
