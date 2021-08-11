const app = Vue.createApp({
    data() {
        return {
            fileURL="",
            projectName="",
            arkeName="Arke",
            arkeNameConnector=" - ",
            arkeStartMenu="Start",
            arkeConfigMenu="config",
        }
    },
    methods: {
        newProject(){
            //swap to gridview, passing empty project file reference(so that func needs optional param)
        },
        openProjectDialogue(){
            //trigger new window(seem to want a function generic for this)
            //it's a selectfile dialogue
            //call openProject() with the returned url
        }, 
        openProject(fileURL=""){ //potentially this could take web urls? but security loll
            //trigger file selection/upload dialogue
        },
        openSettings(){
            //open a separate dialog window with the settings view, settings should be stored in a file in the place that the OS uses as standard?
            //can figure that out later though, for now save them in project root
        },
        exit(){
            //takes a param of process id maybe? the deno runtime probably has a call to use here, if not webview itself
            //if they both have it though, deno needs to be shutdown bc its more root(don't wanna leave it running with nothing!)
        },
    },
    computed: {
        title() {
            return this.arkeName + this.arkeNameConnector + this.arkeStartMenu;
        },
    },
});
