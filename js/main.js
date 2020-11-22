function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  

function display(){
   document.getElementById("info").style.display = "block";
}

// window.addEventListener('scroll' , function(){
//     if(this.window.scrollY > 100){
//         this.document.querySelector('#navbar').style.opacity = 0.9;
//     }
//     else{
//         this.document.querySelector('#navbar').style.opacity = 1;
//     }
// });

$('a,.link-btn').on('click' , function(event){
    if(this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top 
            },
            1000
        );
    }
});

