import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { PageNotFoundComponent } from './pages-to-view/page-not-found/page-not-found.component';
import { AboutComponent } from './pages-to-view/about/about.component';
import { SmloadComponent } from './pages-to-view/smload/smload.component';
import { MdloadComponent } from './pages-to-view/mdload/mdload.component';
import { LgloadComponent } from './pages-to-view/lgload/lgload.component';
import { CrudComponent } from './pages-to-view/crud/crud.component';
import { AnimationsComponent } from './pages-to-view/animations/animations.component';
import { ChangingdataComponent } from './pages-to-view/changingdata/changingdata.component';
import { GameCoverComponent } from './shared/game-cover/game-cover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './pages-to-view/servicesComponent/services.component';
import { WindowRef } from './shared/window-ref/window-ref.component';
import { SmloadMeasureComponent } from './pages-to-measure/smload-measure/smload-measure.component';
import { MdloadMeasureComponent } from './pages-to-measure/mdload-measure/mdload-measure.component';
import { LgloadMeasureComponent } from './pages-to-measure/lgload-measure/lgload-measure.component';
import { CrudMeasureComponent } from './pages-to-measure/crud-measure/crud-measure.component';
import { AnimationsMeasureComponent } from './pages-to-measure/animations-measure/animations-measure.component';
import { ChangingdataMeasureComponent } from './pages-to-measure/changingdata-measure/changingdata-measure.component';
import { ServicesMeasureComponent } from './pages-to-measure/services-measure/services-measure.component';

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
    ChangingdataComponent,
    GameCoverComponent,
    ServicesComponent,
    SmloadMeasureComponent,
    MdloadMeasureComponent,
    LgloadMeasureComponent,
    CrudMeasureComponent,
    AnimationsMeasureComponent,
    ChangingdataMeasureComponent,
    ServicesMeasureComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
