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
      logo_url: 'assets/img/new-logo.png'
    },
    {
      name: 'Quick Discipleship Movement',
      logo_url: 'assets/img/new-logo.png'
    },
    {
      name: 'United Christian of Balayan',
      logo_url: 'assets/img/new-logo.png'
    },
    {
      name: 'God Bless Batangas',
      logo_url: 'assets/img/new-logo.png'
    },
    {
      name: 'Champion Audio System ',
      logo_url: 'assets/img/new-logo.png'
    },
  ]
}
