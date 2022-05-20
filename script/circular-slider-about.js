//collect all data of the five click positions on the circle and declare variables

      var svgCircle = document.getElementById("svgCircle");
      var first = document.getElementById("first");
      var second = document.getElementById("second");
      var third = document.getElementById("third");
      var fourth = document.getElementById("fourth");
      var fifth = document.getElementById("fifth");
      var circleslider = document.getElementById("circleslider");
      var circleInfoContainer = document.getElementById("circleInfoContainer");

      // see CSS replacement in the stylesheet
      circleslider.style.backgroundImage = "url(../media/about/aurora1.jpg)";

      // move white line over to each circle as they are clicked; this covers the gray circle
      //when first circle is clicked
      first.addEventListener('click', () => {
         svgCircle.style.strokeDashoffset = "1001";
         circleslider.style.backgroundImage = "url(../media/about/touching-moon.jpg)";
         circleInfoContainer.style.top = "-350px";
      });
       //when second circle is clicked
      second.addEventListener('click', () => {
         svgCircle.style.strokeDashoffset = "749";
         circleslider.style.backgroundImage = "url(../media/about/scanning-satellite.jpg)";
         circleInfoContainer.style.top = "-800px";
      });
      // when third circle is clicked 
      third.addEventListener('click', () => {
         svgCircle.style.strokeDashoffset = "499";
         circleslider.style.backgroundImage = "url(../media/about/telescope-and-computer.jpg)";
         circleInfoContainer.style.top = "-1250px";
      });
      // when fourth circle is clicked move the white circle over the gray
     fourth.addEventListener('click', () => {
         svgCircle.style.strokeDashoffset = "249";
         circleslider.style.backgroundImage = "url(../media/about/young-astronaut.jpg)";
         circleInfoContainer.style.top = "-1700px";
      });
      // when fifth is clicked completeing the circle 
     fifth.addEventListener('click', () => {
         svgCircle.style.strokeDashoffset = "0";
         circleslider.style.backgroundImage = "url(../media/about/star-spiral.jpg)";
         circleInfoContainer.style.top = "100px";

      });