import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgetpasswordComponent } from './static/forgetpassword/forgetpassword.component';
//import { DailysalesComponent } from './Base/dailysales/dailysales.component';
import { LoginComponent } from './static/login/login.component';
import { LayoutComponent } from './static/layout/layout.component';
import { HeaderComponent } from './static/header/header.component';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'

    


@NgModule({
  
  declarations: [
    AppComponent,
    ForgetpasswordComponent,
    //DailysalesComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
