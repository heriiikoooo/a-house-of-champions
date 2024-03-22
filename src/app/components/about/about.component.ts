import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, transition, style, animate, state, group } from '@angular/animations';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('showMe', [
        state('closed', style({
            display: 'none',
        })),
        state('open', style({
            display: 'block'
        })),
        // transition('* => *', animate(200))
        transition('closed => open', [
          group([
            animate('600ms ease-in-out', style({
              'opacity': '0'
            })),
          ])
        ]),
    ]),
  ]
})
export class AboutComponent {
  pipes!: [TruncatePipe];

  constructor(private _sanitizer: DomSanitizer) {}

  slides= [
    {
      background_url: 'assets/img/contents/history/1.jpg',
    },
    {
      background_url: 'assets/img/contents/history/2.jpg',
    },
    {
      background_url: 'assets/img/contents/history/3.jpg',
    },
    {
      background_url: 'assets/img/contents/history/4.jpg',
    },
    {
      background_url: 'assets/img/contents/history/5.jpg',
    },
    {
      background_url: 'assets/img/contents/history/6.jpg',
    },
    {
      background_url: 'assets/img/contents/history/7.jpg',
    },
    {
      background_url: 'assets/img/contents/history/8.jpg',
    },
    {
      background_url: 'assets/img/contents/history/9.jpg',
    },
    {
      background_url: 'assets/img/contents/history/10.jpg',
    },
    {
      background_url: 'assets/img/contents/history/11.jpg',
    },
    {
      background_url: 'assets/img/contents/history/12.jpg',
    }
  ]

  showHistory = false;

  state = "closed";

  historyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel cursus massa. Pellentesque interdum commodo fermentum. Morbi scelerisque sagittis magna ac bibendum. Praesent vitae neque in leo vehicula rutrum. Cras sit amet lobortis libero. Cras quis scelerisque tellus. Nulla laoreet purus non lacus aliquam vulputate. Ut viverra placerat tortor, ac luctus mi venenatis vitae. Vestibulum sagittis libero enim, id porttitor nulla gravida at. Duis quis malesuada tellus, quis posuere nisi. Donec vitae dui at ex vestibulum eleifend non vel magna. Vestibulum tempus sed est et viverra. Nunc tempus eros vitae convallis accumsan. Mauris vestibulum eu felis ut aliquam. Sed dapibus quam eget feugiat faucibus.`;

  changeState(): void {
    (this.state == "closed") ? this.state = "open" : this.state = "closed";
  }

  items = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="about-svg-icons" viewBox="0 0 24 24"><path fill="#7B121E" d="M17.997 18h-.998c0-1.552.06-1.775-.88-1.993-1.438-.332-2.797-.645-3.293-1.729-.18-.396-.301-1.048.155-1.907 1.021-1.929 1.277-3.583.702-4.538-.672-1.115-2.707-1.12-3.385.017-.576.968-.316 2.613.713 4.512.465.856.348 1.51.168 1.908-.49 1.089-1.836 1.4-3.262 1.728-.982.227-.92.435-.92 2.002h-.995l-.002-.623c0-1.259.1-1.985 1.588-2.329 1.682-.389 3.344-.736 2.545-2.209-2.366-4.365-.676-6.839 1.865-6.839 2.492 0 4.227 2.383 1.867 6.839-.775 1.464.824 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.81-2.214c-1.289-.298-2.489-.559-1.908-1.657 1.77-3.342.47-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.325 0 1.269.574 2.175.904 2.925h1.048c-.17-.75-1.466-2.562-.766-3.736.412-.692 1.704-.693 2.114-.012.38.631.181 1.812-.534 3.161-.388.733-.28 1.301-.121 1.648.305.666.977.987 1.737 1.208 1.507.441 1.368.042 1.368 1.48h.997l.002-.463c0-.945-.074-1.492-1.193-1.75zm-22.805 2.214h.997c0-1.438-.139-1.039 1.368-1.48.761-.221 1.433-.542 1.737-1.208.159-.348.267-.915-.121-1.648-.715-1.349-.914-2.53-.534-3.161.41-.682 1.702-.681 2.114.012.7 1.175-.596 2.986-.766 3.736h1.048c.33-.75.904-1.656.904-2.925.001-1.509-.982-2.326-2.247-2.326-1.87 0-3.17 1.787-1.4 5.129.581 1.099-.619 1.359-1.908 1.657-1.12.258-1.194.805-1.194 1.751l.002.463z"/></svg>`,
      title: 'Members',
      data: '70,000'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="about-svg-icons" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path fill="#7B121E"d="M22 21c.53 0 1.039.211 1.414.586.376.375.586.884.586 1.414v1h-6v-1c0-1.104.896-2 2-2h2zm-7 0c.53 0 1.039.211 1.414.586.376.375.586.884.586 1.414v1h-6v-1c0-1.104.896-2 2-2h2zm7 1h-2c-.551 0-1 .448-1 1h4c0-.564-.461-1-1-1zm-7 0h-2c-.551 0-1 .448-1 1h4c0-.564-.461-1-1-1zm-6.758-1.216c-.025.679-.576 1.21-1.256 1.21-.64 0-1.179-.497-1.254-1.156l-.406-4.034-.317 4.019c-.051.656-.604 1.171-1.257 1.171-.681 0-1.235-.531-1.262-1.21l-.262-6.456-.308.555c-.241.437-.8.638-1.265.459-.404-.156-.655-.538-.655-.951 0-.093.012-.188.039-.283l1.134-4.098c.17-.601.725-1.021 1.351-1.021h4.096c.511 0 1.012-.178 1.285-.33.723-.403 2.439-1.369 3.136-1.793.394-.243.949-.147 1.24.217.32.396.286.95-.074 1.297l-3.048 2.906c-.375.359-.595.849-.617 1.381-.061 1.397-.3 8.117-.3 8.117zm-5.718-10.795c-.18 0-.34.121-.389.294-.295 1.04-1.011 3.666-1.134 4.098l1.511-2.593c.172-.295.623-.18.636.158l.341 8.797c.01.278.5.287.523.002 0 0 .269-3.35.308-3.944.041-.599.449-1.017.992-1.017.547.002.968.415 1.029 1.004.036.349.327 3.419.385 3.938.043.378.505.326.517.022 0 0 .239-6.725.3-8.124.033-.791.362-1.523.925-2.061l3.045-2.904c-.661.492-2.393 1.468-3.121 1.873-.396.221-1.07.457-1.772.457h-4.096zm18.476 6.011c-1.305 0-2.364 1.06-2.364 2.364 0 1.305 1.059 2.365 2.364 2.365s2.364-1.06 2.364-2.365c0-1.304-1.059-2.364-2.364-2.364zm-7 0c-1.305 0-2.364 1.06-2.364 2.364 0 1.305 1.059 2.365 2.364 2.365s2.364-1.06 2.364-2.365c0-1.304-1.059-2.364-2.364-2.364zm7 1c.752 0 1.364.612 1.364 1.364 0 .753-.612 1.365-1.364 1.365-.752 0-1.364-.612-1.364-1.365 0-.752.612-1.364 1.364-1.364zm-7 0c.752 0 1.364.612 1.364 1.364 0 .753-.612 1.365-1.364 1.365-.752 0-1.364-.612-1.364-1.365 0-.752.612-1.364 1.364-1.364zm10-2h-14.658v-1h7.658v-1h3v1h3v-13h-22v7l-1 3v-11h24v15zm-6-6h-4v-1h4v1zm-12.727-5c-1.278 0-2.315 1.038-2.315 2.316 0 1.278 1.037 2.316 2.315 2.316s2.316-1.038 2.316-2.316c0-1.278-1.038-2.316-2.316-2.316zm0 1c.726 0 1.316.59 1.316 1.316 0 .726-.59 1.316-1.316 1.316-.725 0-1.315-.59-1.315-1.316 0-.726.59-1.316 1.315-1.316zm15.727 2h-7v-1h7v1zm0-2h-7v-1h7v1z"/></svg>`,
      title: 'Pastors',
      data: 120
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="about-svg-icons" viewBox="0 0 24 24" ><path fill="#7B121E" d="M21 24h-18v-4.144l4-3.536v-3.9l5-4.42 5 4.42v3.904l4 3.536v4.14zm-8-1v-3c0-.552-.448-1-1-1s-1 .448-1 1v3h2zm2-1h4v-1.239l-4-3.535v-3.905l-3-2.652-3 2.652v3.901l-4 3.535v1.243h4v-2c0-1.656 1.344-3 3-3s3 1.344 3 3v2zm3-8.849l6 5.356-1.328 1.493-4.672-4.184v-2.665zm-12 0l-6 5.356 1.328 1.493 4.672-4.184v-2.665zm7 2.849h-2v-2c0-.552.448-1 1-1s1 .448 1 1v2zm0-14h2v2h-2v.751l7 6.249-1.328 1.493-6.672-5.975-6.672 5.975-1.328-1.493 7-6.22v-.78h-2v-2h2v-2h2v2z"/></svg>`,
      title: 'Churches',
      data: 100
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="about-svg-icons" viewBox="0 0 24 24"><path  fill="#7B121E" d="M4 8v12h20v-12h-20zm10 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm.2-2.021v.421h-.4v-.4c-.414-.007-.843-.105-1.2-.291l.183-.657c.382.148.891.305 1.29.216.46-.104.555-.577.046-.806-.373-.172-1.512-.321-1.512-1.296 0-.545.415-1.034 1.193-1.141v-.425h.4v.407c.289.007.615.058.978.168l-.146.658c-.307-.107-.647-.206-.977-.185-.595.035-.648.551-.232.767.685.321 1.578.561 1.578 1.418 0 .687-.538 1.054-1.201 1.146zm6.8-9.979h-19v11h-2v-13h21v2z"/></svg>`,
      title: 'Donations',
      data: '100,000'
    }
    
    
    
  ];

  getSVGImage(image:any) {
    return this._sanitizer.bypassSecurityTrustHtml(`${image}`);
  }


  fn() {
    
  }

  history() {
    this.showHistory =  !this.showHistory;
    
  }
}
