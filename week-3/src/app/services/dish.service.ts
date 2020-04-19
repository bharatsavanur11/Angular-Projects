import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

   getDishes(): Promise<Dish[]> {
     return Promise.resolve(DISHES);
   }

   getDish(id: String) : Promise<Dish> {
    //use arrow function
    return Promise.resolve(DISHES.filter((dish)=> (dish.id === id))[0]);
   }

   getFeatured() : Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish)=>(dish.featured))[0]);
   }

}
