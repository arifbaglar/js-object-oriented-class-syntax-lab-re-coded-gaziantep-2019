class BoardMember{
  constructor (name, homeState, training){
  this.name=name;
  this.homeState= homeState;
  this.training=training;}
  
  veto(){
    return "No, I must disagree";
  }
  approve(){
    return "You can do that!";
  }
  this.doCharity= function(){
    return "I like to help people.";
  };
  this.releasePressStatement= function(){
    return "You will see great things from Scuber.";
  };
  this.sayHi= function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
}