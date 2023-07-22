import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../list.service';
import { Pet } from '../list.model';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.page.html',
  styleUrls: ['./list-detail.page.scss'],
})
export class ListDetailPage implements OnInit {
  loadedPet: Pet | null = null;

  constructor(private activatedRoute: ActivatedRoute, private listService: ListService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('petId')) {
        return;
      }
      const petId = paramMap.get('petId');
      if (petId) {
        const id = Number(petId);
        this.loadedPet = this.listService.getPet(id);
      }
    });
  }  

  isImageLarge(imageUrl: string | undefined): boolean {
    if (!imageUrl) {
      return false;
    }

    const img = new Image();
    img.src = imageUrl;

    return (img.height > 400);
  }
}