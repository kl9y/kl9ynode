import Nav from './Nav.js';
import './App.css';

function App() {
  return (
    <body>
        <div style={{ textAlign: "center", alignItems: "center", justifyContent: "center", display: "flex" }}>
             <video autoplay muted playsinline defaultMuted loop id="myVideo" style={{width: '110%', overflow: 'hidden'}}>
                 <source src={require('./imgs/WebVidBGLogo.mp4')} type="video/mp4"/>
             </video> 
         </div>

<Nav></Nav>

         <script src="script.js"></script>
         <script>renderNav();</script>


        <div class="productLines">
                <a class="imgA" href="https://kl9y.com/products/9-of-hearts"> 
                <img alt='t' class="prod" src ={require('./imgs/products/9-of-hearts/9ofhearts.png')}/>
                    <p class="listingName">9 OF HEARTS</p>
                    <p class="listingName">HOODIE</p>
                    <p class="listingName">$50</p>
                </a>
            <a class="imgA" href="https://kl9y.com/products/splatter-paint"> <img alt='t' class="prod" src ={require("./imgs/products/splatter-paint/splatter-paint.jpg")}/>
                <p class="listingName">SPLATTER PAINT</p>
                <p class="listingName">HELMET HOODIE</p>
                <p class="listingName">$50</p></a>
            
            
            <a class="imgA" href="https://kl9y.com/products/9y-hoodie"> 
                <img alt='t' class="prod" src ={require("./imgs/products/9y-hoodie/KL9YHoodieBlackBack.jpg")} onmouseover="changeImageHover(this, 'imgs/products/9y-hoodie/KL9YHoodieBlackFront.jpg')" onmouseout="changeImageHover(this, 'imgs/products/9y-hoodie/KL9YHoodieBlackBack.jpg')"/>
                <p class="listingName">9Y LOGO</p>
                <p class="listingName">HOODIE</p>
                <p class="listingName">$55</p>
            </a>

            <a class="imgA" href="https://kl9y.com/products/limitless-tee"> <img alt='t' class="prod" src ={require("./imgs/products/limitless-tee/LimitlessT.jpg")}/>
                <p class="listingName">LIMITLESS</p>
                <p class="listingName">TEE</p>
                <p class="listingName">$35</p></a>
        </div>

        <div class="productLines">
            
            <a class="imgA" href="https://kl9y.com/products/hat"> 
                <img alt='t' class="prod" src ={require("./imgs/products/hat/9YHatWhite.png")} onmouseover="changeImageHover(this, 'imgs/products/hat/TruckerHatBlack.jpg')" onmouseout="changeImageHover(this, 'imgs/products/hat/9YHatWhite.png')"/>
                <p class="listingName">9Y LOGO</p>
                <p class="listingName">HAT</p>
                <p class="listingName">$30</p></a>
            <a class="imgA" href="https://kl9y.com/products/graffiti-hoodie"> 
                <img alt='t' class="prod" src ={require("./imgs/products/graffiti-hoodie/WhiteGraffiti.jpg")} onmouseover="changeImageHover(this, 'imgs/products/graffiti-hoodie/BlackGraffiti.jpg')" onmouseout="changeImageHover(this, 'imgs/products/graffiti-hoodie/WhiteGraffiti.jpg')"/>
                <p class="listingName">GRAFFITI</p>
                <p class="listingName">HOODIE</p>
                <p class="listingName">$50</p></a>
            <a class="imgA" href="https://kl9y.com/products/champion-graffiti"> <img alt='t' class="prod" src ={require("./imgs/products/champion-graffiti/KL9YGraffitiLimitlessPotential.jpg")}/>
                <p class="listingName">CHAMPION GRAFFITI</p>
                <p class="listingName">CREW NECK</p>
                <p class="listingName">$55</p></a>
            <a class="imgA" href="https://kl9y.com/products/pants"> <img alt='t' class="prod" src ={require("./imgs/products/pants/LimitlessPotentialPants.jpg")}/>
                <p class="listingName">LIMITLESS</p>
                <p class="listingName">PANTS</p>
                <p class="listingName">$65</p></a>
            
        </div>

        <div class="productLines">

            <a class="imgA" href="https://kl9y.com/products/mousepad"> <img alt='t' class="prod" src ={require("./imgs/products/mousepad/ledmousepad.png")}/>
                <p class="listingName">LED GAMING</p>
                <p class="listingName">MOUSEPAD</p>
                <p class="listingName">$40</p></a>
            
            <a class="imgA" href="https://kl9y.com/products/vintage-black"> 
                <img alt='t' class="prod" src ={require("./imgs/products/vintage-black/vintage-black.jpg")} onmouseover="changeImageHover(this, 'imgs/products/vintage-purple/vintage-purple.jpg')" onmouseout="changeImageHover(this, 'imgs/products/vintage-black/vintage-black.jpg')"/>
                <p class="listingName">VINTAGE WASH</p>
                <p class="listingName">HOODIE</p>
                <p class="listingName">$40</p></a>
            
            <a class="imgA" > <img alt='t' class="prod" src ={require("./imgs/blank.png")} />
                <p class="listingName"></p>
                <p class="listingName"></p>
                <p class="listingName"></p></a>
            <a class="imgA" href=""> <img alt='t' class="prod" src ={require("./imgs/blank.png")}/>
                <p class="listingName"></p>
                <p class="listingName"></p>
                <p class="listingName"></p></a>
        </div>



        <div style={{marginBottom: '50rem'}}></div>
    </body>
  );
}

export default App;
