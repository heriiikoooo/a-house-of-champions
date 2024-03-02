import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit  {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  currentPos:any;

  showTheme =  false;


  ngOnInit(): void {
    if(localStorage.getItem('showTheme')) {
      this.showTheme = true;
    }
    else{
      this.showTheme = false;
    }
  }

  // ngOnInit(): void {
  //   const scrollPos = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   console.log(scrollPos)

  //   // window.scrollTo({ top: 0, behavior: 'smooth' });
  //   this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'position', 'fixed');
  //   // this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'display', 'none');
  //   this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'position', 'absolute');
  // }

  // @HostListener('window:scroll', [])
  // onWindowScroll(){
  //   const scrollPos = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   this.runScrollListener(scrollPos);
  // }

  // runScrollListener(scrollPos:any) {
  //   console.log('position : '  + scrollPos)
  //   if(scrollPos < 120) { 
  //     this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'position', 'absolute');
  //     this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'background', 'transparent');
  //     this.renderer.setStyle(this.el.nativeElement.querySelector ('#toggler-icon'), 'background', `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`);

  //     const navitems: HTMLElement = this.el.nativeElement;
  //     navitems.querySelectorAll('.animated-items').forEach((domElement) => {
  //       domElement.classList.remove('fill-text-color-pattele');
  //     })

  //     const dom: HTMLElement = this.el.nativeElement;
  //     dom.querySelectorAll('.header-social-icons .items svg  path').forEach((domElement) => {
  //       domElement.classList.remove('fill-icons-black');
  //     })
  //   }

  //   if(scrollPos > 120) {
  //     this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'position', 'fixed');

  //     this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'background', 'rgba(255, 255, 255, 0.'+(scrollPos + 100)+')');
  //     this.renderer.setStyle(this.el.nativeElement.querySelector ('#toggler-icon'), 'background', `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`);

  //     const navitems: HTMLElement = this.el.nativeElement;
  //     navitems.querySelectorAll('.animated-items').forEach((domElement) => {
  //       domElement.classList.remove('fill-text-color-pattele');
  //     })

  //     const dom: HTMLElement = this.el.nativeElement;
  //     dom.querySelectorAll('.header-social-icons .items svg  path').forEach((domElement) => {
  //       domElement.classList.remove('fill-icons-black');
  //     })
  //   }
   
  //   if(scrollPos > 190) {
  //     this.renderer.setStyle(this.el.nativeElement.querySelector ('#ahoc-navbar'), 'background', 'white');
  //     // this.renderer.setStyle(this.el.nativeElement.querySelector ('#ahoc-navbar'), 'transition', 'initial 5s ease-in');
  //     this.renderer.setStyle(this.el.nativeElement.querySelector ('#toggler-icon'), 'background', `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(123, 18, 30, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`);

  //     const navitems: HTMLElement = this.el.nativeElement;
  //     navitems.querySelectorAll('.animated-items').forEach((domElement) => {
  //       domElement.classList.add('fill-text-color-pattele');
  //     })

  //     const dom: HTMLElement = this.el.nativeElement;
  //     const header = dom.querySelectorAll('#ahoc-navbar');
  //     header.forEach((domElement) => {
  //       domElement.classList.add('scrollheader');
  //     })
  //     const elements = dom.querySelectorAll('.header-social-icons .items svg  path');
  //     elements.forEach((domElement) => {
  //       domElement.classList.add('fill-icons-black');
  //     })
  //   }

  //   if(scrollPos > 700 ) { //if(scrollPos > 700 && (this.currentPos > scrollPos)) {
  //     this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'display', 'block');
  //   }
  //   else{
  //     // this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'display', 'none');
  //   }


  //   if(scrollPos > 5060 ) { //if(scrollPos > 700 && (this.currentPos > scrollPos)) {
  //     this.renderer.setStyle(this.el.nativeElement.querySelector('#ahoc-navbar'), 'display', 'none');
  //   }


  //   this.currentPos = scrollPos;
  // }

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
