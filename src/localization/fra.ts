import {localizationPackType} from './localizationTypes';

const fra: localizationPackType = {
  lang_title: 'Langue française',
  send: 'Envoyer',
  contacts: 'contacts',
  chats: 'chats',
  profile_settings: 'paramètres de profil',
  matches: 'Allumettes',
  age: 'âge',
  announcement_text: `texte d'annonce`,
  aply_filters: 'Appliquer des filtres',
  city: 'ville',
  country: 'pays',
  edit: 'Éditer',
  enter_your_message: 'Entrez votre message',
  filters: 'Filtres',
  gender: 'le sexe',
  your_gender: 'votre sexe',
  items_not_found: 'Articles introuvables',
  likes: 'aime',
  location: 'emplacement',
  me_liked: `Moi j'ai aimé`,
  my_likes: 'Mes goûts',
  preview: 'Aperçu',
  region: 'région',
  search: 'recherche',
  send_your_message: 'Envoyez votre message',
  something_went_wrong: `quelque chose s'est mal passé`,
  write_few_words_about_yourself: 'Écrivez quelques mots sur vous-même',
  write_your_message: 'Rédigez votre message',
  your_announcement: 'votre annonce',
  your_chats: 'vos discussions',
  servers_are_not_allowed: 'Les serveurs ne sont pas autorisés ou pas de connexion Internet',
  moderation_request_pending: `Votre demande de modération en attente d'approbation`,
  profile_not_moderated: `Profil non modéré. Votre photo d'avatar est inacceptable. Veuillez changer votre avatar`,
  please_request_moderation: 'Presque fini! Veuillez demander la modération en ajoutant un avatar',
  help: 'aider',
  requests: 'demandes',
  authorization: 'Autorisation',
  or: 'ou alors',
  enter_your_email: 'Entrer votre Email',
  enter_your_password: 'Tapez votre mot de passe',
  create_new_account: 'Créer un nouveau compte',
  login: 'connexion',
  chose_city: 'Choisissez la ville',
  chose_country: 'Choisissez un pays',
  chose_region: 'Choisissez la région',
  date_of_birth: 'Date de naissance',
  enter_your_name: 'Entrez votre nom',
  repeat_your_password: 'Répétez votre mot de passe',
  sign_up: `S'inscrire!`,
  feedback: 'Nous contacter',
  month: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
  selectLanguage: 'Choisissez votre langue',
  languageWarning: 'Les modifications seront appliquées après le redémarrage',
  send_message: 'Envoyer le message',
  like: 'Aimer',
  block_user: 'Bloquer un utilisateur',
  unblock_user: `Débloquer l'utilisateur`,
  report_user: 'Signaler un utilisateur/contenu',
  send_report: 'Envoyer un rapport',
  add_comment_to_report: 'Ajouter un commentaire au rapport',
  must_be_at_least: (chars: number) => {
    return `Doit contenir au moins ${chars} caractères`;
  },
  warning: 'Avertissement',
  your_report_successfully_sended: 'Votre rapport a été envoyé avec succès',
  you_are_banned: 'Votre profil a été banni pour avoir enfreint les règles de la communauté',
  privacy_rules: 'Confidentialité',
  terms_of_use_title: `Conditions d'utilisation`,
  terms_of_use: `Règles de la communauté
  Bienvenue dans la communauté Meebo. Si vous êtes honnête, gentil et respectueux envers les autres, vous serez toujours le bienvenu ici. Si vous choisissez de ne pas l'être, vous risquez de ne pas durer. Notre objectif est de permettre aux utilisateurs de s'exprimer librement tant que cela n'offense pas les autres. Tout le monde est tenu au même standard sur Meebo. Nous vous demandons d'être prévenant, de réfléchir avant d'agir et de respecter les directives de notre communauté en ligne et hors ligne. Vous avez bien entendu : votre comportement hors ligne peut entraîner la résiliation de votre compte Meebo.
  Vous trouverez ci-dessous une liste de nos politiques communautaires. Si vous enfreignez l'une de ces politiques, vous pourriez être banni de Meebo. Sérieusement, ne nous obligez pas à balayer vers la gauche sur vous, car il n'y aura plus de modifications une fois que nous le ferons. Nous vous encourageons à signaler tout comportement qui enfreint nos politiques.
  Meebo n'est pas pour :

  Nudité/Contenu sexuel

  Nous ne vous demandons pas de vous peigner les cheveux d'un côté ou même de parler en phrases complètes ; mais s'il vous plaît gardez-le chic et approprié pour la consommation publique. Pas de nudité, pas de contenu sexuellement explicite et ne faites pas la chronique de tous vos désirs sexuels dans votre biographie. Garde le propre.
  Harcèlement
  Ne vous engagez pas, ou n'encouragez pas les autres à s'engager, dans des abus ou du harcèlement ciblés contre tout autre utilisateur. Cela inclut l'envoi de tout contenu sexuel non sollicité à vos matchs. Les signalements de harcèlement, de menaces, de brimades ou d'intimidation sont pris très au sérieux.  
  
  Violence et préjudice physique
  Nous ne tolérons aucun contenu violent, graphique ou sanglant sur Meebo, ni aucune action ou contenu qui prône ou menace la violence de quelque sorte que ce soit, y compris la menace ou la promotion du terrorisme. Les agressions physiques, la coercition et tout acte de violence sont strictement interdits.
  Le contenu qui prône ou glorifie le suicide ou l'automutilation n'est pas non plus autorisé. Dans ces situations, nous pouvons prendre un certain nombre de mesures pour aider l'utilisateur, y compris contacter les ressources de crise.
  
  Discours de haine
  Tout contenu qui promeut, défend ou tolère le racisme, le sectarisme, la haine ou la violence contre des individus ou des groupes en fonction de facteurs tels que (mais sans s'y limiter) la race, l'origine ethnique, l'appartenance religieuse, le handicap, le sexe, l'âge, l'origine nationale, l'orientation sexuelle , ou l'identité de genre n'est pas autorisée.
  
  Information privée
  Ne diffusez publiquement aucune information privée, la vôtre ou celle de quelqu'un d'autre. Cela inclut les numéros de sécurité sociale, les passeports, les mots de passe, les informations financières ou les informations de contact non répertoriées, telles que les numéros de téléphone, les adresses e-mail, l'adresse personnelle/professionnelle.  
  
  Courrier indésirable
  Ne soyez pas faux. Soyez réel à la place. N'utilisez pas Meebo pour diriger les gens vers des sites Web externes via un lien ou autrement.
  
  Promotion ou sollicitation
  Il est interdit de solliciter d'autres utilisateurs sur Meebo. C'est bien d'inviter vos partenaires à quelque chose que vous faites, mais si le but de votre profil est de faire la publicité de votre événement ou entreprise, d'une campagne politique à but non lucratif, d'un concours ou de mener des recherches, nous pouvons supprimer votre compte. Bien que nous soyons ravis que vous fassiez une émission humoristique la semaine prochaine, veuillez ne pas utiliser Meebo pour la promouvoir.
  
  Prostitution et traite
  Promouvoir ou défendre les services sexuels commerciaux, la traite des êtres humains ou d'autres actes sexuels non consensuels est strictement interdit et entraînera l'interdiction de votre compte sur Meebo.
  
  Arnaque
  Meebo a une politique de tolérance zéro sur les comportements prédateurs de toute nature. Toute personne tentant d'obtenir les informations privées d'autres utilisateurs pour des activités frauduleuses ou illégales peut être bannie. Tout utilisateur surpris en train de partager ses propres informations de compte financier (PayPal, Venmo, etc.) dans le but de recevoir de l'argent d'autres utilisateurs peut également être banni de Meebo.  
  
  Imitation
  Soistoimême! Ne prétendez pas être quelqu'un d'autre.
  Ne vous faites pas passer pour une personne ou une entité, ni ne déformez-la de quelque manière que ce soit sur votre affiliation, votre connexion ou votre association avec une personne ou une entité. Cela inclut les comptes parodiques. Bien que nous pensions que votre profil Mike Pence est hilarant, vous n'êtes pas Mike Pence. Et si c'est le cas, que faites-vous sur Meebo ?
 
  Mineurs
  Vous devez avoir 18 ans ou plus pour utiliser Meebo. En tant que tel, nous n'autorisons pas les images de mineurs non accompagnés. Si vous souhaitez publier des photos de vos enfants, assurez-vous que vous êtes également sur la photo. Si vous voyez un profil qui inclut un mineur non accompagné, encourage à nuire à un mineur ou représente un mineur de manière sexuelle ou suggestive, veuillez le signaler immédiatement.
  
  Violation des droits d'auteur et des marques
  Si ce n'est pas le vôtre, ne le publiez pas. Si votre profil Meebo comprend une œuvre protégée par des droits d'auteur ou une marque déposée par d'autres, ne l'affichez pas, sauf si vous y êtes autorisé.  
 
  Utilisation illégale
  N'utilisez pas Meebo pour faire quoi que ce soit d'illégal. Si c'est IRL illégal, c'est illégal sur Meebo.
  
  Une personne, un compte
  Les comptes Meebo ne peuvent pas avoir plusieurs propriétaires, alors ne créez pas de compte avec votre ami ou votre proche. De plus, veuillez ne pas conserver plusieurs comptes Meebo.
  
  Applications tierces
  L'utilisation de toute application créée par une personne autre que Meebo qui prétend offrir notre service ou déverrouiller des fonctionnalités Meebo spéciales (comme les swipers automatiques) n'est pas autorisée.
  
  Dormance du compte
  Meebo est amusant à utiliser... tout le temps ! Utilisez Meebo au bord du lac, utilisez Meebo en mangeant du gâteau. Utilisez Meebo lorsque vous êtes absent, utilisez Meebo en cas de doute ! Mais, si vous ne vous connectez pas à votre compte Meebo dans 2 ans, nous pouvons supprimer votre compte pour inactivité.
  `,
  privacy_policy_text: `Confidentialité Meebo
  NOTRE ENGAGEMENT ENVERS VOUS Chez Meebo, votre vie privée est notre priorité absolue. Elle est au cœur du développement et de la création des services et des produits que vous connaissez et aimez. Tout cela pour que vous ayez la possibilité de leur faire pleinement confiance et de vous concentrer sur de nouvelles connaissances importantes.
 
  Nous apprécions le fait que vous nous confiez vos informations et nous les traitons de manière responsable.
 
  Notre engagement de confidentialité. Lors de la création de chaque produit et service, nous pensons à la vie privée de nos utilisateurs. Nous faisons appel à des experts de divers domaines tels que le droit, la sécurité, le développement, la conception de produits et plus encore pour prendre chaque décision dans le respect de votre vie privée.
 
  Notre engagement envers la transparence. Nous utilisons bon nombre des mêmes services en ligne que vous, nous comprenons donc que des informations incomplètes et un langage trop complexe sont des problèmes courants avec les politiques de confidentialité. Notre approche est exactement à l'opposé : nous essayons de rédiger la politique de confidentialité et d'autres documents similaires dans un langage compréhensible. Nous voulons vraiment que les utilisateurs lisent nos politiques et comprennent nos pratiques.
 
  Notre engagement pour la sécurité. Nous avons des gens qui se soucient de la sécurité de vos données. Nous mettons régulièrement à jour nos pratiques de sécurité et investissons dans l'industrie pour renforcer la protection de vos informations.
 
  Politique de confidentialité Bienvenue dans la politique de confidentialité de Meebo. Merci d'avoir pris le temps de la connaître.
 
  Nous apprécions que vous nous fassiez confiance avec vos informations, et nous avons l'intention de garder cette confiance. Tout d'abord, nous voulons que vous compreniez quelles informations nous collectons, pourquoi nous les collectons, comment elles sont utilisées et quels choix vous avez concernant vos données. Dans cette politique, nous décrivons nos pratiques de confidentialité dans un langage simple et essayons d'éviter autant que possible la terminologie juridique et technique.
 
  DATE D'ENTRÉE EN VIGUEUR : 17 mai 2022.
  
  Où notre politique de confidentialité s'applique
  Cette politique de confidentialité s'applique aux applications, événements et autres services exploités par la marque Meebo. Pour plus de simplicité dans cette politique de confidentialité, nous nous référons à tous comme nos services. Pour encore plus de clarté, nous avons ajouté un lien vers cette politique de confidentialité sur tous les services concernés.
  
  Certains services peuvent nécessiter leur propre politique de confidentialité unique. Si un service particulier a sa propre politique de confidentialité, cette politique s'applique, pas la politique actuelle.

  Informations que nous collectons
  Bien sûr, nous ne pourrons pas vous aider à faire les bonnes connaissances sans certaines informations vous concernant, telles que les données de base de votre profil et le type de personnes avec lesquelles vous souhaitez communiquer. Nous collectons également des informations sur la façon dont vous utilisez nos services, telles que l'accès aux journaux, et les données de tiers lorsque vous accédez, par exemple, à nos services via votre compte de réseau social ou téléchargez des informations depuis votre compte de réseau social, pour compléter un profil. Des informations supplémentaires sont fournies ci-dessous.
  
  Informations que vous nous fournissez
  En utilisant nos services, vous acceptez de nous fournir certaines informations, notamment les suivantes :
  
  Lorsque vous créez un compte, vous nous indiquez au moins votre adresse e-mail et certaines informations de base nécessaires au fonctionnement du service, telles que votre sexe ou votre date de naissance. Lorsque vous remplissez un profil, vous pouvez partager des informations supplémentaires, telles que des informations biographiques, des centres d'intérêt et d'autres détails vous concernant, ainsi que du contenu tel qu'une photo. Pour ajouter certains documents, comme des photos, vous pouvez nous donner accès à votre album photo. Si vous contactez notre service client, nous collectons les informations que vous nous fournissez lors de cette interaction. Si vous partagez avec nous des informations sur d'autres personnes (par exemple, si vous utilisez les coordonnées d'un ami pour une fonctionnalité), nous traitons ces informations en votre nom pour répondre à votre demande. Bien entendu, nous traitons également les données de vos discussions avec d'autres utilisateurs et le contenu que vous publiez si nécessaire pour faire fonctionner les services. Informations que nous recevons d'autres sources Outre les informations que vous nous fournissez directement, nous recevons des informations vous concernant d'autres sources, notamment :
  
  Utilisateurs Les utilisateurs peuvent fournir des informations vous concernant lorsqu'ils utilisent nos services, par exemple s'ils interagissent avec vous ou soumettent une plainte à votre sujet. Lorsque vous utilisez nos services, des données techniques sont générées sur les fonctionnalités que vous utilisez, la façon dont vous les utilisez et les appareils à partir desquels vous utilisez nos services. Ci-dessous les détails :
  
  Informations d'utilisation Votre utilisation des Services génère des données sur votre activité sur ceux-ci, par exemple, la façon dont vous les utilisez (telles que l'heure de connexion, les fonctions utilisées, les actions, les informations qui vous sont présentées, l'adresse des pages Web avec le lien d'origine et les publicités avec lesquels vous avez interagi) et comment vous interagissez avec les autres utilisateurs (par exemple, les utilisateurs avec lesquels vous communiquez et interagissez, quand exactement cela se produit, le nombre de messages envoyés et reçus). Informations sur l'appareil Nous recueillons des informations à partir de et sur l'appareil ou les appareils à partir desquels vous utilisez nos services, y compris des données matérielles et logicielles, telles que l'adresse IP, l'identifiant et le type d'appareil, les paramètres et les caractéristiques de l'application, les plantages d'applications, les identifiants publicitaires (numéros générés aléatoirement qui peuvent être réinitialisés dans les paramètres de l'appareil), les identifiants associés aux cookies ou à d'autres technologies qui peuvent identifier de manière unique un appareil ou un navigateur. De la même manière, si vous donnez votre permission, nous pouvons collecter des photos.  
  
  Comment nous utilisons les informations
  La principale raison pour laquelle nous utilisons vos informations est de fournir et d'améliorer nos services. De plus, nous utilisons vos informations pour vous protéger. Ci-dessous, nous avons expliqué en détail les différentes raisons d'utiliser vos informations et fourni des exemples pratiques.
  
  A. Pour administrer votre compte et assurer le fonctionnement de nos services Créer et gérer votre compte Vous apporter un soutien et des réponses à vos demandes Effectuer vos transactions Communiquer avec vous sur nos services B. Vous aider à connaître d'autres utilisateurs Recommander d'autres utilisateurs à vous Afficher les profils d'utilisateurs un par un C. Pour prévenir, détecter et combattre la fraude ou toute autre activité illégale ou non autorisée Rechercher et remédier aux violations (actuelles, suspectées ou suspectées) de nos Conditions d'utilisation, notamment en examinant les plaintes et les interactions entre les utilisateurs Mieux comprendre et développer des contre-mesures contre les violations de nos Conditions d'utilisation. leur plainte D. Veiller au respect de la législation Conformité aux exigences légales Assistance aux forces de l'ordre ag Des informations sur le traitement des données personnelles par le biais du profilage et de la prise de décision automatisée sont disponibles dans la section FAQ.
  
  Aux autres utilisateurs Vous fournissez des informations aux autres utilisateurs lorsque vous les divulguez volontairement sur le service (y compris les informations contenues dans un profil public). Veuillez faire preuve de prudence et assurez-vous que cela ne vous dérange vraiment pas de partager certaines informations.
  
  Si quelqu'un soumet une plainte vous concernant (par exemple, au sujet de votre violation de nos conditions d'utilisation), nous pouvons informer la personne qui a soumis la plainte de l'action (le cas échéant) que nous avons prise à la suite de la plainte.
  
  Nous suivons un processus de vérification strict avant d'engager un fournisseur de services ou de travailler avec un partenaire. Nos prestataires et partenaires doivent accepter des obligations strictes de confidentialité.
  
  Nous partageons vos informations avec des sociétés affiliées à des fins légales limitées, comme indiqué ci-dessous :

  Aux organismes chargés de l'application de la loi / tel que requis par la loi Nous pouvons divulguer vos informations si cela est raisonnablement nécessaire : 1) tel que requis par une procédure judiciaire, par exemple en vertu d'une ordonnance d'un tribunal, d'une citation à comparaître ou d'un mandat de perquisition, en raison d'une enquête gouvernementale ou des forces de l'ordre, ou d'autres exigences légales ; 2) pour aider à prévenir ou à détecter un crime (dans chaque cas, sous réserve de la loi applicable) ; 3) pour la protection d'une personne.
  
  Pour faire respecter les droits légaux, nous pouvons également fournir des informations : 1) si la divulgation atténue notre responsabilité dans un procès réel ou potentiel ; 2) si nécessaire pour protéger nos droits légaux et les droits légaux de nos utilisateurs, partenaires commerciaux ou autres parties intéressées ; 3) pour remplir nos accords avec vous ; 4) pour enquêter, prévenir ou prendre d'autres mesures concernant une activité illégale, une éventuelle fraude ou d'autres infractions.
  
  Avec votre consentement ou votre demande, nous pouvons vous demander votre consentement pour partager vos informations avec des tiers. Dans de tels cas, nous expliquerons clairement pourquoi nous souhaitons partager ces informations.
  
  Nous pouvons utiliser et partager des informations non personnelles (c'est-à-dire des informations qui ne vous identifient pas personnellement, y compris des informations sur l'appareil, des informations démographiques générales, des données comportementales générales, des informations de localisation non personnellement identifiables) et des informations personnelles sous une forme hachée dans laquelle il ne peut être lu par une personne dans aucune des circonstances ci-dessus.
  
  Tes droits
  Nous voulons que vous gardiez le contrôle de vos informations, nous vous rappelons donc les options et outils suivants :
  
  Moyens d'accès / mise à jour dans le service. Les outils et paramètres de compte vous aideront à accéder aux informations que vous nous fournissez et qui sont liées à votre compte directement sur le Service, ainsi qu'à corriger ou supprimer ces informations. Si vous avez des questions sur ces outils et paramètres, veuillez contacter notre équipe d'assistance. Autorisations de l'appareil. Les plates-formes mobiles peuvent disposer de systèmes d'autorisation pour certains types de données et de notifications, tels que les contacts téléphoniques, les images, les services de localisation, les notifications push et les identifiants publicitaires. Vous pouvez modifier les paramètres de l'appareil, donner ou refuser votre consentement à la collecte et au traitement des informations pertinentes ou à l'affichage des notifications pertinentes. Bien sûr, si vous ne donnez pas votre consentement, certains services peuvent perdre leur fonctionnalité. Suppression Vous pouvez arrêter toute collecte d'informations par l'application en la désinstallant via le processus de désinstallation standard sur votre appareil. Veuillez noter que la suppression de l'application ne résilie PAS le compte. Pour fermer votre compte, utilisez la fonction correspondante sur le service. La fermeture du compte. Le compte peut être clôturé en utilisant la fonction correspondante directement dans le service. Nous voulons également que nos utilisateurs soient conscients de leurs droits à la vie privée.
  `,
  i_agree_with: `Je suis d'accord avec`,
  and: 'et',
  privacy_policy_title: 'Politique de confidentialité',
  goals: ['bâtiment familial', 'voyages', 'flirter', 'discuter', 'amitié', 'sexe'],
  i_looking_for: `Je recherche`,
  for: 'pour',
  genders: ['Homme', 'Femme', 'Homme ou Femme'],
  your_expectations: 'Vos attentes',
  your_dating_goals: 'Your dating goals',
  it_is_you: 'Vos objectifs de rencontre',
  choose_variant: 'Choisissez la variante',
  our_telegram: 'Notre télégramme',
  stepof: (curentStep, numberOfSteps) => {
    return `Étape ${curentStep} sur ${numberOfSteps}`;
  },
  hints: [
    'Veuillez fournir des informations de base sur vous-même',
    'Veuillez entrer votre date de naissance et votre sexe',
    `Presque terminé ! Entrez votre emplacement et appuyez sur S'inscrire !`,
  ],
  prev: 'précédent',
  next: 'suivant',
  delete_accaunt: 'Supprimer le compte',
  delete_accaunt_question: 'Voulez-vous vraiment supprimer le compte ?',
  delete_avatar_question: 'Êtes-vous sûr de vouloir supprimer votre avatar ?',
  no: 'non',
  yes: 'oui',
  delete_chat: 'Supprimer le chat',
  all_cities: 'Toutes les villes',
  all_countries: 'Tous les pays',
  all_regions: 'Toutes les régions',
  choose_gender: 'Choisissez le sexe',
  iam_man: 'Je suis un homme',
  iam_women: 'Je suis une femme',
  your_photo_gallery: 'Votre galerie de photos',
  now_you_can_make_photo_access_request: `Vous avez maintenant la possibilité de demander l'accès à la photo`,
  cant_load_video: `Nous ne pouvons pas télécharger la vidéo, le problème est probablement dû à une connexion lente`,
  make_request: `Demande d'accès`,
  oops: 'Aie!',
  success: 'Succès!',
  this_photo_was_hide_by_owner: `L'accès à la photo est limité par le propriétaire, demandez l'accès au propriétaire de la photo, pour cela, regardez une courte vidéo.`,
  watch_video: `Regarder l'annonce`,
  you_successfully_requested_access: `La demande d'accès a été envoyée avec succès !`,
  photo_access_requests: `Demandes d'accès`,
  photo_gallery: 'Galerie de photos',
  my_requests: 'Mes demandes',
  requests_to_me: 'Demandes à moi',
  approved: 'Approuvé',
  pending: 'En attente',
  rejected: 'Rejeté',
  requestItemStatusMessage: {
    approved: `La demande de cet utilisateur a été approuvée`,
    pending: `Demande l'accès et attend une réponse`,
    rejected: `La demande de cet utilisateur a été refusée`,
  },
  requestHelpMessage: {
    myRequests: {
      approved: 'Voici vos demandes qui ont été approuvées.',
      pending: 'Voici vos demandes en attente.',
      rejected: 'Voici vos demandes rejetées.',
    },
    requestToMe: {
      approved: 'Voici les demandes que vous avez approuvées.',
      pending: 'Voici les demandes qui vous sont adressées et qui attendent votre réponse.',
      rejected: 'Cela vous montre les demandes que vous avez refusées.',
    },
  },
  for_add_annon_photo_watch_add:
    'Pour ajouter une photo anonyme, vous devez regarder une courte vidéo',
  no_items_here_yet: `Alors qu'il n'y a rien ici`,
  now_you_can_add_anon_photo: 'Vous pouvez maintenant ajouter une photo anonyme',
  photoGalleryAnonPhotoHint: `Ces photos ne seront visibles que par les utilisateurs auxquels vous avez donné accès. Ainsi, vous seul décidez qui verra ces photos. Les photos qui n'ont pas encore été modérées sont marquées d'un cadre rouge. Limite 4`,
  photoGalleryPhotoHint: `Ces photos seront visibles par tous les utilisateurs. Les photos qui n'ont pas encore été modérées sont marquées d'un cadre rouge. Limite 5`,
  sorry_you_rich_anon_photos_limit: `Désolé, vous avez atteint votre limite de photos anonymes. 4/4`,
  your_anon_photos: 'Vos photos anonymes',
  your_photos: 'Tes photos',
  alco: [
    'Je ne bois pas',
    'Je bois en compagnie',
    'Parfois je bois',
    `Je ne me refuse pas l'alcool`,
  ],
  smoking: ['Je ne fume pas', 'Je fume en compagnie', 'Je fume rarement', 'Je fume régulièrement'],
  kids: [
    "Je n'ai pas d'enfants et je n'ai pas l'intention d'en avoir",
    "Je n'ai pas d'enfants mais j'aimerais en avoir",
    "J'ai des enfants, nous vivons ensemble",
    "J'ai des enfants, nous vivons séparément",
  ],
  additional_info: 'Information additionnelle',
  your_attitude_towards_alcohol: `Votre attitude envers l'alcool`,
  your_attitude_towards_smoking: 'Votre attitude envers le tabagisme',
  do_you_have_children: 'Avez-vous des enfants',
  i_dont_mind_being_a_sponsor: `Ca ne me dérange pas d'être un sponsor`,
  i_dont_mind_being_a_kepter: `Cela ne me dérange pas de vivre aux dépens d'un partenaire`,
  not_setted: 'non défini',
  attitude_towards_alcohol: `Attitude envers l'alcool`,
  attitude_towards_smoking: 'Attitude envers le tabagisme',
  children: 'Enfants',
  dating_goals: 'Objectifs de rencontre',
  show_olnly_persons_dont_mind_being_a_kepter: `Afficher uniquement ceux qui ne voient pas d'inconvénient à vivre aux dépens d'un partenaire`,
  show_olnly_persons_dont_mind_being_a_sponsor: `Afficher uniquement ceux qui acceptent de devenir sponsor`,
  all_variants: 'toutes les variantes',
  guests: 'Invités',
  guestWays: [
    `Redirigé depuis l'écran de recherche`,
    `Redirigé depuis l'écran "J'aime"`,
    `Redirigé depuis l'écran de chat`,
    `Redirigé depuis l'écran des invités`,
  ],
  my_guests: 'Mes invités',
  my_visits: 'Mes visites',
  guestHints: {
    myGuests: 'Voici les utilisateurs qui ont visité votre profil',
    myVisits: 'Cela montre les utilisateurs que vous avez visités',
  },
  chat_list_screen: `Écran de la liste de discussion`,
  chat_screen: `Écran de discussion`,
  guests_screen: `Écran Invités`,
  likes_screen: `Écran J'aime`,
  photo_access_requests_screen: `Écran de demande d'accès aux photos`,
  photo_gallery_screen: `Écran de la galerie de photos`,
  profile_settings_screen: `Écran des paramètres de profil`,
  search_screen: `Écran de recherche`,
  home_screen: `Écran d'accueil`,
  chat_list_screen_hint: `Cet écran est accessible à l'aide du bouton de la barre de navigation inférieure.
  Tous vos chats sont affichés ici triés par date du dernier message dans le chat`,
  chat_screen_hint: `Cet écran est accessible en sélectionnant n'importe quel chat dans la liste des chats sur l'écran de la liste des chats.
  Le profil de votre interlocuteur s'affiche en haut de l'écran. Dans le menu contextuel, il existe également des options pour supprimer un chat et bloquer votre interlocuteur.
  Au centre vous verrez l'historique des messages de votre interlocuteur.
  Au bas de l'écran, vous verrez un champ pour saisir un message et un bouton pour envoyer un message.`,
  guests_screen_hint: `Vous pouvez accéder à cet écran en utilisant le bouton sur l'écran principal "Invités".
  Cet écran affiche les invités de votre profil.
  En haut de l'écran, vous verrez un sélecteur d'onglets. Dans l'onglet « Mes invités », vous trouverez tous les utilisateurs qui ont visité votre profil. Dans l'onglet « Mes visites », vous trouverez les utilisateurs que vous avez visités.
  L'entrée concernant la visite du questionnaire est supprimée après 30 jours.`,
  likes_screen_hint: `Cet écran est accessible à l'aide du bouton de la barre de navigation inférieure.
  En haut de l'écran, vous verrez un sélecteur d'onglets.
 
  Onglet "Mes j'aime".
  Ici, vous pouvez voir les profils des utilisateurs que vous aimez.
 
  Onglet "J'aime".
  Ici, vous pouvez voir les profils des utilisateurs qui vous ont aimé.
 
  Onglet Matchs.
  Ici, vous pouvez voir les profils des utilisateurs avec lesquels vous avez trouvé des likes.`,
  photo_access_requests_screen_hint: `Cet écran est accessible à l'aide du bouton de l'écran principal Demandes d'accès.
  Cet écran affiche les demandes d'accès aux photos anonymes.
  En haut de l'écran, vous verrez deux commutateurs d'onglet. Dans le premier, vous choisissez les demandes qui seront affichées - les demandes qui vous sont adressées ou vos demandes aux autres utilisateurs.
  Chaque demande a 3 statuts (sélecteur d'onglet inférieur). Le statut "Approuvé" indique que la demande a été approuvée. Le statut "En attente" indique que la demande est en attente. Le statut "Rejeté" indique que la demande a été rejetée.
  Vous avez également la possibilité de changer d'avis à tout moment.`,
  photo_gallery_screen_hint: `TCet écran est accessible à l'aide du bouton sur l'écran principal de la Galerie de photos.
  En haut de l'écran se trouve un bloc avec vos photos publiques, et en bas du bloc avec vos photos anonymes.
 
  Photos publiques (bloc supérieur)
  Ces photos seront visibles par tous les utilisateurs. Les photos qui n'ont pas encore été modérées sont marquées d'un cadre rouge. Limite 5.
 
  Photos anonymes (bloc du bas)
  Ces photos ne seront visibles que par les utilisateurs auxquels vous avez donné accès. Ainsi, vous seul décidez qui verra ces photos. Les photos qui n'ont pas encore été modérées sont marquées d'un cadre rouge. Limite 4. Les demandes d'accès pour ces photos peuvent être trouvées sur l'écran "Demandes d'accès"`,
  profile_settings_screen_hint: `Vous pouvez accéder à cet écran en utilisant le bouton sur l'écran principal "Paramètres du questionnaire".
  Sur cet écran, vous pouvez modifier votre profil. Vous avez la possibilité d'écrire quelques mots sur vous-même, d'indiquer le lieu, d'indiquer vos attentes vis-à-vis d'un partenaire, et également d'indiquer des informations supplémentaires sur vous-même telles que votre attitude à l'égard du tabagisme, de l'alcool, d'avoir des enfants, et également d'indiquer si vous êtes prêt à devenez parrain ou non contre vivez de votre partenaire.
  Toutes les données que vous saisissez ici seront visibles par les autres utilisateurs.`,
  search_screen_hint: `Cet écran est accessible à l'aide du bouton de la barre de navigation inférieure.
  En haut de l'écran, vous verrez l'emplacement à partir duquel les profils ont été sélectionnés. vous y trouverez également un tas de filtres. Tous les filtres que vous choisissez sont enregistrés et seront automatiquement appliqués la prochaine fois que vous ouvrirez l'application.
  Dans la partie principale de l'écran, il y a une liste de profils qui correspondent à tous les filtres. La liste est automatiquement triée selon la date de la dernière visite de l'utilisateur.
  Chaque profil de la liste peut être marqué d'une icône verte ou d'une icône rouge. L'icône verte marque les utilisateurs qui acceptent de devenir sponsors. L'icône rouge marque les utilisateurs qui ne voient pas d'inconvénient à vivre aux dépens d'un partenaire.`,
  home_screen_hint: `Ceci est votre écran principal, où vous allez lorsque vous ouvrez l'application.
  En haut de l'écran, vous avez la possibilité de télécharger votre avatar. Pour ce faire, cliquez sur le gros bouton de l'appareil photo. Une fois que vous avez téléchargé votre avatar, il apparaîtra dans un cadre circulaire au lieu d'un bouton d'appareil photo. Pour changer d'avatar, cliquez sur votre avatar actuel. Pour supprimer un avatar, cliquez sur le petit bouton croix dans le coin inférieur droit de votre avatar.
  Sous l'avatar se trouvent les informations de base vous concernant et vos coordonnées (visibles uniquement par vous). Ci-dessous se trouve la barre de navigation.`,
  private: 'Privé',
  public: 'Public',
  your_avatar: 'Votre Avatar',
};

export {fra};
