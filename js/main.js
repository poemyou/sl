let ctx = canvas.getContext('2d')

export default class Main {
  constructor() {
    this.restart()
  }

  restart() {
    var image = wx.createImage()
    image.onload = function () {
      console.log(image.width, image.height)
      ctx.drawImage(image, 0, 0)
    }
    image.src = 'images/bg.jpg'
  }

}