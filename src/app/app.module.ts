import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VisionComponent } from './components/vision/vision.component';
import { MissionComponent } from './components/mission/mission.component';
import { CoreValuesComponent } from './components/core-values/core-values.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { CoreValuesPannerComponent } from './components/core-values-panner/core-values-panner.component';
import { Theme2024Component } from './components/theme-2024/theme-2024.component';
import { PartnersComponent } from './components/partners/partners.component';
import { TopicComponent } from './components/topic/topic.component';


import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    HeaderComponent,
    VisionComponent,
    MissionComponent,
    CoreValuesComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    TopicComponent,
    CoreValuesPannerComponent,
    Theme2024Component,
    PartnersComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
