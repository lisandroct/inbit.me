---
layout: home
---

<section class="splash">
    <div class="left">
        <div class="b-video">
            <video muted loop playsinline id="b-video" poster="{{site.baseurl}}/assets/poster.jpg">
                <source src="{{site.baseurl}}/assets/hd.webm" type="video/webm">
                <source src="{{site.baseurl}}/assets/hd.mp4" type="video/mp4">
            </video>
        </div>
        <div class="container">
            <div class="content" id="content">
                <h1>Invitaciones digitales para casamientos y eventos</h1>
                <p>Somos un equipo con más de 5 años de experiencia desarrollando videojuegos y experiencias interactivas audiovisuales.</p>
                <p>Ofrecemos servicios de tarjetería digital e invitaciones interactivas para casamientos, fiestas y eventos. Nos especializamos en soluciones creativas y únicas, con diseños, animaciones e ilustraciones personalizadas. Trabajamos junto a nuestros clientes para lograr concretar su visión de una forma memorable. Nuestro objetivo es que sus invitados vivan una fiesta única desde el momento en que reciben su invitación.</p>
            </div>
        </div>
        <a href="javascript:playVideo();">
            <div class="play-button" style="display: none;" id="play-button">
                <i class="far fa-play-circle"></i>
                <p>Conocé lo que hacemos</p>
            </div>
        </a>
    </div>
    <div class="right">
        <div class="container">        
            <div class="contact">
                <h1 id="title">¡Hacenos parte de tu evento!</h1>
                <form class="pure-form" id="contact-form" action="https://getsimpleform.com/messages?form_api_token=b22a9eb5e5b0af5946589870e6a2ac12" method="POST">
                    <fieldset class="pure-group">
                        <input type="text" class="pure-input-1" placeholder="Nombre" name="name" required>
                        <input type="tel" class="pure-input-1" placeholder="Teléfono de contacto" name="number" required>
                        <input type="email" class="pure-input-1" placeholder="Email de contacto" name="email" required>
                    </fieldset>

                    <fieldset class="pure-group">
                        <textarea rows="15" class="pure-input-1" placeholder="Consulta..." name="message" required></textarea>
                    </fieldset>

                    <fieldset class="pure-group">
                        <button type="submit" class="pure-button pure-input-1 submit">Enviar</button>
                    </fieldset>
                </form>
            </div>
        </div>
        <div class="contact-info">
            <a href="https://instagram.com/{{site.social.instagram}}" target="_blank"><p><i class="fab fa-instagram"></i>@{{site.social.instagram}}</p></a>
            <a href="mailto://{{site.social.email}}" target="_blank"><p><i class="far fa-envelope"></i> {{site.social.email}}</p></a>
            <a href="tel:{{site.social.whatsapp}}" target="_blank"><p><i class="fab fa-whatsapp"></i> {{site.social.whatsapp}}</p></a>
        </div>
    </div>
</section>
