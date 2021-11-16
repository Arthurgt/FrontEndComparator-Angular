import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { SmloadComponent } from './pages/smload/smload.component';
import { MdloadComponent } from './pages/mdload/mdload.component';
import { LgloadComponent } from './pages/lgload/lgload.component';
import { CrudComponent } from './pages/crud/crud.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { AsynchronusComponent } from './pages/asynchronus/asynchronus.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ChangingdataComponent } from './pages/changingdata/changingdata.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent,
    SmloadComponent,
    MdloadComponent,
    LgloadComponent,
    CrudComponent,
    AnimationsComponent,
    AsynchronusComponent,
    FormsComponent,
    ChangingdataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
