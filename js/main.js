$(document).ready(() => {
    
    //function to move the navigation bar
    function moveNav() {
        $('.backtotop').css({'display': 'none'});
        
        let nav = document.getElementById("nav-bar");
    
        $(window).scroll(function() {
            if ($(this).scrollTop() > 20) {
    
                nav.style.top = "0px";
    
            } else {            
    
                nav.style.top = "100px";
                
            }
            
        });
    
        
    }//function end


    //function to change images
    function changeBannerImgs(){
                let counter = 0;
                setInterval(() => {
                    
                    counter+=1;
                    let banner = document.querySelector("img");
                        
                    
                    
            
                    if (counter>4) {
                        
                        counter=1;
                        banner.setAttribute("src", "../images/children"+counter+".jpg");
                    } else {
                        banner.setAttribute("src", "../images/children"+counter+".jpg");
                    }
                    // console.log(counter);
                    
                    
                }, 3000);
    }//function end


    //copyright function
    function updateCopyRight(){
        
        let year = new Date().getFullYear();
        let copyRight = $(".copyright");
        copyRight.html(copyRight.html()+year);
        // console.log(copyRight);
    }//end of copyright function


    //function updatePricesTemplate
    function updatePricesTemplate(){
        let prices = document.querySelectorAll(".price span"), counter = 0, p;
        
        

        prices.forEach(element => {
            counter +=1;

            
            
            if (counter%2==0) {

                element.innerHTML = Math.abs((counter*counter*5)+200)+" /=";
            } else {

                element.innerHTML = (3200-((4 *5)+ counter*2))+" /=";
            }
            if (element.innerHTML=="NaN" ) {
                
                element.innerHTML = Math.abs((counter*5+counter)+200-(counter*counter*5))+" /=";
            }


            if (element.innerHTML > 3200 ) {
                
                element.innerHTML = (3200-((4*counter *5)+ counter*2+counter*counter))+" /=";
            }

            

                        
            element.style.background = "cornflowerblue";
            element.style.color = "white";
            element.style.padding = "1px 8px";

            document.querySelectorAll(".title").forEach(element => {
                element.style.color =  "white";
            });


        });
    }//end of function update prices


    //dynamically updating footer section
    function updateFooterSection() {
        
        let footerListing = document.querySelectorAll(".listing"), c=4, l = ["home","about us", "contact", "faqs", "new"];
        let footerListingStyle = "style=' padding: 2px 4px; color:white; text-decoration: none; text-transform: capitalize; width:100%; opacity: 0.8' ";
    
    footerListing.forEach(element => {

        c +=1;                
        
        element.innerHTML =  "<a href='#' " + `${footerListingStyle}` + ">" + l[(c%5)] + "</a>";
    });
    }
             
   //end of footer sextion update


    



    // calling functions

     moveNav();//moving image relative to scroll behaviour
     changeBannerImgs();//changing banner images once the page loads
     updateCopyRight();
     updatePricesTemplate();
     updateFooterSection();




});

// $(window).scroll(function () { 

//     let initPos = $("#main-body").scrollTop();

//     if(scrollY > 200){
    
//         let finalPos = $("#main-body").scrollTop() + scrollY;
//         console.log(initPos +"\n"+ finalPos);
//     }


// });

// scroll efefects for nav bar
// let variation=0;
// window.onscroll = function(e) {

//     let initPos = $("#main-body").scrollTop();

//     variation = initPos + (this.scrollY - this.oldScroll);

//     //  console.log(variation);

//     let nav = document.getElementById("nav-bar");
//     if (variation > 0) {
    
//         nav.style.top = "0px";
    
//     } 
//     if (variation < 0) {
    
//         nav.style.top = "100px";
    
//     }    

//     this.oldScroll = this.scrollY;

// }













//$(document).ready();
