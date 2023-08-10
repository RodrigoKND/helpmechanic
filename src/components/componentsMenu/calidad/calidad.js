import Logo from '../../../assets/logoBusiness';
import '../../../fonts.css'

export default function Calidad() {
    return (
        <main className='container' style={{ marginTop: '80px', lineHeight:'30px' }}>
            <hr className='bg-primary' style={{ height: '10px' }}></hr>
            <header>
                <h3 className>Encuentra tu Mecánico de Confianza</h3>
                <b>------ Servicio profesional de mecánicos cerca de ti</b>
            </header>
            <section className="how-it-works textContain mt-3" style={{ background: 'none' }}>
                <h4>¿Cómo funciona?</h4>
                <div>
                    {/* <img src="step1.png" alt="Paso 1"> */}
                    <p>
                        Solo registrate gratuitamente para obtener una lista de mecánicos
                        según tu ubicación.
                    </p>
                </div>

                <div>
                    {/* <img src="..." alt="Paso 3"> */}
                    <p>Recibe opciones de mecánicos expertos y elige el que mejor se adapte a tus necesidades.</p>
                </div>
            </section>

            <section className="why-choose-us textContain" style={{ background: 'none' }}>
                <h4>¿Por Qué Elegirnos?</h4>
                <ul>
                    <li>Red de mecánicos altamente calificados y certificados.</li>
                    <li>Experiencia en una amplia gama de reparaciones y marcas de vehículos.</li>
                </ul>
            </section>

            <section className="why-choose-us textContain" style={{ background: 'none' }}>
                <h4>Calificación</h4>
                <div>
                    <p>
                        Calificamos a los mecánicos registrados según a la experiencia que
                        estos contienen y otros factores a determinar,como la satisfacción
                        del usuario con la ayuda solictada,etc.
                    </p>
                </div>
            </section>
            <section className="why-choose-us textContain" style={{ background: 'none' }}>
                <h4>Necesidad que se cubre</h4>
                <div>
                    <p>
                        Un sitio web personalizado, enfocado en otorgar información en
                        la reparación de motorizados, con el fin de ayudar a los usuarios
                        de olvidarse de problemas molestos y poder solicitar a expertos que
                        resuelvan problemas con rápidez y eficiencia.
                    </p>
                </div>
            </section>
            <section style={{ background: 'none' }}>
                <div className='d-flex justify-content-center'>
                    <Logo width={500} height={200} />
                </div>
            </section>
            <div className='d-flex justify-content-center'>
                <label className=' text-center bg-primary p-3 text-white'>
                    Desde el tallaer hasta tu ubicación
                </label>
            </div>
            <section className='bg-primary d-flex justify-content-center text-white fs-4 mt-4'>
                <span className='p-4'> © HELPMECHANIC 2023 </span>
            </section>

        </main>
    );
}