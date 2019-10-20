import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NurseryComponent } from './nursery/nursery.component';
import { EventsComponent } from './events/events.component';
import { TeaRoomComponent } from './tea-room/tea-room.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlantmaintComponent } from './forms/plantmaint/plantmaint.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NurseryComponent,
    EventsComponent,
    TeaRoomComponent,
    PlantListComponent,
    PlantDetailComponent,
    PageNotFoundComponentComponent,
    PageNotFoundComponent,
    PlantmaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
