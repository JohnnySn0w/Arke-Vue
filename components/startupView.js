//app startup: view, load, new, exit, recent
app.component('start-view-component', {
    props: {
      arkeName: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        buttons: ['new','open','config','exit'],

      }
    },
    template: 
    /*html*/
    `<div class="app">
      <h1 class="heading">{{ arkeName }}</h1>
        <div class="buttonSection colSec">
          <button 
            v-for="butt in buttons"
          >
          {{butt}}
          </button>
        </div>
        <div class="recents colSec"><h3>Recents</h3></div>
    </div>`,
  })
//      <div class="container">
  //<div class="startDiv colSec" text=""/>