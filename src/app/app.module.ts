import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VisionComponent } from './components/vision/vision.component';
import { MissionComponent } from './components/mission/mission.component';
import { CoreValuesComponent } from './components/core-values/core-values.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisionComponent,
    MissionComponent,
    CoreValuesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
