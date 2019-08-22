import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { RecipeListComponent } from './cookMyOwn/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './cookMyOwn/recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './cookMyOwn/recipe-items/recipe-items.component';
import { NewRecipeComponent } from './cookMyOwn/new-recipe/new-recipe.component';
import { RatingsComponent } from './cookMyOwn/ratings/ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemsComponent,
    NewRecipeComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
