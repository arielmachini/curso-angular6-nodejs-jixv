import { Injectable } from '@angular/core';
import { Item } from '../../../_modelo/item';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractItemsService {

  constructor() { }

  abstract getItems():Observable<Item[]>;

  abstract remove():Observable<Item[]>;
}
