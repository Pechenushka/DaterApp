import {localizationPackType} from './localizationTypes';

const spa: localizationPackType = {
  lang_title: 'Lengua Española',
  send: 'Enviar',
  contacts: 'contactos',
  chats: 'charlas',
  profile_settings: 'configuración de perfil',
  matches: 'Partidos',
  age: 'años',
  announcement_text: 'texto de anuncio',
  aply_filters: 'Aplicar filtros',
  city: 'ciudad',
  country: 'país',
  edit: 'editar',
  enter_your_message: 'Ingrese su mensaje',
  filters: 'filtros',
  gender: 'género',
  your_gender: 'tu género',
  items_not_found: 'Artículos no encontrados',
  likes: 'gustos',
  location: 'localización',
  me_liked: 'Me gustó',
  my_likes: 'Mis gustos',
  preview: 'Avance',
  region: 'región',
  search: 'buscar',
  send_your_message: 'Envía tu mensaje',
  something_went_wrong: 'algo salió mal',
  write_few_words_about_yourself: 'Escribe algunas palabras sobre ti',
  write_your_message: 'Escribe tu mensaje',
  your_announcement: 'tu anuncio',
  your_chats: 'tus chats',
  servers_are_not_allowed: 'Los servidores no están permitidos o no hay conexión a Internet.',
  moderation_request_pending: 'Su solicitud de moderación en espera de aprobación',
  profile_not_moderated:
    'Perfil no moderado. Tu foto de avatar es inaceptable. Por favor cambia tu avatar',
  please_request_moderation: '¡Casi termino! Solicite moderación agregando avatar',
  help: 'ayudar',
  requests: 'peticiones',
  authorization: 'Autorización',
  or: 'o',
  enter_your_email: 'Introduce tu correo electrónico',
  enter_your_password: 'Ingresa tu contraseña',
  create_new_account: 'Crear una nueva cuenta',
  login: 'acceso',
  chose_city: 'Elige ciudad',
  chose_country: 'Elige país',
  chose_region: 'Elige región',
  date_of_birth: 'Fecha de nacimiento',
  enter_your_name: 'Introduzca su nombre',
  repeat_your_password: 'Repita su contraseña',
  sign_up: '¡Inscribirse!',
  feedback: 'Contacta con nosotros',
  month: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  selectLanguage: 'Elige tu idioma',
  languageWarning: 'Los cambios se aplicarán después de reiniciar',
  send_message: 'Enviar mensaje',
  like: 'Como',
  block_user: 'Bloquear usuario',
  unblock_user: 'Desbloquear usuario',
  report_user: 'Informar usuario/contenido',
  send_report: 'Enviar reporte',
  add_comment_to_report: 'Añadir comentario al informe',
  must_be_at_least: (chars: number) => {
    return `Debe tener al menos ${chars} caracteres`;
  },
  warning: 'Advertencia',
  your_report_successfully_sended: 'Su informe fue enviado con éxito',
  you_are_banned: 'Tu perfil fue baneado por violar las reglas de la comunidad',
  privacy_rules: 'Privacidad',
  terms_of_use_title: 'Condiciones de uso',
  terms_of_use: `Principios de la Comunidad
  Bienvenido a la comunidad Meebo. Si eres honesto, amable y respetuoso con los demás, siempre serás bienvenido aquí. Si eliges no serlo, es posible que no dures. Nuestro objetivo es permitir que los usuarios se expresen libremente siempre que no ofenda a los demás. Todos tienen el mismo estándar en Meebo. Le pedimos que sea considerado, piense antes de actuar y cumpla con las pautas de nuestra comunidad tanto en línea como fuera de línea. Escuchó bien: su comportamiento fuera de línea puede llevar a la cancelación de su cuenta de Meebo.
  A continuación se muestra una lista de nuestras políticas comunitarias. Si viola alguna de estas políticas, es posible que se le excluya de Meebo. En serio, no nos hagas deslizar hacia la izquierda sobre ti, porque no habrá repeticiones una vez que lo hagamos. Le recomendamos que informe cualquier comportamiento que viole nuestras políticas.
  Meebo no es para:

  Desnudez/Contenido sexual

  No te estamos pidiendo que peines tu cabello hacia un lado o incluso que hables en oraciones completas; pero por favor manténgalo elegante y apropiado para el consumo público. Sin desnudez, sin contenido sexualmente explícito, y no hagas una crónica de todos tus deseos sexuales en tu biografía. Mantenlo limpio.
  Acoso
  No participe, ni anime a otros a participar, en ningún abuso o acoso dirigido contra ningún otro usuario. Esto incluye enviar cualquier contenido sexual no solicitado a sus coincidencias. Los informes de acoso, amenazas, acoso o intimidación se toman muy en serio.
 
  Violencia y Daño Físico
 
  No toleramos contenido violento, gráfico o sangriento en Meebo, ni ninguna acción o contenido que defienda o amenace con la violencia de ningún tipo, incluidas las amenazas o la promoción del terrorismo. El asalto físico, la coerción y cualquier acto de violencia están estrictamente prohibidos.
  Tampoco se permite el contenido que abogue o glorifique el suicidio o las autolesiones. En estas situaciones, podemos tomar una serie de medidas para ayudar al usuario, incluida la comunicación con recursos de crisis.

  El discurso del odio
  Cualquier contenido que promueva, defienda o apruebe el racismo, la intolerancia, el odio o la violencia contra individuos o grupos en función de factores como (entre otros) raza, etnia, afiliación religiosa, discapacidad, género, edad, origen nacional, orientación sexual , o la identidad de género no está permitida.
  
  Información privada
  No transmita públicamente ninguna información privada, ni suya ni de nadie más. Esto incluye números de seguro social, pasaportes, contraseñas, información financiera o información de contacto no incluida en la lista, como números de teléfono, direcciones de correo electrónico, dirección de casa/trabajo.
  
  Correo no deseado
  No seas falso. Sé real en su lugar. No use Meebo para llevar a las personas a sitios web externos a través de un enlace o de otra manera.
  
  Promoción o Solicitación
  Solicitar a otros usuarios está prohibido en Meebo. Está bien invitar a sus coincidencias a algo que esté haciendo, pero si el propósito de su perfil es publicitar su evento o negocio, sin fines de lucro, campaña política, concurso o realizar investigaciones, podemos eliminar su cuenta. Si bien estamos entusiasmados de que haga un programa de comedia la próxima semana, no use Meebo para promocionarlo.

  Prostitución y Trata
  Está estrictamente prohibido promover o defender los servicios sexuales comerciales, la trata de personas u otros actos sexuales no consensuales, lo que dará lugar a que Meebo bloquee su cuenta.
  
  Estafa
  Meebo tiene una política de tolerancia cero con el comportamiento depredador de cualquier tipo. Cualquier persona que intente obtener información privada de otros usuarios para actividades fraudulentas o ilegales puede ser prohibida. Cualquier usuario al que se sorprenda compartiendo la información de su propia cuenta financiera (PayPal, Venmo, etc.) con el fin de recibir dinero de otros usuarios también puede ser expulsado de Meebo.
  
  Interpretación
  ¡Ser uno mismo! No pretendas ser otra persona.
  No suplante ni tergiverse la afiliación, la conexión o la asociación con ninguna persona o entidad. Esto incluye cuentas de parodia. Si bien creemos que su perfil de Mike Pence es gracioso, usted no es Mike Pence. Y si es así, ¿qué estás haciendo en Meebo?
 
  menores
  Debe tener 18 años de edad o más para usar Meebo. Como tal, no permitimos imágenes de menores no acompañados. Si desea publicar fotos de sus hijos, asegúrese de estar en la foto también. Si ve un perfil que incluye a un menor no acompañado, fomenta el daño a un menor o representa a un menor de manera sexual o sugestiva, repórtelo de inmediato.

  Infracción de derechos de autor y marcas registradas
  Si no es tuyo, no lo publiques. Si su perfil de Meebo incluye algún trabajo con derechos de autor o marca registrada de otros, no lo muestre, a menos que tenga permiso para hacerlo.
  
  Uso ilegal
  No use Meebo para hacer nada ilegal. Si es ilegal IRL, es ilegal en Meebo.
  
  Una persona, una cuenta
  Las cuentas de Meebo no pueden tener varios propietarios, así que no cree una cuenta con su amigo o pareja. Además, no mantenga varias cuentas de Meebo.
  
  Aplicaciones de terceros
  No se permite el uso de ninguna aplicación creada por alguien que no sea Meebo que afirme ofrecer nuestro servicio o desbloquear funciones especiales de Meebo (como los barridos automáticos).
  
  Inactividad de la cuenta
  Meebo es divertido de usar... ¡todo el tiempo! Usa Meebo en el lago, usa Meebo mientras comes pastel. ¡Use Meebo cuando esté fuera, use Meebo cuando tenga dudas! Pero, si no inicia sesión en su cuenta de Meebo en 2 años, podemos eliminar su cuenta por inactividad.
  `,
  privacy_policy_text: `Privacidad de Meebo
  NUESTRO COMPROMISO CON USTED En Meebo, su privacidad es nuestra máxima prioridad. Está en el centro del desarrollo y la creación de los servicios y productos que conoce y ama. Todo para que tengas la oportunidad de confiar plenamente en ellos y centrarte en nuevos conocidos importantes.
 
  Agradecemos el hecho de que nos confíe su información y la tratamos con responsabilidad.
 
  Nuestro compromiso de privacidad. Al crear cada producto y servicio, pensamos en la privacidad de nuestros usuarios. Traemos expertos de varios campos, como legal, seguridad, desarrollo, diseño de productos y más, para tomar cada decisión con respeto a su privacidad.
 
  Nuestro compromiso con la transparencia. Usamos muchos de los mismos servicios en línea que usted, por lo que entendemos que la información incompleta y el lenguaje demasiado complejo son problemas comunes con las políticas de privacidad. Nuestro enfoque es exactamente el contrario: tratamos de redactar la política de privacidad y otros documentos similares en un lenguaje comprensible. Realmente queremos que los usuarios lean nuestras políticas y comprendan nuestras prácticas.
 
  Nuestro compromiso con la seguridad. Tenemos personas que se preocupan por la seguridad de sus datos. Actualizamos periódicamente nuestras prácticas de seguridad e invertimos en la industria para fortalecer la protección de su información.
 
  Política de privacidad Bienvenido a la Política de privacidad de Meebo. Gracias por tomarse el tiempo para conocerla.
 
  Agradecemos que confíe en nosotros con su información, y tenemos la intención de mantener esa confianza. Primero, queremos que comprenda qué información recopilamos, por qué la recopilamos, cómo se usa y qué opciones tiene sobre sus datos. En esta política, describimos nuestras prácticas de privacidad en un lenguaje sencillo y tratamos de evitar la terminología legal y técnica tanto como sea posible.
 
  FECHA EFECTIVA: 17 de mayo de 2022.
  
  Dónde se aplica nuestra Política de privacidad
  Esta política de privacidad se aplica a aplicaciones, eventos y otros servicios operados por la marca Meebo. Para simplificar esta política de privacidad, nos referimos a todos estos como nuestros servicios. Para una mayor claridad, hemos agregado un enlace a esta política de privacidad en todos los servicios relevantes.
  
  Algunos servicios pueden requerir su propia política de privacidad única. Si un servicio en particular tiene su propia política de privacidad, se aplica esa política, no la actual.

  Información que recopilamos
  Por supuesto, no podremos ayudarlo a conocerse correctamente sin cierta información sobre usted, como los datos básicos del perfil y el tipo de personas con las que desea comunicarse. También recopilamos información sobre cómo utiliza nuestros servicios, como el acceso a registros y datos de terceros cuando, por ejemplo, accede a nuestros servicios a través de su cuenta de red social o descarga información de su cuenta de red social, para completar un perfil. A continuación se proporciona información adicional.
  
  Información que nos proporciona
  Al utilizar nuestros servicios, usted acepta proporcionarnos cierta información, incluida la siguiente:
  
  Cuando crea una cuenta, nos dice al menos su dirección de correo electrónico y cierta información básica que es necesaria para que el servicio funcione, como su sexo o fecha de nacimiento. Al completar un perfil, puede compartir información adicional, como información biográfica, intereses y otros detalles sobre usted, así como contenido como una foto. Para agregar ciertos materiales, como fotos, puede darnos acceso a su álbum de fotos. Si se comunica con nuestro servicio de atención al cliente, recopilamos la información que nos proporciona durante esa interacción. Si comparte información sobre otras personas con nosotros (por ejemplo, si utiliza los datos de contacto de un amigo para una función), procesamos esa información en su nombre para cumplir con su solicitud. Por supuesto, también procesamos datos de sus chats con otros usuarios y el contenido que publica según sea necesario para operar los servicios. Información que recibimos de otros Además de la información que nos proporciona directamente, recibimos información sobre usted de otras fuentes, que incluyen:
  
  Usuarios Los usuarios pueden proporcionar información sobre usted cuando utilizan nuestros servicios, por ejemplo, si interactúan con usted o presentan una queja sobre usted. Cuando utiliza nuestros servicios, se generan datos técnicos sobre las funciones que utiliza, cómo las utiliza y los dispositivos desde los que utiliza nuestros servicios. A continuación se muestran los detalles:
  
  Información de uso Su uso de los Servicios genera datos sobre su actividad en ellos, por ejemplo, cómo los usa (como el tiempo de inicio de sesión, las funciones utilizadas, las acciones, la información que se le muestra, la dirección de las páginas web con el enlace original y los anuncios). con los que interactuó) y cómo interactúa con otros usuarios (por ejemplo, los usuarios con los que se comunica e interactúa, cuándo sucede exactamente esto, la cantidad de mensajes enviados y recibidos). Información del dispositivo Recopilamos información de y sobre el dispositivo o dispositivos desde los que utiliza nuestros servicios, incluidos datos de hardware y software, como dirección IP, identificador y tipo de dispositivo, configuración y características de la aplicación, bloqueos de aplicaciones, identificadores de publicidad (números generados aleatoriamente que se puede restablecer en la configuración del dispositivo), identificadores asociados con cookies u otras tecnologías que pueden identificar de manera única un dispositivo o navegador. De la misma manera, si das permiso, podemos recopilar fotos.

  Cómo usamos la información
  La razón principal por la que usamos su información es para proporcionar y mejorar nuestros servicios. Además, usamos su información para protegerlo. A continuación, explicamos en detalle las diversas razones para usar su información y brindamos ejemplos prácticos.
  
  A. Para administrar su cuenta y garantizar el funcionamiento de nuestros servicios. Crear y administrar su cuenta. Brindarle apoyo y respuestas a sus solicitudes. Realizar sus transacciones. Comunicarnos con usted sobre nuestros servicios. B. Para ayudarlo a conocer a otros usuarios. Recomendar a otros usuarios. para usted Mostrar perfiles de usuario uno a uno C. Para prevenir, detectar y combatir el fraude u otra actividad ilegal o no autorizada Buscar y remediar violaciones (actuales, sospechadas o sospechadas) de nuestros Términos de uso, incluso mediante la revisión de quejas e interacciones entre usuarios Mejor comprender y desarrollar contramedidas contra las infracciones de nuestros Términos de uso Retener datos relacionados con el incumplimiento de nuestros Términos de uso para evitar incidentes repetidos Hacer cumplir o hacer cumplir nuestros derechos, como nuestros Términos de uso Contactar a las personas que presentan quejas para informarles de nuestra acción sobre su denuncia D. Para garantizar el cumplimiento de la legislación Cumplimiento de los requisitos legales Asistencia a las autoridades encargadas de hacer cumplir la ley encies La información sobre el tratamiento de datos personales a través de la elaboración de perfiles y la toma de decisiones automatizada se puede encontrar en la sección de preguntas frecuentes.
  
  A otros usuarios Usted proporciona información a otros usuarios cuando la divulga voluntariamente en el servicio (incluida la información contenida en un perfil público). Tenga cuidado y asegúrese de que realmente no le importa compartir cierta información.
  
  Si alguien presenta una queja relacionada con usted (por ejemplo, sobre su violación de nuestros Términos de uso), podemos notificar a la persona que presentó la queja sobre la acción (si corresponde) que hemos tomado como resultado de la queja.
  
  Seguimos un estricto proceso de investigación antes de contratar a cualquier proveedor de servicios o trabajar con cualquier socio. Nuestros proveedores de servicios y socios deben aceptar estrictas obligaciones de confidencialidad.
  
  Compartimos su información con afiliados para fines legales limitados como se establece a continuación:
  
  A los organismos encargados de hacer cumplir la ley / según lo exija la ley Podemos divulgar su información si es razonablemente necesario: 1) según lo exija un proceso legal, como una orden judicial, una citación o una orden de allanamiento, debido a una investigación gubernamental o policial, u otros requisitos legales; 2) para ayudar a prevenir o detectar un delito (en cada caso sujeto a la ley aplicable); 3) para la protección de alguna persona.
  
  Para hacer cumplir los derechos legales, también podemos proporcionar información: 1) si la divulgación mitigaría nuestra responsabilidad en una demanda real o potencial; 2) según sea necesario para proteger nuestros derechos legales y los derechos legales de nuestros usuarios, socios comerciales u otras partes interesadas; 3) para cumplir con nuestros acuerdos con usted; 4) para investigar, prevenir o tomar otras medidas con respecto a actividades ilegales, posibles fraudes u otros delitos.
  
  Con su consentimiento o solicitud, podemos solicitar su consentimiento para compartir su información con terceros. En tales casos, explicaremos claramente por qué queremos compartir esta información.
  
  Podemos usar y compartir información no personal (es decir, información que no lo identifica personalmente, incluida la información del dispositivo, información demográfica general, datos generales de comportamiento, información de ubicación no identificable personalmente) e información personal en un formato hash en el que no puede ser leído por una persona bajo ninguna de las circunstancias anteriores.
    
  Tus derechos
  Queremos que tengas el control de tu información, por eso te recordamos las siguientes opciones y herramientas:
  
  Medios de acceso/actualización en el servicio. Las herramientas y la configuración de la cuenta lo ayudarán a acceder a la información que nos proporciona y que está relacionada con su cuenta directamente en el Servicio, así como a corregir o eliminar dicha información. Si tiene alguna pregunta sobre estas herramientas y configuraciones, comuníquese con nuestro equipo de soporte. Permisos de dispositivos. Las plataformas móviles pueden tener sistemas de permisos para ciertos tipos de datos y notificaciones, como contactos telefónicos, imágenes, servicios de ubicación, notificaciones automáticas e identificadores publicitarios. Puede cambiar la configuración del dispositivo, dando o negando el consentimiento para la recopilación y el procesamiento de información relevante o la visualización de notificaciones relevantes. Por supuesto, si no da su consentimiento, ciertos servicios pueden perder su funcionalidad. Eliminación Puede detener toda la recopilación de información por parte de la aplicación desinstalándola a través del proceso de desinstalación estándar en su dispositivo. Tenga en cuenta: eliminar la aplicación NO cancela la cuenta. Para cerrar su cuenta, use la función correspondiente en el servicio. Cierre de cuenta. La cuenta se puede cerrar utilizando la función correspondiente directamente en el servicio. También queremos que nuestros usuarios sean conscientes de sus derechos de privacidad.
  `,
  i_agree_with: 'Estoy de acuerdo con',
  and: 'y',
  privacy_policy_title: 'Política de privacidad',
  goals: ['construcción de la familia', 'viajes', 'coqueteo', 'charla', 'amistad', 'sexo'],
  i_looking_for: `Estoy buscando`,
  for: 'por',
  genders: ['Hombre', 'Mulheres'],
  your_expectations: 'Tus expectativas',
  your_dating_goals: 'Tus objetivos de citas',
  it_is_you: '¡Eres tú!',
  choose_variant: 'Elegir variante',
  our_telegram: 'Nuestro telegrama',
  stepof: (currentStep, numberOfSteps) => {
    return `Paso ${currentStep} de ${numberOfSteps}`;
  },
  hints: [
    'Proporcione información básica sobre usted',
    'Por favor ingrese su fecha de nacimiento y su sexo',
    '¡Casi hecho! Ingresa tu ubicación y presiona Registrarse!',
  ],
  prev: 'anterior',
  next: 'próximo',
  delete_accaunt: 'Borrar cuenta',
  delete_accaunt_question: '¿Estás seguro de que quieres eliminar la cuenta?',
  delete_avatar_question: '¿Estás seguro de que quieres eliminar tu avatar?',
  no: 'no',
  yes: 'si',
  delete_chat: 'Eliminar chat',
  all_cities: 'Todas las ciudades',
  all_countries: 'Todos los países',
  all_regions: 'Todas las regiones',
  choose_gender: 'Elige género',
  iam_man: 'Yo soy un hombre',
  iam_women: 'soy una mujer',
  your_photo_gallery: 'Tu galería de fotos',
  now_you_can_make_photo_access_request:
    'Ahora tienes la oportunidad de solicitar el acceso a la foto.',
  cant_load_video: `No podemos descargar el video, lo más probable es que el problema sea una conexión lenta`,
  make_request: 'Solicitar acceso',
  oops: '¡Ay!',
  success: '¡Éxito!',
  this_photo_was_hide_by_owner:
    'El acceso a la foto está limitado por el propietario, solicite acceso al propietario de la foto, para esto, vea un video corto.',
  watch_video: 'Ver anuncio',
  you_successfully_requested_access: '¡La solicitud de acceso ha sido enviada con éxito!',
  photo_access_requests: 'Solicitudes de acceso',
  photo_gallery: 'Galería de fotos',
  my_requests: 'Mis solicitudes',
  requests_to_me: 'Solicitudes para mí',
  approved: 'Aprobado',
  pending: 'Pendiente',
  rejected: 'Rechazado',
  requestItemStatusMessage: {
    approved: `La solicitud de este usuario ha sido aprobada`,
    pending: 'Solicita acceso y espera una respuesta',
    rejected: `La solicitud de este usuario fue denegada`,
  },
  requestHelpMessage: {
    myRequests: {
      approved: 'Aquí se muestran sus solicitudes que han sido aprobadas.',
      pending: 'Aquí se muestran sus solicitudes pendientes.',
      rejected: 'Aquí se muestran sus solicitudes rechazadas.',
    },
    requestToMe: {
      approved: 'Aquí se muestran las solicitudes que usted ha aprobado.',
      pending: 'Aquí se muestran solicitudes que están esperando su respuesta.',
      rejected: 'Esto le muestra las solicitudes que ha rechazado.',
    },
  },
  for_add_annon_photo_watch_add: 'Para agregar una foto anónima, debe ver un video corto',
  no_items_here_yet: `Mientras no haya nada aquí`,
  now_you_can_add_anon_photo: 'Ahora puedes agregar una foto anónima',
  photoGalleryAnonPhotoHint: `Estas fotos serán visibles solo para aquellos usuarios a los que les hayas dado acceso. Así, solo tú decides quién verá estas fotos. Las fotos que aún no han sido moderadas están marcadas con un marco rojo. Límite 4`,
  photoGalleryPhotoHint:
    'Estas fotos serán visibles para todos los usuarios. Las fotos que aún no han sido moderadas están marcadas con un marco rojo. Límite 5',
  sorry_you_rich_anon_photos_limit: `Lo sentimos, has alcanzado tu límite de fotos anónimas. 4/4`,
  your_anon_photos: 'Tus fotos anónimas',
  your_photos: 'Tus fotos',
  alco: ['No bebo', 'Bebo en compañía', 'A veces bebo', 'No me niego al alcohol'],
  smoking: ['No fumo', 'Fumo en compañía', 'Rara vez fumo', 'Fumo habitualmente'],
  kids: [
    `No tengo hijos y no pienso tenerlos`,
    `No tengo hijos pero me gustaría`,
    `Tengo hijos, vivimos juntos`,
    `Tengo hijos, vivimos separados`,
  ],
  additional_info: 'Información adicional',
  your_attitude_towards_alcohol: 'Tu actitud hacia el alcohol.',
  your_attitude_towards_smoking: 'Su actitud hacia el tabaquismo',
  do_you_have_children: 'Tiene hijos',
  i_dont_mind_being_a_sponsor: `No me importa ser patrocinador.`,
  i_dont_mind_being_a_kepter: `No me importa vivir a expensas de un socio`,
  not_setted: 'No establecido',
  attitude_towards_alcohol: 'Actitud hacia el alcohol',
  attitude_towards_smoking: 'Actitud hacia el tabaquismo',
  children: 'Niños',
  dating_goals: 'Objetivos de citas',
  show_olnly_persons_dont_mind_being_a_kepter:
    'Mostrar solo aquellos a los que no les importa vivir a expensas de un socio',
  show_olnly_persons_dont_mind_being_a_sponsor: `Mostrar solo aquellos a los que no les importe convertirse en patrocinadores`,
  all_variants: 'todas las variantes',
  guests: 'Invitados',
  guestWays: [
    'Redirigido desde la pantalla de búsqueda',
    'Redirigido desde la pantalla de me gusta',
    'Redirigido desde la pantalla de chat',
    'Redirigido desde la pantalla de invitados',
  ],
  my_guests: 'Mis Invitados',
  my_visits: 'Mis Visitas',
  guestHints: {
    myGuests: 'Estos son los usuarios que visitaron tu perfil',
    myVisits: 'Esto muestra a los usuarios que visitaste',
  },
  chat_list_screen: `Pantalla de lista de chat`,
  chat_screen: `Pantalla de chat`,
  guests_screen: `Pantalla de invitados`,
  likes_screen: `Pantalla Me gusta`,
  photo_access_requests_screen: `Pantalla de solicitudes de acceso a fotos`,
  photo_gallery_screen: `Pantalla de galería de fotos`,
  profile_settings_screen: `Pantalla de configuración de perfil`,
  search_screen: `Pantalla de búsqueda`,
  home_screen: `Pantalla de inicio`,
  chat_list_screen_hint: `Se puede acceder a esta pantalla usando el botón en la barra de navegación inferior.
  Todos sus chats se muestran aquí ordenados por la fecha del último mensaje en el chat`,
  chat_screen_hint: `Se puede acceder a esta pantalla seleccionando cualquier chat de la lista de chats en la pantalla de la lista de chat.
  El perfil de su interlocutor se muestra en la parte superior de la pantalla. También en el menú contextual hay opciones para eliminar un chat y bloquear a su interlocutor.
  En el centro verás el historial de mensajes en tu interlocutor.
  En la parte inferior de la pantalla, verá un campo para ingresar un mensaje y un botón para enviar un mensaje.`,
  guests_screen_hint: `Puede llegar a esta pantalla usando el botón en la pantalla principal "Invitados".
  Esta pantalla muestra los invitados de tu perfil.
  En la parte superior de la pantalla, verá un selector de pestañas. En la pestaña "Mis invitados" encontrarás todos los usuarios que visitaron tu perfil. En la pestaña "Mis visitas" encontrarás los usuarios que visitaste.
  La entrada sobre la visita al cuestionario se elimina después de 30 días.`,
  likes_screen_hint: `Se puede acceder a esta pantalla usando el botón en la barra de navegación inferior.
  En la parte superior de la pantalla, verá un selector de pestañas.
 
  Pestaña "Mis Me gusta".
  Aquí puedes ver los perfiles de los usuarios que te gustan.
 
  Pestaña "Me gusta".
  Aquí puedes ver los perfiles de los usuarios a los que les gustaste.
 
  Pestaña de coincidencias.
  Aquí puede ver los perfiles de los usuarios con los que ha emparejado Me gusta.`,
  photo_access_requests_screen_hint: `Se puede acceder a esta pantalla usando el botón en la pantalla principal de Solicitudes de acceso.
  Esta pantalla muestra solicitudes de acceso a fotos anónimas.
  En la parte superior de la pantalla, verá dos interruptores de pestañas. En el primero, elige qué solicitudes se mostrarán: solicitudes para usted o sus solicitudes para otros usuarios.
  Cada solicitud tiene 3 estados (selector de pestañas inferior). El estado "Aprobado" indica que la solicitud ha sido aprobada. El estado "Pendiente" indica que la solicitud está pendiente. El estado "Rechazado" indica que la solicitud fue rechazada.
  También tienes la opción de cambiar de opinión en cualquier momento.`,
  photo_gallery_screen_hint: `Se puede acceder a esta pantalla usando el botón en la pantalla principal de la Galería de fotos.
  En la parte superior de la pantalla hay un bloque con tus fotos públicas y en la parte inferior del bloque con tus fotos anónimas.
 
  Fotos públicas (bloque superior)
  Estas fotos serán visibles para todos los usuarios. Las fotos que aún no han sido moderadas están marcadas con un marco rojo. límite 5.
 
  Fotos anónimas (bloque inferior)
  Estas fotos serán visibles solo para aquellos usuarios a los que les hayas dado acceso. Así, solo tú decides quién verá estas fotos. Las fotos que aún no han sido moderadas están marcadas con un marco rojo. Límite 4. Las solicitudes de acceso a estas fotos se pueden encontrar en la pantalla "Solicitudes de acceso"`,
  profile_settings_screen_hint: `Puede acceder a esta pantalla mediante el botón de la pantalla principal "Configuración del cuestionario".
  En esta pantalla puede editar su perfil. Tiene la oportunidad de escribir algunas palabras sobre usted, indicar la ubicación, indicar sus expectativas de un compañero y también indicar información adicional sobre usted, como su actitud hacia el tabaquismo, el alcohol, tener hijos, y también indicar si está listo para convertirse en patrocinador o no en contra de vivir a expensas de su pareja.
  Todos los datos que ingrese aquí serán visibles para otros usuarios.`,
  search_screen_hint: `Se puede acceder a esta pantalla usando el botón en la barra de navegación inferior.
  En la parte superior de la pantalla, verá la ubicación desde la que se seleccionaron los perfiles. también encontrarás un montón de filtros allí. Todos los filtros que elija se guardan y se aplicarán automáticamente la próxima vez que abra la aplicación.
  En la parte principal de la pantalla hay una lista de perfiles que coinciden con todos los filtros. La lista se ordena automáticamente por la fecha de la última visita del usuario.
  Cada perfil de la lista se puede marcar con un icono verde o un icono rojo. El icono verde marca a los usuarios a los que no les importa convertirse en patrocinadores. El icono rojo marca a los usuarios a los que no les importa vivir a expensas de un socio.`,
  home_screen_hint: `Esta es tu pantalla principal, a donde vas cuando abres la aplicación.
  En la parte superior de la pantalla, tienes la oportunidad de subir tu avatar. Para hacer esto, haga clic en el botón de la cámara grande. Una vez que haya cargado su avatar, aparecerá en un marco circular en lugar de un botón de cámara. Para cambiar su avatar, haga clic en su avatar actual. Para eliminar un avatar, haga clic en el botón de la cruz pequeña en la esquina inferior derecha de su avatar.
  Debajo del avatar se encuentra la información básica sobre usted y sus datos de contacto (visibles solo para usted). A continuación se muestra la barra de navegación.`,
  private: 'Privado',
  public: 'Público',
  your_avatar: 'Tu Avatar',
  your_accaunt_added: 'Tu perfil agregado exitosamente',
  registration_errors: {
    agree_TOF: 'Debes aceptar los términos de uso.',
    email_empty: 'El correo electrónico no puede estar vacío.',
    less100: 'En serio, ¿tienes más de 100 años?',
    name_empty: 'El nombre no puede estar vacío.',
    over18: 'Debes ser mayor de 18 años.',
    password_6_cahrs: 'La contraseña debe tener al menos 6 caracteres',
    password_confirm_empty: 'La confirmación de contraseña no puede estar vacía',
    password_empty: 'La contraseña no puede estar vacía',
    password_match: 'Confirmar que la contraseña no coincide',
    provide_gender: 'Proporciona tu género',
    select_city: 'Selecciona tu ciudad o la más cercana a ti',
    select_country: 'Selecciona tu pais',
    select_region: 'Seleccione su región',
  },
  minutes_ago: 'hace minutos',
  long_time_ago: 'hace mucho tiempo',
  just_now: 'ahora mismo',
};

export {spa};
