import { Component, OnInit } from '@angular/core';
import { Item } from "../_modelo/item";
import { MockItemsService } from '../_services/mock-items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	items: Item[];

  constructor(private service: MockItemsService) {
  	this.service.getItems().subscribe(serviceItems => {
  		this.items = serviceItems;
  	});
  }

  ngOnInit() {
  }

  onEdit(item: Item) {
  	// this.items
  }

  onRemove(item: Item) {
  	this.service.remove(item).subscribe(serviceItems => {
  		this.items = serviceItems;
  	});
  }

}
