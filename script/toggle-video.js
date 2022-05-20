      // when toggle video button clicked remmoved the video background or if there is no video background then display it when clicked 
      function videoFunction() {
         var bannerVideo = document.getElementById("banner-video");
         if (bannerVideo.style.display === "none") {
            bannerVideo.style.display = "block";
         } else {
            bannerVideo.style.display = "none";
         }
      }