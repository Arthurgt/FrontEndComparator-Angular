import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../pages/about/about.component";
import { AnimationsComponent } from "../pages/animations/animations.component";
import { AsynchronusComponent } from "../pages/asynchronus/asynchronus.component";
import { ChangingdataComponent } from "../pages/changingdata/changingdata.component";
import { CrudComponent } from "../pages/crud/crud.component";
import { FormsComponent } from "../pages/forms/forms.component";
import { LgloadComponent } from "../pages/lgload/lgload.component";
import { MdloadComponent } from "../pages/mdload/mdload.component";
import { PageNotFoundComponent } from "../pages/page-not-found/page-not-found.component";
import { SmloadComponent } from "../pages/smload/smload.component";

const routes: Routes = [
    {path: '', redirectTo: '/about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'smload', component: SmloadComponent},
    {path: 'mdload', component: MdloadComponent},
    {path: 'lgload', component: LgloadComponent},
    {path: 'crud', component: CrudComponent},
    {path: 'animations', component: AnimationsComponent},
    {path: 'asynchronus', component: AsynchronusComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'changingdata', component: ChangingdataComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
    
}