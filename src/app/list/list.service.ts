import { Injectable } from '@angular/core';
import { Pet } from './list.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private pets: Pet[] = [
    {
      id: 1,
      name: 'Oscar',
      image:
        'https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=2000',
      age: 1,
      type: 'Cat',
      petType: 'Tonkinese',
      collar: 'brown',
      info: 'no tail',
      lostDate: new Date('2023-03-15'),
      lastSeen: 'Chinggis Khaan Street, Darkhan, Darkhan-Uul Province, 3rd Khoroo, Building 8, Apartment 3',
      address: 'Ulaanbaatar, Bayanzurkh District, 1st Khoroo, Peace Avenue, 5th Building',
      mobile: 99114738,
      email: 'tuvshinbayar.ganbaatar@gmail.com'
    },
    {
      id: 2,
      name: 'Rex',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
      age: 6,
      type: 'Dog',
      petType: 'Golden Retriever',
      collar: 'none',
      info: 'blue eye',
      lostDate: new Date('2023-01-15'),
      lastSeen: 'Peace Avenue, Ulaanbaatar, Sukhbaatar District, 4th Khoroo, Building 12, Apartment 5',
      address: 'Ulaanbaatar, Chingeltei District, 12th Subdistrict, 5th District',
      mobile: 88118203,
      email: 'boldoo1987@gmail.com',
    },
    {
      id: 3,
      name: 'Bella',
      image:
        'https://www.thesprucepets.com/thmb/38EI-zLR_Rac46T-Xy6G0ulBmNs=/3000x0/filters:no_upscale():strip_icc()/cute-teacup-dog-breeds-4587847-hero-4e1112e93c68438eb0e22f505f739b74.jpg',
      age: 4,
      type: 'Dog',
      petType: 'Pomeranian',
      collar: 'none',
      info: '1 leg is injured',
      lostDate: new Date('2023-06-1'),
      lastSeen: 'Ulaanbaatar Hotel, Sukhbaatar Square, Ulaanbaatar 14200, Mongolia',
      address: 'Gorkhi-Terelj National Park, Bayanzurkh District, Ulaanbaatar 17032, Mongolia',
      mobile: 88043334,
      email: 'otgonbayar88@yahoo.mn',
    },
    {
      id: 4,
      name: 'Luna',
      image:
        'https://media-be.chewy.com/wp-content/uploads/2016/12/31165155/cats-the-dont-shed.jpg',
      age: 3,
      type: 'Cat',
      petType: 'Siamese',
      collar: 'blue',
      info: 'grey',
      lostDate: new Date('2023-06-06'),
      lastSeen: 'Ulaanbaatar, Sukhbaatar District, Ulaanbaatar 14200, Mongolia',
      address: 'Seoul Street, Bayanzurkh District, Ulaanbaatar 17011, Mongolia',
      mobile: 99027676,
      email: 'mongoliancatlover23@gmail.mn',
    },
  ];

  constructor() {}

  getAllPets() {
    return this.pets;
  }
  
  getPet(id: number): Pet | null {
    const pet = this.pets.find((pet) => pet.id === id);
    return pet || null;
  }  
  
  onSave(pet: Pet) {
    if (pet.id === 0) {
      const sorted = this.pets.sort((a, b) => b.id - a.id);
      const newId = sorted.length === 0 ? 1 : sorted[0].id + 1;
      const newPet: Pet = { ...pet, id: newId };
      this.pets.unshift(newPet);
    } else {
      const index = this.pets.findIndex(item => item.id === pet.id);
      if (index > -1) {
        this.pets[index] = pet;
      }
    }
  }    
}