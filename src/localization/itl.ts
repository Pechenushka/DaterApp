import {localizationPackType} from './localizationTypes';

const itl: localizationPackType = {
  lang_title: 'Lingua Italiana',
  send: 'Inviare',
  contacts: 'contatti',
  chats: 'chat',
  profile_settings: 'impostazioni del profilo',
  matches: 'Partite',
  age: 'età',
  announcement_text: `testo dell'annuncio`,
  aply_filters: 'Applicare filtri',
  city: 'città',
  country: 'nazione',
  edit: 'modificare',
  enter_your_message: 'Inserisci il tuo messaggio',
  filters: 'Filtri',
  gender: 'Genere',
  your_gender: 'il tuo genere',
  items_not_found: 'Articoli non trovati',
  likes: 'piace',
  location: 'Posizione',
  me_liked: 'Mi è piaciuto',
  my_likes: 'I miei preferiti',
  preview: 'Anteprima',
  region: 'regione',
  search: 'ricerca',
  send_your_message: 'Invia il tuo messaggio',
  something_went_wrong: 'qualcosa è andato storto',
  write_few_words_about_yourself: 'Scrivi poche parole su di te',
  write_your_message: 'Scrivi il tuo messaggio',
  your_announcement: 'il tuo annuncio',
  your_chats: 'le tue chat',
  servers_are_not_allowed: 'I server non sono consentiti o nessuna connessione a Internet',
  moderation_request_pending: 'La tua richiesta di moderazione in attesa di approvazione',
  profile_not_moderated:
    'Profilo non moderato. La tua foto avatar non è accettabile. Per favore, cambia il tuo avatar',
  please_request_moderation:
    'Quasi fatto! Si prega di richiedere la moderazione aggiungendo avatar',
  help: 'aiuto',
  requests: 'richieste',
  authorization: 'Autorizzazione',
  or: 'o',
  enter_your_email: 'Inserisci il tuo indirizzo email',
  enter_your_password: 'Inserisci la tua password',
  create_new_account: 'Crea un nuovo account',
  login: 'Accedere',
  chose_city: 'Scegli città',
  chose_country: 'Scegli il paese',
  chose_region: 'Scegli la regione',
  date_of_birth: 'Data di nascita',
  enter_your_name: 'Inserisci il tuo nome',
  repeat_your_password: 'Ripeti la tua password',
  sign_up: 'Iscrizione!',
  feedback: 'Contattaci',
  month: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Sett', 'Ott', 'Nov', 'Dic'],
  selectLanguage: 'Seleziona la tua lingua',
  languageWarning: 'Le modifiche verranno applicate dopo il riavvio',
  send_message: 'Invia messaggio',
  like: 'Piace',
  block_user: 'Blocca utente',
  unblock_user: 'Sblocca utente',
  report_user: 'Segnala utente/contenuto',
  send_report: 'Spedisci il rapporto',
  add_comment_to_report: 'Aggiungi commento alla segnalazione',
  must_be_at_least: (chars: number) => {
    return `Deve contenere almeno ${chars} caratteri`;
  },
  warning: 'Avvertimento',
  your_report_successfully_sended: 'La tua segnalazione è stata inviata con successo',
  you_are_banned: 'Il tuo profilo è stato bannato per aver violato le regole della community',
  privacy_rules: 'Riservatezza',
  terms_of_use_title: `Condizioni d'uso`,
  terms_of_use: `Linee guida della comunità
  Benvenuto nella comunità Meebo. Se sei onesto, gentile e rispettoso con gli altri, qui sarai sempre il benvenuto. Se scegli di non esserlo, potresti non durare. Il nostro obiettivo è consentire agli utenti di esprimersi liberamente purché non offendano gli altri. Tutti sono tenuti allo stesso standard su Meebo. Ti chiediamo di essere premuroso, pensare prima di agire e rispettare le nostre linee guida della community sia online che offline. Hai sentito bene: il tuo comportamento offline può portare alla chiusura del tuo account Meebo.
  Di seguito è riportato un elenco delle nostre politiche della community. Se violi una di queste politiche, potresti essere bandito da Meebo. Seriamente, non farci scorrere a sinistra su di te, perché non ci saranno più rifacimenti una volta che lo faremo. Ti invitiamo a segnalare qualsiasi comportamento che violi le nostre norme.
  Meebo non è per:

  Nudità/contenuti sessuali

  Non ti stiamo chiedendo di pettinarti i capelli da un lato o addirittura di pronunciare frasi complete; ma per favore mantienilo di classe e appropriato per il consumo pubblico. Nessuna nudità, nessun contenuto sessualmente esplicito e non registrare tutti i tuoi desideri sessuali nella tua biografia. Mantieni pulito.
  Molestie
  Non impegnarsi o incoraggiare altri a impegnarsi in abusi o molestie mirate nei confronti di altri utenti. Ciò include l'invio di qualsiasi contenuto sessuale non richiesto alle tue partite. Le segnalazioni di stalking, minacce, bullismo o intimidazione sono prese molto sul serio.
 
  Violenza e danni fisici
 
  Non tolleriamo contenuti violenti, espliciti o sanguinosi su Meebo o qualsiasi azione o contenuto che sostenga o minacci la violenza di qualsiasi tipo, inclusa la minaccia o la promozione del terrorismo. L'aggressione fisica, la coercizione e qualsiasi atto di violenza sono severamente vietati.
  Non sono inoltre consentiti contenuti che incitano o glorificano il suicidio o l'autolesionismo. In queste situazioni, potremmo adottare una serie di misure per assistere l'utente, incluso contattare le risorse di crisi.

  Incitamento all'odio
  Qualsiasi contenuto che promuova, sostenga o approvi il razzismo, il fanatismo, l'odio o la violenza contro individui o gruppi in base a fattori quali (ma non limitato a) razza, etnia, appartenenza religiosa, disabilità, genere, età, origine nazionale, orientamento sessuale o l'identità di genere non è consentita.
  
  Informazioni riservate
  Non trasmettere pubblicamente alcuna informazione privata, tua o di qualcun altro. Ciò include numeri di previdenza sociale, passaporti, password, informazioni finanziarie o informazioni di contatto non elencate, come numeri di telefono, indirizzi e-mail, indirizzo di casa/lavoro.
  
  Spam
  Non essere falso. Sii reale, invece. Non utilizzare Meebo per indirizzare le persone a siti Web esterni tramite un collegamento o altro.
  
  Promozione o sollecitazione
  Su Meebo è vietato sollecitare altri utenti. Va bene invitare le tue partite a qualcosa che stai facendo, ma se lo scopo del tuo profilo è pubblicizzare il tuo evento o attività commerciale, non profit, campagna politica, concorso o condurre ricerche, potremmo eliminare il tuo account. Anche se siamo entusiasti che la prossima settimana farai uno spettacolo comico, ti preghiamo di non utilizzare Meebo per promuoverlo.

  Prostituzione e tratta
  Promuovere o sostenere servizi sessuali commerciali, tratta di esseri umani o altri atti sessuali non consensuali è severamente vietato e comporterà l'esclusione del tuo account da Meebo.
  
  Truffa
  Meebo ha una politica di tolleranza zero nei confronti di comportamenti predatori di qualsiasi tipo. Chiunque tenti di ottenere informazioni private di altri utenti per attività fraudolente o illegali può essere bannato. Qualsiasi utente sorpreso a condividere le informazioni del proprio conto finanziario (PayPal, Venmo, ecc.) allo scopo di ricevere denaro da altri utenti può anche essere bandito da Meebo.
  
  Furto d'identità
  Sii te stesso! Non fingere di essere qualcun altro.
  Non impersonare o altrimenti travisare affiliazione, connessione o associazione con qualsiasi persona o entità. Ciò include gli account parodia. Anche se pensiamo che il tuo profilo di Mike Pence sia esilarante, tu non sei Mike Pence. E se lo sei, cosa stai facendo su Meebo?
 
  Minori
  Devi avere almeno 18 anni per utilizzare Meebo. Pertanto, non sono consentite immagini di minori non accompagnati. Se vuoi pubblicare foto dei tuoi figli, assicurati di essere presente anche tu nella foto. Se vedi un profilo che include un minore non accompagnato, incoraggia il danno a un minore o raffigura un minore in modo sessuale o allusivo, segnalalo immediatamente.

  Violazione del copyright e del marchio
  Se non è tuo, non pubblicarlo. Se il tuo profilo Meebo include qualsiasi lavoro protetto da copyright o marchio registrato da altri, non visualizzarlo, a meno che tu non sia autorizzato a farlo.
  
  Uso illegale
  Non usare Meebo per fare qualcosa di illegale. Se è illegale IRL, è illegale su Meebo.
  
  Una persona, un account
  Gli account Meebo non possono avere più proprietari, quindi non creare un account con un amico o un'altra persona importante. Inoltre, non mantenere più account Meebo.
  
  App di terze parti
  Non è consentito l'uso di app create da soggetti diversi da Meebo che affermano di offrire il nostro servizio o di sbloccare funzioni speciali di Meebo (come gli auto-swiper).
  
  Dormienza dell'account
  Meebo è divertente da usare... sempre! Usa Meebo al lago, usa Meebo mentre mangi la torta. Usa Meebo quando sei fuori, usa Meebo in caso di dubbio! Tuttavia, se non accedi al tuo account Meebo entro 2 anni, potremmo eliminare il tuo account per inattività.
  `,
  privacy_policy_text: `Meebo Privacy
  IL NOSTRO IMPEGNO PER TE In Meebo, la tua privacy è la nostra massima priorità. È al centro dello sviluppo e della creazione dei servizi e dei prodotti che conosci e ami. Tutto in modo da avere l'opportunità di fidarti completamente di loro e concentrarti su nuove importanti conoscenze.
 
  Apprezziamo il fatto che tu ci affidi le tue informazioni e le trattiamo in modo responsabile.
 
  Il nostro impegno per la privacy. Quando creiamo ogni prodotto e servizio, pensiamo alla privacy dei nostri utenti. Portiamo esperti provenienti da vari campi come legale, sicurezza, sviluppo, design del prodotto e altro ancora per prendere ogni decisione nel rispetto della tua privacy.
 
  Il nostro impegno per la trasparenza. Utilizziamo molti dei tuoi stessi servizi online, quindi comprendiamo che informazioni incomplete e un linguaggio eccessivamente complesso sono problemi comuni con le politiche sulla privacy. Il nostro approccio è esattamente l'opposto: cerchiamo di scrivere l'informativa sulla privacy e altri documenti simili in un linguaggio comprensibile. Vogliamo davvero che gli utenti leggano le nostre politiche e comprendano le nostre pratiche.
 
  Il nostro impegno per la sicurezza. Abbiamo persone che hanno a cuore la sicurezza dei tuoi dati. Aggiorniamo regolarmente le nostre pratiche di sicurezza e investiamo nel settore per rafforzare la protezione delle tue informazioni.
 
  Informativa sulla privacy Benvenuto nell'Informativa sulla privacy di Meebo. Grazie per aver dedicato del tempo per conoscerla.
 
  Apprezziamo che tu ci affidi le tue informazioni e intendiamo mantenere tale fiducia. Innanzitutto, vogliamo che tu comprenda quali informazioni raccogliamo, perché le raccogliamo, come vengono utilizzate e quali scelte hai in merito ai tuoi dati. In questa politica, descriviamo le nostre pratiche sulla privacy in un linguaggio semplice e cerchiamo di evitare il più possibile la terminologia legale e tecnica.
 
  DATA DI ENTRATA IN VIGORE: 17 maggio 2022.
  
  Dove si applica la nostra Informativa sulla privacy
  Questa informativa sulla privacy si applica ad applicazioni, eventi e altri servizi gestiti dal marchio Meebo. Per semplicità in questa informativa sulla privacy, ci riferiamo a tutti questi come ai nostri servizi. Per maggiore chiarezza, abbiamo aggiunto un collegamento a questa informativa sulla privacy su tutti i servizi pertinenti.
  
  Alcuni servizi potrebbero richiedere una propria informativa sulla privacy univoca. Se un particolare servizio ha una propria politica sulla privacy, si applica quella politica, non quella attuale.

  Informazioni che raccogliamo
  Naturalmente, non saremo in grado di aiutarti a fare le giuste conoscenze senza alcune informazioni su di te, come i dati di base del profilo e il tipo di persone con cui desideri comunicare. Raccogliamo anche informazioni su come utilizzi i nostri servizi, come l'accesso ai registri e i dati di terze parti quando, ad esempio, accedi ai nostri servizi tramite il tuo account di social network o scarichi informazioni dal tuo account di social network, per completare un profilo. Ulteriori informazioni sono fornite di seguito.
  
  Informazioni che ci fornisci
  Utilizzando i nostri servizi, accetti di fornirci determinate informazioni, tra cui le seguenti:
  
  Quando crei un account, ci comunichi almeno il tuo indirizzo e-mail e alcune informazioni di base necessarie per il funzionamento del servizio, come il sesso o la data di nascita. Quando compili un profilo, puoi condividere informazioni aggiuntive, come informazioni biografiche, interessi e altri dettagli su di te, nonché contenuti come una foto. Per aggiungere determinati materiali, come le foto, puoi concederci l'accesso al tuo album fotografico. Se contatti il nostro servizio di assistenza clienti, raccogliamo le informazioni che ci fornisci durante tale interazione. Se condividi informazioni su altre persone con noi (ad esempio, se utilizzi i dettagli di contatto di un amico per una funzione), elaboriamo tali informazioni per tuo conto per soddisfare la tua richiesta. Naturalmente, elaboriamo anche i dati delle tue chat con altri utenti e i contenuti che pubblichi secondo necessità per gestire i servizi. Informazioni che riceviamo da altri Oltre alle informazioni che ci fornisci direttamente, riceviamo informazioni su di te da altre fonti, tra cui:
  
  Utenti Gli utenti possono fornire informazioni su di te quando utilizzano i nostri servizi, ad esempio, se interagiscono con te o inviano un reclamo su di te. Quando utilizzi i nostri servizi, vengono generati dati tecnici sulle funzionalità che utilizzi, su come le utilizzi e sui dispositivi da cui utilizzi i nostri servizi. Di seguito i dettagli:
  
  Informazioni sull'utilizzo Il tuo utilizzo dei Servizi genera dati sulla tua attività su di essi, ad esempio, come li usi (come l'ora di accesso, le funzioni utilizzate, le azioni, le informazioni mostrate all'utente, l'indirizzo delle pagine web con il link originale e le pubblicità con cui hai interagito) e come interagisci con gli altri utenti (ad esempio, gli utenti con cui comunichi e interagisci, quando esattamente ciò accade, il numero di messaggi inviati e ricevuti). Informazioni sul dispositivo Raccogliamo informazioni da e sul dispositivo o sui dispositivi da cui utilizzi i nostri servizi, inclusi dati hardware e software, come indirizzo IP, identificatore e tipo di dispositivo, impostazioni e caratteristiche dell'applicazione, arresti anomali delle applicazioni, identificatori pubblicitari (numeri generati casualmente che possono essere ripristinati nelle impostazioni del dispositivo), identificatori associati ai cookie o altre tecnologie in grado di identificare in modo univoco un dispositivo o un browser. Allo stesso modo, se dai il permesso, possiamo raccogliere le foto.

  Come utilizziamo le informazioni
  Il motivo principale per cui utilizziamo le tue informazioni è fornire e migliorare i nostri servizi. Inoltre, utilizziamo le tue informazioni per proteggerti. Di seguito abbiamo spiegato in dettaglio i vari motivi per utilizzare le tue informazioni e fornito esempi pratici.
  
  A. Per amministrare il tuo account e garantire il funzionamento dei nostri servizi Creare e gestire il tuo account Fornirti supporto e risposte alle tue richieste Effettuare le tue transazioni Comunicare con te sui nostri servizi B. Per aiutarti a conoscere altri utenti Consigliare altri utenti Mostrare profili utente uno a uno C. Per prevenire, rilevare e combattere frodi o altre attività illegali o non autorizzate Ricercare e porre rimedio alle violazioni (attuali, sospette o sospette) delle nostre Condizioni d'uso, anche esaminando i reclami e le interazioni tra gli utenti Meglio comprendere e sviluppare contromisure contro le violazioni delle nostre Condizioni d'uso Conservare i dati relativi a una violazione delle nostre Condizioni d'uso per prevenire incidenti ripetuti Far valere o far valere i nostri diritti, come le nostre Condizioni d'uso Contattare le persone che presentano reclami per informarli della nostra azione su il loro reclamo D. Per garantire il rispetto della legislazione Rispetto dei requisiti legali Assistenza alle forze dell'ordine ag enti Le informazioni sul trattamento dei dati personali attraverso la profilazione e il processo decisionale automatizzato sono disponibili nella sezione FAQ.
  
  Ad altri utenti Fornisci informazioni ad altri utenti quando le divulghi volontariamente sul servizio (comprese le informazioni contenute in un profilo pubblico). Si prega di prestare attenzione e assicurarsi che davvero non vi dispiaccia condividere determinate informazioni.
  
  Se qualcuno invia un reclamo relativo a te (ad esempio, in merito alla tua violazione dei nostri Termini di utilizzo), potremmo informare la persona che ha presentato il reclamo in merito all'azione (se presente) che abbiamo intrapreso a seguito del reclamo.
  
  Seguiamo un rigoroso processo di verifica prima di coinvolgere qualsiasi fornitore di servizi o lavorare con qualsiasi partner. I nostri fornitori di servizi e partner devono accettare severi obblighi di riservatezza.
  
  Condividiamo le tue informazioni con gli affiliati per scopi legali limitati come indicato di seguito:
  
  Alle forze dell'ordine / come richiesto dalla legge Potremmo divulgare le tue informazioni se ragionevolmente necessario: 1) come richiesto da un procedimento legale, ad esempio ai sensi di un ordine del tribunale, citazione o mandato di perquisizione, a causa di un'indagine governativa o delle forze dell'ordine, o altri requisiti legali; 2) per aiutare a prevenire o individuare un reato (in ogni caso soggetto alla legge applicabile); 3) per la protezione di una persona.
  
  Per far valere i diritti legali, potremmo anche fornire informazioni: 1) se la divulgazione attenuerebbe la nostra responsabilità in un'azione legale effettiva o potenziale; 2) se necessario per proteggere i nostri diritti legali e i diritti legali dei nostri utenti, partner commerciali o altre parti interessate; 3) per adempiere ai nostri accordi con voi; 4) indagare, prevenire o adottare altre misure riguardanti attività illecite, possibili frodi o altri reati.
  
  Previo tuo consenso o richiesta, potremmo chiedere il tuo consenso per condividere le tue informazioni con terze parti. In tali casi, spiegheremo chiaramente perché vogliamo condividere queste informazioni.
  
  Possiamo utilizzare e condividere informazioni non personali (ovvero informazioni che non ti identificano personalmente, incluse informazioni sul dispositivo, informazioni demografiche generali, dati comportamentali generali, informazioni sulla posizione non identificabili personalmente) e informazioni personali in una forma hash in cui non può essere letto da una persona in nessuna delle circostanze di cui sopra.

  I tuoi diritti
  Vogliamo che tu abbia il controllo delle tue informazioni, quindi ti ricordiamo le seguenti opzioni e strumenti:
  
  Modalità di accesso/aggiornamento nel servizio. Gli strumenti e le impostazioni dell'account ti aiuteranno ad accedere alle informazioni che ci fornisci relative al tuo account direttamente sul Servizio, nonché a correggere o rimuovere tali informazioni. Se hai domande su questi strumenti e impostazioni, contatta il nostro team di supporto. Autorizzazioni del dispositivo. Le piattaforme mobili possono disporre di sistemi di autorizzazione per determinati tipi di dati e notifiche, come contatti telefonici, immagini, servizi di localizzazione, notifiche push e identificatori pubblicitari. È possibile modificare le impostazioni del dispositivo, prestando o negando il consenso alla raccolta e al trattamento delle informazioni rilevanti o alla visualizzazione delle relative notifiche. Naturalmente, in caso di mancato consenso, alcuni servizi potrebbero perdere la loro funzionalità. Rimozione È possibile interrompere la raccolta di tutte le informazioni da parte dell'app disinstallandola tramite il processo di disinstallazione standard sul dispositivo. Nota: l'eliminazione dell'applicazione NON comporta la chiusura dell'account. Per chiudere il tuo account, utilizza la funzione corrispondente sul servizio. Chiusura del conto. L'account può essere chiuso utilizzando l'apposita funzione direttamente nel servizio. Vogliamo inoltre che i nostri utenti siano consapevoli dei loro diritti alla privacy.
  `,
  i_agree_with: `Sono d'accordo con`,
  and: 'e',
  privacy_policy_title: 'Politica sulla riservatezza',
  goals: ['costruzione familiare', 'viaggi', 'flirtare', 'chiacchierare', 'amicizia', 'sesso'],
  i_looking_for: `Sto cercando`,
  for: 'per',
  genders: ['Maschio', 'Femmina', 'Maschio o Femmina'],
  your_expectations: 'Le tue aspettative',
  your_dating_goals: 'I tuoi obiettivi di appuntamenti',
  it_is_you: 'Sei tu!',
  choose_variant: 'Scegli variante',
  our_telegram: 'Il nostro telegramma',
  stepof: (curentStep, numberOfSteps) => {
    return `Passaggio ${curentStep} di ${numberOfSteps}`;
  },
  hints: [
    'Si prega di fornire informazioni di base su di te',
    'Inserisci la tua data di nascita e il tuo sesso',
    'Quasi fatto! Inserisci la tua posizione e premi Registrati!',
  ],
  prev: 'prec',
  next: 'prossimo',
  delete_accaunt: `Eliminare l'account`,
  delete_accaunt_question: `Sei sicuro di voler eliminare l'account?`,
  delete_avatar_question: 'Sei sicuro di voler eliminare il tuo avatar?',
  no: 'No',
  yes: 'sì',
  delete_chat: 'Elimina chat',
  all_cities: 'Tutte le città',
  all_countries: 'Tutti i paesi',
  all_regions: 'Tutte le regioni',
  choose_gender: 'Scegli il genere',
  iam_man: 'sono un uomo',
  iam_women: 'Io sono una donna',
  your_photo_gallery: 'La tua galleria fotografica',
  now_you_can_make_photo_access_request: `Ora hai la possibilità di richiedere l'accesso alla foto`,
  cant_load_video: `Non riusciamo a scaricare il video, molto probabilmente il problema è una connessione lenta`,
  make_request: 'Richiesta di accesso',
  oops: 'Ahia!',
  success: 'Successo!',
  this_photo_was_hide_by_owner: `L'accesso alla foto è limitato dal proprietario, richiedi l'accesso al proprietario della foto, per questo guarda un breve video.`,
  watch_video: 'Guarda annuncio',
  you_successfully_requested_access: 'La richiesta di accesso è stata inviata con successo!',
  photo_access_requests: 'Richieste di accesso',
  photo_gallery: 'Galleria fotografica',
  my_requests: 'Le mie Richieste',
  requests_to_me: 'Richieste a me',
  approved: 'Approvato',
  pending: 'In attesa di',
  rejected: 'Respinto',
  requestItemStatusMessage: {
    approved: `La richiesta di questo utente è stata approvata`,
    pending: `Richiede l'accesso e attende una risposta`,
    rejected: `La richiesta di questo utente è stata respinta`,
  },
  requestHelpMessage: {
    myRequests: {
      approved: 'Qui vengono mostrate le tue richieste che sono state approvate.',
      pending: 'Qui vengono mostrate le tue richieste in sospeso.',
      rejected: 'Qui vengono mostrate le tue richieste rifiutate.',
    },
    requestToMe: {
      approved: 'Qui vengono mostrate le richieste che hai approvato.',
      pending: 'Qui vengono mostrate le richieste che sono in attesa di risposta.',
      rejected: 'Questo mostra le richieste che hai rifiutato.',
    },
  },
  for_add_annon_photo_watch_add:
    'Per aggiungere una foto anonima è necessario guardare un breve video',
  no_items_here_yet: `Mentre qui non c'è niente`,
  now_you_can_add_anon_photo: 'Ora puoi aggiungere una foto anonima',
  photoGalleryAnonPhotoHint: `Queste foto saranno visibili solo agli utenti a cui hai concesso l'accesso. Quindi, solo tu decidi chi vedrà queste foto. Le foto che non sono state ancora moderate sono contrassegnate da una cornice rossa. Limite 4`,
  photoGalleryPhotoHint:
    'Queste foto saranno visibili a tutti gli utenti. Le foto che non sono state ancora moderate sono contrassegnate da una cornice rossa. Limite 5',
  sorry_you_rich_anon_photos_limit: `Spiacenti, hai raggiunto il limite di foto anonime. 4/4`,
  your_anon_photos: 'Le tue foto anonime',
  your_photos: 'Le tue foto',
  alco: ['Io non bevo', 'Bevo in compagnia', 'A volte bevo', `Non mi nego l'alcol`],
  smoking: ['Non fumo', 'fumo in compagnia', 'fumo raramente', 'fumo regolarmente'],
  kids: [
    `Non ho figli e non ho intenzione di farlo`,
    `Non ho figli ma mi piacerebbe`,
    `Ho figli, viviamo insieme`,
    `Ho figli, viviamo separatamente`,
  ],
  additional_info: 'Informazioni addizionali',
  your_attitude_towards_alcohol: `Il tuo atteggiamento nei confronti dell'alcol`,
  your_attitude_towards_smoking: 'Il tuo atteggiamento nei confronti del fumo',
  do_you_have_children: 'Hai figli',
  i_dont_mind_being_a_sponsor: `Non mi dispiace essere uno sponsor`,
  i_dont_mind_being_a_kepter: `Non mi dispiace vivere a spese di un partner`,
  not_setted: 'non impostato',
  attitude_towards_alcohol: `Atteggiamento nei confronti dell'alcol`,
  attitude_towards_smoking: 'Atteggiamento verso il fumo',
  children: 'Bambini',
  dating_goals: 'Obiettivi di incontri',
  show_olnly_persons_dont_mind_being_a_kepter:
    'Mostra solo quelli a cui non dispiace vivere a spese di un partner',
  show_olnly_persons_dont_mind_being_a_sponsor: `Mostra solo quelli a cui non dispiace diventare uno sponsor`,
  all_variants: 'tutte le varianti',
};

export {itl};
