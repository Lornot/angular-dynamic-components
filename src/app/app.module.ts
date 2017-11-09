import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdBannerComponent } from './components/ad-banner.component/ad-banner.component';
import { HeroJobAdComponent } from './components/hero-job-ad.component/hero-job-ad.component';
import { HeroProfileComponent } from './components/hero-profile.component/hero-profile.component';
import { AdDirective } from './components/directives/ad.directive';
import { AdService } from './services/ad.service';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ]
})
export class AppModule { }
