import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {

  partners = [
    {
      name: 'Kazam',
      logo: ''
    },
    {
      name: 'Quick Discipleship Movement',
      logo: ''
    },
    {
      name: 'United Christian of Balayan',
      logo: ''
    },
    {
      name: 'God Bless Batangas',
      logo: ''
    },
    {
      name: 'Champion Audio System ',
      logo: ''
    },
  ]
}
