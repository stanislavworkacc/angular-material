import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { ButtonsComponent } from './buttons/buttons.component';
import {RouterModule, Routes} from "@angular/router";
import { FirstComponent } from './first/first.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';
import { IconsComponent } from './icons/icons.component';
import { BadgeComponent } from './badge/badge.component';
import { ProgressComponent } from './progress/progress.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { ExppanelComponent } from './exppanel/exppanel.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'button', component: ButtonsComponent},
  {path: 'form', component: FormComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'badge', component: BadgeComponent},
  {path: 'spiner', component: ProgressComponent},
  {path: 'toolbar', component: NavbarComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'list', component: ListComponent},
  {path: 'grid', component: GridComponent},
  {path: 'exppanel', component: ExppanelComponent},
  {path: 'card', component: CardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    FirstComponent,
    FormComponent,
    IconsComponent,
    BadgeComponent,
    ProgressComponent,
    NavbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridComponent,
    ExppanelComponent,
    CardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
