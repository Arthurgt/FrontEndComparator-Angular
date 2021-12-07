import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SmloadMeasureComponent } from "../pages-to-measure/smload-measure/smload-measure.component";
import { AboutComponent } from "../pages-to-view/about/about.component";
import { AnimationsComponent } from "../pages-to-view/animations/animations.component";
import { ChangingdataComponent } from "../pages-to-view/changingdata/changingdata.component";
import { CrudComponent } from "../pages-to-view/crud/crud.component";
import { LgloadComponent } from "../pages-to-view/lgload/lgload.component";
import { MdloadComponent } from "../pages-to-view/mdload/mdload.component";
import { PageNotFoundComponent } from "../pages-to-view/page-not-found/page-not-found.component";
import { ServicesComponent } from "../pages-to-view/servicesComponent/services.component";
import { SmloadComponent } from "../pages-to-view/smload/smload.component";

const routes: Routes = [
    {path: '', redirectTo: '/about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'smload', component: SmloadComponent},
    {path: 'mdload', component: MdloadComponent},
    {path: 'lgload', component: LgloadComponent},
    {path: 'crud', component: CrudComponent},
    {path: 'animations', component: AnimationsComponent},
    {path: 'changingdata', component: ChangingdataComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'smload-measure', component: SmloadMeasureComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
    
}