// http://www.imooc.com/video/7557

// Immediately Invoked Function Expression

let something, callback;

learn = (something) => {
    console.log(something);
}


student = (learn_callback, something) => {
    something += " is cool!"
    learn_callback(something);
}

student(learn, "xgqfrms");