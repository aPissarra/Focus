class Popup {
  constructor(x, y, r, sx, sy, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sx = 345;
    this.sy = 150;
    this.message = img;
  }
  show() {
  //let r = floor(random(0, 7))
    //displays new message each time
    image(this.message, this.x, this.y, this.sx, this.sy);
  }
  clicked(px, py) {

    if (px > this.x && px < this.x + this.sx && py > this.y && py < this.y + this.sy) {
      return true;
    } else {
      return false
    }
  }



}