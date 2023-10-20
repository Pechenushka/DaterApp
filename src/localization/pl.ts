import {localizationPackType} from './localizationTypes';

const pl: localizationPackType = {
  lang_title: 'Polski',
  send: 'Posłać',
  contacts: 'kontakty',
  chats: 'Czaty',
  profile_settings: 'Ustawienia profilu',
  age: 'wiek',
  announcement_text: 'Tekst ankiety',
  aply_filters: 'Zastosuj filtry',
  city: 'miasto',
  country: 'kraj',
  edit: 'edytować',
  enter_your_message: 'Wpisz swoją wiadomość',
  filters: 'filtry',
  gender: 'płeć',
  your_gender: 'twoja płeć',
  items_not_found: 'Nic nie znaleziono',
  likes: 'przeklinanie',
  location: 'Lokalizacja',
  matches: 'Pasować',
  me_liked: 'Byłem lubiany',
  my_likes: 'moje upodobania',
  preview: 'Podgląd',
  region: 'region',
  search: 'szukaj',
  send_your_message: 'Wyślij wiadomość',
  something_went_wrong: 'coś poszło nie tak',
  write_few_words_about_yourself: 'Napisz kilka słów o sobie',
  write_your_message: 'Napisz swoją wiadomość',
  your_announcement: 'twoje ogłoszenie',
  your_chats: 'twoje czaty',
  servers_are_not_allowed: 'Serwery są niedozwolone lub brak połączenia z Internetem',
  moderation_request_pending: 'Twoja prośba o moderację czeka na zatwierdzenie',
  profile_not_moderated:
    'Profil niemoderowany. Twoje zdjęcie awatara jest niedopuszczalne. Zmień swój awatar',
  please_request_moderation: 'Prawie skończone! Poproś o moderację, dodając awatar',
  help: 'Wsparcie',
  requests: 'upraszanie',
  authorization: 'Upoważnienie',
  or: 'lub',
  enter_your_email: 'Wprowadź swój email',
  enter_your_password: 'Wprowadź hasło',
  create_new_account: 'Stwórz nowe konto',
  login: 'przydomek',
  chose_city: 'Wybierz miasto',
  chose_country: 'Wybierz kraj',
  chose_region: 'Wybierz region',
  date_of_birth: 'Data urodzenia',
  enter_your_name: 'Wpisz swoje imię',
  repeat_your_password: 'Powtórz swoje hasło',
  sign_up: 'Zapisać się!',
  feedback: 'Skontaktuj się z nami',
  month: ['sty', 'lut', 'mar', 'kwi', 'maj', 'czer', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
  selectLanguage: 'Wybierz swój język',
  languageWarning: 'Zmiany zostaną zastosowane po ponownym uruchomieniu',
  send_message: 'Wyślij wiadomość',
  like: 'Upodobat',
  block_user: 'Zablokować użytkownika',
  unblock_user: 'Odblokuj użytkownika',
  report_user: 'Zgłoś użytkownika/treść',
  send_report: 'Wyślij raport',
  add_comment_to_report: 'Dodaj komentarz do raportu',
  must_be_at_least: (chars: number) => {
    return `Musi mieć co najmniej ${chars} znaków`;
  },
  warning: 'Ostrzeżenie',
  your_report_successfully_sended: 'Twoje zgłoszenie zostało pomyślnie wysłane',
  you_are_banned: 'Twój profil został zablokowany za naruszenie zasad społeczności',
  privacy_rules: 'Prywatność',
  terms_of_use_title: 'Warunki korzystania',
  terms_of_use: `1 387 / 5 000
  Результаты перевода
  Wytyczne dla społeczności
  Witamy w społeczności Meebo. Jeśli jesteś uczciwy, miły i szanujesz innych, zawsze będziesz tu mile widziany. Jeśli zdecydujesz się nie być, możesz nie przetrwać. Naszym celem jest umożliwienie użytkownikom swobodnego wyrażania siebie, o ile nie obraża to innych. W Meebo wszyscy trzymają się tego samego standardu. Prosimy o rozważność, zastanowienie się przed podjęciem działania i przestrzeganie naszych wytycznych dla społeczności zarówno w trybie online, jak i offline. Dobrze słyszałeś: Twoje zachowanie offline może doprowadzić do zamknięcia Twojego konta Meebo.
  Poniżej znajduje się lista naszych zasad dotyczących społeczności. Jeśli naruszysz którąkolwiek z tych zasad, możesz zostać zablokowany w Meebo. Poważnie, nie zmuszaj nas, abyśmy przesunęli się w lewo na ciebie - ponieważ nie będzie żadnych zmian, gdy to zrobimy. Zachęcamy do zgłaszania wszelkich zachowań, które naruszają nasze zasady.
  Meebo nie jest dla:
  
  Nagość/treści erotyczne
  
  Nie prosimy Cię o czesanie włosów na bok ani nawet mówienie pełnymi zdaniami; ale proszę, aby była elegancka i odpowiednia do spożycia publicznego. Bez nagości, bez treści o charakterze jednoznacznie seksualnym i nie zapisuj wszystkich swoich seksualnych pragnień w swoim biografii. Utrzymywać w czystości.
  Molestowanie
  Nie angażuj się ani nie zachęcaj innych do angażowania się w żadne ukierunkowane nadużycia lub nękanie innych użytkowników. Obejmuje to wysyłanie do dopasowań wszelkich niechcianych treści o charakterze seksualnym. Zgłoszenia dotyczące prześladowania, gróźb, zastraszania lub zastraszania są traktowane bardzo poważnie.  
 
  Przemoc i krzywda fizyczna
  
  Nie tolerujemy brutalnych, drastycznych lub krwawych treści na Meebo ani żadnych działań lub treści, które popierają lub grożą przemocą jakiegokolwiek rodzaju, w tym groźby lub promowanie terroryzmu. Napaść fizyczna, przymus i wszelkie akty przemocy są surowo zabronione.
  Treści, które nawołują do samobójstwa lub samookaleczenia lub gloryfikują je, również są niedozwolone. W takich sytuacjach możemy podjąć szereg kroków, aby pomóc użytkownikowi, w tym skontaktować się z zasobami kryzysowymi.
  
  Mowa nienawiści
  Wszelkie treści, które promują, popierają lub aprobują rasizm, bigoterię, nienawiść lub przemoc wobec osób lub grup ze względu na czynniki takie jak (między innymi) rasa, pochodzenie etniczne, wyznanie religijne, niepełnosprawność, płeć, wiek, pochodzenie narodowe, orientacja seksualna lub tożsamość płciowa jest niedozwolona.
  
  Prywatna informacja
  Nie udostępniaj publicznie żadnych prywatnych informacji, swoich ani innych osób. Obejmuje to numery ubezpieczenia społecznego, paszporty, hasła, informacje finansowe lub niewymienione dane kontaktowe, takie jak numery telefonów, adresy e-mail, adres domowy/pracy.
  
  Spam
  Nie bądź fałszywy. Zamiast tego bądź prawdziwy. Nie używaj Meebo do kierowania ludzi na zewnętrzne strony internetowe za pomocą linku lub w inny sposób.  
  
  Promocja lub nagabywanie
  Pozyskiwanie innych użytkowników jest w Meebo zabronione. Zaproszenie dopasowanych osób do czegoś, co robisz, jest w porządku, ale jeśli celem Twojego profilu jest reklamowanie wydarzenia lub firmy, organizacji non-profit, kampanii politycznej, konkursu lub prowadzenie badań, możemy usunąć Twoje konto. Chociaż cieszymy się, że w przyszłym tygodniu robisz program komediowy, nie używaj Meebo do jego promowania.
  
  Prostytucja i handel ludźmi
  Promowanie lub popieranie komercyjnych usług seksualnych, handlu ludźmi lub innych niedobrowolnych czynności seksualnych jest surowo zabronione i spowoduje zablokowanie Twojego konta w Meebo.
  
  Oszukiwanie
  Meebo ma politykę zerowej tolerancji dla wszelkiego rodzaju drapieżnych zachowań. Każdy, kto próbuje zdobyć prywatne informacje innych użytkowników w celu dokonania oszukańczej lub nielegalnej działalności, może zostać zbanowany. Każdy użytkownik przyłapany na udostępnianiu informacji o swoim koncie finansowym (PayPal, Venmo itp.) w celu otrzymania pieniędzy od innych użytkowników może również zostać zablokowany w Meebo.
  
  Personifikacja
  Bądź sobą! Nie udawaj kogoś innego.
  Nie podszywaj się ani w żaden inny sposób nie przedstawiaj fałszywie powiązań, powiązań lub powiązań z żadną osobą lub podmiotem. Obejmuje to konta parodii. Chociaż uważamy, że Twój profil Mike'a Pence'a jest zabawny, nie jesteś Mike'iem Pence'em. A jeśli tak, to co robisz na Meebo? 
  
  Małoletni
  Aby korzystać z Meebo, musisz mieć ukończone 18 lat. W związku z tym nie zezwalamy na umieszczanie zdjęć małoletnich bez opieki. Jeśli chcesz opublikować zdjęcia swoich dzieci, upewnij się, że również jesteś na zdjęciu. Jeśli zobaczysz profil, który zawiera osobę nieletnią bez opieki, zachęca do krzywdzenia osoby nieletniej lub przedstawia ją w sposób seksualny lub sugestywny, natychmiast to zgłoś.
  
  Naruszenie praw autorskich i znaków towarowych
  Jeśli to nie jest twoje, nie publikuj go. Jeśli Twój profil Meebo zawiera prace chronione prawem autorskim lub znakami towarowymi innych osób, nie wyświetlaj ich, chyba że masz na to pozwolenie.
  
  Nielegalne użycie
  Nie używaj Meebo do robienia czegokolwiek nielegalnego. Jeśli to nielegalne IRL, jest nielegalne w Meebo.
  
  Jedna osoba, jedno konto
  Konta Meebo nie mogą mieć wielu właścicieli, więc nie twórz konta u znajomego lub innej znaczącej osoby. Ponadto nie należy utrzymywać wielu kont Meebo.
  
  Aplikacje innych firm
  Korzystanie z jakichkolwiek aplikacji stworzonych przez kogokolwiek innego niż Meebo, które twierdzą, że oferują naszą usługę lub odblokowują specjalne funkcje Meebo (takie jak automatyczne przewijanie) jest niedozwolone.
  
  Uśpienie konta
  Meebo jest zabawne w użyciu... przez cały czas! Użyj Meebo nad jeziorem, użyj Meebo podczas jedzenia ciasta. Używaj Meebo, gdy jesteś poza domem, używaj Meebo, gdy masz wątpliwości! Jeśli jednak nie zalogujesz się na swoje konto Meebo w ciągu 2 lat, możemy usunąć Twoje konto z powodu braku aktywności.
  `,
  privacy_policy_text: `Prywatność Meebo
  NASZE ZOBOWIĄZANIE WOBEC CIEBIE W Meebo Twoja prywatność jest naszym najwyższym priorytetem. To sedno rozwoju i tworzenia usług i produktów, które znasz i kochasz. Wszystko po to, abyś miał okazję w pełni im zaufać i skupić się na nowych ważnych znajomościach.
  
  Doceniamy fakt, że powierzasz nam swoje informacje i traktujemy je odpowiedzialnie.
  
  Nasze zobowiązanie do ochrony prywatności. Tworząc każdy produkt i usługę, myślimy o prywatności naszych użytkowników. Sprowadzamy ekspertów z różnych dziedzin, takich jak prawo, bezpieczeństwo, rozwój, projektowanie produktów i nie tylko, aby podejmować każdą decyzję z poszanowaniem Twojej prywatności.
  
  Nasze zobowiązanie do przejrzystości. Korzystamy z wielu takich samych usług online, jak Ty, dlatego rozumiemy, że niekompletne informacje i nadmiernie złożony język są częstymi problemami związanymi z polityką prywatności. Nasze podejście jest dokładnie odwrotne: staramy się pisać politykę prywatności i inne podobne dokumenty w zrozumiałym języku. Naprawdę chcemy, aby użytkownicy przeczytali nasze zasady i zrozumieli nasze praktyki.
  
  Nasze zaangażowanie w bezpieczeństwo. Mamy ludzi, którym zależy na bezpieczeństwie Twoich danych. Regularnie aktualizujemy nasze praktyki bezpieczeństwa i inwestujemy w branżę, aby wzmocnić ochronę Twoich informacji.  
  
  Polityka prywatności Witamy w Polityce prywatności Meebo. Dziękuję za poświęcenie czasu na jej poznanie.
  
  Doceniamy, że powierzasz nam swoje informacje i zamierzamy utrzymać to zaufanie. Po pierwsze, chcemy, abyś zrozumiał, jakie informacje zbieramy, dlaczego je zbieramy, w jaki sposób są wykorzystywane i jakie masz wybory dotyczące swoich danych. W tej polityce opisujemy nasze praktyki dotyczące prywatności prostym językiem i staramy się unikać terminologii prawnej i technicznej w jak największym stopniu.
  
  DATA WEJŚCIA W ŻYCIE: 17 maja 2022 r.
  
  Gdzie obowiązuje nasza Polityka prywatności
  Niniejsza polityka prywatności dotyczy aplikacji, wydarzeń i innych usług obsługiwanych przez markę Meebo. Dla uproszczenia w niniejszej polityce prywatności wszystkie te usługi nazywamy naszymi usługami. Dla jeszcze większej przejrzystości dodaliśmy link do niniejszej polityki prywatności we wszystkich odpowiednich usługach.
  
  Niektóre usługi mogą wymagać własnej, unikalnej polityki prywatności. Jeśli dana usługa ma własną politykę prywatności, obowiązuje ta polityka, a nie aktualna.

  Informacje, które zbieramy
  Oczywiście nie będziemy w stanie pomóc Ci nawiązać właściwych znajomości bez pewnych informacji o Tobie, takich jak podstawowe dane profilowe i rodzaj osób, z którymi chcesz się komunikować. Zbieramy również informacje o tym, w jaki sposób korzystasz z naszych usług, takie jak dostęp do dzienników i dane od stron trzecich, gdy na przykład uzyskujesz dostęp do naszych usług za pośrednictwem swojego konta w sieci społecznościowej lub pobierasz informacje z konta w sieci społecznościowej, aby uzupełnić profil. Dodatkowe informacje znajdują się poniżej.
  
  Informacje, które nam przekazujesz
  Korzystając z naszych usług, zgadzasz się na przekazanie nam pewnych informacji, w tym:
  
  Tworząc konto, podajesz nam co najmniej swój adres e-mail i podstawowe informacje niezbędne do działania usługi, takie jak płeć czy data urodzenia. Wypełniając profil, możesz udostępnić dodatkowe informacje, takie jak dane biograficzne, zainteresowania i inne szczegóły o sobie, a także treści, takie jak zdjęcie. Aby dodać określone materiały, takie jak zdjęcia, możesz dać nam dostęp do swojego albumu ze zdjęciami. Jeśli skontaktujesz się z naszym działem obsługi klienta, zbieramy informacje, które nam przekazujesz podczas tej interakcji. Jeśli udostępniasz nam informacje o innych osobach (na przykład, jeśli korzystasz z danych kontaktowych znajomego dla funkcji), przetwarzamy te informacje w Twoim imieniu, aby spełnić Twoją prośbę. Oczywiście przetwarzamy również dane z Twoich czatów z innymi użytkownikami oraz treści, które publikujesz w celu obsługi usług. Informacje, które otrzymujemy od innych Oprócz informacji, które przekazujesz nam bezpośrednio, otrzymujemy informacje o Tobie z innych źródeł, w tym:
  
  Użytkownicy Użytkownicy mogą przekazywać informacje o Tobie podczas korzystania z naszych usług, na przykład, jeśli wchodzą z Tobą w interakcję lub składają skargę na Ciebie. Podczas korzystania z naszych usług generowane są dane techniczne o funkcjach, z których korzystasz, sposobie ich korzystania oraz urządzeniach, z których korzystasz z naszych usług. Poniżej szczegóły:
  
  Informacje o użytkowaniu Korzystanie przez Ciebie z Usług generuje dane o Twojej aktywności na nich, na przykład, w jaki sposób z nich korzystasz (takie jak czas logowania, używane funkcje, akcje, wyświetlane Ci informacje, adres stron internetowych z oryginalnym linkiem i reklamy z którymi wchodziłeś w interakcję) oraz jak wchodzisz w interakcję z innymi użytkownikami (na przykład użytkownicy, z którymi komunikujesz się i wchodzisz w interakcję, kiedy dokładnie to się dzieje, liczba wysłanych i odebranych wiadomości). Informacje o urządzeniu Zbieramy informacje o urządzeniu lub urządzeniach, z których korzystasz z naszych usług, w tym dane dotyczące sprzętu i oprogramowania, takie jak adres IP, identyfikator i typ urządzenia, ustawienia i cechy aplikacji, aplikacje powodujące awarie, identyfikatory reklam (losowo generowane liczby, które można zresetować w ustawieniach urządzenia), identyfikatory związane z plikami cookie lub innymi technologiami, które mogą jednoznacznie zidentyfikować urządzenie lub przeglądarkę. W ten sam sposób, jeśli wyrazisz zgodę, możemy zbierać zdjęcia.
  
  Jak wykorzystujemy informacje
  Głównym powodem, dla którego wykorzystujemy Twoje dane, jest świadczenie i ulepszanie naszych usług. Ponadto wykorzystujemy Twoje dane, aby Cię chronić. Poniżej szczegółowo wyjaśniliśmy różne powody korzystania z Twoich informacji i podaliśmy praktyczne przykłady.

  A. W celu administrowania Twoim kontem i zapewnienia działania naszych usług Tworzenie i zarządzanie Twoim kontem Zapewnienie Ci wsparcia i odpowiedzi na Twoje prośby Przeprowadzanie Twoich transakcji Komunikowanie się z Tobą w sprawie naszych usług B. Aby pomóc Ci poznać innych użytkowników Rekomendowanie innych użytkowników Tobie Wyświetlanie profili użytkowników jeden do jednego C. Aby zapobiegać oszustwom lub innym nielegalnym lub nieautoryzowanym działaniom oraz je wykrywać i zwalczać Wyszukiwać i usuwać naruszenia (obecne, podejrzewane lub podejrzewane) naszych Warunków korzystania, w tym poprzez przeglądanie skarg i interakcji między użytkownikami Lepiej zrozumieć i opracować środki zaradcze przeciwko naruszeniom naszych Warunków korzystania Zatrzymywanie danych związanych z naruszeniem naszych Warunków korzystania w celu zapobiegania powtarzającym się incydentom Egzekwowanie lub egzekwowanie naszych praw, takich jak nasze Warunki korzystania Kontaktowanie się z osobami, które składają skargi w celu poinformowania ich o naszych działaniach ich skargę D. Zapewnienie zgodności z przepisami Zgodność z wymogami prawnymi Pomoc dla organów ścigania ag Informacje o przetwarzaniu danych osobowych poprzez profilowanie i zautomatyzowane podejmowanie decyzji znajdują się w dziale FAQ.
  
  Do innych użytkowników Użytkownik przekazuje informacje innym użytkownikom, gdy dobrowolnie ujawnia je w serwisie (w tym informacje zawarte w profilu publicznym). Zachowaj ostrożność i upewnij się, że naprawdę nie masz nic przeciwko udostępnianiu niektórych informacji.
  
  Jeśli ktoś złoży skargę dotyczącą Ciebie (na przykład dotyczącą naruszenia przez Ciebie naszych Warunków korzystania), możemy powiadomić osobę, która złożyła skargę, o działaniach, które podjęliśmy w wyniku skargi.
  
  Przed zaangażowaniem jakiegokolwiek usługodawcy lub współpracą z jakimkolwiek partnerem przestrzegamy ścisłego procesu weryfikacji. Nasi usługodawcy i partnerzy muszą wyrazić zgodę na ścisłe zobowiązanie do zachowania poufności.
  
  Udostępniamy Twoje dane podmiotom stowarzyszonym w ograniczonych, zgodnych z prawem celach, jak określono poniżej:
  
  Organom ścigania / zgodnie z wymogami prawa Możemy ujawnić Twoje dane, jeśli jest to zasadnie konieczne: ​​1) zgodnie z wymogami procesu prawnego, na przykład na podstawie nakazu sądowego, wezwania sądowego lub nakazu przeszukania, ze względu na dochodzenie rządowe lub organy ścigania, lub inne wymagania prawne; 2) pomoc w zapobieganiu lub wykrywaniu przestępstwa (w każdym przypadku podlegające obowiązującym przepisom prawa); 3) dla ochrony jakiejś osoby.  
  
  Aby wyegzekwować prawa, możemy również przekazać informacje: 1) jeśli ujawnienie zmniejszyłoby naszą odpowiedzialność w faktycznym lub potencjalnym procesie sądowym; 2) jeśli jest to konieczne do ochrony naszych praw oraz praw naszych użytkowników, partnerów biznesowych lub innych zainteresowanych stron; 3) do realizacji zawartych z Tobą umów; 4) dochodzenia, zapobiegania lub podejmowania innych środków dotyczących nielegalnej działalności, ewentualnego oszustwa lub innych przestępstw.
  
  Za Twoją zgodą lub na żądanie możemy poprosić Cię o zgodę na udostępnienie Twoich danych stronom trzecim. W takich przypadkach jasno wyjaśnimy, dlaczego chcemy udostępnić te informacje.
  
  Możemy wykorzystywać i udostępniać informacje nieosobowe (tj. informacje, które nie umożliwiają identyfikacji użytkownika, w tym informacje o urządzeniu, ogólne informacje demograficzne, ogólne dane behawioralne, informacje o lokalizacji nieumożliwiające identyfikacji użytkownika) oraz dane osobowe w formie zaszyfrowanej, w której nie może być odczytana przez osobę w żadnej z powyższych okoliczności.
  
  Twoje prawa
  Chcemy, abyś miał kontrolę nad swoimi informacjami, dlatego przypominamy o następujących opcjach i narzędziach:
  
  Środki dostępu/aktualizacji w serwisie. Narzędzia i ustawienia konta pomogą Ci uzyskać dostęp do informacji, które nam przekazujesz, a które są związane z Twoim kontem bezpośrednio w Serwisie, a także poprawić lub usunąć takie informacje. Jeśli masz jakiekolwiek pytania dotyczące tych narzędzi i ustawień, skontaktuj się z naszym zespołem pomocy. Uprawnienia urządzenia. Platformy mobilne mogą mieć systemy uprawnień dla niektórych typów danych i powiadomień, takich jak kontakty telefoniczne, obrazy, usługi lokalizacyjne, powiadomienia push i identyfikatory reklamowe. Możesz zmienić ustawienia urządzenia, wyrażając zgodę lub odmawiając zgody na zbieranie i przetwarzanie odpowiednich informacji lub wyświetlanie odpowiednich powiadomień. Oczywiście, jeśli nie wyrazisz zgody, niektóre usługi mogą utracić swoją funkcjonalność. Usuwanie Możesz zatrzymać zbieranie wszystkich informacji przez aplikację, odinstalowując ją w ramach standardowego procesu odinstalowywania na urządzeniu. Uwaga: usunięcie aplikacji NIE powoduje usunięcia konta. Aby zamknąć konto, skorzystaj z odpowiedniej funkcji w serwisie. Zamknięcie konta. Konto można zamknąć korzystając z odpowiedniej funkcji bezpośrednio w serwisie. Chcemy również, aby nasi użytkownicy byli świadomi swoich praw do prywatności.
  `,
  i_agree_with: 'zgadzam się z',
  and: 'i',
  privacy_policy_title: 'Polityka prywatności',
  goals: ['budynek rodziny', 'podróże', 'flirt', 'rozmowa', 'przyjaźń', 'seks'],
  i_looking_for: `Szukam`,
  for: 'na',
  genders: ['Mężczyzna', 'Kobieta', 'Mężczyzna lub Kobieta'],
  your_expectations: 'Twoje oczekiwania',
  your_dating_goals: 'Twoje cele randkowe',
  it_is_you: 'To ty!',
  choose_variant: 'Wybierz wariant',
  our_telegram: 'Nasz telegram',
  stepof: (curentStep, numberOfSteps) => {
    return `Krok ${curentStep} z ${numberOfSteps}`;
  },
  hints: [
    'Proszę podać podstawowe informacje o sobie',
    'Proszę wpisać swoją datę urodzenia i płeć',
    'Już prawie gotowe! Wpisz swoją lokalizację i naciśnij Zarejestruj się!',
  ],
  prev: 'poprzedni',
  next: 'następny',
  delete_accaunt: 'Usuń konto',
  delete_accaunt_question: 'Czy na pewno chcesz usunąć konto?',
  delete_avatar_question: 'Czy na pewno chcesz usunąć swój awatar?',
  no: 'nie',
  yes: 'tak',
  delete_chat: 'Usuń czat',
  all_cities: 'Wszystkie miasta',
  all_countries: 'Wszystkie kraje',
  all_regions: 'Wszystkie regiony',
  choose_gender: 'Wybierz płeć',
  iam_man: 'jestem mężczyzną',
  iam_women: 'jestem kobietą',
  your_photo_gallery: 'Twoja galeria zdjęć',
  now_you_can_make_photo_access_request: 'Teraz masz możliwość zażądania dostępu do zdjęcia',
  cant_load_video: `Nie możemy pobrać filmu, najprawdopodobniej problemem jest wolne połączenie`,
  make_request: 'Poproś o dostęp',
  oops: 'Auć!',
  success: 'Powodzenie!',
  this_photo_was_hide_by_owner:
    'Dostęp do zdjęcia jest ograniczony przez właściciela, poproś o dostęp właściciela zdjęcia, w tym celu obejrzyj krótki film.',
  watch_video: 'Oglądaj reklamy',
  you_successfully_requested_access: 'Prośba o dostęp została pomyślnie wysłana!',
  photo_access_requests: 'Żądania dostępu',
  photo_gallery: 'Galeria Zdjęć',
  my_requests: 'Moje Prośby',
  requests_to_me: 'Prośby Do Mnie',
  approved: 'Zatwierdzony',
  pending: 'W oczekiwaniu',
  rejected: 'Odrzucony',
  requestItemStatusMessage: {
    approved: `Żądanie tego użytkownika zostało zatwierdzone`,
    pending: 'Żąda dostępu i czeka na odpowiedź',
    rejected: `Żądanie tego użytkownika zostało odrzucone`,
  },
  requestHelpMessage: {
    myRequests: {
      approved: 'Tutaj pokazane są Twoje prośby, które zostały zatwierdzone.',
      pending: 'Tutaj są wyświetlane Twoje oczekujące prośby.',
      rejected: 'Tutaj są pokazane Twoje odrzucone prośby.',
    },
    requestToMe: {
      approved: 'Tutaj pokazane są prośby do Ciebie, które zostały przez Ciebie zatwierdzone.',
      pending: 'Tutaj pokazane są prośby do Ciebie, które czekają na Twoją odpowiedź.',
      rejected: 'To pokazuje prośby do Ciebie, które zostały odrzucone.',
    },
  },
  for_add_annon_photo_watch_add: 'Aby dodać anonimowe zdjęcie należy obejrzeć jeden krótki film',
  no_items_here_yet: `Podczas gdy tu nic nie ma`,
  now_you_can_add_anon_photo: 'Teraz możesz dodać anonimowe zdjęcie',
  photoGalleryAnonPhotoHint: `Te zdjęcia będą widoczne tylko dla tych użytkowników, którym dałeś dostęp. Zatem tylko Ty decydujesz, kto zobaczy te zdjęcia. Zdjęcia, które nie zostały jeszcze poddane moderacji, są oznaczone czerwoną ramką. Granica 4`,
  photoGalleryPhotoHint:
    'Te zdjęcia będą widoczne dla wszystkich użytkowników. Zdjęcia, które nie zostały jeszcze poddane moderacji, są oznaczone czerwoną ramką. Granica 5',
  sorry_you_rich_anon_photos_limit: `Przepraszamy, osiągnąłeś limit anonimowych zdjęć. 4/4`,
  your_anon_photos: 'Twoje anonimowe zdjęcia',
  your_photos: 'Twoje zdjęcia',
  alco: ['Nie piję', 'Piję w towarzystwie', 'Czasami piję', 'Nie odmawiam sobie alkoholu'],
  smoking: ['nie palę', 'palę w towarzystwie', 'rzadko palę', 'palę regularnie'],
  kids: [
    `nie mam dzieci i nie planuję`,
    'Nie mam dzieci, ale chciałbym',
    `Mam dzieci, mieszkamy razem`,
    `mam dzieci, mieszkamy osobno`,
  ],
  additional_info: 'Dodatkowe informacje',
  your_attitude_towards_alcohol: 'Twój stosunek do alkoholu',
  your_attitude_towards_smoking: 'Twój stosunek do palenia',
  do_you_have_children: 'Czy masz dzieci',
  i_dont_mind_being_a_sponsor: `Nie przeszkadza mi bycie sponsorem`,
  i_dont_mind_being_a_kepter: `Nie mam nic przeciwko życiu na koszt partnera`,
  not_setted: 'nie ustawione',
  attitude_towards_alcohol: 'Stosunek do alkoholu',
  attitude_towards_smoking: 'Stosunek do palenia',
  children: 'Dzieci',
  dating_goals: 'Cele randkowe',
  show_olnly_persons_dont_mind_being_a_kepter:
    'Pokaż tylko tym, którym nie przeszkadza życie na koszt partnera',
  show_olnly_persons_dont_mind_being_a_sponsor: `Pokaż tylko tym, którzy nie mają nic przeciwko zostaniu sponsorem`,
  all_variants: 'wszystkie warianty',
  guests: 'Goście',
  guestWays: [
    'Przekierowano z ekranu wyszukiwania',
    'Przekierowano z ekranu polubień',
    'Przekierowano z ekranu czatu',
    'Przekierowano z ekranu gości',
  ],
  my_guests: 'Moi Goście',
  my_visits: 'Moje Wizyty',
  guestHints: {
    myGuests: 'Oto użytkownicy, którzy odwiedzili Twój profil',
    myVisits: 'To pokazuje odwiedzonych użytkowników',
  },
  chat_list_screen: `Ekran listy czatów`,
  chat_screen: `Ekran czatu`,
  guests_screen: `Ekran gości`,
  likes_screen: `Ekran polubień`,
  photo_access_requests_screen: `Ekran próśb o dostęp do zdjęć`,
  photo_gallery_screen: `Ekran galerii zdjęć`,
  profile_settings_screen: `Ekran ustawień profilu`,
  search_screen: `Ekran wyszukiwania`,
  home_screen: `Ekran główny`,
  chat_list_screen_hint: `Dostęp do tego ekranu można uzyskać za pomocą przycisku na dolnym pasku nawigacyjnym.
  Wszystkie twoje czaty są tutaj wyświetlane posortowane według daty ostatniej wiadomości na czacie`,
  chat_screen_hint: `Dostęp do tego ekranu można uzyskać, wybierając dowolny czat z listy czatów na ekranie listy czatów.
  Profil rozmówcy jest pokazany u góry ekranu. Również w menu kontekstowym dostępne są opcje usuwania czatu i blokowania rozmówcy.
  W centrum zobaczysz historię wiadomości w swoim rozmówcy.
  Na dole ekranu zobaczysz pole do wpisania wiadomości oraz przycisk do wysłania wiadomości.`,
  guests_screen_hint: `Możesz przejść do tego ekranu za pomocą przycisku na ekranie głównym „Goście”.
  Ten ekran pokazuje gości Twojego profilu.
  U góry ekranu zobaczysz przełącznik kart. W zakładce „Moi Goście” znajdziesz wszystkich użytkowników, którzy odwiedzili Twój profil. W zakładce „Moje wizyty” znajdziesz odwiedzonych użytkowników.
  Wpis o odwiedzeniu ankiety jest usuwany po 30 dniach.`,
  likes_screen_hint: `Dostęp do tego ekranu można uzyskać za pomocą przycisku na dolnym pasku nawigacyjnym.
  U góry ekranu zobaczysz przełącznik kart.
 
  Zakładka „Moje polubienia”.
  Tutaj możesz zobaczyć profile użytkowników, których lubisz.
 
  Zakładka „Lubię to”.
  Tutaj możesz zobaczyć profile użytkowników, którzy Cię polubili.
 
  Zakładka Dopasowania.
  Tutaj możesz zobaczyć profile użytkowników, z którymi dopasowałeś polubienia.`,
  photo_access_requests_screen_hint: `Dostęp do tego ekranu można uzyskać za pomocą przycisku na głównym ekranie Żądania dostępu.
  Ten ekran pokazuje prośby o dostęp do anonimowych zdjęć.
  U góry ekranu zobaczysz dwa przełączniki kart. W pierwszym wybierasz, które prośby będą wyświetlane - prośby do Ciebie, czy Twoje prośby do innych użytkowników.
  Każde żądanie ma 3 statusy (przełącznik na dolnej karcie). Status „Zatwierdzony” wskazuje, że wniosek został zatwierdzony. Status „Oczekuje” wskazuje, że żądanie jest w toku. Status „Odrzucony” oznacza, że wniosek został odrzucony.
  Masz również możliwość zmiany zdania w dowolnym momencie.`,
  photo_gallery_screen_hint: `Dostęp do tego ekranu można uzyskać za pomocą przycisku na głównym ekranie Galerii zdjęć.
  Na górze ekranu znajduje się blok z twoimi zdjęciami publicznymi, a na dole bloku z twoimi anonimowymi zdjęciami.
 
  Zdjęcia publiczne (górny blok)
  Te zdjęcia będą widoczne dla wszystkich użytkowników. Zdjęcia, które nie zostały jeszcze poddane moderacji, są oznaczone czerwoną ramką. Granica 5.
 
  Anonimowe zdjęcia (dolny blok)
  Te zdjęcia będą widoczne tylko dla tych użytkowników, którym dałeś dostęp. Zatem tylko Ty decydujesz, kto zobaczy te zdjęcia. Zdjęcia, które nie zostały jeszcze poddane moderacji, są oznaczone czerwoną ramką. Limit 4. Prośby o dostęp do tych zdjęć można znaleźć na ekranie „Prośby o dostęp”.`,
  profile_settings_screen_hint: `Możesz przejść do tego ekranu za pomocą przycisku na ekranie głównym „Ustawienia kwestionariusza”.
  Na tym ekranie możesz edytować swój profil. Masz możliwość napisać kilka słów o sobie, wskazać lokalizację, wskazać swoje oczekiwania wobec partnera, a także wskazać dodatkowe informacje o sobie, takie jak stosunek do palenia, alkoholu, posiadania dzieci, a także wskazać, czy jesteś gotowy zostać sponsorem lub nie przeciwko żyć ze swojego partnera.
  Wszystkie dane, które tu wpiszesz, będą widoczne dla innych użytkowników.`,
  search_screen_hint: `Dostęp do tego ekranu można uzyskać za pomocą przycisku na dolnym pasku nawigacyjnym.
  U góry ekranu zobaczysz lokalizację, z której wybrano profile. znajdziesz tam również kilka filtrów. Wszystkie wybrane filtry zostaną zapisane i zostaną automatycznie zastosowane przy następnym otwarciu aplikacji.
  W głównej części ekranu znajduje się lista profili pasujących do wszystkich filtrów. Lista jest automatycznie sortowana według daty ostatniej wizyty użytkownika.
  Każdy profil na liście może być oznaczony zieloną lub czerwoną ikoną. Zielona ikona oznacza użytkowników, którzy nie mają nic przeciwko zostaniu sponsorami. Czerwona ikona oznacza użytkowników, którym nie przeszkadza życie na koszt partnera.`,
  home_screen_hint: `To jest Twój główny ekran, na który wchodzisz po otwarciu aplikacji.
  U góry ekranu masz możliwość przesłania swojego awatara. Aby to zrobić, kliknij duży przycisk aparatu. Po przesłaniu awatara pojawi się on w okrągłej ramce zamiast przycisku aparatu. Aby zmienić swojego awatara, kliknij swój aktualny awatar. Aby usunąć awatar, kliknij mały krzyżyk w prawym dolnym rogu awatara.
  Pod awatarem znajdują się podstawowe informacje o Tobie oraz Twoje dane kontaktowe (widoczne tylko dla Ciebie). Poniżej znajduje się pasek nawigacji.`,
  private: 'Prywatny',
  public: 'Publiczny',
  your_avatar: 'Twój Awatar',
  your_accaunt_added: 'Twój profil został pomyślnie dodany',
  registration_errors: {
    agree_TOF: 'Musisz zaakceptować warunki użytkowania',
    email_empty: 'Adres e-mail nie może być pusty',
    less100: 'Poważnie, masz ponad 100 lat?',
    name_empty: 'Nazwa nie może być pusta',
    over18: 'Musisz mieć ukończone 18 lat',
    password_6_cahrs: 'Hasło musi mieć co najmniej 6 znaków',
    password_confirm_empty: 'Pole Potwierdź hasło nie może być puste',
    password_empty: 'Hasło nie może być puste',
    password_match: 'Potwierdź, że hasło nie pasuje',
    provide_gender: 'Podaj swoją płeć',
    select_city: 'Wybierz swoje miasto lub najbliżej Ciebie',
    select_country: 'Wybierz swój kraj',
    select_region: 'Wybierz swój region',
  },
  minutes_ago: 'minuty temu',
  long_time_ago: 'dawno temu',
  just_now: 'dopiero co',
};

export {pl};
