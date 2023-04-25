import React, { useEffect } from 'react'
import { Card, Container, Row } from 'react-bootstrap'

const TermsAndConditions = () => {

    useEffect(() => {
        document.getElementById("menuHolder").scrollIntoView();  
            
    },[]);

    return (
        <div>
            <Container className='p-3'>
            <Card>
                <Card.Body>
                    <Row>
                        <h4><strong>1. ACEPTACIÓN</strong></h4>
                        <p>
                        En el presente documento se establecen los términos y condiciones de <strong>Irodum</strong>, 
                        que serán de aplicación al acceso y uso por parte del Usuario de esta página web (www.Irodum.com). 
                        Les rogamos lean atentamente el presente Contrato.<br/> 
                        Al acceder, consultar o utilizar el Sitio Web, los Usuarios (“Vd.”, “usted”, “Usuario”, o “usuario”) 
                        aceptan cumplir los términos y condiciones establecidos en este Contrato. 
                        En caso de que usted no acepte quedar vinculado por los presentes 
                        términos y condiciones, no podrá acceder a, ni utilizar, el Sitio Web.<br/><br/>
                        El presente Sitio Web está dirigido exclusivamente a personas residentes en Chile. 
                        Los Usuarios residentes o domiciliados en otro país que deseen acceder y utilizar el Sitio Web, 
                        lo harán bajo su propio riesgo y responsabilidad, por lo que deberán asegurarse de que dichos accesos y/o 
                        usos cumplen con la legislación aplicable en su país.
                        </p>
                    </Row>
                    <Row>
                        <h4><strong>2. REQUISITOS RELATIVOS AL USUARIO</strong></h4>
                        <p>El Sitio Web y los servicios relacionados con el mismo se ofrecen a 
                            los Usuarios que tengan capacidad legal para ofrecer un servicio según 
                            la legislación aplicable.<br/>
                            Los menores no están autorizados para utilizar el Sitio Web. Si usted es menor de edad, 
                            por favor, no utilice esta web.</p>
                    </Row>
                    <Row>
                        <h4><strong>3. LICENCIA</strong></h4>
                        <p>Todo el material mostrado u ofrecido en el Sitio Web, entre otros ejemplos, 
                            el material gráfico, los documentos, textos, imágenes, sonido, video, audio, las ilustraciones, 
                            el software y el código HTML (en conjunto, el “Contenido”), 
                            es de  exclusiva propiedad de <strong>Irodum.com</strong> o de las empresas que facilitan dicho material.<br/>
                            El Contenido está protegido por las leyes de copyright chilenas, así como por las demás leyes, 
                            reglamentos y normas aplicables a los derechos de propiedad intelectual. 
                            Salvo disposición expresa en contrario en el presente contrato, 
                            y/o salvo que por imperativo legal ello esté expresamente permitido por leyes derogatorias de las 
                            actualmente vigentes, el Usuario no podrá:
                            <ul><br/>
                                <li>
                                    Utilizar, copiar, modificar, mostrar, eliminar, distribuir, descargar, almacenar, reproducir, 
                                    transmitir, publicar, vender, revender, adaptar, 
                                    invertir el proceso de creación o crear productos derivados a partir de, el contenido de este sitio web.
                                </li>
                                <li>
                                Utilizar el Contenido en otras páginas web o en cualquier medio de comunicación como, 
                                por ejemplo, en un entorno de red, sin la previa autorización por escrito de <strong>Irodum.com</strong>.
                                </li>
                            </ul>
                            Todas las marcas comerciales, las marcas de servicio y los logos 
                            mostrados en el Sitio Web son propiedad exclusiva de <strong>Irodum.com</strong> y de sus respectivos propietarios. 
                        </p>
                    </Row>
                    <Row>
                        <h4><strong>4. INFORMACIÓN FACILITADA POR EL USUARIO</strong></h4>
                        <p>
                        Este Sitio Web ofrece al Usuario un foro de obtención de empleo y/o contactos de trabajo. 
                        Al facilitar o introducir la información en el Sitio Web (“Información del Usuario”), 
                        el Usuario otorga a <strong>Irodum.com</strong> licencia y derecho permanente, no exclusivo, irrevocable, libre de royalties, 
                        durante el tiempo máximo permitido por la legislación aplicable, pero no le impone obligación de, utilizar, 
                        copiar, modificar, mostrar, distribuir, descargar, almacenar, reproducir, transmitir, publicar, vender, 
                        revender, adaptar ni crear productos derivados  en todo o en parte a partir de, la Información del Usuario, 
                        en ningún modo o manera. 
                        El Usuario reconoce y acepta que <strong>Irodum.com</strong> es solamente un foro pasivo a través del cual los usuarios pueden 
                        conseguir empleo. <strong>Irodum.com</strong> no comprueba ni controla la Información del Usuario. 
                        En consecuencia, <strong>Irodum.com</strong> no asume garantía alguna en cuanto a la fiabilidad, precisión, integridad, validez o 
                        veracidad de la Información remitida por los usuarios.
                        </p>
                    </Row>
                    <Row>
                        <h4><strong>5. CUENTA Y CONTRASEÑA</strong></h4>
                        <p>
                        Cuando el Usuario utiliza el Sitio Web, puede optar por abrir una cuenta en el Sitio. 
                        En ese caso, el Usuario recibirá el número de cuenta virtual y la contraseña inicial que le correspondan. 
                        Es responsabilidad exclusiva del Usuario:
                            <ul><br/>
                                <li>
                                    Mantener la confidencialidad de dichos números de cuenta virtual y contraseña.
                                </li>
                                <li>
                                    Actualizar y comprobar frecuentemente su contraseña
                                </li>
                            </ul>
                        </p>
                    </Row>
                </Card.Body>
            </Card>
            </Container>
        </div>
    )
}

export default TermsAndConditions