import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shopping_cart_items: any[] = [];

  constructor() {}

  addProduct = (product: any) => {
    let items = this.get_shopping_cart_items();
    if (items) {
      items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(items));
    } else {
      console.log('noo');
      this.shopping_cart_items.push(product);
      localStorage.setItem(
        'shopping_cart',
        JSON.stringify(this.shopping_cart_items)
      );
    }
    // console.log('added', product);
    // localStorage.setItem('shopping_cart', JSON.stringify(product));
  };

  get_shopping_cart_items = () => {
    let items: any = localStorage.getItem('shopping_cart');
    return JSON.parse(items);
  };

  getCartLength = () => {
    let items = this.get_shopping_cart_items();
    return items ? this.get_shopping_cart_items().length : 0;
  };
}
