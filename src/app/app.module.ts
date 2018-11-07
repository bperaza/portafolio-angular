import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SearchComponent } from './search/search.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      PortafolioComponent,
      AboutComponent,
      ItemComponent,
      SearchComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes, {useHash: true})
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
