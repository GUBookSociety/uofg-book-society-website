import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormPageComponent } from './form-page/form-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './shared/auth.guard';
import { SignedInAuthGuard } from './shared/signedIn.guard';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'form', component: FormPageComponent, canActivate: [AuthGuard]},
  { path: 'signIn', component: SignInComponent, canActivate: [SignedInAuthGuard]},
  { path: 'signUp', component: SignUpComponent, canActivate: [SignedInAuthGuard] },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
