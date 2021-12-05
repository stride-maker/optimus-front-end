import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetComponent } from './welcome/reset/reset.component';
import { SignInComponent } from './welcome/sign-in/sign-in.component';
import { SignUpComponent } from './welcome/sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'prefix' },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'reset', component: ResetComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
