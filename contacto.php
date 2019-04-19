<?php include('first/header.php'); ?>   

<!-- ====== Banner Start ====== -->

<!-- ====== Banner End ====== --> 


<!-- ====== Contact Detail Start ====== -->
<hr style="padding:2px;background-color:#00867d;opacity:.5;">
<section id="contact-us" style="padding:30px;">
  <div class="container">
    <div class="row">
     <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
           <h3>Datos de contacto</h3>
           <div class="separator left-align ">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div class="info">
                  <ul>
                    <li>
                      <div class="icon">
                        <i class="flat flaticon-phone-receiver"></i>
                      </div>
                      <div class="content">
                        <div class="label">Teléfono</div>
                        <div class="value">963 988 161</div>
                      </div>
                    </li>

                    <li>
                      <div class="icon">
                        <i class="flat flaticon-mail-black-envelope-symbol"></i>
                      </div>
                      <div class="content">
                        <div class="label">E-mail</div>
                        <div class="value">info@cyjinversiones.com</div>
                        <div class="value">ventas@cyjinversiones.com</div>
                      </div>
                    </li>

                    <li>
                      <div class="icon">
                        <i class="flat flaticon-facebook-placeholder-for-locate-places-on-maps"></i>
                      </div>
                      <div class="content">
                        <div class="label">Ubicación</div>
                        <div class="value">Avenida Andres Avelino Caceres ucv 07 lote 13 zona F Huaycan Ate </div>
                      </div>
                    </li>
                  </ul>
              </div>
        </div>
        <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
          <div class="form-header text-center">
              <h4>¡Mantengámonos en contacto!</h4>
               <div class="separator">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <p>¡Sería genial saber de ti! Si tienes alguna pregunta</p>
          </div>
          <div class="contact-form">
            <form action="first/envio.php" method="post">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input value="" type="text" placeholder="Nombre" name="nombre" maxlength="50" minlength="5" required/>
                  </div>
                  <div class="form-group">
                    <input value="" type="email" placeholder="Email" name="email"/>
                  </div>
                  <div class="form-group">
                    <input value="" type="text" placeholder="Teléfono o celular" name="telefono" maxlength="9" minlength="7" required/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group">
                  <textarea placeholder="Mensaje" name="mensaje" maxlength="300" minlength="5" required></textarea>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group text-center mar-none">
                  <button type="submit">Enviar <i class="flat flaticon-plane"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<!-- ====== Contact Detail End ====== --> 
<!-- ====== Location Map Start ====== --> 

  <div id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.390655372522!2d-76.82012988561846!3d-12.016604344610819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e991795ac2d3%3A0x19bad203cecfe39!2sC+y+J+Inversiones!5e0!3m2!1ses!2spe!4v1552342008289" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>

<!-- ====== Location Map End ====== --> 
</div>
<!-- ====== Footer Start ====== -->
<footer>
  <?php include('first/footer.php'); ?>