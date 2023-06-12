class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  class Triangle {
    constructor() {
      this.shape = new Shape();
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shape.color}" />`;
    }
  
    setColor(colorVar) {
      this.shape.setColor(colorVar);
    }
  }
  
  class Square {
    constructor() {
      this.shape = new Shape();
    }
  
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.shape.color}" />`;
    }
  
    setColor(colorVar) {
      this.shape.setColor(colorVar);
    }
  }
  
  class Circle {
    constructor() {
      this.shape = new Shape();
    }
  
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.shape.color}" />`;
    }
  
    setColor(colorVar) {
      this.shape.setColor(colorVar);
    }
  }
  
  module.exports = { Triangle, Square, Circle };
  