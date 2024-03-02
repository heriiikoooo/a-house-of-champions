import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent implements OnInit, AfterViewInit {

  @ViewChild('progressBar') progressBar: ElementRef | undefined;
  @ViewChild('slider') slider: ElementRef | undefined;

  _progressBar:any;

  topics = [
    {
      img: 'assets/img/contents/topic/topic-img.png',
      title: 'Lord is Sufficient for all of our needs',
      preacher: 'Pastor Mark Joseph Marquez',
      date: 'January 01, 2024',
      highlights: `A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      
      `,
      link: 'https://www.facebook.com/ahouseofchampions/videos/7433714430038713'
    },
    {
      img: 'assets/img/contents/topic/topic-img_2.jpg',
      title: 'Lord is Sufficient for all of our needs',
      preacher: 'Pastor Mark Joseph Marquez',
      date: 'January 01, 2024',
      highlights: `A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      
      `,
      link: 'https://www.facebook.com/ahouseofchampions/videos/7433714430038713'
    },
    {
      img: 'assets/img/contents/topic/topic-img_2.jpg',
      title: 'Lord is Sufficient for all of our needs',
      preacher: 'Pastor Mark Joseph Marquez',
      date: 'January 01, 2024',
      highlights: `A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      
      `,
      link: 'https://www.facebook.com/ahouseofchampions/videos/7433714430038713'
    },
    {
      img: 'assets/img/contents/topic/topic-img_2.jpg',
      title: 'Lord is Sufficient for all of our needs',
      preacher: 'Pastor Mark Joseph Marquez',
      date: 'January 01, 2024',
      highlights: `A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      
      `,
      link: 'https://www.facebook.com/ahouseofchampions/videos/7433714430038713'
    },
    {
      img: 'assets/img/contents/topic/topic-img_2.jpg',
      title: 'Lord is Sufficient for all of our needs',
      preacher: 'Pastor Mark Joseph Marquez',
      date: 'January 01, 2024',
      highlights: `A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      
      `,
      link: 'https://www.facebook.com/ahouseofchampions/videos/7433714430038713'
    },
    {
      img: 'assets/img/contents/topic/topic-img_2.jpg',
      title: 'Lord is Sufficient for all of our needs',
      preacher: 'Pastor Mark Joseph Marquez',
      date: 'January 01, 2024',
      highlights: `A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      
      `,
      link: 'https://www.facebook.com/ahouseofchampions/videos/7433714430038713'
    },
    {
      img: 'assets/img/contents/topic/topic-img_2.jpg',
      title: 'Lord is Sufficient for all of our needs',
      preacher: 'Pastor Mark Joseph Marquez',
      date: 'January 01, 2024',
      highlights: `A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      
      `,
      link: 'https://www.facebook.com/ahouseofchampions/videos/7433714430038713'
    },
    {
      img: 'assets/img/contents/topic/topic-img_2.jpg',
      title: 'Lord is Sufficient for all of our needs',
      preacher: 'Pastor Mark Joseph Marquez',
      date: 'January 01, 2024',
      highlights: `A small river named Duden flows by their place and supplies it with the necessary regelialia. 
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      
      `,
      link: 'https://www.facebook.com/ahouseofchampions/videos/7433714430038713'
    }
  ];


  constructor(private renderer: Renderer2) { }
  
  ngOnInit(): void {

    
  }

  ngAfterViewInit(): void {
    this.calculateProgressBar();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    let handle;
    if ((event.target as HTMLElement).matches('.handle')) {
      handle = event.target as HTMLElement;
    } else {
      handle = (event.target as HTMLElement).closest('.handle');
    }
    if (handle != null) {
      this.onHandleClick(handle);
    }
  }


  // onHandleClick(handle:any) {
  //   const progressBar = handle.closest('.progress-row').querySelector('.progress-bar');
  //   const slider = handle.closest('.topic-overflow-wrapper').querySelector('.slider');
  //   const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
  //   const progressBarItemCount = progressBar.children.length;

  //   if (handle.classList.contains('left-handle')) {
  //     // Your existing left-handle logic goes here
  //   }

  //   if (handle.classList.contains('right-handle')) {
  //     // Your existing right-handle logic goes here
  //   }
  // }


  onHandleClick(handle: any) {
    // const progressBar = handle.closest('.progress-row').querySelector('.progress-bar');
    const progressBar = document.querySelector('.progress-bar');
    console.log(progressBar?.innerHTML)
    console.log(progressBar?.children.length)
    // return;
    const slider = handle.closest('.topic-overflow-wrapper').querySelector('.slider');
    console.log(slider)
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
    const progressBarItemCount:any = progressBar?.children.length;

    console.log('slider', sliderIndex)
    console.log('progressBarItemCount', progressBarItemCount)

    console.log(handle)

    // if (this.renderer.hasClass(handle, 'left-handle')) {
    //   // Your existing left-handle logic goes here
    // }

    // if (this.renderer.hasClass(handle, 'right-handle')) {
    //   // Your existing right-handle logic goes here
    // }

       if (handle.classList.contains('left-handle')) {

        console.log('slider index')
        console.log(sliderIndex)

        if (sliderIndex == 0 )return;

        // if(sliderIndex == parent(progressBar?.children.length) ) return;

        if (sliderIndex - 1 < 0) {
          slider.style.setProperty("--slider-index", progressBarItemCount - 1)
          progressBar?.children[sliderIndex].classList.remove("active")
          progressBar?.children[progressBarItemCount - 1].classList.add("active")
        } else {
          slider.style.setProperty("--slider-index", sliderIndex - 1)
          progressBar?.children[sliderIndex].classList.remove("active")
          progressBar?.children[sliderIndex - 1].classList.add("active")
        }
      // Your existing left-handle logic goes here

      console.log('left')
    }

    if (handle.classList.contains('right-handle')) {
      // Your existing right-handle logic goes here
      console.log('slider index')
      console.log(sliderIndex)
      console.log(progressBarItemCount)
      if(sliderIndex == progressBarItemCount - 1 ) return;
      console.log('right')
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0)
        progressBar?.children[sliderIndex].classList.remove("active")
        progressBar?.children[0].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
        progressBar?.children[sliderIndex].classList.remove("active")
        progressBar?.children[sliderIndex + 1].classList.add("active")
      }
    }
  }


  throttleProgressBar = this.throttle(() => {
    document.querySelectorAll('.progress-bar').forEach(this.calculateProgressBar);
  }, 250);


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.throttleProgressBar();
  }

  // calculateProgressBar() {
  //   document.querySelectorAll('.progress-bar').forEach(progressBar => {
      
  //   });
  // }


  calculateProgressBar() {

    document.querySelectorAll('.progress-bar').forEach(progressBar => {
      progressBar.innerHTML = ""
  const slider:any = document.querySelector(".slider")
  const itemCount = slider?.children.length ?? 0
  const itemsPerScreen = parseInt(
    getComputedStyle(slider).getPropertyValue("--items-per-screen")
  )
  let sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  )
  const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)

  if (sliderIndex >= progressBarItemCount) {
    slider.style.setProperty("--slider-index", progressBarItemCount - 1)
    sliderIndex = progressBarItemCount - 1
  }

  for (let i = 0; i < progressBarItemCount; i++) {
    const barItem = document.createElement("div")
    barItem.classList.add("progress-item")
    if (i === sliderIndex) {
      barItem.classList.add("active")
    }
    progressBar.append(barItem)
  }
    });

    // console.log('this.progressBar', this.progressBar)
  //   let progressBar = document.querySelector('.progress-bar');
  // if (progressBar) {
    // Array.from(progressBar.children).forEach(c => c.innerHTML = '')
    
    // document.querySelectorAll('.progress-bar').forEach( n => n.remove() );
    // while()
    // if (this.progressBar) {
     
      // this.renderer.setProperty(progressBar, 'innerHTML', '');

      // const slider = document.querySelector('.slider');
      // console.log(slider)
      // const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
      // const progressBarItemCount:any = progressBar?.children.length;



      // const _slider = document.querySelector('.slider');
      // if (_slider) {
      //   const slider = _slider;
      //   const itemCount = slider.children.length;
      //   const itemsPerScreen = parseInt(
      //     getComputedStyle(slider).getPropertyValue('--items-per-screen')
      //   );
      //   let sliderIndex = parseInt(
      //     getComputedStyle(slider).getPropertyValue('--slider-index')
      //   );
      //   const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

      //   if (sliderIndex >= progressBarItemCount) {
      //     this.renderer.setStyle(slider, '--slider-index', `${progressBarItemCount - 1}`);
      //     sliderIndex = progressBarItemCount - 1;
      //   }

      //   for (let i = 0; i < progressBarItemCount; i++) {
      //     const barItem = this.renderer.createElement('div');
      //     this.renderer.addClass(barItem, 'progress-item');
      //     console.log(i)
      //     console.log(sliderIndex)
      //     if (i === sliderIndex) {
      //       this.renderer.addClass(barItem, 'active');
      //     }
      //     this.renderer.appendChild(progressBar, barItem);
      //   }
      // }


    //   const slider:any = document.querySelector(".slider")
    //   const itemCount = slider?.children.length
    //   const itemsPerScreen = parseInt(
    //     getComputedStyle(slider).getPropertyValue("--items-per-screen")
    //   )
    //   let sliderIndex = parseInt(
    //     getComputedStyle(slider).getPropertyValue("--slider-index")
    //   )
    //   const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)

    //   if (sliderIndex >= progressBarItemCount) {
    //     slider.style.setProperty("--slider-index", progressBarItemCount - 1)
    //     sliderIndex = progressBarItemCount - 1
    //   }

    //   for (let i = 0; i < progressBarItemCount; i++) {
    //     const barItem = document.createElement("div")
    //     barItem.classList.add("progress-item")
    //     if (i === sliderIndex) {
    //       barItem.classList.add("active")
    //     }
    //     progressBar.append(barItem)
    //   }
    // }

  }


  throttle(cb: Function, delay: number = 1000) {
    let shouldWait = false;
    let waitingArgs: any[] | null;

    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };

    return (...args: any[]) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }


 

  // onHandleClick(handle:any) {
  //   document.addEventListener("click", (e:any) => {
  //     console.log('hanah')
  //     let handle:any;
  //     if (e.target.matches(".handle")) {
  //       handle = e.target
  //     } else {
  //       handle = e.target.closest(".handle")
  //     }
  //     if (handle != null) this.onHandleClick(handle)
  //   })

  //   const throttleProgressBar = this.throttle(() => {
  //     document.querySelectorAll(".progress-bar").forEach(this.calculateProgressBar)
  //   }, 250)
    
  //   window.addEventListener("resize", throttleProgressBar)
    
  //   document.querySelectorAll(".progress-bar").forEach(this.calculateProgressBar)
  // }

  // calculateProgressBar(progressBar:any) {
  //   progressBar.innerHTML = ""
  //   const slider = progressBar.closest(".row").querySelector(".slider")
  //   const itemCount = slider.children.length
  //   const itemsPerScreen = parseInt(
  //     getComputedStyle(slider).getPropertyValue("--items-per-screen")
  //   )
  //   let sliderIndex = parseInt(
  //     getComputedStyle(slider).getPropertyValue("--slider-index")
  //   )
  //   const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)
  
  //   if (sliderIndex >= progressBarItemCount) {
  //     slider.style.setProperty("--slider-index", progressBarItemCount - 1)
  //     sliderIndex = progressBarItemCount - 1
  //   }
  
  //   for (let i = 0; i < progressBarItemCount; i++) {
  //     const barItem = document.createElement("div")
  //     barItem.classList.add("progress-item")
  //     if (i === sliderIndex) {
  //       barItem.classList.add("active")
  //     }
  //     progressBar.append(barItem)
  //   }
  // }


  // throttle(cb:any, delay:any = 1000) {
  //   let shouldWait = false
  //   let waitingArgs:any
  //   const timeoutFunc = () => {
  //     if (waitingArgs == null) {
  //       shouldWait = false
  //     } else {
  //       cb(...waitingArgs)
  //       waitingArgs = null
  //       setTimeout(timeoutFunc, delay)
  //     }
  //   }
  
  //   return (...args: any) => {
  //     if (shouldWait) {
  //       waitingArgs = args
  //       return
  //     }
  
  //     cb(...args)
  //     shouldWait = true
  //     setTimeout(timeoutFunc, delay)
  //   }
  // }
}
