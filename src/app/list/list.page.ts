import { Component, OnInit } from '@angular/core';
import { Pet } from './list.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  pets: Pet[] = [];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.pets = this.listService.getAllPets();
  }

  onSave(pet: Pet) {
    this.listService.onSave(pet);
  }
}

