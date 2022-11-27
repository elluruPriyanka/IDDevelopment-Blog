//Fill in the ??? to complete the function object.
function Singer(name, specialty, power, hitpoints, level, gender ){
    this.name=name;
    this.specialty=specialty;
    this.power=power;
    this.hitpoints=hitpoints;
    this.level=level;
    this.gender=gender;
    this.maxpoint =function(){
        return power * level-hitpoints
    };
    this.singleProfile =function (){
        if (this.hitpoints <=50)
        {
            this.category ="Weak"
        }
        else if (this.hitpoints>=51 && this.hitpoints<70)
        {
            this.category ="Strong"
        }
        else if(this.hitpoints>=71 && this.hitpoints<100)
        {
            this.category = "Amazing"
        }
        return `${this.name} Level ${this.level} , gender ${this.gender}, specialty ${this.specialty} .\n Power ${this.power}!\n Hitpoints ${this.hitpoints}`;
    }
}
    

//Create the function objects momobae and minabae.
let momobae = new Singer("Momobae","K-pop",49,28,7,"Female");
let mombae = new Singer("Minabae","singer",80,53,8,"Male")
console.log(momobae.singerProfile());
console.log(minobae.singerProfile());
let list =[momobae,minabae]
for (let i = 0; i< list.length;  i++ )
{
    let newDiv1= document.createElement('div');
    newDiv1.classList.add("mystyle")
    newDiv1.innerHTML = list[i].singerProfile();
    document.body.appendChild(newDiv1);
}
// //create a new element using javascript
// let newDiv1 = document.createElement("div");
// //add class to element through javascript
// newDiv1.classList.add("mystyle")
// // and give it some content
// newDiv1.innerHTML = "Momobae's Singer Profile: <br>" +momobae.singerProfile();
// //add the div to the body of the html
// document.body.appendChild(newDiv1);

// //create a new element using javascript
// let newDiv2 = document.createElement("div");
// //add class to element through javascript
// newDiv2.classList.add("mystyle")
// // and give it some content
// newDiv2.innerHTML = "Minabae's Singer Profile: <br>" +minabae.singerProfile();
// //add the div to the body of the html
// document.body.appendChild(newDiv2);