import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    const scrollPos = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollPos > 10 && scrollPos < 20) {
      console.log('change na')
    // this.renderer.addClass(this.el.nativeElement.querySelector('#ahoc-navbar'), 'border')
    this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'position', 'fixed')
      this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'background', 'rgba(255, 255, 255, 0.300)')
    }
    else if(scrollPos > 20 && scrollPos < 30) {
      this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'background', 'rgba(255, 255, 255, 0.600)')
    }
    else if(scrollPos > 30 && scrollPos < 50) {
      this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'background', 'rgba(255, 255, 255, 0.800)')
    }
    else if(scrollPos > 50) {
      this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'background', 'white')
    }
    else {
      this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'background', 'transparent')
    }
  }

  scrollToTarget(id:string) {
    let targetEl =  this.el.nativeElement.querySelector('#'+id)
      console.log(targetEl)

      if(targetEl) {
        targetEl.scrollIntoView(
          {
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          }
        )
      }
    
  }

}
