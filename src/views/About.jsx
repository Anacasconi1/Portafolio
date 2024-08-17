import '../styles/about-page.css'

export const About = () => {
    return (
        <>
            <h1 className="seccion-title">Sobre mi</h1>
            <hr className="main-line" />
            <p className="main-text">
                Soy una desarrolladora web apasionada por crear soluciones
                tecnológicas innovadoras. Actualmente estudio en el bootcamp de
                Henry y he desarrollado habilidades sólidas en tecnologías
                relacionadas con Node.js. Si bien no tengo experiencia laboral
                en el rubro, busco oportunidades para crecer profesionalmente en
                un entorno dinámico y colaborar con equipos multidisciplinarios
                en el desarrollo de aplicaciones web escalables y eficientes. Mi
                objetivo es continuar mejorando mis habilidades técnicas
                mientras contribuyo al éxito de proyectos innovadores y
                mantenerme en constante evolución.
            </p>
            <div className="subtitle-main">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#96765a"
                        d="M9 4L7 6L5 8l2 2l2 2l.7-.7l.7-.7l-1.3-1.3L7.8 8l1.3-1.3l1.3-1.3l-.7-.7zm6 0l-.7.7l-.7.7l1.3 1.3L16.2 8l-1.3 1.3l-1.3 1.3l.7.7l.7.7l2-2l2-2l-2-2zm5.977 15.09l-.388-1.532a.75.75 0 0 0-.356-.466a.76.76 0 0 0-.587-.072l-4.552 1.284L12 17l3.915-1.003a1.9 1.9 0 0 0 .558-.893L16.166 14L8 15H3v6h5l4.455.964a3.2 3.2 0 0 0 .727-.017l7.26-1.954a.76.76 0 0 0 .454-.344a.74.74 0 0 0 .081-.56M6 20H4v-4h2zm6.922.982a.6.6 0 0 1-.138.018a.5.5 0 0 1-.115-.012L8 19.963V16.02l7.329-.908L10 17l4.721 2.232l.317.127l.328-.093l4.316-1.217l.264 1.042Z"
                    />
                </svg>
                <h4>Servicios</h4>
            </div>
            <div>
                <div className="about-webdev-container">
                    
                    <h6 className="webdev-title">Desarrollo Web</h6>
                    <p className="main-text webdev-p">
                        Ofrezco una sólida combinación de habilidades técnicas y
                        enfoque en la resolución de problemas que pueden aportar
                        un valor significativo al equipo. Como adaptabilidad a
                        nuevas tecnologias, eficiencia en la resolucion de
                        problemas, trabajo en equipo y comunicación, efoque en
                        la calidad y los resultados y capacidad para aprender a
                        manejar nuevos proyectos.
                    </p>
                    
                        <div className="go-symbol go-corner"></div>
                    
                </div>
            </div>
        </>
    );
};
