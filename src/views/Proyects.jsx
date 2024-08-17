import "../styles/proyects.css";

export const Proyects = () => {
    return (
        <>
            <h1 className="seccion-title">Proyectos</h1>
            <hr className="main-line" />
            <div className="proyects">
                <div className="proyect">
                    <a href="https://github.com/Anacasconi1/Cinema" target="_blank">
                    <img
                        src="cinema.png"
                        alt="Fotos de cinema Shilence"
                        width={200}
                    />
                    <h6>🎬 Cinema</h6>
                    <p>
                        Javascript, Express, Axios, Mongoose, MongoDB y
                        Bootstrap
                    </p>
                    </a>
                </div>
                <div className="proyect">
                    <a href="https://github.com/Anacasconi1/Turnero-spa" target="_blank">
                    <img
                        src="appoints.png"
                        alt="Fotos de Turnero SPA Candle"
                        width={200}
                    />
                    <h6>📔 Turnero</h6>
                    <p>
                        Javascript, Typescript, Express, React, Nodemailer,
                        PostgreSQL, TypeORM, Reduc, Axios, Formik, entre otras.
                    </p>
                    </a>
                </div>
                <div className="proyect">
                    <a href="https://github.com/Anacasconi1/Ecommerce-backend-pm4" target="_blank">
                    <img
                        src="e-commerce.png"
                        alt="Fotos de Documentacion E-commerce backend"
                        width={200}
                    />
                    <h6>👩‍💻 E-Commerce Backend</h6>
                    <p>
                        Nest.js, Docker, Render, JWT, Bcrypt, Swagger, TypeORM,
                        PostgreSQL, Cloudinary, entre otras.
                    </p>
                    </a>
                </div>
            </div>
            <div className="skills-container">
                <h3 className="skills-developed">Habilidades Técnicas ➡</h3>
                <ul className="skills-list">
                    <li>Javascript</li>
                    <li>Typescipt</li>
                    <li>Nest.js</li>
                    <li>React</li>
                    <li>Mongoose</li>
                    <li>SQL(PostgreSQL)</li>
                    <li>NoSQL(MongoDB)</li>
                    <li>TypeORM</li>
                    <li>Express</li>
                    <li>Git Kraken</li>
                    <li>Docker</li>
                    <li>Jest (básico)</li>
                    <li>CI/CD</li>
                    <li>Git Flow</li>
                </ul>
            </div>
        </>
    );
};
