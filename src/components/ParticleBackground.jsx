import Particles from "react-tsparticles";

const ParticleBackground = () => (
    <Particles
    id="particles-js"
    height="100%"
    width="100%"
    options={{
        background: {
        color: {
            value: "#005ec4",
        },
        },
        fpsLimit: 60,
        particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.5,
            straight: false,
        },
        number: {
            density: {
            enable: true,
            value_area: 1000,
            },
            value: 70,
        },
        opacity: {
            value: 2,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 3,
        },
        },
        detectRetina: true,
    }}
    />
);

export default ParticleBackground;