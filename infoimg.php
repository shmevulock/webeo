<?php include('first/header.php'); ?>

  <hr style="padding:2px;background-color:#00867d;opacity:.5;">
  
  <div class="container" style="margin-top:50px;">
  
  <div class="row h-100">
    <div class="col-lg-6 d-block h-100" >
        
         <div class="flexslider">
            
            <ul class="slides">

			<li>
				<img style="background:#585858;" alt="">
				
			</li>

			<li>
				<img style="background:#6E6E6E;" alt="">
				
			</li>

			<li>
				<img style="background:#848484;" alt="">
				
			</li>
			<li>
				<img style="background:black;" alt="">
				
			</li>

		</ul>
         </div>
        <div class="row h-100" style="margin-top:50px;">
           <section  class="col-lg-4 d-block" style="background:#424242;height:100px;"></section>
           <section  class="col-lg-4 d-block" style="background:#848484;height:100px;"></section>
           <section  class="col-lg-4 d-block" style="background:#424242;height:100px;"></section>
        </div>
    </div>
     <div class="col-lg-6 d-block h-100" >
     <div class="texto">
          <h1>THE <span>NAME</span></h1>
             <p class="parrafo">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Explicabo rerum dignissimos natus, sit commodi minima saepe nisi ab, aut consequuntur eos dolor consectetur rem placeat architecto assumenda sapiente? Eius, sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis vel, nam cupiditate dolorem reiciendis minus 
             </p> 
             <li class="li"><a class="a" href="">Cotizar...</a></li> 
             <div class="star">
                 <img src="img/star.png" alt="">
             </div>
      </div>
     </div>
   
      
  </div>
      
      <div class="prodrel">
           <h1 class="textProd">PRODUCTOS RELACIONADOS</h1>
           
           <div class="swiper-container h-100" style="width:100%;background: #eee;">
    <div class="swiper-wrapper" style="cursor:pointer;">
      <div class="swiper-slide"><img src="img/parallax_6.jpg" style="" alt=""></div>
      <div class="swiper-slide"><img src="img/parallax_5.jpg" style="" alt=""></div>
      <div class="swiper-slide"><img src="img/parallax_7.jpg" style="" alt=""></div>
      <div class="swiper-slide"><img src="img/parallax_2.jpg" style="" alt=""></div>
      <div class="swiper-slide"><img src="img/parallax_3.jpg" style="" alt=""></div>
      <div class="swiper-slide"><img src="img/parallax_4.jpg" style="" alt=""></div>
      
    </div>
    <!-- Add Pagination -->
  <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
 <div class="swiper-button-next" ></div>
    <div class="swiper-button-prev" ></div>
</div>

  <!-- Swiper JS -->
       <script type="text/javascript">
          function myFunction(ancho) {
  if (ancho.matches) { // If media query matches
    var swiper = new Swiper('.swiper-container', {
        
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
          
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    var swiper = new Swiper('.swiper-container', {
        
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
          
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

var ancho = window.matchMedia("(max-width: 768px)")
myFunction(ancho) // Call listener function at run time
ancho.addListener(myFunction)
         
  </script>

      </div>
  </div>
  <br>
  <br>
  <br>
  <?php include('first/contact.php'); ?>
<?php include('first/footer.php'); ?>
   <!--    <style>
   
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 300px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  </style>


  <!-- Swiper -->
  <!--<div class="swiper-container">
    <div class="swiper-wrapper" style="cursor:pointer;">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>-->
    <!-- Add Pagination -->
   <!-- <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
 <!--   <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>-->
 <!-- </div>-->

  <!-- Swiper JS -->
  <!--<script src="js/swiper.min.js"></script>-->

  <!-- Initialize Swiper -->
 <!-- <script>
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  </script>
-->
  
  
  
