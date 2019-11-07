import React, { useRef, useEffect } from "react";

const CloudCanvas = (props = {}) => {
  const {
    yPosMin = 125,
    yPosStart = 150,
    xPosStart = -50,
    yPosChangeMultiplier = 60,
    xPosChangeMin = 125,
    xPosChangeMultiplier = 25,
    yControlMultiplier = 20,
    yControlMin = 40
    // width = 100,
    // height = 100,
  } = props;

  const canvas = useRef(null);

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    context.save();
    context.fillStyle = "#ecf0f1";
    let xPos = xPosStart;
    let yPos = yPosStart;
    context.beginPath();
    context.moveTo(xPos, yPos);
    while (xPos < window.innerWidth) {
      let lastX = xPos;
      xPos += Math.floor(Math.random() * xPosChangeMultiplier + xPosChangeMin);
      yPos += Math.floor(
        Math.random() * yPosChangeMultiplier - yPosChangeMultiplier / 2
      );
      while (yPos < yPosMin) {
        yPos += Math.floor((Math.random() * yPosChangeMultiplier) / 2);
      }
      let yPosMax;
      while (yPos > yPosMax) {
        yPos -= Math.floor((Math.random() * yPosChangeMultiplier) / 2);
      }
      let controlX = (lastX + xPos) / 2;
      let controlY =
        yPos - Math.floor(Math.random() * yControlMultiplier + yControlMin);
      context.quadraticCurveTo(controlX, controlY, xPos, yPos);
    }
    console.log(canvas.width);
    context.lineTo(window.innerWidth, yPos);
    context.lineTo(window.innerWidth, window.innerHeight);
    context.lineTo(0, window.innerHeight);
    context.fill();

    context.restore();
  });

  const dw = Math.floor(window.innerWidth);
  const dh = Math.floor(window.innerHeight / 2);

  return <canvas id="cloud" ref={canvas} width={dw} height={dh} />;
};

export default CloudCanvas;
