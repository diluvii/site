import React, { useEffect, useRef } from "react";
const DOTS = 5;
const FADE_DISTANCE = 0;

function CursorTrail() {

    const dots = useRef([]);
    const layer = useRef(null);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) return undefined;

        const fine = window.matchMedia("(pointer: fine)").matches;
        let frame;
        let onMove;

        if (fine) {
            const pos = Array.from({ length: DOTS }, () => ({ x: -100, y: -100 }));
            let mouse = { x: -100, y: -100 };
            onMove = (e) => {
                mouse = { x: e.clientX, y: e.clientY };
            };
            const tick = () => {
                let leader = mouse;
                pos.forEach((p, i) => {
                    p.x += (leader.x - p.x) * 0.2;
                    p.y += (leader.y - p.y) * 0.2;
                    const el = dots.current[i];
                    if (el) {
                        const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
                        const base = 0.85 - (i / DOTS) * 0.75;
                        const fade = Math.min(1, dist / FADE_DISTANCE);
                        el.style.transform = `translate(${p.x}px, ${p.y}px)`;
                        el.style.opacity = String(base * fade);
                    }
                    leader = p;
                });
                frame = requestAnimationFrame(tick);
            };
            window.addEventListener("pointermove", onMove);
            frame = requestAnimationFrame(tick);
        }

        const onDown = (e) => {
            if (e.button !== 0 || !layer.current) return;
            const star = document.createElement("span");
            const scale = 0.3 + Math.random() * 0.7;
            star.className = "cursor-impression";
            star.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;
            layer.current.appendChild(star);
            const remove = () => star.remove();
            star.addEventListener("animationend", remove, { once: true });
            window.setTimeout(remove, 5000);
        };
        window.addEventListener("pointerdown", onDown);

        return () => {
            if (onMove) window.removeEventListener("pointermove", onMove);
            if (frame) cancelAnimationFrame(frame);
            window.removeEventListener("pointerdown", onDown);
        };
    }, []);

    return (
        <div className="cursor-trail" ref={layer} aria-hidden="true">
            {Array.from({ length: DOTS }, (_, i) => (
                <span
                    key={i}
                    ref={(el) => (dots.current[i] = el)}
                    className="cursor-trail-dot"
                    style={{ opacity: 0 }}
                />
            ))}
        </div>
    );
}

export default CursorTrail;