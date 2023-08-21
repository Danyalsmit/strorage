// function  Student(){             ///  constructer functiion
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function(){
//         return `${this. firstName} ${this.lastName}`
//     }
// }

// function Student() {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// Student.prototype.getFullName = function () {          //// set prototype
//     return `${this.firstName} ${this.lastName}`
// }

function submit(){
    var file =document.getElementById("file");
    var image =document.getElementById("image");
    image.src=URL.createObjectURL(file.files[0])
    }