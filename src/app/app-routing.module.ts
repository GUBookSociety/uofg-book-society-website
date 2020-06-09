import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormPageComponent } from './form-page/form-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'form', component: FormPageComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
