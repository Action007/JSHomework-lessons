"use strict";

const canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  color = document.getElementById('color'),
  range = document.getElementById('range');

range.addEventListener('input', () => ctx.strokeStyle = color.value);
range.addEventListener('input', () => ctx.lineWidth = range.value);

canvas.addEventListener('mousemove', (event) => {
  const x = event.offsetX,
    y = event.offsetY,
    mx = event.movementX,
    my = event.movementY;

  if (event.buttons > 0) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - mx, y - my);
    ctx.stroke();
    ctx.closePath();
  }
});

let canvas2 = document.getElementById('canvas2').getContext('2d');
let radius = 50;

let circles = [{
    color: 'blue',
    x: 2 * radius - radius / 2,
    y: 2 * radius,
    q: [1, 2, 3, 0]
  },
  {
    color: 'black',
    x: 4 * radius,
    y: 2 * radius,
    q: [2, 0, 1, 3]
  },
  {
    color: 'red',
    x: 6 * radius + radius / 2,
    y: 2 * radius,
    q: [2, 0, 1, 3]
  },
  {
    color: 'yellow',
    x: 3 * radius - radius / 4,
    y: 3 * radius,
    q: [3, 0, 1, 2]
  },
  {
    color: 'green',
    x: 5 * radius + radius / 4,
    y: 3 * radius,
    q: [3, 0, 1, 2]
  }
];

function drawArc(canvas2, circle, q) {
  let s = (circle.q[q] + 0.5) / 2 * Math.PI,
    e = (circle.q[q] - 0.5) / 2 * Math.PI;

  canvas2.lineWidth = 16;
  canvas2.strokeStyle = 'white';
  canvas2.beginPath();
  canvas2.arc(circle.x, circle.y, radius, s, e, true);
  canvas2.stroke();

  canvas2.lineWidth = 10;
  canvas2.strokeStyle = circle.color;
  canvas2.beginPath();
  canvas2.arc(circle.x, circle.y, radius, s, e, true);
  canvas2.stroke();
}

for (let q = 0; q < 4; ++q) {
  circles.forEach(circle => {
    drawArc(canvas2, circle, q);
  });
}