let btns = document.querySelectorAll('.btn');
btns.forEach(function (i) {
    i.addEventListener("touchstart", function(){
        i.classList.add("btnHover");
        //console.log("btnHover - ADD");
    });
    i.addEventListener("touchend", function(){
        var node = this;
        setTimeout(function() {
            node.classList.remove("btnHover");
            //console.log("btnHover - REMOVE");
        }, 300)
    });
});

let btns2 = document.querySelectorAll('.main-contacts');
btns2.forEach(function (i) {
    i.addEventListener("touchstart", function(){
        i.classList.add("main-contacts-hover");
        //console.log("main-contacts-hover - ADD");
    });
    i.addEventListener("touchend", function(){
        var node = this;
        setTimeout(function() {
            node.classList.remove("main-contacts-hover");
            //console.log("main-contacts-hover - REMOVE");
        }, 300)
    });
});

let btns3 = document.querySelectorAll('.main-contacts-small');
btns3.forEach(function (i) {
    i.addEventListener("touchstart", function(){
        i.classList.add("main-contacts-small-hover");
        //console.log("main-contacts-small-hover - ADD");
    });
    i.addEventListener("touchend", function(){
        var node = this;
        setTimeout(function() {
            node.classList.remove("main-contacts-small-hover");
            //console.log("main-contacts-small-hover - REMOVE");
        }, 300)
    });
});

let btns4 = document.querySelectorAll('.org');
btns4.forEach(function (i) {
    i.addEventListener("touchstart", function(){
        i.classList.add("org-hover");
        //console.log("org-hover - ADD");
    });
    i.addEventListener("touchend", function(){
        var node = this;
        setTimeout(function() {
            node.classList.remove("org-hover");
            //console.log("org-hover - REMOVE");
        }, 300)
    });
});

let btns5 = document.querySelectorAll('.btnx');
btns5.forEach(function (i) {
    i.addEventListener("touchstart", function(){
        i.classList.add("btnxHover");
        //console.log("btnxHover - ADD");
    });
    i.addEventListener("touchend", function(){
        var node = this;
        setTimeout(function() {
            node.classList.remove("btnxHover");
            //console.log("btnxHover - REMOVE");
        }, 300)
    });
});