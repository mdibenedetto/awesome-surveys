import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AuthGuardService } from './modules/survey/guards/auth-guard.service';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },

  {
    path: 'survey',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/survey/survey.module')
      .then(m => m.SurveyModule)
  },

  { path: '', redirectTo: '/survey', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
