(()=> {

  class vanillaZoom {
    constructor(element) {
      this.container = element;
      this.firstSmallImage = this.container.querySelector('.small-preview');
      this.zoomedImage = this.container.querySelector('.zoomed-image');
      this.init();
      this.changePhoto();
      this.mouseEnter();
      this.mouseLeave();
      this.mouseMove();
    }

    
    init() {
      if(!this.container){
        console.log("pas d'\élèment");
      }

      if(!this.zoomedImage){
        console.log("pas de container: zoomed-image");
      }

      if(!this.firstSmallImage){
        console.log("pas de d'image: small-preview");
      }else {
        this.zoomedImage.style.backgroundImage = 'url('+ this.firstSmallImage.src + ')';
      }
    }

    changePhoto() {
      this.container.addEventListener('click', e => {
        const elem = e.target;
        if(elem.classList.contains('small-preview')) {
          this.zoomedImage.style.backgroundImage = 'url(' + elem.src + ')';
        }
      })
    }

    mouseEnter() {
      this.zoomedImage.addEventListener('mouseenter', ()=> {
        this.zoomedImage.style.backgroundSize = '250%';
      })
    }

    mouseMove() {
      this.zoomedImage.addEventListener('mousemove', e => {
        let dimension = this.zoomedImage.getBoundingClientRect(),
            x = e.clientX - dimension.left,
            y = e.clientY - dimension.top,
            xPercent = Math.round( 100 / (dimension.width / x)),
            yPercent = Math.round( 100 / (dimension.height / y));
        this.zoomedImage.style.backgroundPosition = xPercent + '%' + yPercent + '%';
      })
    }

    mouseLeave() {
      this.zoomedImage.addEventListener('mouseleave', ()=> {
        this.zoomedImage.style.backgroundSize = 'cover';
        this.zoomedImage.style.backgroundPosition = 'center';
      })
    }
  }


  let zoom = document.querySelectorAll('.vanilla-zoom');

  zoom.forEach( item => {
    new vanillaZoom(item)
  })

})()