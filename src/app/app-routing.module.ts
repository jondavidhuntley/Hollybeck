import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NurseryComponent } from './nursery/nursery.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { EventsComponent } from './events/events.component';
import { TeaRoomComponent } from './tea-room/tea-room.component';

const appRoutes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'tearoom', component: TeaRoomComponent },
  { path: 'nursery', component: NurseryComponent },
  { path: 'plant/:id',      component: PlantDetailComponent },
  {
    path: 'plants',
    component: PlantListComponent,
    data: { title: 'Our Plants' }
  },
  { path: '',
    redirectTo: '/plants',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
