import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion.service';
import { DishService } from '../services/dish.service';
import {Dish} from '../shared/dish';
import {Promotion} from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private promotionService: PromotionService,private dishService: DishService) { }

  dish : Dish;
  promotion: Promotion;


  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe((dish)=>this.dish = dish);
    this.promotion = this.promotionService.getFeatured();
  }

}
