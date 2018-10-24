import { AbstractItemsService } from './abstract-items.service';
import { Injectable } from '@angular/core';
import { Item } from '../_modelo/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {
	items: Item[];

	constructor() {
		super();
		this.items = [new Item("Comprar carne"), new Item("Comprar verduras"), new Item("Comprar carbón"), new Item("Aprobar el curso")];
	}

	add(item: Item):Observable<Item[]> {
		this.items.push(item);

		return new Observable ((observable) => {
			observable.next(this.items);
			observable.complete();
		});
	}

	getItems():Observable<Item[]> {
		return new Observable ((observable) => {
			observable.next(this.items);
			observable.complete();
		});
	}

	remove(item: Item):Observable<Item[]> {
		this.items = this.items.filter(removedItem => removedItem !== item);

		return new Observable ((observable) => {
			observable.next(this.items);
			observable.complete();
		});
	}
}
