AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 10; i++) {

        var id = `fish${i}`;
      
        var posX =(Math.random() * 100 + -50);      
        var posY = (Math.random() * 5 + 5);
        var posZ = (Math.random() * 60 + 40);
  
        var position = { x: posX, y: posY, z: posZ };
  
        this.createFish(id, position);
      }
    } ,
  
    createFish: function(id, position) { 
      
      const treasureEntity = document.querySelector("#treasureFish");
  
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id",id);
      fishEl.setAttribute("position",position);
      fishEl.setAttribute("material","color","#ff9100")
      fishEl.setAttribute("gltf-model","./assets/fish/scene.gltf");
      
      fishEl.setAttribute("animation-mixer",{
        property :"rotation",
        to:"0 360 0",
        loop: "true",
        dur: 1000
      });   
  
      treasureEntity.appendChild(fishEl);
    }
  });
  
  