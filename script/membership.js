         
         // declare and get variables
         var l = document.getElementById("login");
         var r = document.getElementById("register");
         var b = document.getElementById("btn");

         // execute on login click
         function register() {
            l.style.left = "-400px";
            r.style.left = "50px";
            b.style.left = "110px";
         }

         // execute on register click
         function login() {
            l.style.left = "50px";
            r.style.left = "450px";
            b.style.left = "0px";
         }