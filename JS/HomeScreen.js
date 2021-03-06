class homeScreen {
    constructor(){
        this.studentB = createButton('Student');
        this.parentB = createButton('Parent');
        this.greeting = createSprite(windowWidth/2, windowHeight/4, windowWidth/4, windowHeight/4);
    }
    //Function to hide buttons and greeting when any button clicked
    hide(){
        this.parentB.hide();
        this.studentB.hide();
    }
    display() {
        this.greeting.addAnimation('Greet', Hello);
        //Creating a greeting
        //Setting the positions of the primary buttons
        this.studentB.position(windowWidth*3.75/8, windowHeight/3, 100, 50);
        this.parentB.position(windowWidth*3.75/8, windowHeight*2/3);
        //The callback function when the student Button is pressed
        //document.getElementById('this.studentB').style.backgroundColor = "red";
        //console.log(this.studentB);
        this.studentB.style('backgroundColor', '#aa00ff');
        this.parentB.style('backgroundColor', '#ff0000')
        if (appState === 1) {
            this.studentB.mousePressed(()=>{
                appState = 1.1;
                this.studentB.hide();
                this.parentB.hide();
                studentPage = new StudentScreen;
                studentPage.display();
            })
            
            //generation of parent Sign in form when parent button is pressed.
            //this form is yet to be worked on.
            this.parentB.mousePressed(()=>{
                appState = 1.2;
                this.studentB.hide();
                this.parentB.hide();
                parentForm = new ParentSigninForm;
                parentForm.display();
            })
        }
        
    }
}