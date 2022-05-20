      var sliderBtn = document.getElementsByClassName("slider-btn");
      var slide = document.getElementById("slide");
      
    
// Each of the cards in the slider is slide here one by one on array call
// first card
      sliderBtn[0].onclick = function(){
           // get screen size
         var screenWidth = window.innerWidth;
         slide.style.transform="translatex(0px)";
         for(i=0;i<8;i++){
            // shrink circle if not current
            sliderBtn[i].classList.remove("current");
         }
         // widen circle if current
         this.classList.add("current");
      }
      // second card
      sliderBtn[1].onclick = function(){
           // get screen size
         var screenWidth = window.innerWidth;
         // check for screen size to determine horizontal translation amount
         if(screenWidth<700){
            slide.style.transform = "translatex(-400px)";
         } else if(screenWidth<900){
            slide.style.transform = "translatex(-600px)";
         } else{
         slide.style.transform="translatex(-800px)";
         }
         for (i = 0; i < 8; i++) {
            // shrink circle if not current
            sliderBtn[i].classList.remove("current");
         }
         // widen circle if current
         this.classList.add("current");
      }
      // third card
      sliderBtn[2].onclick = function(){
           // get screen size
         var screenWidth = window.innerWidth;
          // check for screen size to determine horizontal translation amount
         if (screenWidth < 700) {
            slide.style.transform = "translatex(-800px)";
         } else if (screenWidth < 900) {
            slide.style.transform = "translatex(-1200px)";
         } else {
            slide.style.transform = "translatex(-1600px)";
         }

         for (i = 0; i < 8; i++) {
            // shrink circle if not current
            sliderBtn[i].classList.remove("current");
         }
         // widen circle if current
         this.classList.add("current");
      }
      // fourth card
      sliderBtn[3].onclick = function(){
           // get screen size
         var screenWidth = window.innerWidth;
          // check for screen size to determine horizontal translation amount
         if (screenWidth < 700) {
            slide.style.transform = "translatex(-1200px)";
         } else if (screenWidth < 900) {
            slide.style.transform = "translatex(-1800px)";
         } else {
            slide.style.transform = "translatex(-2400px)";
         }

         for (i = 0; i < 8; i++) {
            // shrink circle if not current
            sliderBtn[i].classList.remove("current");
         }
         // widen circle if current
         this.classList.add("current");
      }
      // fifth card
      sliderBtn[4].onclick = function(){
           // get screen size
         var screenWidth = window.innerWidth;
         // check for screen size to determine horizontal translation amount
         if (screenWidth < 700) {
            slide.style.transform = "translatex(-1600px)";
         } else if (screenWidth < 900) {
            slide.style.transform = "translatex(-2400px)";
         } else {
            slide.style.transform = "translatex(-3200px)";
         }

         for (i = 0; i < 8; i++) {
           // shrink circle if not current
            sliderBtn[i].classList.remove("current");
         }
         // widen circle if current
         this.classList.add("current");
      }
      // sixth card
      sliderBtn[5].onclick = function(){
           // get screen size
         var screenWidth = window.innerWidth;
          // check for screen size to determine horizontal translation amount
         if (screenWidth < 700) {
            slide.style.transform = "translatex(-2000px)";
         } else if (screenWidth < 900) {
            slide.style.transform = "translatex(-3000px)";
         } else {
            slide.style.transform = "translatex(-4000px)";
         }

         for (i = 0; i < 8; i++) {
            // shrink circle if not current
            sliderBtn[i].classList.remove("current");
         }
         // widen circle if current
         this.classList.add("current");
      }
      // seventh card
      sliderBtn[6].onclick = function(){
           // get screen size
         var screenWidth = window.innerWidth;
         // check for screen size to determine horizontal translation amount
         if (screenWidth < 700) {
            slide.style.transform = "translatex(-2400px)";
         } else if (screenWidth < 900) {
            slide.style.transform = "translatex(-3600px)";
         } else {
            slide.style.transform = "translatex(-4800px)";
         }

         for (i = 0; i < 8; i++) {
            // shrink circle if not current
            sliderBtn[i].classList.remove("current");
         }
         // widen circle if current
         this.classList.add("current");
      }
      // eighth card
      sliderBtn[7].onclick = function(){
         // get screen size
         var screenWidth = window.innerWidth;
          // check for screen size to determine horizontal translation amount
         if (screenWidth < 700) {
            slide.style.transform = "translatex(-2800px)";
         } else if (screenWidth < 900) {
            slide.style.transform = "translatex(-4200px)";
         } else {
            slide.style.transform = "translatex(-5600px)";
         }

         for (i = 0; i < 8; i++) {
            // shrink circle if not current
            sliderBtn[i].classList.remove("current");
         }
         // widen circle if current
         this.classList.add("current");
      }