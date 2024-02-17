import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-core-values-panner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core-values-panner.component.html',
  styleUrl: './core-values-panner.component.css'
})
export class CoreValuesPannerComponent {

  constructor(private _sanitizer: DomSanitizer) {}
  
  images = [
    {
      src: "assets/img/contents/testimony/patricia_2.jpg",
      title: `<span class='item-title-initials'>i</span>ntegrity`,
      content: 'Morally and biblically sounded in all practice and willing to be disciplined.'
    },
    {
      src: "assets/img/contents/testimony/pastor_ralph_2.jpg",
      title: `<span class='item-title-initials'>m</span>odesty`,
      content: 'Humble not arrogant express in spirit of submission to God and those who are in authorithy over one soul and reflect in anomity.'
    },
    {
      src: "assets/img/contents/testimony/patricia_2.jpg",
      title: `<span class='item-title-initials'>p</span>rayer`,
      content: 'A House of Prayer for the community that express total dependency to God Ministry of Prayer.'
    },
    {
      src: "assets/img/contents/testimony/patricia_2.jpg",
      title: `<span class='item-title-initials'>a</span>biding`,
      content: 'Unworthly servants that commitment is firm and strong, and in faith offered sacrificial giving.'
    },
    {
      src: "assets/img/contents/testimony/pastor_ralph_2.jpg",
      title: `<span class='item-title-initials'>c</span>lever`,
      content: 'Excellent of what is good and innocent of evil and it will manifest in complete and holistic ministry wise leaders and yet gentle and it will display through teachability.'
    },
    {
      src: "assets/img/contents/testimony/patricia_2.jpg",
      title: `<span class='item-title-initials'>t</span>raining`,
      content: 'Utilize the word of God as the sole and ultimate tools for rebuke, correction, teaching and training in righteousness. Ministry of the word.'
    },
  ];

  selectedIndex = 0;

  readHTML(image:any) {
    return this._sanitizer.bypassSecurityTrustHtml(`${image}`);
  }

  showPrev(i:any) {
    if(this.selectedIndex > 0) {

      setTimeout(() => {
        this.selectedIndex = i - 1;
      }, 300);
      
    }
  }

  showNext(i:any) {
    if(this.selectedIndex < this.images.length - 1) {
      // this.selectedIndex = i + 1;
      setTimeout(() => {
        this.selectedIndex = i + 1;
      }, 300);
    }
  }
  
}
