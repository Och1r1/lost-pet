import { Component, Output, EventEmitter } from '@angular/core';
import { Pet } from '../list.model';
import { ListService } from '../list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {

  @Output() save = new EventEmitter<Pet>();

  pet: Pet = {
    id: 0,
    name: '',
    type: '',
    petType: '',
    collar: '',
    age: 0,
    image: '',
    info: '',
    lostDate: new Date(),
    lastSeen: '',
    address: '',
    mobile: 0,
    email: '',
  };

  constructor(private listService: ListService, private router: Router) {}

  clear() {
    this.pet = {
      id: 0,
      name: '',
      type: '',
      petType: '',
      collar: '',
      age: 0,
      image: '',
      info: '',
      lostDate: new Date(),
      lastSeen: '',
      address: '',
      mobile: 0,
      email: '',
    };
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result as string;
      this.pet.image = imageDataUrl; // Assign the base64 data URL to pet.image
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (
      this.pet.name === '' ||
      this.pet.type === '' ||
      this.pet.petType === '' ||
      this.pet.collar === '' ||
      this.pet.age === 0 ||
      this.pet.image === '' ||
      this.pet.info === '' ||
      this.pet.lostDate === null ||
      this.pet.lastSeen === '' ||
      this.pet.address === '' ||
      this.pet.mobile === 0 ||
      this.pet.email === ''
    ) {
      alert('Please insert every information!');
    } else {
      this.listService.onSave(this.pet);
      this.clear();
      this.router.navigate(['/list']);
    }
  }  
}
