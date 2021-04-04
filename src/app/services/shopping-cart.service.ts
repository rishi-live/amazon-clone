import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}
  addProduct = (product: any ) => {
    console.log('added', product);

    //localStorage.setItem('shopping_cart',product)
  };
}
