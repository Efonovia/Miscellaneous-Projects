const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"]

addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

let mouseDown = false

addEventListener('mousedown', () => {
    mouseDown = true
    
})

addEventListener('mouseup', () => {
    mouseDown = false
})

class Particle {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false)
        c.shadowColor = this.color
        c.shadowBlur = 15
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    update() {
        this.draw()
    }
}


let particles

init = () => {
    particles = []

    for (let i = 0; i < 400; i++) {
        const canvasWidth = canvas.width + 300
        const canvasHeight = canvas.height + 300
        const x = Math.random() * (canvasWidth) - canvasWidth/2
        const y = Math.random() * canvasHeight - canvasHeight/2
        const radius = 2 * Math.random()
        const color = colors[Math.floor(Math.random() * colors.length)]
        particles.push(new Particle(x, y, radius, color))
    }
}

let radians = 0
let alpha = 1
animate = () => {
    requestAnimationFrame(animate)
    c.fillStyle = `rgba(10, 10, 10, ${alpha})`
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    c.save()
    c.translate(canvas.width/2, canvas.height/2)
    c.rotate(radians)
    particles.forEach((particle) => {
        particle.update()
    })
    c.restore()
    c.beginPath()
        c.arc(canvas.width/2, canvas.height/2, 30, Math.PI * 2, false)
        c.fillStyle = "orange"
        // c.shadowColor = "orange"
        c.shadowBlur = 20
        c.fill()
    c.closePath()
    
    radians += 0.005

    if (mouseDown && alpha >= 0.1) {
        alpha -= 0.01
    } else if(!mouseDown && alpha < 1) {
        alpha += 0.01
    }
}

console.log(Math.abs);
init()
animate()
