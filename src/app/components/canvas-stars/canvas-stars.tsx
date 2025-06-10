"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

type Star = {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    twinkle?: gsap.core.Tween;
};

type ShootingStar = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    visible: boolean;
    length: number;
    progress: number;
};

export default function StarBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stars: { x: number; y: number; radius: number; alpha: number; twinkle?: gsap.core.Tween }[] = [];

    const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

    const getRandomAngle = () => Math.random() * Math.PI / 2 + Math.PI / 4;

    const createStar = (canvas: HTMLCanvasElement) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: getRandom(0.2, 1.0),
        alpha: Math.random()
    });

    function drawStars(ctx: CanvasRenderingContext2D, stars: Star[], time: number) {
        stars.forEach((star) => {
            ctx.beginPath();
            const driftX = Math.sin(time * 0.00005 + star.y) * 0.3;
            const driftY = Math.cos(time * 0.00005 + star.x) * 0.3;
            ctx.arc(star.x + driftX, star.y + driftY, star.radius, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });
    }

    function drawShootingStar(ctx: CanvasRenderingContext2D, star: ShootingStar) {
        const fadeOut = 1 - star.progress / 60;
        const opacity = 0.7 * fadeOut;
        const tailX = star.x - star.vx * star.length;
        const tailY = star.y - star.vy * star.length;

        const grad = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "white";
        ctx.stroke();

        star.x += star.vx;
        star.y += star.vy;
        star.progress += 1;

        if (star.progress > 60) {
            star.visible = false;
            star.progress = 0;
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let stars: Star[] = [];
        let shootingStar: ShootingStar = {
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            visible: false,
            length: 15,
            progress: 0
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Create stars
        const numStars = 100;
        stars = Array.from({ length: numStars }, () => createStar(canvas));

        // Animate twinkling
        stars.forEach((star) => {
            star.twinkle = gsap.to(star, {
                alpha: Math.random(),
                duration: Math.random() * 1 + 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random()
            });
        });

        const draw = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawStars(ctx, stars, Date.now());

            if (shootingStar.visible) {
                drawShootingStar(ctx, shootingStar);
            }

            requestAnimationFrame(draw);
        };
        draw();

        const interval = setInterval(() => {
            const angle = getRandomAngle(); // 45–135 degrees
            const speed = 5 + Math.random() * 2;

            shootingStar = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * 0.5,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                visible: true,
                length: 15,
                progress: 0
            };
        }, 5000 + Math.random() * 3000);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resize);
            stars.forEach((s) => s.twinkle?.kill());
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100vw",
                // background: "radial-gradient(ellipse at center, #0a0118 0%, #060014 100%)"
                background: "radial-gradient(ellipse at center, #12002b 0%, #060014 100%)"
            }}
        />
    );
}
