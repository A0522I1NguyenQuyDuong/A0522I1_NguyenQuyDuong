var Apple = function () {
  this.setPiece=function (piece) {
      this.piece = piece;
  };
  this.getPiece = function () {
      return this.piece;
  };
  this.decreasePiece = function () {
      if (this.piece > 0)
          return this.piece --;
      else return this.piece=0;
  };
};

var Human = function (name,say,sex,weight) {
  this.name=name;
  this.say=say;
  this.sex=sex;
  this.weight=weight;

  this.getWeight=function () {
      return this.weight;
  };
  this.setApple = function (apple) {
      this.apple=apple;
  };
  this.getAppleInf = function () {
      return this.apple.getPiece();
  };
  this.biteShot = function () {
      if (this.status){
          this.weight ++;
          document.write(this.name+ this.say + '<br>');
      }
  };
  this.oneShot=function () {
      this.status = true;
      return this.apple.decreasePiece();
  };
};

var adam = new Human('Adam',' say "my turn"', 'Male',50);
var eva = new Human('Eva',' say "give me"','Femal',45);
var apple = new Apple();
apple.setPiece(10);
adam.setApple(apple);
eva.setApple(apple);

for (var i=0;i<5;i++){
  eva.oneShot();
  eva.biteShot();
  document.write('Weight of Eva: '+ eva.getWeight()+'.'+' The remain of the apple: '+eva.getAppleInf()+'<br>');
  adam.oneShot();
  adam.biteShot();
  document.write('Weight of Adam: '+ adam.getWeight()+'.'+' The remain of the apple: '+adam.getAppleInf()+'<br>');
}