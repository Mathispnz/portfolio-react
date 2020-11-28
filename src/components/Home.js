import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import '../styles/Home.scss';

export default function Home() {

    // http://www.petecorey.com/blog/2019/08/19/animating-a-canvas-with-react-hooks/

    let ref = useRef();

    const getPixelRatio = ctx => {
            var backingStore =
            ctx.backingStorePixelRatio ||
            ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio ||
            1;
            
            return (window.devicePixelRatio || 1) / backingStore;
        };

    useEffect(() => {
        let canvas = ref.current;
        let ctx = canvas.getContext('2d');
        
        let ratio = getPixelRatio(ctx);
        let width = getComputedStyle(canvas)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue('height')
            .slice(0, -2);
         
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        }

        // Random position
        // https://javascript.tutorials24x7.com/blog/how-to-draw-animated-circles-in-html5-canvas
        
        function Circle (x, y, mx, my, radius) {
            this.x 	= x;
            this.y 	= y;
            this.mx = mx;
            this.my = my;

            this.radius = radius;

            this.draw = function() {
                ctx.beginPath();
        
                ctx.arc( this.x, this.y,  this.radius, 0, Math.PI * 2, false);
        
                ctx.fillStyle = "rgba(221, 219, 245, 0.6)";
                ctx.shadowColor = '#DDDBF5';
                ctx.shadowBlur = 30;
                ctx.fill();
            }

            this.update = function() {
                if( this.x > (canvas.width * 0.2) || this.x < (canvas.width * 0.1)) {
                    this.mx = -this.mx;
                }
                    
                if(  this.y > (canvas.height * 0.9) || this.y < (canvas.height * 0.1) ) {
                    this.my = -this.my;
                }
    
                this.x += this.mx;
                this.y += this.my;

                this.draw();
            }

            this.update2 = function() {
                if( this.x > (canvas.width*0.3) || this.x < (canvas.width*0.2)  ) {
                    this.mx = -this.mx;
                }
                    
                if(  this.y > (canvas.height*0.2) || this.y < (canvas.height*0.1) ) {
                    this.my = -this.my;
                }
    
                this.x += this.mx;
                this.y += this.my;

                this.draw();
            }

            this.update3 = function() {
                if( this.x > (canvas.width*0.4) || this.x < (canvas.width*0.3)  ) {
                    this.mx = -this.mx;
                }
                    
                if(  this.y > (canvas.height*0.4) || this.y < (canvas.height*0.2) ) {
                    this.my = -this.my;
                }
    
                this.x += this.mx;
                this.y += this.my;

                this.draw();
            }

            this.update4 = function() {
                if( this.x > (canvas.width*0.5) || this.x < (canvas.width*0.4)  ) {
                    this.mx = -this.mx;
                }
                    
                if(  this.y > (canvas.height*0.2) || this.y < (canvas.height*0.1) ) {
                    this.my = -this.my;
                }
    
                this.x += this.mx;
                this.y += this.my;

                this.draw();
            }

            this.update5 = function() {
                if( this.x > (canvas.width*0.6) || this.x < (canvas.width*0.5)  ) {
                    this.mx = -this.mx;
                }
                    
                if(  this.y > (canvas.height*0.9) || this.y < (canvas.height*0.1) ) {
                    this.my = -this.my;
                }
    
                this.x += this.mx;
                this.y += this.my;

                this.draw();
            }

            this.update6 = function() {
                if( this.x > (canvas.width*0.9) || this.x < (canvas.width*0.6)  ) {
                    this.mx = -this.mx;
                }
                    
                if(  this.y > (canvas.height*0.2) || this.y < (canvas.height*0.1) ) {
                    this.my = -this.my;
                }
    
                this.x += this.mx;
                this.y += this.my;

                this.draw();
            }

            this.update7 = function() {
                if( this.x > (canvas.width*0.9) || this.x < (canvas.width*0.85)  ) {
                    this.mx = -this.mx;
                }
                    
                if(  this.y > (canvas.height*0.5) || this.y < (canvas.height*0.1) ) {
                    this.my = -this.my;
                }
    
                this.x += this.mx;
                this.y += this.my;

                this.draw();
            }

            this.update8 = function() {
                if( this.x > (canvas.width*0.9) || this.x < (canvas.width*0.6)  ) {
                    this.mx = -this.mx;
                }
                    
                if(  this.y > (canvas.height*0.55) || this.y < (canvas.height*0.45) ) {
                    this.my = -this.my;
                }
    
                this.x += this.mx;
                this.y += this.my;

                this.draw();
            }
        }

        var circles = [];
        var circles2 = [];
        var circles3 = [];
        var circles4 = [];
        var circles5 = [];
        var circles6 = [];
        var circles7 = [];
        var circles8 = [];

        // var radius = 50;

        // 1
        for (let i = 0; i < 30; i++) {
            let x = getRandomInt((canvas.width * 0.1), (canvas.width * 0.2));
            let y = getRandomInt((canvas.height * 0.1), (canvas.height * 0.9));

            let mX = (Math.random() - 0.5) * 2;
            let mY = (Math.random() - 0.5) * 2;

            let radius = 5 + Math.random() * 40;

            circles.push(new Circle(x, y, mX, mY, radius));
        }
        // 2
        for (let i = 0; i < 10; i++) {
            let x = getRandomInt((canvas.width * 0.2), (canvas.width * 0.3));
            let y = getRandomInt((canvas.height * 0.1), (canvas.height * 0.2));

            let mX = (Math.random() - 0.5) * 2;
            let mY = (Math.random() - 0.5) * 2;

            let radius = 5 + Math.random() * 30;

            circles2.push(new Circle(x, y, mX, mY, radius));
        }
        // 3
        for (let i = 0; i < 10; i++) {
            let x = getRandomInt((canvas.width * 0.3), (canvas.width * 0.4));
            let y = getRandomInt((canvas.height * 0.2), (canvas.height * 0.4));

            let mX = (Math.random() - 0.5) * 2;
            let mY = (Math.random() - 0.5) * 2;

            let radius = 5 + Math.random() * 30;

            circles3.push(new Circle(x, y, mX, mY, radius));
        }
        // 4
        for (let i = 0; i < 10; i++) {
            let x = getRandomInt((canvas.width * 0.4), (canvas.width * 0.5));
            let y = getRandomInt((canvas.height * 0.1), (canvas.height * 0.2));

            let mX = (Math.random() - 0.5) * 2;
            let mY = (Math.random() - 0.5) * 2;

            let radius = 5 + Math.random() * 30;

            circles4.push(new Circle(x, y, mX, mY, radius));
        }
        // 5
        for (let i = 0; i < 30; i++) {
            let x = getRandomInt((canvas.width * 0.5), (canvas.width * 0.6));
            let y = getRandomInt((canvas.height * 0.1), (canvas.height * 0.9));

            let mX = (Math.random() - 0.5) * 2;
            let mY = (Math.random() - 0.5) * 2;

            let radius = 5 + Math.random() * 40;

            circles5.push(new Circle(x, y, mX, mY, radius));
        }
        // 6
        for (let i = 0; i < 25; i++) {
            let x = getRandomInt((canvas.width * 0.6), (canvas.width * 0.9));
            let y = getRandomInt((canvas.height * 0.1), (canvas.height * 0.2));

            let mX = (Math.random() - 0.5) * 2;
            let mY = (Math.random() - 0.5) * 2;

            let radius = 5 + Math.random() * 30;

            circles6.push(new Circle(x, y, mX, mY, radius));
        }
        // 7
        for (let i = 0; i < 20; i++) {
            let x = getRandomInt((canvas.width * 0.85), (canvas.width * 0.9));
            let y = getRandomInt((canvas.height * 0.1), (canvas.height * 0.5));

            let mX = (Math.random() - 0.5) * 2;
            let mY = (Math.random() - 0.5) * 2;

            let radius = 5 + Math.random() * 40;

            circles7.push(new Circle(x, y, mX, mY, radius));
        }
        // 8
        for (let i = 0; i < 25; i++) {
            let x = getRandomInt((canvas.width * 0.6), (canvas.width * 0.9));
            let y = getRandomInt((canvas.height * 0.45), (canvas.height * 0.55));

            let mX = (Math.random() - 0.5) * 2;
            let mY = (Math.random() - 0.5) * 2;

            let radius = 5 + Math.random() * 30;

            circles8.push(new Circle(x, y, mX, mY, radius));
        }

        let requestId;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
            
            for (let r = 0; r < 30; r++) {
                circles[r].update();
                circles5[r].update5();
            }
            for (let r = 0; r < 10; r++) {
                circles2[r].update2();
                circles3[r].update3();
                circles4[r].update4();
            } 
            for (let r = 0; r < 25; r++) {
                circles6[r].update6();
                circles8[r].update8();
            } 
            for (let r = 0; r < 20; r++) {
                circles7[r].update7();
            } 

            requestId = requestAnimationFrame(render);
        }
        
        render();

        return () => {
            cancelAnimationFrame(requestId);
        }
    });

    return(
        <div className="Home">
            <canvas 
            ref={ref} className="Home_canvas" />
        </div>
    )
}