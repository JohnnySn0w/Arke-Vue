//main grid where modules sit, has a coordinate system?
app.component('grid-component', {
    props: {
      currentModules: [],
      allModuels: [],
    },
    data() {
    },
    methods: {
      
    },
    computed: {
    },
    template: 
    /*html*/
    `<div class="grid"/>`,
  });

  /*
    is the grid made of dividing lines, or boxes with borders?
    if it's boxes, can have a default box l/w and then calc number of boxes to render based on viewport dimensions?
    and even round that up, so boxes exceed viewport a little
  
    if its lines
    can calc horiz/vert lines based on a fixed width between, use z-index to prevent overlap issues,
    horiz are dived, verts are spanned. 

    using a tiled image instead

  */