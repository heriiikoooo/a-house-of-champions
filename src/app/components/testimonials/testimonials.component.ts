import { Component, OnInit } from '@angular/core';

import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {
  // slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  slides:any = []
  testimony:any;
  isOpen = false;

  pipes!: [TruncatePipe];
  constructor() { }

  ngOnInit(): void {
    this.slides = [
      {
        name: "Patricia Anne Politico",
        position: 'Member',
        picture: 'assets/img/contents/testimony/patricia_2.jpg',
        background: 'assets/img/contents/testimony/bg/pat_BG.jpg',
        testimony: 
        `
        <p>Hi I am <span class="_testimonial_name">Bezaleel Josue L. Ganadin</span> and I am a pastor’s kid. Being a pastor’s kid is not like a bed of roses, there is still a lot of struggles, pain, and temptation. When I said temptation I ment being homosexual. </p>
        <p>I experienced the 5 types of harassment, physical, emotional, mental, sexual, and neglect, and after that felt si rejected by the world. I dwelt on it, I got played by rejection and the enemy make me believe that something is wrong with me and everything that happend to me is all my fault and because of that, I became rebellious. I refuse to serve God, I refuse to obey my parents because I became hostile to them and I entered a homosexual relationship hoping that it could fill the void inside me, hoping that I will be loved by someone who will not neglect me or reject me. I refuse to share the word of God and be a worship leader several times. </p>
        <p>But as they say, God will make a way when there’s seems to be no way.</p>
        <p>There is this one night I got tired of everything that has been happening to me, and because of that I ask God’s forgiveness. That night I surrendered my life to God  and I let God takeover of my filthy life. That one night every thing has changed. I broke up with my partner for 9 months and I started a new life with Jesus. Up until now I’m still struggling but this time I know how to fight, I know how to respond, and I know my real identity. I learned how to forgive and left everything because God told me that “not everything that weighs you down is yours to carry. I learned that God has a bigger plan for me and I learned that this ugly story will be a beautiful testimony</p>
        <p>Now, I am a songleader in our church, the leader of the evangelism ministry, a children ministry teacher, and a preacher. From that day forward, I promised God that I will walk in a manner worthy of His calling.</p>
        <p>Once again, I am Bezaleel Josue, rejected, but not by the Messiah.</p>
        `
      },
      {
        name: "Ralph Dominic Aquiz",
        position: 'Local Pastor',
        picture: 'assets/img/contents/testimony/pastor_ralph_2.jpg',
        background: 'assets/img/contents/testimony/bg/ralph_BG.jpg',
        testimony: 
        `
        <p>Hi I am <span class="_testimonial_name">Bezaleel Josue L. Ganadin</span> and I am a pastor’s kid. Being a pastor’s kid is not like a bed of roses, there is still a lot of struggles, pain, and temptation. When I said temptation I ment being homosexual. </p>
        <p>I experienced the 5 types of harassment, physical, emotional, mental, sexual, and neglect, and after that felt si rejected by the world. I dwelt on it, I got played by rejection and the enemy make me believe that something is wrong with me and everything that happend to me is all my fault and because of that, I became rebellious. I refuse to serve God, I refuse to obey my parents because I became hostile to them and I entered a homosexual relationship hoping that it could fill the void inside me, hoping that I will be loved by someone who will not neglect me or reject me. I refuse to share the word of God and be a worship leader several times. </p>
        <p>But as they say, God will make a way when there’s seems to be no way.</p>
        <p>There is this one night I got tired of everything that has been happening to me, and because of that I ask God’s forgiveness. That night I surrendered my life to God  and I let God takeover of my filthy life. That one night every thing has changed. I broke up with my partner for 9 months and I started a new life with Jesus. Up until now I’m still struggling but this time I know how to fight, I know how to respond, and I know my real identity. I learned how to forgive and left everything because God told me that “not everything that weighs you down is yours to carry. I learned that God has a bigger plan for me and I learned that this ugly story will be a beautiful testimony</p>
        <p>Now, I am a songleader in our church, the leader of the evangelism ministry, a children ministry teacher, and a preacher. From that day forward, I promised God that I will walk in a manner worthy of His calling.</p>
        <p>Once again, I am Bezaleel Josue, rejected, but not by the Messiah.</p>
        `
      },
      {
        name: "Angelito Pastorin",
        position: 'Local Pastor',
        picture: 'assets/img/contents/testimony/pastor_angel_2.jpg',
        background: 'assets/img/contents/testimony/bg/angel_BG.jpg',
        testimony: 
        `
        <p>Hi I am <span class="_testimonial_name">Bezaleel Josue L. Ganadin</span> and I am a pastor’s kid. Being a pastor’s kid is not like a bed of roses, there is still a lot of struggles, pain, and temptation. When I said temptation I ment being homosexual. </p>
        <p>I experienced the 5 types of harassment, physical, emotional, mental, sexual, and neglect, and after that felt si rejected by the world. I dwelt on it, I got played by rejection and the enemy make me believe that something is wrong with me and everything that happend to me is all my fault and because of that, I became rebellious. I refuse to serve God, I refuse to obey my parents because I became hostile to them and I entered a homosexual relationship hoping that it could fill the void inside me, hoping that I will be loved by someone who will not neglect me or reject me. I refuse to share the word of God and be a worship leader several times. </p>
        <p>But as they say, God will make a way when there’s seems to be no way.</p>
        <p>There is this one night I got tired of everything that has been happening to me, and because of that I ask God’s forgiveness. That night I surrendered my life to God  and I let God takeover of my filthy life. That one night every thing has changed. I broke up with my partner for 9 months and I started a new life with Jesus. Up until now I’m still struggling but this time I know how to fight, I know how to respond, and I know my real identity. I learned how to forgive and left everything because God told me that “not everything that weighs you down is yours to carry. I learned that God has a bigger plan for me and I learned that this ugly story will be a beautiful testimony</p>
        <p>Now, I am a songleader in our church, the leader of the evangelism ministry, a children ministry teacher, and a preacher. From that day forward, I promised God that I will walk in a manner worthy of His calling.</p>
        <p>Once again, I am Bezaleel Josue, rejected, but not by the Messiah.</p>
        `
      },
      {
        name: "Ma. Neil Abuela",
        position: 'Member',
        picture: 'assets/img/contents/testimony/maneil_2.jpg',
        background: 'assets/img/contents/testimony/bg/maneil_BG.jpg',
        testimony: 
        `
        <p>Hi I am <span class="_testimonial_name">Bezaleel Josue L. Ganadin</span> and I am a pastor’s kid. Being a pastor’s kid is not like a bed of roses, there is still a lot of struggles, pain, and temptation. When I said temptation I ment being homosexual. </p>
        <p>I experienced the 5 types of harassment, physical, emotional, mental, sexual, and neglect, and after that felt si rejected by the world. I dwelt on it, I got played by rejection and the enemy make me believe that something is wrong with me and everything that happend to me is all my fault and because of that, I became rebellious. I refuse to serve God, I refuse to obey my parents because I became hostile to them and I entered a homosexual relationship hoping that it could fill the void inside me, hoping that I will be loved by someone who will not neglect me or reject me. I refuse to share the word of God and be a worship leader several times. </p>
        <p>But as they say, God will make a way when there’s seems to be no way.</p>
        <p>There is this one night I got tired of everything that has been happening to me, and because of that I ask God’s forgiveness. That night I surrendered my life to God  and I let God takeover of my filthy life. That one night every thing has changed. I broke up with my partner for 9 months and I started a new life with Jesus. Up until now I’m still struggling but this time I know how to fight, I know how to respond, and I know my real identity. I learned how to forgive and left everything because God told me that “not everything that weighs you down is yours to carry. I learned that God has a bigger plan for me and I learned that this ugly story will be a beautiful testimony</p>
        <p>Now, I am a songleader in our church, the leader of the evangelism ministry, a children ministry teacher, and a preacher. From that day forward, I promised God that I will walk in a manner worthy of His calling.</p>
        <p>Once again, I am Bezaleel Josue, rejected, but not by the Messiah.</p>
        `
      },
      {
        name: "Bezaleel Josue Ganadin",
        position: 'Member',
        picture: 'assets/img/contents/testimony/joshh_2.jpg',
        background: 'assets/img/contents/testimony/bg/josh_BG.jpg',
        testimony: 
        `
        <p>Hi I am <span class="_testimonial_name">Bezaleel Josue L. Ganadin</span> and I am a pastor’s kid. Being a pastor’s kid is not like a bed of roses, there is still a lot of struggles, pain, and temptation. When I said temptation I ment being homosexual. </p>
        <p>I experienced the 5 types of harassment, physical, emotional, mental, sexual, and neglect, and after that felt si rejected by the world. I dwelt on it, I got played by rejection and the enemy make me believe that something is wrong with me and everything that happend to me is all my fault and because of that, I became rebellious. I refuse to serve God, I refuse to obey my parents because I became hostile to them and I entered a homosexual relationship hoping that it could fill the void inside me, hoping that I will be loved by someone who will not neglect me or reject me. I refuse to share the word of God and be a worship leader several times. </p>
        <p>But as they say, God will make a way when there’s seems to be no way.</p>
        <p>There is this one night I got tired of everything that has been happening to me, and because of that I ask God’s forgiveness. That night I surrendered my life to God  and I let God takeover of my filthy life. That one night every thing has changed. I broke up with my partner for 9 months and I started a new life with Jesus. Up until now I’m still struggling but this time I know how to fight, I know how to respond, and I know my real identity. I learned how to forgive and left everything because God told me that “not everything that weighs you down is yours to carry. I learned that God has a bigger plan for me and I learned that this ugly story will be a beautiful testimony</p>
        <p>Now, I am a songleader in our church, the leader of the evangelism ministry, a children ministry teacher, and a preacher. From that day forward, I promised God that I will walk in a manner worthy of His calling.</p>
        <p>Once again, I am Bezaleel Josue, rejected, but not by the Messiah.</p>
        `
      },
      {
        name: "Earl Lorenz Mendoza",
        position: 'Member',
        picture: 'assets/img/contents/testimony/earl_2.jpg',
        background: 'assets/img/contents/testimony/bg/earl_BG.jpg',
        testimony: 
        `
        <p>Hi I am <span class="_testimonial_name">Bezaleel Josue L. Ganadin</span> and I am a pastor’s kid. Being a pastor’s kid is not like a bed of roses, there is still a lot of struggles, pain, and temptation. When I said temptation I ment being homosexual. </p>
        <p>I experienced the 5 types of harassment, physical, emotional, mental, sexual, and neglect, and after that felt si rejected by the world. I dwelt on it, I got played by rejection and the enemy make me believe that something is wrong with me and everything that happend to me is all my fault and because of that, I became rebellious. I refuse to serve God, I refuse to obey my parents because I became hostile to them and I entered a homosexual relationship hoping that it could fill the void inside me, hoping that I will be loved by someone who will not neglect me or reject me. I refuse to share the word of God and be a worship leader several times. </p>
        <p>But as they say, God will make a way when there’s seems to be no way.</p>
        <p>There is this one night I got tired of everything that has been happening to me, and because of that I ask God’s forgiveness. That night I surrendered my life to God  and I let God takeover of my filthy life. That one night every thing has changed. I broke up with my partner for 9 months and I started a new life with Jesus. Up until now I’m still struggling but this time I know how to fight, I know how to respond, and I know my real identity. I learned how to forgive and left everything because God told me that “not everything that weighs you down is yours to carry. I learned that God has a bigger plan for me and I learned that this ugly story will be a beautiful testimony</p>
        <p>Now, I am a songleader in our church, the leader of the evangelism ministry, a children ministry teacher, and a preacher. From that day forward, I promised God that I will walk in a manner worthy of His calling.</p>
        <p>Once again, I am Bezaleel Josue, rejected, but not by the Messiah.</p>
        `
      },
      {
        name: "Romel Vargas",
        position: 'Member',
        picture: 'assets/img/contents/testimony/macky_2.jpg',
        background: 'assets/img/contents/testimony/bg/macky_BG.jpg',
        testimony: 
        `
        <p>Hi I am <span class="_testimonial_name">Bezaleel Josue L. Ganadin</span> and I am a pastor’s kid. Being a pastor’s kid is not like a bed of roses, there is still a lot of struggles, pain, and temptation. When I said temptation I ment being homosexual. </p>
        <p>I experienced the 5 types of harassment, physical, emotional, mental, sexual, and neglect, and after that felt si rejected by the world. I dwelt on it, I got played by rejection and the enemy make me believe that something is wrong with me and everything that happend to me is all my fault and because of that, I became rebellious. I refuse to serve God, I refuse to obey my parents because I became hostile to them and I entered a homosexual relationship hoping that it could fill the void inside me, hoping that I will be loved by someone who will not neglect me or reject me. I refuse to share the word of God and be a worship leader several times. </p>
        <p>But as they say, God will make a way when there’s seems to be no way.</p>
        <p>There is this one night I got tired of everything that has been happening to me, and because of that I ask God’s forgiveness. That night I surrendered my life to God  and I let God takeover of my filthy life. That one night every thing has changed. I broke up with my partner for 9 months and I started a new life with Jesus. Up until now I’m still struggling but this time I know how to fight, I know how to respond, and I know my real identity. I learned how to forgive and left everything because God told me that “not everything that weighs you down is yours to carry. I learned that God has a bigger plan for me and I learned that this ugly story will be a beautiful testimony</p>
        <p>Now, I am a songleader in our church, the leader of the evangelism ministry, a children ministry teacher, and a preacher. From that day forward, I promised God that I will walk in a manner worthy of His calling.</p>
        <p>Once again, I am Bezaleel Josue, rejected, but not by the Messiah.</p>
        `
      }
    ]
  }


  showFullTestimony(e:any, index:number) {
    e.stopPropagation()
    e.preventDefault()
    console.log('m,odal show')
    this.testimony = this.slides[index]
    console.log(this.testimony)

    this.isOpen = true;
  }
}
