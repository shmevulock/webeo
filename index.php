<?php include('first/header.php'); ?>

  
    
  <!-- ====== Slider Start ====== -->
  <!-- Swiper -->
     <!-- Swiper -->
 

  <div class="swiper-container" style="cursor:pointer;position:relative;">
    <div class="swiper-wrapper">
     
      <div class="swiper-slide">
      <div class="col-7  h-100" style="position:absolute;">
          <h1 class="texth1">¡Comienza ya!</h1>
         
          <div class="subrayado"  style="" > 
           </div>
          <h1 class="texth2"><i> Cotiza nuestros productos <br> fabricados para tiendas.</i></h1>
          <h1 class="texth3"> <i> Somos Mayoristas</i></h1>
          <div class="blockswip"></div>
      </div>
      <img id="swiper" class="h-100" src="img/slider/slide5.jpeg" alt="First slide">
      
      </div>
      <div class="swiper-slide">
       <div class="w-50  h-100" style="position:absolute;margin-left:50%;">
          <h1 class="texth4"><i> Cesto de Fruta</i></h1>
          <div class="" style="height:1.5vw;margin:1% auto;width:65%;">
             
             
              <div class="" style="background:#0C4F42;position:absolute;width:13.9vw;height:0.3vw;margin-top:1.2%;"></div>
              
              <ul class="" style="position:absolute;width:6vw;height:0.3vw;margin-left:27.8%;margin-top:0;" >
                  <li style="background:#0C4F42;height:0.3vw;width:0.5vw;position:absolute;margin-left:23%; padding:0.8vw 0;"></li>
                  <li style="background:#0C4F42;height:0.3vw;width:0.5vw;position:absolute;margin-left:43%; padding:0.8vw 0;"></li>
                  <li style="background:#0C4F42;height:0.3vw;width:0.5vw;position:absolute;margin-left:63%; padding:0.8vw 0;"></li>
              </ul>
              
              <div style="background:#0C4F42;position:absolute;margin-left:39%;width:13vw;height:0.3vw;margin-top:1.2%;"></div>
              
           </div>
          <h1 class="texth5"><i> exhiba mejor sus frutas<br>y verduras</i></h1>
          
          <div class="blockswip1">
          </div> 
          <a href="contacto.php" class="blockswip2"><i>Cotize >></i></a>
      </div>
      
      <img id="swiper" class="h-100" src="img/slider/slide1.jpeg" alt="First slide">
      </div>
      <div class="swiper-slide">
      
       <div class="w-50 h-100" style="position:absolute;margin-left:50%;">
          <h1 class="texth10"><i>Modulos de <br><span class="" style="color:white;"> atención</span></i></h1>
          
          <h1 class="texth11"><i>personalizados a tu market o tienda<br>permitiendo una mayor exhibicion</i></h1>
          
          
      </div>
      
      <img id="swiper" class="h-100" src="img/slider/slide4.jpeg" alt="First slide">
      </div>
      
      <div class="swiper-slide">
      
       <div class="col-7  h-100" style="position:absolute;">
        
         <fieldset style="margin-left:6%;">
           <legend><h1 class="texth8"><i>Gondola Isla</i></h1></legend>
             <h1 class="texth9"><i> Exhibe tus productos por los 4<br>lados e incrementa tus ventas</i></h1>
         </fieldset>
         
         
      </div>
      
      <img id="swiper" class="h-100" src="img/slider/slide2.jpeg" alt="First slide">
      </div>
      <div class="swiper-slide">
      
      <div class="col-7  h-100" style="position:absolute;">
          <h1 class="texth6"><i>Checkout</i></h1>
         
          <h1 class="texth7">atiende a tus clientes con un <br> mobiliario elegante y practico</h1>
         
      </div>
      
      <img id="swiper" class="h-100" src="img/slider/slide3.jpeg" alt="First slide">
      </div>
      
      <div class="swiper-slide">
       <div class="col-12  h-100" style="position:absolute;background: rgba(0,134,125,0.5);    ">
      </div>
      <img style="background:red;" id="swiper" class="h-100" src="img/slidehome/window3.jpg" alt="First slide">
      
      </div>
       
      
      
     
    </div>
    <!--agregar paginacion-->
    
    <div class="swiper-button-next  swiper-button-white" ></div>
    <div class="swiper-button-prev  swiper-button-white"></div>
    <div class="swiper-pagination"></div>
    
  </div>
   <script type="text/javascript">
       
        var swiper = new Swiper('.swiper-container', {
       
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
          
      },
        
      loop: true,
        
      pagination: {
           el:'.swiper-pagination',
          dynamicBullets: true,

           clickable: true,
         
      },
        navigation: {
            
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
           
      },
    });
</script>
  <!-- ====== Slider End ====== --> 
  
  <!-- ====== About Us Start ====== -->
  <section id="about-us" class="index-2">
    <div class="container">
      <div class="section_heading">
        <h1>Nuevos <span>Productos</span></h1>
        <div class="separator">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="heading_content mb-4">
          Estos son los nuevos productos que ofrecemos.
        </div>
      </div>
      
      <div class="row text-center proyect">
        <div class="prod col-12 col-sm-6 col-lg-3"><img src="img/33.png" alt="">
        <h3>Check out C-4 </h3>
        </div>
        <div class="prod col-12 col-sm-6 col-lg-3"><img src="img/9.png" alt="">
        <h3>Check out Mix </h3></div>
        <div class="prod col-12 col-sm-6 col-lg-3"><img src="img/14.png" alt="">
        <h3>Módulo de Atención R-1 </h3></div>
        <div class="prod col-12 col-sm-6 col-lg-3"><img src="img/13.png" alt="">
        <h3>Exhibidor Central X-3</h3>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== About Us End ====== --> 
  <!-- ====== Work Status Start ====== -->
 <section id="work-status" class="index-2">
    
    <div class="container">
        
      <div class="col-12 w-100 h-100">
        <div class="row justify-content-end" >
          <div class="counter-column col-lg-3 col-md-3 col-sm-6 col-xs-12" >
            <a href="#" class="btn btn-cotiza">Cotiza Aquí</a>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
  </section>
  <!-- ====== Work Status End ====== -->
  <section id="quick-connect" class="index-2">
    <div class="container">
       <div class="col-lg-12 col-md-12 col-sm-12">
         <div class="row">
         </div>
       </div>
    </div>
</section> 
  
</div>

<?php include('first/contact.php'); ?>
<?php include('first/footer.php'); ?>