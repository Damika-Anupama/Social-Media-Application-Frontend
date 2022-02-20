import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home.component';
import {LaunchComponent} from './launch/launch.component';
import {AdsComponent} from './ads/ads.component';
import {ReportComponent} from './report/report.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {ChatterBoxComponent} from './chatter-box/chatter-box.component';
import {ComradesComponent} from '@src/app/view/home/comrades/comrades.component';
import {ShopComponent} from '@src/app/view/home/shop/shop.component';
import { PagesComponent } from './pages/pages.component';

const heroRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'prefix'},
      {component: DashboardComponent, path: 'home'},
      {component: ProfileComponent, path: 'profile'},
      // {component: ProfileComponent, path: 'profile/:userId'},
      {component: SettingsComponent, path: 'settings'},
      {component: LaunchComponent, path: 'launch'},
      {component: AdsComponent, path: 'ads'},
      {component: ReportComponent, path: 'report'},
      {component: SuggestionsComponent, path: 'suggestions'},
      {component: ChatterBoxComponent, path: 'chatter-box'},
      {component: ComradesComponent, path: 'comrades/:userId'},
      {component: ShopComponent, path: 'shop'},
      {component: PagesComponent, path: 'pages'},
      {
        path: 'com',
        loadChildren: () => import('./community/community.module').then(value => value.CommunityModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(heroRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}