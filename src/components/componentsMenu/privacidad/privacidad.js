import '../../../fonts.css';
export default function Privacidad() {
    return (
        <main className='container'>
            <hr className='bg-primary' style={{ height: '10px', marginTop:'12vh' }}></hr>
            <h4>Términos y condiciones</h4>
            <b>Última actualización <pre>25/07/2023</pre></b>
            <div className='textContain'>
                <article className='p-2' style={{ background: '#F1F4F7' }}>
                    <span> <b>Bienvenido/a</b> a helpmechanic.</span>
                    <p className='textContain mt-2'>
                        Antes de utilizar nuestro sitio web,
                        te pedimos que leas detenidamente nuestros <b>Términos y Condiciones.</b>
                    </p>
                    <p>
                        Al acceder o utilizar nuestro sitio, aceptas estar legalmente vinculado/a
                        por los siguientes términos.
                        Si no estás de acuerdo con estos términos, por favor, no utilices nuestro sitio.
                    </p>
                </article>
                <article className='mt-3'>
                    <b>1. Geolocalización y Privacidad</b>
                    <p className='mt-3'>
                        <b>1.1. Geolocalización: </b>
                        Nuestro sitio web puede solicitar y utilizar la geolocalización
                        de tu dispositivo para proporcionar servicios basados en la ubicación. Al acceder a
                        nuestro sitio, aceptas permitir el acceso a tu ubicación y reconoces que esta
                        información puede ser recopilada y utilizada con fines específicos, como ofrecerte
                        servicios personalizados y mejorar tu experiencia en el sitio.
                    </p>
                    <p>
                        <b>1.2. Privacidad: </b>
                        Respetamos tu privacidad y protegemos tus datos personales de
                        acuerdo con nuestra <b>Política de Privacidad</b>.
                        Al utilizar nuestro sitio web, aceptas las prácticas de recopilación, uso y
                        divulgación de información descritas en nuestra <b>Política de Privacidad</b>.
                        Te recomendamos revisarla para comprender cómo manejamos tus datos.
                    </p>
                </article>
                <article className='mt-3'>
                    <b>2. Datos Personales y Almacenamiento</b>
                    <p className='mt-3'>
                        <b>2.1. Datos Personales: </b>
                        Para brindarte ciertos servicios y funcionalidades,
                        es posible que solicitemos información personal, como nombre, dirección de
                        correo electrónico, número de teléfono, entre otros. La recopilación y el
                        uso de tus datos personales están sujetos a nuestra Política de Privacidad.
                    </p>
                    <p>
                        <b> 2.2. Almacenamiento: </b>
                        Nos comprometemos a proteger tus datos personales y a
                        implementar medidas de seguridad para evitar el acceso no autorizado. Sin embargo,
                        no podemos garantizar la seguridad absoluta de la información transmitida o
                        almacenada en línea. Utilizamos tecnologías de seguridad para proteger tus datos,
                        pero es importante que tomes precauciones para proteger tu información también.
                    </p>
                </article>
                {/*Uso aceptable*/}
                <article className='mt-3'>
                    <b> 3. Uso Aceptable</b>
                    <p className='mt-3'>
                        <b>3.1. Uso del Sitio Web: </b>
                        Al utilizar nuestro sitio web, te comprometes a hacerlo
                        de manera legal, ética y responsable. No debes realizar actividades que puedan dañar,
                        sobrecargar o interferir con el funcionamiento adecuado del sitio.
                    </p>
                    <p>
                        <b>3.2. Contenido del Usuario:  </b>
                        Si tienes la opción de compartir contenido en nuestro
                        sitio web, garantizas que tienes el derecho de hacerlo y que dicho contenido no
                        infringe los derechos de terceros, incluidos derechos de autor, marcas comerciales,
                        privacidad u otros derechos legales.
                    </p>
                    <p>
                        <b>3.3. Uso de información proporcionada:  </b>
                        La información proporcionada y que verá adelante si acepta los términos y 
                        condiciones, no se debe usarlas para cometer una actividad externa que no sea
                        con la misión principal del sitio. Esto es por actividades que perjudican ya sea 
                        a los propios mecánicos y/o usuarios.
                    </p>
                    <p>
                        <b>3.4. Helpmechanic:  </b>
                        Helpmechanic, es una empresa de tecnologia, que ofrece un servicio de intermediario
                        entre mecánicos a usuarios o usuarios a mecánicos, dónde solo nos hacemos responsables
                        de ofrecer información de personas capacitadas que ofrecen un servicio de reparación.
                        Para así, cualquiera pueda tener una ayuda o guia de mecánicos disponibles según su
                        ubicación.
                    </p>
                </article>
                 {/*Propiedad intelectual*/}
                <article className='mt-3'>
                    <b> 4. Propiedad Intelectual</b>
                    <p className='mt-3'>
                        <b>4.1. Contenido del sitio: </b>
                        En helpmechanic, se usa algunas imagenes obtenidas de páginas
                        libres de derecho de autor, dónde las puede presenciar por la navegación del sitio. 
                        Esto es debido al ser una start up en modo de crecimiento. Si acepta los términos y
                        condiciones estará de acuerdo con este uso.
                    </p>
                    <p>
                        <b> 4.2. Uso Limitado:  </b>
                        Se te concede una licencia limitada y no transferible para acceder
                        y utilizar nuestro sitio web con fines personales y no comerciales. No está permitido
                        modificar, copiar, distribuir, transmitir, exhibir, realizar, reproducir, publicar,
                        otorgar licencias, crear trabajos derivados, transferir o vender ningún contenido obtenido
                        de nuestro sitio.
                    </p>
                </article>
                 {/*Cambios en los términos y condiciones*/}
                <article className='mt-3'>
                    <b>5. Cambios en los Términos y Condiciones</b>
                    <p className='mt-3'>
                        Nos reservamos el derecho de actualizar y modificar estos Términos y Condiciones en
                        cualquier momento sin previo aviso. Los cambios entrarán en vigencia a partir de su
                        publicación en el sitio web. Te recomendamos revisar periódicamente esta página para
                        estar informado/a sobre las actualizaciones.
                    </p>
                </article>
                <article className='mt-3'>
                    <b>6. Fotografía y contenido para registro de mecánicos</b>
                    <p className='mt-3'>
                        <b>6.1. Subida de Fotografías: </b>
                        Al utilizar nuestro sitio web, es posible que te
                        ofrezcamos la opción de subir fotografías. Al hacerlo, declaras y garantizas que tienes 
                        todos los derechos necesarios para compartir dicho contenido, y que este no infringe 
                        los derechos de terceros ni viola ninguna ley o regulación aplicable.
                    </p>
                    <p>
                        <b> 6.2. Uso de Fotografías:  </b>
                        Al subir una fotografía en nuestro sitio web, otorgas
                        a helpmechanic una licencia no exclusiva, transferible, sublicenciable,
                        libre de regalías y mundial para utilizar, reproducir, modificar, adaptar, publicar,
                        traducir y distribuir el contenido en relación con la operación y promoción del sitio
                        web y sus servicios. Sin embargo, mantendrás la propiedad de tus fotografías y
                        helpmechanic no venderá ni transferirá tus imágenes a terceros sin tu consentimiento.
                    </p>
                    <p>
                        <b> 6.3. Contenido Inapropiado:  </b>
                        No se permitirá la subida de contenido que sea obsceno,
                        difamatorio, amenazante, discriminatorio, ilegal o que vulnere los derechos de terceros.
                        Nos reservamos el derecho de eliminar cualquier contenido que consideremos inapropiado o
                        que viole estos <b>Términos y Condiciones</b>.
                    </p>
                    <p className='p-2' style={{ background: '#F1F4F7' }}>
                        <b>  6.4. Responsabilidad:  </b>
                        Eres el único responsable del contenido que subas a nuestro sitio
                        web. Helpmechanic no asume ninguna responsabilidad por el contenido proporcionado
                        por los usuarios. Sin embargo, nos reservamos el derecho de cooperar con las autoridades y
                        proporcionar información si existen razones para creer que el contenido subido infringe la
                        ley o los derechos de terceros.
                    </p>
                </article>
                <article className='mt-3'>
                    <b>7. Finalización de la Cuenta</b>
                    <p className='p-4'>
                        Si violas alguno de estos <b>Términos y Condiciones</b> o nuestra <b>Política de Privacidad</b>, nos
                        reservamos el derecho de suspender o dar por terminada tu cuenta en nuestro sitio web
                        sin previo aviso.
                    </p>
                </article>
            </div>
        </main>
    );
}