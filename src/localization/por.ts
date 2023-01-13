import {localizationPackType} from './localizationTypes';

const por: localizationPackType = {
  lang_title: 'Português',
  send: 'Mandar',
  contacts: 'Contatos',
  chats: 'chats',
  profile_settings: 'Configurações de perfil',
  matches: 'Partidas',
  age: 'era',
  announcement_text: 'texto de anúncio',
  aply_filters: 'Aplicar filtros',
  city: 'cidade',
  country: 'país',
  edit: 'editar',
  enter_your_message: 'Digite sua mensagem',
  filters: 'Filtros',
  gender: 'Gênero sexual',
  your_gender: 'seu gênero',
  items_not_found: 'Itens não encontrados',
  likes: 'gosta',
  location: 'localização',
  me_liked: 'Eu gostei',
  my_likes: 'Minhas curtidas',
  preview: 'Visualização',
  region: 'região',
  search: 'procurar',
  send_your_message: 'Envie sua mensagem',
  something_went_wrong: 'algo deu errado',
  write_few_words_about_yourself: 'Escreva algumas palavras sobre você',
  write_your_message: 'Escreva sua mensagem',
  your_announcement: 'seu anúncio',
  your_chats: 'suas conversas',
  servers_are_not_allowed: 'Servidores não são permitidos ou sem conexão com a internet',
  moderation_request_pending: 'Sua solicitação de moderação aguardando aprovação',
  profile_not_moderated:
    'Perfil não moderado. A foto do seu avatar é inaceitável. Por favor mude seu avatar',
  please_request_moderation: 'Quase pronto! Por favor, solicite moderação adicionando avatar',
  help: 'ajuda',
  requests: 'solicitações de',
  authorization: 'Autorização',
  or: 'ou',
  enter_your_email: 'Digite seu e-mail',
  enter_your_password: 'Coloque sua senha',
  create_new_account: 'Criar nova conta',
  login: 'Conecte-se',
  chose_city: 'Escolha a cidade',
  chose_country: 'Escolha o país',
  chose_region: 'Escolha a região',
  date_of_birth: 'Data de nascimento',
  enter_your_name: 'Digite seu nome',
  repeat_your_password: 'Repita sua senha',
  sign_up: 'Inscrever-se!',
  feedback: 'Contate-Nos',
  month: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  selectLanguage: 'selecione sua lingua',
  languageWarning: 'As alterações serão aplicadas após a reinicialização',
  send_message: 'Enviar mensagem',
  like: 'Curti',
  block_user: 'Bloquear usuário',
  unblock_user: 'Desbloquear usuário',
  report_user: 'Denunciar usuário/conteúdo',
  send_report: 'Enviar relatório',
  add_comment_to_report: 'Adicionar comentário ao relatório',
  must_be_at_least: (chars: number) => {
    return `Deve ter pelo menos ${chars} caracteres`;
  },
  warning: 'Aviso',
  your_report_successfully_sended: 'Seu relatório foi enviado com sucesso',
  you_are_banned: 'Seu perfil foi banido por violar as regras da comunidade',
  privacy_rules: 'Privacidade',
  terms_of_use_title: 'Termos de uso',
  terms_of_use: `Diretrizes da comunidade
  Bem-vindo à comunidade Meebo. Se você for honesto, gentil e respeitoso com os outros, sempre será bem-vindo aqui. Se você optar por não ser, pode não durar. Nosso objetivo é permitir que os usuários se expressem livremente, desde que isso não ofenda outras pessoas. Todos seguem o mesmo padrão no Meebo. Pedimos que você seja atencioso, pense antes de agir e cumpra nossas diretrizes da comunidade, tanto online quanto offline. Você ouviu bem: seu comportamento off-line pode levar ao encerramento de sua conta Meebo.
  Abaixo está uma lista de nossas políticas da comunidade. Se você violar qualquer uma dessas políticas, poderá ser banido do Meebo. Sério, não nos faça deslizar para a esquerda em você - porque não haverá repetição quando o fizermos. Incentivamos você a denunciar qualquer comportamento que viole nossas políticas.
  Meebo não é para:

  Nudez/Conteúdo Sexual

  Não estamos pedindo para você pentear o cabelo para o lado ou mesmo falar frases completas; mas, por favor, mantenha-o elegante e apropriado para consumo público. Sem nudez, sem conteúdo sexualmente explícito e não registre todos os seus desejos sexuais em sua biografia. Mantém isso limpo.
  Assédio
  Não se envolva ou encoraje outras pessoas a se envolverem em qualquer abuso ou assédio direcionado contra qualquer outro usuário. Isso inclui enviar qualquer conteúdo sexual não solicitado para seus pares. Denúncias de perseguição, ameaças, bullying ou intimidação são levadas muito a sério.
 
  Violência e Danos Físicos
 
  Não toleramos conteúdo violento, gráfico ou sangrento no Meebo, ou qualquer ação ou conteúdo que defenda ou ameace a violência de qualquer tipo, incluindo ameaça ou promoção do terrorismo. Agressão física, coerção e quaisquer atos de violência são estritamente proibidos.
  Conteúdo que defenda ou glorifique o suicídio ou a automutilação também não é permitido. Nessas situações, podemos tomar várias medidas para ajudar o usuário, inclusive entrar em contato com recursos de crise.

  discurso de ódio
  Qualquer conteúdo que promova, defenda ou tolere o racismo, fanatismo, ódio ou violência contra indivíduos ou grupos com base em fatores como (mas não limitado a) raça, etnia, afiliação religiosa, deficiência, sexo, idade, nacionalidade, orientação sexual , ou a identidade de gênero não é permitida.
  
  Informação privada
  Não divulgue publicamente nenhuma informação privada, sua ou de qualquer outra pessoa. Isso inclui números de previdência social, passaportes, senhas, informações financeiras ou informações de contato não listadas, como números de telefone, endereços de e-mail, endereço residencial/trabalho.
  
  Spam
  Não seja falso. Em vez disso, seja real. Não use o Meebo para direcionar as pessoas para sites externos por meio de um link ou de outra forma.
  
  Promoção ou Solicitação
  Solicitar outros usuários é proibido no Meebo. Não há problema em convidar seus pares para algo que você esteja fazendo, mas se o objetivo do seu perfil for anunciar seu evento ou empresa, sem fins lucrativos, campanha política, concurso ou realizar pesquisas, podemos excluir sua conta. Embora estejamos empolgados com o fato de você fazer um programa de comédia na próxima semana, não use o Meebo para promovê-lo.

  Prostituição e Tráfico
  A promoção ou defesa de serviços sexuais comerciais, tráfico humano ou outros atos sexuais não consensuais é estritamente proibida e resultará no banimento de sua conta do Meebo.
  
  Fraude
  O Meebo tem uma política de tolerância zero com comportamento predatório de qualquer tipo. Qualquer pessoa que tente obter informações privadas de outros usuários para atividades fraudulentas ou ilegais pode ser banida. Qualquer usuário pego compartilhando suas próprias informações financeiras (PayPal, Venmo, etc.) com a finalidade de receber dinheiro de outros usuários também pode ser banido do Meebo.
  
  Representação
  Seja você mesmo! Não finja ser outra pessoa.
  Não personifique, ou de outra forma deturpe a afiliação, conexão ou associação com qualquer pessoa ou entidade. Isso inclui contas de paródia. Embora pensemos que seu perfil de Mike Pence é hilário, você não é Mike Pence. E se estiver, o que está fazendo no Meebo?
 
  Menores
  Você deve ter 18 anos ou mais para usar o Meebo. Como tal, não permitimos imagens de menores desacompanhados. Se você quiser postar fotos de seus filhos, certifique-se de estar na foto também. Se você vir um perfil que inclua um menor desacompanhado, encoraje danos a um menor ou retrate um menor de forma sexual ou sugestiva, denuncie imediatamente.  
  
  Violação de direitos autorais e marcas registradas
  Se não for seu, não poste. Se o seu perfil do Meebo incluir qualquer trabalho protegido por direitos autorais ou marca registrada de terceiros, não o exiba, a menos que tenha permissão para fazê-lo.
  
  Uso ilegal
  Não use o Meebo para fazer nada ilegal. Se for IRL ilegal, é ilegal no Meebo.
  
  Uma pessoa, uma conta
  As contas Meebo não podem ter vários proprietários, portanto, não crie uma conta com seu amigo ou outra pessoa significativa. Além disso, não mantenha várias contas Meebo.
  
  Aplicativos de terceiros
  Não é permitido o uso de quaisquer aplicativos criados por qualquer pessoa que não seja o Meebo que afirmam oferecer nosso serviço ou desbloquear recursos especiais do Meebo (como auto-swipers).
  
  Dormência da conta
  O Meebo é divertido de usar... o tempo todo! Use Meebo no lago, use Meebo enquanto come bolo. Use o Meebo quando estiver fora, use o Meebo em caso de dúvida! Mas, se você não fizer login em sua conta Meebo em 2 anos, podemos excluir sua conta por inatividade.
  `,
  privacy_policy_text: `Privacidade do Meebo
  NOSSO COMPROMISSO COM VOCÊ No Meebo, sua privacidade é nossa maior prioridade. Está no centro do desenvolvimento e criação dos serviços e produtos que você conhece e adora. Tudo para que você tenha a oportunidade de confiar plenamente neles e focar em novos conhecidos importantes.
 
  Agradecemos o fato de você confiar em nós com suas informações e as tratamos com responsabilidade.
 
  Nosso compromisso de privacidade. Ao criar cada produto e serviço, pensamos na privacidade de nossos usuários. Trazemos especialistas de vários campos, como jurídico, segurança, desenvolvimento, design de produto e muito mais, para tomar todas as decisões com respeito à sua privacidade.
 
  Nosso compromisso com a transparência. Usamos muitos dos mesmos serviços online que você, por isso entendemos que informações incompletas e linguagem excessivamente complexa são problemas comuns com as políticas de privacidade. Nossa abordagem é exatamente oposta: tentamos redigir a política de privacidade e outros documentos semelhantes em uma linguagem compreensível. Queremos muito que os usuários leiam nossas políticas e entendam nossas práticas.
 
  Nosso compromisso com a segurança. Temos pessoas que se preocupam com a segurança dos seus dados. Atualizamos regularmente nossas práticas de segurança e investimos no setor para fortalecer a proteção de suas informações.
 
  Política de Privacidade Bem-vindo à Política de Privacidade do Meebo. Obrigado por reservar um tempo para conhecê-la.
 
  Agradecemos que você confie em nós com suas informações e pretendemos manter essa confiança. Primeiro, queremos que você entenda quais informações coletamos, por que as coletamos, como são usadas e quais escolhas você tem sobre seus dados. Nesta política, descrevemos nossas práticas de privacidade em linguagem simples e tentamos evitar ao máximo a terminologia legal e técnica.
 
  DATA DE VIGÊNCIA: 17 de maio de 2022.
  
  Onde nossa Política de Privacidade se aplica
  Esta política de privacidade aplica-se a aplicações, eventos e outros serviços operados pela marca Meebo. Para simplificar esta política de privacidade, nos referimos a todos eles como nossos serviços. Para maior clareza, adicionamos um link para esta política de privacidade em todos os serviços relevantes.
  
  Alguns serviços podem exigir sua própria política de privacidade exclusiva. Se um determinado serviço tiver sua própria política de privacidade, essa política se aplica, não a atual.

  Informações que coletamos
  Claro, não poderemos ajudá-lo a fazer as amizades certas sem algumas informações sobre você, como dados básicos de perfil e o tipo de pessoa com quem você deseja se comunicar. Também coletamos informações sobre como você usa nossos serviços, como acesso a logs e dados de terceiros quando, por exemplo, acessa nossos serviços por meio de sua conta de rede social ou baixa informações de sua conta de rede social para preencher um perfil. Informações adicionais são fornecidas abaixo.
  
  Informações que você nos fornece
  Ao usar nossos serviços, você concorda em nos fornecer certas informações, incluindo as seguintes:
  
  Ao criar uma conta, você nos informa pelo menos seu endereço de e-mail e algumas informações básicas necessárias para o funcionamento do serviço, como sexo ou data de nascimento. Ao preencher um perfil, você pode compartilhar informações adicionais, como informações biográficas, interesses e outros detalhes sobre você, além de conteúdo como uma foto. Para adicionar determinados materiais, como fotos, você pode nos dar acesso ao seu álbum de fotos. Se você entrar em contato com nosso serviço de suporte ao cliente, coletaremos as informações que você nos fornecer durante essa interação. Se você compartilhar informações sobre outras pessoas conosco (por exemplo, se usar os detalhes de contato de um amigo para um recurso), processaremos essas informações em seu nome para atender à sua solicitação. Obviamente, também processamos dados de seus bate-papos com outros usuários e o conteúdo que você publica conforme necessário para operar os serviços. Informações que recebemos de terceiros Além das informações que você nos fornece diretamente, recebemos informações sobre você de outras fontes, incluindo:
  
  Usuários Os usuários podem fornecer informações sobre você ao usar nossos serviços, por exemplo, se interagirem com você ou enviarem uma reclamação sobre você. Quando você usa nossos serviços, são gerados dados técnicos sobre os recursos que você usa, como você os usa e os dispositivos a partir dos quais você usa nossos serviços. Abaixo estão os detalhes:
  
  Informações de uso Seu uso dos Serviços gera dados sobre sua atividade neles, por exemplo, como você os usa (como horário de login, funções usadas, ações, informações mostradas a você, o endereço das páginas da web com o link original e anúncios com quem você interagiu) e como você interage com outros usuários (por exemplo, os usuários com quem você se comunica e interage, quando exatamente isso acontece, o número de mensagens enviadas e recebidas). Informações do dispositivo Coletamos informações de e sobre o dispositivo ou dispositivos a partir dos quais você usa nossos serviços, incluindo dados de hardware e software, como endereço IP, tipo e identificador do dispositivo, configurações e características do aplicativo, aplicativos travados, identificadores de publicidade (números gerados aleatoriamente que podem ser redefinidos nas configurações do dispositivo), identificadores associados a cookies ou outras tecnologias que podem identificar exclusivamente um dispositivo ou navegador. Da mesma forma, se você der permissão, podemos coletar fotos.
    
  Como usamos as informações
  A principal razão pela qual usamos suas informações é fornecer e melhorar nossos serviços. Além disso, usamos suas informações para protegê-lo. Abaixo, explicamos em detalhes os vários motivos para usar suas informações e fornecemos exemplos práticos.
  
  A. Administrar a sua conta e assegurar o funcionamento dos nossos serviços Criar e gerir a sua conta Prestar-lhe apoio e responder aos seus pedidos Realizar as suas transações Comunicar-se consigo sobre os nossos serviços B. Ajudar-lhe a conhecer outros utilizadores Recomendar outros utilizadores para você Mostrar perfis de usuário um a um C. Para prevenir, detectar e combater fraudes ou outras atividades ilegais ou não autorizadas Pesquisar e corrigir violações (atuais, suspeitas ou suspeitas) de nossos Termos de Uso, inclusive analisando reclamações e interações entre usuários Melhor entender e desenvolver contramedidas contra violações de nossos Termos de Uso Reter dados relacionados a uma violação de nossos Termos de Uso para evitar incidentes repetidos Fazer valer ou fazer cumprir nossos direitos, como nossos Termos de Uso Entrar em contato com indivíduos que apresentam reclamações para informá-los sobre nossa ação em sua reclamação D. Para garantir o cumprimento da legislação Cumprimento dos requisitos legais Assistência à aplicação da lei ag ências Informações sobre o processamento de dados pessoais por meio de criação de perfil e tomada de decisão automatizada podem ser encontradas na seção FAQ.
  
  Para outros usuários Você fornece informações a outros usuários quando as divulga voluntariamente no serviço (incluindo informações contidas em um perfil público). Por favor, tenha cuidado e certifique-se de que você realmente não se importa em compartilhar certas informações.
  
  Se alguém enviar uma reclamação relacionada a você (por exemplo, sobre sua violação de nossos Termos de Uso), podemos notificar a pessoa que apresentou a reclamação sobre a ação (se houver) que tomamos como resultado da reclamação.
  
  Seguimos um rigoroso processo de verificação antes de contratar qualquer provedor de serviços ou trabalhar com qualquer parceiro. Nossos provedores de serviços e parceiros devem concordar com obrigações estritas de confidencialidade.
  
  Compartilhamos suas informações com afiliados para fins legais limitados, conforme estabelecido abaixo:
  
  Para agências de aplicação da lei / conforme exigido por lei Podemos divulgar suas informações se razoavelmente necessário: 1) conforme exigido por processo legal, como de acordo com uma ordem judicial, intimação ou mandado de busca, devido a uma investigação governamental ou policial, ou outros requisitos legais; 2) para ajudar a prevenir ou detectar um crime (em cada caso sujeito à lei aplicável); 3) para a proteção de alguma pessoa.
  
  Para fazer valer os direitos legais, também podemos fornecer informações: 1) se a divulgação reduziria nossa responsabilidade em um processo real ou potencial; 2) conforme necessário para proteger nossos direitos legais e os direitos legais de nossos usuários, parceiros de negócios ou outras partes interessadas; 3) para cumprir nossos acordos com você; 4) investigar, prevenir ou tomar outras medidas em relação a atividades ilegais, possíveis fraudes ou outros delitos.
  
  Mediante seu consentimento ou solicitação, podemos solicitar seu consentimento para compartilhar suas informações com terceiros. Nesses casos, explicaremos claramente por que queremos compartilhar essas informações.
  
  Podemos usar e compartilhar informações não pessoais (ou seja, informações que não o identificam pessoalmente, incluindo informações do dispositivo, informações demográficas gerais, dados comportamentais gerais, informações de localização não identificáveis pessoalmente) e informações pessoais em um formato hash no qual ele não pode ser lido por uma pessoa em nenhuma das circunstâncias acima.
  
  Seus direitos
  Queremos que você tenha o controle de suas informações, por isso lembramos as seguintes opções e ferramentas:
  
  Meio de acesso/atualização no serviço. As ferramentas e configurações da conta irão ajudá-lo a acessar as informações que você nos fornecer relacionadas à sua conta diretamente no Serviço, bem como corrigir ou remover essas informações. Se você tiver alguma dúvida sobre essas ferramentas e configurações, entre em contato com nossa equipe de suporte. Permissões do dispositivo. As plataformas móveis podem ter sistemas de permissão para determinados tipos de dados e notificações, como contatos telefônicos, imagens, serviços de localização, notificações push e identificadores de publicidade. Você pode alterar as configurações do dispositivo, dando consentimento ou negando o consentimento para a coleta e processamento de informações relevantes ou exibição de notificações relevantes. Claro, se você não der consentimento, alguns serviços podem perder sua funcionalidade. Remoção Você pode interromper toda a coleta de informações pelo aplicativo desinstalando-o por meio do processo de desinstalação padrão em seu dispositivo. Observação: excluir o aplicativo NÃO encerra a conta. Para fechar sua conta, use a função correspondente no serviço. Encerramento da conta. A conta pode ser encerrada usando a função correspondente diretamente no serviço. Também queremos que nossos usuários estejam cientes de seus direitos de privacidade.`,
  i_agree_with: 'Eu concordo com',
  and: 'e',
  privacy_policy_title: 'Política de Privacidade',
  goals: ['construção familiar', 'viagens', 'flerte', 'bate-papo', 'amizade', 'sexo'],
  i_looking_for: `Estou procurando por`,
  for: 'para',
  genders: ['Masculino', 'Feminino', 'Masculino ou Feminino'],
  your_expectations: 'Suas expectativas',
  your_dating_goals: 'Seus objetivos de namoro',
  it_is_you: 'É você!',
  choose_variant: 'Escolha a variante',
  our_telegram: 'Nosso telegrama',
  stepof: (curentStep, numberOfSteps) => {
    return `Passo ${curentStep} de ${numberOfSteps}`;
  },
  hints: [
    'Por favor, forneça informações básicas sobre você',
    'Por favor, insira sua data de nascimento e seu gênero',
    'Quase pronto! Digite sua localização e pressione Sign Up!',
  ],
  prev: 'anterior',
  next: 'next',
  delete_accaunt: 'Deletar conta',
  delete_accaunt_question: 'Tem certeza de que deseja excluir a conta?',
  delete_avatar_question: 'Tem certeza de que deseja excluir seu avatar?',
  no: 'não',
  yes: 'sim',
  delete_chat: 'Excluir bate-papo',
  all_cities: 'Todas as cidades',
  all_countries: 'Todos os países',
  all_regions: 'Todas as regiões',
  choose_gender: 'Escolha o sexo',
  iam_man: 'Eu sou um homem',
  iam_women: 'Eu sou uma mulher',
  your_photo_gallery: 'Sua galeria de fotos',
  now_you_can_make_photo_access_request: 'Agora você tem a oportunidade de solicitar acesso à foto',
  cant_load_video: `Não podemos baixar o vídeo, provavelmente o problema é uma conexão lenta`,
  make_request: 'Solicitar acesso',
  oops: 'Ai!',
  success: 'Sucesso!',
  this_photo_was_hide_by_owner:
    'O acesso à foto é limitado pelo proprietário, solicite acesso ao proprietário da foto, para isso, assista a um pequeno vídeo.',
  watch_video: 'Assistir anúncio',
  you_successfully_requested_access: 'Pedido de acesso enviado com sucesso!',
  photo_access_requests: 'Solicitações de acesso',
  photo_gallery: 'Galeria de fotos',
  my_requests: 'Minhas solicitações',
  requests_to_me: 'Requests To Me',
  approved: 'Aprovado',
  pending: 'Pendente',
  rejected: 'Rejeitado',
  requestItemStatusMessage: {
    approved: `A solicitação deste usuário foi aprovada`,
    pending: 'Solicita acesso e aguarda uma resposta',
    rejected: `A solicitação deste usuário foi negada`,
  },
  requestHelpMessage: {
    myRequests: {
      approved: 'Aqui são mostrados seus pedidos que foram aprovados.',
      pending: 'Aqui são mostrados seus pedidos pendentes.',
      rejected: 'Aqui são mostrados seus pedidos rejeitados.',
    },
    requestToMe: {
      approved: 'Aqui são mostradas as solicitações que você aprovou.',
      pending: 'Aqui são mostrados pedidos para você que estão esperando por sua resposta.',
      rejected: 'Isso mostra as solicitações que você recusou.',
    },
  },
  for_add_annon_photo_watch_add:
    'Para adicionar uma foto anônima, você precisa assistir a um pequeno vídeo',
  no_items_here_yet: `Enquanto não há nada aqui`,
  now_you_can_add_anon_photo: 'Agora você pode adicionar uma foto anônima',
  photoGalleryAnonPhotoHint: `Essas fotos serão visíveis apenas para os usuários aos quais você deu acesso. Assim, só você decide quem verá essas fotos. As fotos que ainda não foram moderadas são marcadas com uma moldura vermelha. Limite 4`,
  photoGalleryPhotoHint:
    'Essas fotos ficarão visíveis para todos os usuários. As fotos que ainda não foram moderadas são marcadas com uma moldura vermelha. Limite 5',
  sorry_you_rich_anon_photos_limit: `Desculpe, você atingiu seu limite de fotos anônimas. 4/4`,
  your_anon_photos: 'Suas fotos anônimas',
  your_photos: 'Suas fotos',
  alco: ['Eu não bebo', 'Eu bebo em companhia', 'Às vezes eu bebo', 'Eu não me nego álcool'],
  smoking: ['Não fumo', 'Fumo em companhia', 'Fumo raramente', 'Fumo regularmente'],
  kids: [
    `Não tenho filhos e nem pretendo`,
    `Não tenho filhos, mas gostaria`,
    `Tenho filhos, vivemos juntos`,
    `Eu tenho filhos, vivemos separados`,
  ],
  additional_info: 'Informação adicional',
  your_attitude_towards_alcohol: 'Sua atitude em relação ao álcool',
  your_attitude_towards_smoking: 'Sua atitude em relação ao fumo',
  do_you_have_children: 'Você tem filhos',
  i_dont_mind_being_a_sponsor: `Eu não me importo de ser um patrocinador`,
  i_dont_mind_being_a_kepter: `Eu não me importo de viver às custas de um parceiro`,
  not_setted: 'não definido',
  attitude_towards_alcohol: 'Atitude em relação ao álcool',
  attitude_towards_smoking: 'Atitude em relação ao fumo',
  children: 'Crianças',
  dating_goals: 'Metas de namoro',
  show_olnly_persons_dont_mind_being_a_kepter:
    'Mostre apenas aqueles que não se importam em viver às custas de um parceiro',
  show_olnly_persons_dont_mind_being_a_sponsor: `Mostrar apenas aqueles que não se importam em se tornar um patrocinador`,
  all_variants: 'todas as variantes',
};

export {por};
