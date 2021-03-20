class StudentScreen {
    constructor(){
        this.scheduleTask = createButton('Schedule Task');
        this.allTasks = createButton('All Tasks');
    }
    display(){
        this.scheduleTask.position(windowWidth*3.64/8, windowHeight/2);
        this.allTasks.position(windowWidth*3.75/8, windowHeight*0.75/2);
        //generating a form for creation of a task scheduling form when scheduletask is pressed
        this.scheduleTask.mousePressed(()=>{
            this.taskForm = new TaskForm;
            this.taskForm.display();
            this.scheduleTask.hide();
            this.allTasks.hide();
        });
        
    }
}