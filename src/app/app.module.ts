import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CSVtoJSON } from './csv-to-json';
import { DataService } from './services/data/data.service';

import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ShowDataComponent } from './components/pages/show-data/show-data.component';


const appRoutes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'show-data', component: ShowDataComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    HomeComponent,
    ShowDataComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CSVtoJSON, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
