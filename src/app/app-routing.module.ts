import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormPageComponent } from './form-page/form-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './shared/authentication/auth.guard';
import { SignedInAuthGuard } from './shared/authentication/signedIn.guard';

// to restrict pages to logged in users only, add "canActivate: [AuthGuard]" after the component name
// to restrict pages to NON-logged in users only, add "canActivate: [SignedInAuthGuard]" after the component name

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'form', component: FormPageComponent },
  { path: 'signIn', component: SignInComponent, canActivate: [SignedInAuthGuard]},
  { path: 'signUp', component: SignUpComponent, canActivate: [SignedInAuthGuard] },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
