import {localizationPackType} from './localizationTypes';

const ger: localizationPackType = {
  lang_title: 'Deutsche Sprache',
  send: 'Senden',
  contacts: 'kontakte',
  chats: 'chattet',
  profile_settings: 'Profileinstellungen',
  matches: 'Streichhölzer',
  age: 'Das Alter',
  announcement_text: 'Ankündigungstext',
  aply_filters: 'Filter anwenden',
  city: 'Stadt',
  country: 'Land',
  edit: 'bearbeiten',
  enter_your_message: 'Gib deine Nachricht ein',
  filters: 'Filter',
  gender: 'Geschlecht',
  your_gender: 'Dein Geschlecht',
  items_not_found: 'Artikel nicht gefunden',
  likes: 'Likes',
  location: 'Lage',
  me_liked: 'Mir hat gefallen',
  my_likes: 'Meine Vorlieben',
  preview: 'Vorschau',
  region: 'Region',
  search: 'suche',
  send_your_message: 'Senden Sie Ihre Nachricht',
  something_went_wrong: 'etwas ist schief gelaufen',
  write_few_words_about_yourself: 'Schreiben Sie ein paar Worte über sich',
  write_your_message: 'Schreibe deine Nachricht',
  your_announcement: 'Ihre Ankündigung',
  your_chats: 'Ihre Chats',
  servers_are_not_allowed: 'Server sind nicht erlaubt oder keine Internetverbindung',
  moderation_request_pending: 'Ihre Moderationsanfrage wartet auf Genehmigung',
  profile_not_moderated:
    'Profil nicht moderiert. Ihr Avatar-Foto ist nicht akzeptabel. Bitte ändern Sie Ihren Avatar',
  please_request_moderation:
    'Fast fertig! Bitte fordern Sie die Moderation an, indem Sie einen Avatar hinzufügen',
  help: 'Hilfe',
  requests: 'Anfragen',
  authorization: 'Genehmigung',
  or: 'oder',
  enter_your_email: 'Geben sie ihre E-Mail Adresse ein',
  enter_your_password: 'Geben Sie Ihr Passwort ein',
  create_new_account: 'Neuen Account erstellen',
  login: 'Anmeldung',
  chose_city: 'Stadt wählen',
  chose_country: 'Land auswählen',
  chose_region: 'Region wählen',
  date_of_birth: 'Geburtsdatum',
  enter_your_name: 'Gib deinen Namen ein',
  repeat_your_password: 'Wiederhole dein Passwort',
  sign_up: 'Anmeldung!',
  feedback: 'Kontaktiere uns',
  month: ['Jan', 'Feb', 'März', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  selectLanguage: 'Wähle deine Sprache',
  languageWarning: 'Änderungen werden nach dem Neustart übernommen',
  send_message: 'Nachricht senden',
  like: 'Mögen',
  block_user: 'Benutzer blockieren',
  unblock_user: 'Nutzer entblockieren',
  report_user: 'Benutzer/Inhalt melden',
  send_report: 'Bericht senden',
  add_comment_to_report: 'Kommentar zum Bericht hinzufügen',
  must_be_at_least: (chars: number) => {
    return `Muss mindestens ${chars} Zeichen lang sein`;
  },
  warning: 'Warnung',
  your_report_successfully_sended: 'Ihr Bericht wurde erfolgreich gesendet',
  you_are_banned: 'Ihr Profil wurde wegen Verstoßes gegen Community-Regeln gesperrt',
  privacy_rules: 'Privatsphäre',
  terms_of_use_title: 'Nutzungsbedingungen',
  terms_of_use: `Community-Richtlinien
  Willkommen in der Meebo-Community. Wenn Sie ehrlich, freundlich und respektvoll zu anderen sind, sind Sie hier immer willkommen. Wenn Sie sich entscheiden, es nicht zu sein, werden Sie möglicherweise nicht lange bestehen. Unser Ziel ist es, Benutzern die Möglichkeit zu geben, sich frei auszudrücken, solange dies andere nicht beleidigt. Jeder wird auf Meebo nach dem gleichen Standard gehalten. Wir bitten Sie, rücksichtsvoll zu sein, nachzudenken, bevor Sie handeln, und sich sowohl online als auch offline an unsere Community-Richtlinien zu halten. Sie haben richtig gehört: Ihr Offline-Verhalten kann zur Kündigung Ihres Meebo-Kontos führen.
  Nachfolgend finden Sie eine Liste unserer Community-Richtlinien. Wenn Sie gegen eine dieser Richtlinien verstoßen, werden Sie möglicherweise von Meebo ausgeschlossen. Im Ernst, lassen Sie uns nicht nach links wischen – denn sobald wir das tun, wird es keine Wiederholungen mehr geben. Wir empfehlen Ihnen, jedes Verhalten zu melden, das gegen unsere Richtlinien verstößt.
  Meebo ist nicht für:

  Nacktheit/sexueller Inhalt

  Wir bitten Sie nicht, Ihr Haar zur Seite zu kämmen oder sogar in ganzen Sätzen zu sprechen; aber bitte halten Sie es stilvoll und angemessen für den öffentlichen Konsum. Keine Nacktheit, keine sexuell expliziten Inhalte und nicht alle deine sexuellen Wünsche in deiner Biografie aufzeichnen. Halte es sauber.
  Belästigung
  Beteiligen Sie sich nicht an gezielten Beleidigungen oder Belästigungen anderer Benutzer oder ermutigen Sie andere nicht, sich daran zu beteiligen. Dazu gehört auch das Senden von unerwünschten sexuellen Inhalten an Ihre Matches. Meldungen über Stalking, Drohungen, Mobbing oder Einschüchterung werden sehr ernst genommen.
 
  Gewalt und Körperverletzung
 
  Wir tolerieren keine gewalttätigen, grafischen oder blutigen Inhalte auf Meebo oder Handlungen oder Inhalte, die Gewalt jeglicher Art befürworten oder androhen, einschließlich der Androhung oder Förderung von Terrorismus. Körperliche Übergriffe, Nötigung und jegliche Gewalttaten sind strengstens untersagt.
  Inhalte, die Selbstmord oder Selbstverletzung befürworten oder verherrlichen, sind ebenfalls nicht zulässig. In diesen Situationen können wir eine Reihe von Schritten unternehmen, um den Benutzer zu unterstützen, einschließlich der Kontaktaufnahme mit Krisenressourcen.  
  
  Hassrede
  Alle Inhalte, die Rassismus, Bigotterie, Hass oder Gewalt gegen Einzelpersonen oder Gruppen auf der Grundlage von Faktoren wie (aber nicht beschränkt auf) Rasse, ethnische Zugehörigkeit, Religionszugehörigkeit, Behinderung, Geschlecht, Alter, nationale Herkunft, sexuelle Orientierung fördern, befürworten oder dulden , oder Geschlechtsidentität ist nicht erlaubt.
  
  Private Informationen
  Veröffentlichen Sie keine privaten Informationen, weder Ihre noch die von jemand anderem. Dazu gehören Sozialversicherungsnummern, Pässe, Passwörter, Finanzinformationen oder nicht aufgeführte Kontaktinformationen wie Telefonnummern, E-Mail-Adressen, Wohn-/Arbeitsadresse.
  
  Spam
  Sei nicht falsch. Sei stattdessen echt. Verwenden Sie Meebo nicht, um Personen über einen Link oder auf andere Weise auf externe Websites zu leiten.  
  
  Werbung oder Werbung
  Das Anwerben anderer Benutzer ist auf Meebo verboten. Es ist in Ordnung, Ihre Partner zu etwas einzuladen, das Sie tun, aber wenn der Zweck Ihres Profils darin besteht, für Ihre Veranstaltung oder Ihr Unternehmen, Ihre gemeinnützige Organisation, Ihre politische Kampagne, Ihren Wettbewerb oder Ihre Forschung zu werben, können wir Ihr Konto löschen. Obwohl wir uns freuen, dass Sie nächste Woche eine Comedy-Show machen, verwenden Sie Meebo bitte nicht, um dafür zu werben.
  
  Prostitution und Menschenhandel
  Das Bewerben oder Befürworten von kommerziellen sexuellen Dienstleistungen, Menschenhandel oder anderen nicht einvernehmlichen sexuellen Handlungen ist streng verboten und führt dazu, dass Ihr Konto bei Meebo gesperrt wird.
  
  Betrügen
  Meebo verfolgt eine Null-Toleranz-Politik gegenüber räuberischem Verhalten jeglicher Art. Jeder, der versucht, die privaten Informationen anderer Benutzer für betrügerische oder illegale Aktivitäten zu erhalten, kann gesperrt werden. Jeder Benutzer, der dabei erwischt wird, seine eigenen Finanzkontoinformationen (PayPal, Venmo usw.) zu teilen, um Geld von anderen Benutzern zu erhalten, kann ebenfalls von Meebo gesperrt werden.
  
  Identitätswechsel
  Sei du selbst! Gib nicht vor, jemand anderes zu sein.
  Geben Sie sich nicht als Zugehörigkeit, Verbindung oder Verbindung mit einer Person oder Organisation aus oder stellen Sie diese anderweitig falsch dar. Dazu gehören Parodie-Accounts. Wir finden Ihr Mike-Pence-Profil zwar urkomisch, aber Sie sind nicht Mike Pence. Und wenn ja, was machst du auf Meebo?
 
  Minderjährige
  Sie müssen mindestens 18 Jahre alt sein, um Meebo verwenden zu können. Daher erlauben wir keine Bilder von unbegleiteten Minderjährigen. Wenn Sie Fotos Ihrer Kinder posten möchten, stellen Sie bitte sicher, dass Sie auch auf dem Foto zu sehen sind. Wenn Sie ein Profil sehen, das einen unbegleiteten Minderjährigen enthält, dazu auffordert, einem Minderjährigen Schaden zuzufügen, oder einen Minderjährigen auf sexuelle oder anzügliche Weise darstellt, melden Sie es bitte sofort.
  
  Urheberrechts- und Markenverletzung
  Wenn es nicht deins ist, poste es nicht. Wenn Ihr Meebo-Profil Werke enthält, die von anderen urheberrechtlich oder markenrechtlich geschützt sind, zeigen Sie diese nicht an, es sei denn, Sie sind dazu berechtigt.
  
  Illegale Nutzung
  Verwenden Sie Meebo nicht, um etwas Illegales zu tun. Wenn es IRL illegal ist, ist es auf Meebo illegal.
  
  Eine Person, ein Konto
  Meebo-Konten können nicht mehrere Besitzer haben, also erstelle kein Konto mit deinem Freund oder Lebensgefährten. Außerdem unterhalten Sie bitte nicht mehrere Meebo-Konten.
  
  Apps von Drittanbietern
  Die Verwendung von Apps, die von anderen Personen als Meebo erstellt wurden und vorgeben, unseren Service anzubieten oder spezielle Meebo-Funktionen (wie Auto-Swiper) freizuschalten, ist nicht gestattet.
  
  Kontoruhe
  Es macht Spaß, Meebo zu benutzen ... die ganze Zeit! Benutze Meebo am See, benutze Meebo beim Kuchenessen. Verwenden Sie Meebo, wenn Sie unterwegs sind, verwenden Sie Meebo, wenn Sie Zweifel haben! Wenn Sie sich jedoch 2 Jahre lang nicht bei Ihrem Meebo-Konto anmelden, können wir Ihr Konto wegen Inaktivität löschen.
  `,
  privacy_policy_text: `Meebo-Datenschutz
  UNSERE VERPFLICHTUNG IHNEN GEGENÜBER Bei Meebo hat Ihre Privatsphäre höchste Priorität. Es ist das Herzstück der Entwicklung und Erstellung der Dienstleistungen und Produkte, die Sie kennen und lieben. Alles, damit Sie die Möglichkeit haben, ihnen voll und ganz zu vertrauen und sich auf neue wichtige Bekanntschaften zu konzentrieren.
 
  Wir wissen es zu schätzen, dass Sie uns Ihre Informationen anvertrauen, und wir gehen verantwortungsbewusst damit um.
 
  Unsere Datenschutzverpflichtung. Bei der Erstellung jedes Produkts und jeder Dienstleistung denken wir an die Privatsphäre unserer Benutzer. Wir ziehen Experten aus verschiedenen Bereichen wie Recht, Sicherheit, Entwicklung, Produktdesign und mehr hinzu, um jede Entscheidung unter Berücksichtigung Ihrer Privatsphäre zu treffen.
 
  Unser Engagement für Transparenz. Wir verwenden viele der gleichen Online-Dienste wie Sie, daher verstehen wir, dass unvollständige Informationen und übermäßig komplexe Sprache häufige Probleme mit Datenschutzrichtlinien sind. Unser Ansatz ist genau das Gegenteil: Wir versuchen, die Datenschutzerklärung und andere ähnliche Dokumente in einer verständlichen Sprache zu verfassen. Wir möchten wirklich, dass Benutzer unsere Richtlinien lesen und unsere Praktiken verstehen.
 
  Unser Engagement für Sicherheit. Wir haben Leute, die sich um die Sicherheit Ihrer Daten kümmern. Wir aktualisieren regelmäßig unsere Sicherheitspraktiken und investieren in die Branche, um den Schutz Ihrer Daten zu stärken.
 
  Datenschutzrichtlinie Willkommen bei der Datenschutzrichtlinie von Meebo. Vielen Dank, dass Sie sich die Zeit genommen haben, sie kennenzulernen.
 
  Wir wissen es zu schätzen, dass Sie uns Ihre Informationen anvertrauen, und wir beabsichtigen, dieses Vertrauen zu wahren. Zunächst möchten wir, dass Sie verstehen, welche Informationen wir sammeln, warum wir sie sammeln, wie sie verwendet werden und welche Wahlmöglichkeiten Sie bezüglich Ihrer Daten haben. In dieser Richtlinie beschreiben wir unsere Datenschutzpraktiken im Klartext und versuchen, juristische und technische Termini so weit wie möglich zu vermeiden.
 
  GÜLTIGKEITSDATUM: 17. Mai 2022.
  
  Wo unsere Datenschutzrichtlinie gilt
  Diese Datenschutzrichtlinie gilt für Anwendungen, Veranstaltungen und andere Dienste, die von der Marke Meebo betrieben werden. Der Einfachheit halber bezeichnen wir in dieser Datenschutzerklärung alle diese als unsere Dienste. Zur noch größeren Übersichtlichkeit haben wir bei allen relevanten Diensten einen Link zu dieser Datenschutzerklärung hinzugefügt.
  
  Einige Dienste erfordern möglicherweise ihre eigene einzigartige Datenschutzrichtlinie. Wenn ein bestimmter Dienst seine eigene Datenschutzrichtlinie hat, gilt diese Richtlinie, nicht die aktuelle.

  Informationen, die wir sammeln
  Natürlich können wir Ihnen ohne bestimmte Informationen über Sie, wie grundlegende Profildaten und die Art der Personen, mit denen Sie kommunizieren möchten, nicht helfen, die richtigen Bekanntschaften zu machen. Wir erfassen auch Informationen darüber, wie Sie unsere Dienste nutzen, wie z. B. den Zugriff auf Protokolle, und Daten von Dritten, wenn Sie beispielsweise über Ihr Konto bei einem sozialen Netzwerk auf unsere Dienste zugreifen oder Informationen von Ihrem Konto bei einem sozialen Netzwerk herunterladen, um ein Profil zu vervollständigen. Weitere Informationen finden Sie unten.
  
  Informationen, die Sie uns zur Verfügung stellen
  Durch die Nutzung unserer Dienste erklären Sie sich damit einverstanden, uns bestimmte Informationen zur Verfügung zu stellen, einschließlich der folgenden:

  Wenn Sie ein Konto erstellen, teilen Sie uns mindestens Ihre E-Mail-Adresse und einige grundlegende Informationen mit, die für das Funktionieren des Dienstes erforderlich sind, wie z. B. Ihr Geschlecht oder Geburtsdatum. Beim Ausfüllen eines Profils können Sie zusätzliche Informationen, wie z. B. biografische Informationen, Interessen und andere Angaben zu Ihrer Person, sowie Inhalte wie z. B. ein Foto teilen. Um bestimmte Materialien wie Fotos hinzuzufügen, können Sie uns Zugriff auf Ihr Fotoalbum gewähren. Wenn Sie unseren Kundendienst kontaktieren, erfassen wir Informationen, die Sie uns während dieser Interaktion zur Verfügung stellen. Wenn Sie Informationen über andere Personen mit uns teilen (z. B. wenn Sie die Kontaktdaten eines Freundes für eine Funktion verwenden), verarbeiten wir diese Informationen in Ihrem Namen, um Ihre Anfrage zu erfüllen. Selbstverständlich verarbeiten wir auch Daten aus Ihren Chats mit anderen Nutzern und den von Ihnen eingestellten Inhalten, soweit dies für den Betrieb der Dienste erforderlich ist. Informationen, die wir von anderen erhalten Zusätzlich zu den Informationen, die Sie uns direkt zur Verfügung stellen, erhalten wir Informationen über Sie aus anderen Quellen, einschließlich:
  
  Benutzer Benutzer können Informationen über Sie bereitstellen, wenn Sie unsere Dienste nutzen, beispielsweise wenn sie mit Ihnen interagieren oder eine Beschwerde über Sie einreichen. Wenn Sie unsere Dienste nutzen, werden technische Daten über die von Ihnen verwendeten Funktionen, wie Sie sie verwenden und die Geräte, von denen aus Sie unsere Dienste nutzen, generiert. Nachfolgend die Einzelheiten:
  
  Nutzungsinformationen Ihre Nutzung der Dienste generiert Daten über Ihre Aktivitäten auf ihnen, beispielsweise wie Sie sie verwenden (wie Anmeldezeit, verwendete Funktionen, Aktionen, Ihnen angezeigte Informationen, die Adresse der Webseiten mit dem ursprünglichen Link und Werbung mit denen Sie interagiert haben) und wie Sie mit anderen Benutzern interagieren (z. B. die Benutzer, mit denen Sie kommunizieren und interagieren, wann genau dies geschieht, die Anzahl der gesendeten und empfangenen Nachrichten). Geräteinformationen Wir erfassen Informationen von und über das Gerät oder die Geräte, von denen aus Sie unsere Dienste nutzen, einschließlich Hardware- und Softwaredaten, wie IP-Adresse, Gerätekennung und -typ, Anwendungseinstellungen und -merkmale, Anwendungsabstürze, Werbekennungen (zufällig generierte Zahlen, die kann in den Geräteeinstellungen zurückgesetzt werden), Identifikatoren, die mit Cookies oder anderen Technologien verbunden sind, die ein Gerät oder einen Browser eindeutig identifizieren können. Auf die gleiche Weise können wir Fotos sammeln, wenn Sie Ihre Erlaubnis geben.
  
  Wie wir Informationen verwenden
  Der Hauptgrund, warum wir Ihre Informationen verwenden, ist die Bereitstellung und Verbesserung unserer Dienste. Darüber hinaus verwenden wir Ihre Informationen, um Sie zu schützen. Im Folgenden haben wir die verschiedenen Gründe für die Verwendung Ihrer Informationen ausführlich erläutert und praktische Beispiele gegeben.
  
  A. Um Ihr Konto zu verwalten und den Betrieb unserer Dienste sicherzustellen. Erstellen und Verwalten Ihres Kontos. Ihnen Support und Antworten auf Ihre Anfragen zu bieten. Ihre Transaktionen durchzuführen. Mit Ihnen über unsere Dienste zu kommunizieren. B. Um Ihnen dabei zu helfen, andere Benutzer kennenzulernen. Andere Benutzer empfehlen an Sie Zeigen von Benutzerprofilen eins zu eins C. Um Betrug oder andere illegale oder unbefugte Aktivitäten zu verhindern, aufzudecken und zu bekämpfen Suchen und beheben Sie (aktuelle, vermutete oder vermutete) Verstöße gegen unsere Nutzungsbedingungen, einschließlich durch Überprüfung von Beschwerden und Interaktionen zwischen Benutzern Besser Verstehen und Entwickeln von Gegenmaßnahmen gegen Verstöße gegen unsere Nutzungsbedingungen Aufbewahren von Daten im Zusammenhang mit einem Verstoß gegen unsere Nutzungsbedingungen, um wiederholte Vorfälle zu verhindern Durchsetzen oder Durchsetzen unserer Rechte, wie z ihre Beschwerde D. Sicherstellung der Einhaltung gesetzlicher Vorschriften Einhaltung gesetzlicher Vorschriften Unterstützung der Strafverfolgungsbehörden ag Informationen zur Verarbeitung personenbezogener Daten durch Profiling und automatisierte Entscheidungsfindung finden Sie im FAQ-Bereich.
  
  An andere Benutzer Sie stellen anderen Benutzern Informationen zur Verfügung, wenn Sie diese freiwillig im Dienst offenlegen (einschließlich Informationen, die in einem öffentlichen Profil enthalten sind). Bitte seien Sie vorsichtig und stellen Sie sicher, dass es Ihnen wirklich nichts ausmacht, bestimmte Informationen zu teilen.
  
  Wenn jemand eine Beschwerde in Bezug auf Sie einreicht (z. B. über Ihren Verstoß gegen unsere Nutzungsbedingungen), können wir die Person, die die Beschwerde eingereicht hat, über die Maßnahmen benachrichtigen, die wir (falls zutreffend) aufgrund der Beschwerde ergriffen haben.
  
  Wir befolgen einen strengen Überprüfungsprozess, bevor wir einen Dienstleister beauftragen oder mit einem Partner zusammenarbeiten. Unsere Dienstleister und Partner müssen strenge Vertraulichkeitsverpflichtungen eingehen.
  
  Wir geben Ihre Daten für begrenzte rechtmäßige Zwecke an verbundene Unternehmen weiter, wie unten dargelegt:

  An Strafverfolgungsbehörden / wie gesetzlich vorgeschrieben Wir können Ihre Daten offenlegen, wenn dies vernünftigerweise erforderlich ist: ​​1) wie es durch ein Gerichtsverfahren erforderlich ist, wie z. B. aufgrund eines Gerichtsbeschlusses, einer Vorladung oder eines Durchsuchungsbefehls, aufgrund einer staatlichen oder strafrechtlichen Untersuchung oder andere gesetzliche Anforderungen; 2) um eine Straftat zu verhindern oder aufzudecken (in jedem Fall vorbehaltlich des anwendbaren Rechts); 3) zum Schutz einer Person.
  
  Zur Durchsetzung gesetzlicher Rechte können wir auch Informationen bereitstellen: 1) wenn die Offenlegung unsere Haftung in einem tatsächlichen oder potenziellen Gerichtsverfahren mindern würde; 2) soweit erforderlich, um unsere gesetzlichen Rechte und die gesetzlichen Rechte unserer Nutzer, Geschäftspartner oder anderer interessierter Parteien zu schützen; 3) um unsere Vereinbarungen mit Ihnen zu erfüllen; 4) um illegale Aktivitäten, möglichen Betrug oder andere Straftaten zu untersuchen, zu verhindern oder andere Maßnahmen zu ergreifen.
  
  Auf Ihre Zustimmung oder Anfrage hin können wir Sie um Ihre Zustimmung bitten, Ihre Daten an Dritte weiterzugeben. In solchen Fällen werden wir deutlich erklären, warum wir diese Informationen weitergeben möchten.
  
  Wir können nicht personenbezogene Daten (d. h. Informationen, die Sie nicht persönlich identifizieren, einschließlich Geräteinformationen, allgemeine demografische Informationen, allgemeine Verhaltensdaten, nicht persönlich identifizierbare Standortinformationen) und personenbezogene Daten in gehashter Form verwenden und weitergeben es kann unter keinen der oben genannten Umstände von einer Person gelesen werden.
  
  Deine Rechte
  Wir möchten, dass Sie die Kontrolle über Ihre Informationen behalten, deshalb erinnern wir Sie an die folgenden Optionen und Tools:
  
  Zugangsmittel / Aktualisierung im Dienst. Konto-Tools und -Einstellungen helfen Ihnen dabei, auf die Informationen zuzugreifen, die Sie uns mit Bezug auf Ihr Konto direkt im Dienst zur Verfügung stellen, und diese Informationen zu korrigieren oder zu entfernen. Wenn Sie Fragen zu diesen Tools und Einstellungen haben, wenden Sie sich bitte an unser Support-Team. Geräteberechtigungen. Mobile Plattformen verfügen möglicherweise über Berechtigungssysteme für bestimmte Arten von Daten und Benachrichtigungen, z. B. Telefonkontakte, Bilder, Ortungsdienste, Push-Benachrichtigungen und Werbekennungen. Sie können die Einstellungen des Geräts ändern, der Erfassung und Verarbeitung relevanter Informationen oder der Anzeige relevanter Benachrichtigungen zustimmen oder die Zustimmung verweigern. Wenn Sie Ihre Zustimmung nicht geben, können bestimmte Dienste natürlich ihre Funktionalität verlieren. Entfernung Sie können die gesamte Informationserfassung durch die App stoppen, indem Sie sie über den standardmäßigen Deinstallationsprozess auf Ihrem Gerät deinstallieren. Bitte beachten Sie: Durch das Löschen der Anwendung wird das Konto NICHT gekündigt. Um Ihr Konto zu schließen, verwenden Sie die entsprechende Funktion des Dienstes. Kontoschließung. Das Konto kann über die entsprechende Funktion direkt im Service geschlossen werden. Wir möchten auch, dass unsere Benutzer sich ihrer Datenschutzrechte bewusst sind.
  `,
  i_agree_with: 'Ich bin einverstanden mit',
  and: 'und',
  privacy_policy_title: 'Datenschutz-Bestimmungen',
  goals: ['Familienaufbau', 'Reisen', 'Flirten', 'Chatten', 'Freundschaft', 'Sex'],
  i_looking_for: `Ich suche`,
  for: 'für',
  genders: ['Männlich', 'Weiblich', 'Männlich oder Weiblich'],
  your_expectations: 'Deine Erwartungen',
  your_dating_goals: 'Ihre Dating-Ziele',
  it_is_you: 'Du bist es!',
  choose_variant: 'Variante wählen',
  our_telegram: 'Unser Telegramm',
  stepof: (curentStep, numberOfSteps) => {
    return `Schritt ${curentStep} von ${numberOfSteps}`;
  },
  hints: [
    'Bitte machen Sie grundlegende Angaben zu Ihrer Person',
    'Bitte geben Sie Ihr Geburtsdatum und Ihr Geschlecht ein',
    'Fast fertig! Geben Sie Ihren Standort ein und klicken Sie auf Registrieren!',
  ],
  prev: 'vorh',
  next: 'nächste',
  delete_accaunt: 'Konto löschen',
  delete_accaunt_question: 'Möchten Sie das Konto wirklich löschen?',
  delete_avatar_question: 'Möchten Sie Ihren Avatar wirklich löschen?',
  no: 'nein',
  yes: 'ja',
  delete_chat: 'Chat löschen',
  all_cities: 'Alle Städte',
  all_countries: 'Alle Länder',
  all_regions: 'Alle Regionen',
  choose_gender: 'Wählen Sie das Geschlecht',
  iam_man: 'Ich bin ein Mann',
  iam_women: 'Ich bin eine Frau',
  your_photo_gallery: 'Ihre Fotogalerie',
  now_you_can_make_photo_access_request:
    'Jetzt haben Sie die Möglichkeit, den Zugriff auf das Foto anzufordern',
  cant_load_video: `Wir können das Video nicht herunterladen, höchstwahrscheinlich ist das Problem eine langsame Verbindung`,
  make_request: 'Anfrage Zugang',
  oops: 'Autsch!',
  success: 'Erfolg!',
  this_photo_was_hide_by_owner:
    'Der Zugriff auf das Foto wird durch den Eigentümer eingeschränkt, fordern Sie den Zugriff vom Eigentümer des Fotos an, sehen Sie sich dazu ein kurzes Video an.',
  watch_video: 'Anzeige ansehen',
  you_successfully_requested_access: 'Zugangsanfrage wurde erfolgreich versendet!',
  photo_access_requests: 'Zugriffsanfragen',
  photo_gallery: 'Fotogallerie',
  my_requests: 'Meine Anfragen',
  requests_to_me: 'Anfragen an mich',
  approved: 'Zugelassen',
  pending: 'Ausstehend',
  rejected: 'Abgelehnt',
  requestItemStatusMessage: {
    approved: `Die Anfrage dieses Benutzers wurde genehmigt`,
    pending: 'Fordert Zugriff an und wartet auf eine Antwort',
    rejected: `Die Anfrage dieses Benutzers wurde abgelehnt`,
  },
  requestHelpMessage: {
    myRequests: {
      approved: 'Hier werden Ihre Anfragen angezeigt, die genehmigt wurden.',
      pending: 'Hier werden Ihre ausstehenden Anfragen angezeigt.',
      rejected: 'Hier werden Ihre abgelehnten Anfragen angezeigt.',
    },
    requestToMe: {
      approved: 'Hier werden Anfragen an Sie angezeigt, die Sie genehmigt haben.',
      pending: 'Hier werden Anfragen an Sie angezeigt, die auf Ihre Antwort warten.',
      rejected: 'Dies zeigt Ihnen Anfragen an, die Sie abgelehnt haben.',
    },
  },
  for_add_annon_photo_watch_add:
    'Um ein anonymes Foto hinzuzufügen, müssen Sie sich ein kurzes Video ansehen',
  no_items_here_yet: `Während hier nichts ist`,
  now_you_can_add_anon_photo: 'Jetzt können Sie ein anonymes Foto hinzufügen',
  photoGalleryAnonPhotoHint: `Diese Fotos sind nur für die Benutzer sichtbar, denen Sie Zugriff gewährt haben. Somit entscheiden nur Sie, wer diese Fotos sieht. Fotos, die noch nicht moderiert wurden, sind mit einem roten Rahmen gekennzeichnet. Grenze 4`,
  photoGalleryPhotoHint:
    'Diese Fotos sind für alle Benutzer sichtbar. Fotos, die noch nicht moderiert wurden, sind mit einem roten Rahmen gekennzeichnet. Grenze 5',
  sorry_you_rich_anon_photos_limit: `Entschuldigung, Sie haben Ihr Limit für anonyme Fotos erreicht. 4/4`,
  your_anon_photos: 'Ihre anonymen Fotos',
  your_photos: 'Deine Fotos',
  alco: [
    'Ich trinke nicht',
    'Ich trinke in Gesellschaft',
    'Manchmal trinke ich',
    'Ich verweigere mir keinen Alkohol',
  ],
  smoking: [
    'Ich rauche nicht',
    'Ich rauche in Gesellschaft',
    'Ich rauche selten',
    'Ich rauche regelmäßig',
  ],
  kids: [
    'Ich habe keine Kinder und habe auch keine vor',
    `Ich habe keine Kinder, aber ich hätte gern`,
    'Ich habe Kinder, wir leben zusammen',
    'Ich habe Kinder, wir leben getrennt',
  ],
  additional_info: 'Zusätzliche Information',
  your_attitude_towards_alcohol: 'Ihre Einstellung zum Alkohol',
  your_attitude_towards_smoking: 'Ihre Einstellung zum Rauchen',
  do_you_have_children: 'Hast du Kinder',
  i_dont_mind_being_a_sponsor: `Es macht mir nichts aus, Sponsor zu sein`,
  i_dont_mind_being_a_kepter: `Ich habe nichts dagegen, auf Kosten eines Partners zu leben`,
  not_setted: 'nicht eingestellt',
  attitude_towards_alcohol: 'Einstellung zum Alkohol',
  attitude_towards_smoking: 'Einstellung zum Rauchen',
  children: 'Kinder',
  dating_goals: 'Dating-Ziele',
  show_olnly_persons_dont_mind_being_a_kepter:
    'Zeigen Sie nur diejenigen, denen es nichts ausmacht, auf Kosten eines Partners zu leben',
  show_olnly_persons_dont_mind_being_a_sponsor: `Zeigen Sie nur diejenigen, denen es nichts ausmacht, Sponsor zu werden`,
  all_variants: 'alle Varianten',
};

export {ger};
