import "../styles/resume-education.css";
import "../styles/resume-experience.css";

export const Resume = () => {
    return (
        <>
        <div className="resume-title">
            <h1 className="seccion-title">Curriculum Vitae</h1>
            <a href="assets/curriculum-ana.pdf" download={"curriculum-ana.pdf"} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#ccb8b8"
                        d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
                    />
                </svg>
            </a>
        </div>
            
            <hr className="main-line" />
            <div className="subtitle-main">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="#96765a"
                        d="m368 350.643l-112 63l-112-63v-66.562l-32-17.778v103.054l144 81l144-81V266.303l-32 17.778z"
                    />
                    <path
                        fill="#96765a"
                        d="M256 45.977L32 162.125v27.734L256 314.3l192-106.663V296h32V162.125Zm160 142.831l-32 17.777L256 277.7l-128-71.115l-32-17.777l-22.179-12.322L256 82.023l182.179 94.463Z"
                    />
                </svg>
                <h4>Educacion</h4>
            </div>
            <div className="resume-education">
                <div className="education-card">
                    <div>
                        <h5>Henry</h5>
                        <hr />
                    </div>
                    <h6>MAYO 2024 - SEPTIEMBRE 2024</h6>
                    <p className="main-text">Desarrollador Full-Stack 🚀</p>
                </div>
                <div className="education-card">
                    <div>
                        <h5>Instituto de Capacitación Aeronáutica</h5> <hr />
                    </div>
                    <h6>MAYO 2023 - JULIO 2023</h6>
                    <p className="main-text">
                        Tripulante de Cabina de Pasajeros 🛫
                    </p>
                </div>
                <div className="education-card">
                    <div>
                        <h5>Instituto Nuestra Señora del Rosario</h5> <hr />
                    </div>
                    <h6>MARZO 2014 - DICIEMBRE 2019</h6>
                    <p className="main-text">
                        Bachiller en Ciencias Sociales y Humanidades 👩‍🎓
                    </p>
                </div>
            </div>
            <div className="subtitle-main">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#96765a"
                        d="M19 16.28V11l3-3l-4-4l-3 3H8V6h3V2H3v4h3v6H3v4h3v5h4.28A2 2 0 0 0 12 22a2 2 0 1 0-1.72-3H8v-3h3v-4H8V9h7l2 2v5.27a2 2 0 1 0 2 0ZM4 5V3h6v2Zm8 14a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-2-6v2H4v-2Zm8-7.59L20.59 8L18 10.59L15.41 8ZM18 19a1 1 0 1 1 1-1a1 1 0 0 1-1 1"
                    />
                </svg>
                <h4>Experiencia</h4>
            </div>
            <div className="resume-experience">
                <div className="experience-card">
                    <h5>HENRY - Teacher Assistant</h5>
                    <h6 className="dates">JULIO 2024 - ACTUALMENTE</h6>
                    <p className="main-text">
                        Enseñé planificacion de proyectos y la adopcion de
                        mejores prácticas de programación, guiando a los
                        estudiantes en la creacion del software bien
                        estructurado y mantenible.
                    </p>
                    <h6 className="skills-developed">
                        Habilidades desarrolladas ➡
                    </h6>
                    <ul className="skills-list">
                        <li>Comunicación</li>
                        <li>Liderazgo de equipos</li>
                        <li>Asesorias de codigo en vivo</li>
                        <li>Enseñanza de habilidades blandas</li>
                    </ul>
                </div>
                <div className="experience-card">
                    <h5>La Terminal Ruin-Bar</h5>
                    <h6 className="dates">SEPTIEMBRE 2023 - DICIEMBRE 2023</h6>
                    <p className="main-text">
                        Durante este empleo temporal como cajera, fui
                        responsable de manejar transacciones diarias, asistir a
                        los clientes en sus compras y asegurar la precisión en
                        el manejo del dinero. Además, me enfoqué en ofrecer un
                        excelente servicio al cliente, manteniendo la eficiencia
                        en un entorno de trabajo rápido. Trabajé en equipo para
                        garantizar un flujo de caja fluido y resolver cualquier
                        inconveniente de manera efectiva
                    </p>
                    <h6 className="skills-developed">
                        Habilidades desarrolladas ➡
                    </h6>
                    <ul className="skills-list">
                        <li>Atención al cliente</li>
                        <li>Gestión de efectivo</li>
                        <li>Resolucion de Problemas</li>
                        <li>Trabajo en Equpo</li>
                        <li>Comunicación Eficaz</li>
                        <li>Manejo de Estrés</li>
                    </ul>
                </div>
                <div className="experience-card">
                    <h5>La Termi Ruin-Bar</h5>
                    <h6 className="dates">JUNIO 2022 - ENERO 2023</h6>
                    <p className="main-text">
                        En mi rol como camarera, me encargué de recibir y
                        atender a los clientes, tomar pedidos, servir alimentos
                        y bebidas, y asegurar una experiencia agradable para los
                        comensales. Fui responsable de manejar el dinero,
                        gestionar las reservas y colaborar con el equipo de
                        cocina para garantizar un servicio eficiente. Mantuve un
                        enfoque constante en la satisfacción del cliente en un
                        entorno dinámico y de ritmo rápido.
                    </p>
                    <h6 className="skills-developed">
                        Habilidades desarrolladas ➡
                    </h6>
                    <ul className="skills-list">
                        <li>Atención al cliente</li>
                        <li>Gestión de Pedidos y Efectivos</li>
                        <li>Comunicación Eficaz</li>
                        <li>Trabajo en Equpo</li>
                        <li>Manejo del Estrés y Resolucion de Promblemas</li>
                        <li>Organización y Multitarea</li>
                    </ul>
                </div>
            </div>
        </>
    );
};
