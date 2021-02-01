import React from 'react';
import PropTypes from 'prop-types';

const SendSection = props => (
  <div>
    <p>Ya esta todo listo.</p>
    <p>
      Cuando pulses 'Enviar correos' enviaremos un correo a cada participante indicandole quien es
      la persona a la que debe hacerle el regalo
    </p>
    <p>
      Recuerda confirmar con todos los paticipantes que han recibido el correo (puede esta en la
      carpeta de correo no deseado)
    </p>
  </div>
);

SendSection.propTypes = {};

export default SendSection;
