import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {
  // slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  slides:any = []
  constructor() { }

  ngOnInit(): void {
    this.slides = [
      {
        name: "Patricia Anne Politico",
        position: 'Member',
        picture: 'assets/img/contents/testimony/patricia_2.jpg',
        background: 'assets/img/contents/testimony/bg/pat_BG.jpg',
        testimony: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
      },
      {
        name: "Ralph Dominic Aquiz",
        position: 'Local Pastor',
        picture: 'assets/img/contents/testimony/pastor_ralph_2.jpg',
        background: 'assets/img/contents/testimony/bg/ralph_BG.jpg',
        testimony: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
      },
      {
        name: "Angelito Pastorin",
        position: 'Local Pastor',
        picture: 'assets/img/contents/testimony/pastor_angel_2.jpg',
        background: 'assets/img/contents/testimony/bg/angel_BG.jpg',
        testimony: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
      },
      {
        name: "Ma. Neil Abuela",
        position: 'Member',
        picture: 'assets/img/contents/testimony/maneil_2.jpg',
        background: 'assets/img/contents/testimony/bg/maneil_BG.jpg',
        testimony: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
      },
      {
        name: "Bezaleel Josue Ganadin",
        position: 'Member',
        picture: 'assets/img/contents/testimony/joshh_2.jpg',
        background: 'assets/img/contents/testimony/bg/josh_BG.jpg',
        testimony: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
      },
      {
        name: "Earl Lorenz Mendoza",
        position: 'Member',
        picture: 'assets/img/contents/testimony/earl_2.jpg',
        background: 'assets/img/contents/testimony/bg/earl_BG.jpg',
        testimony: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
      },
      {
        name: "Ronnel Vargas",
        position: 'Member',
        picture: 'assets/img/contents/testimony/macky_2.jpg',
        background: 'assets/img/contents/testimony/bg/macky_BG.jpg',
        testimony: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
      }
    ]
  }
}
