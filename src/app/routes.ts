import { Routes} from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';

export const appRoutes: Routes = [
  { path : 'home', component: PortafolioComponent },
  { path : 'about', component: AboutComponent},
  { path : 'item/:id', component: ItemComponent},
  { path : 'search/:texto', component: SearchComponent},
  { path : '**', pathMatch: 'full', redirectTo: 'home'}
];
