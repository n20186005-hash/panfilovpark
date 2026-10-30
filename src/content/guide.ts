import type { Locale } from '../i18n';

export interface GuideContent {
  meta: { title: string; description: string };
  nav: string[];
  hero: { eyebrow: string; h1a: string; h1b: string; intro: string; chips: string[]; imgAlt: string; aerialAlt: string };
  memory: { eyebrow: string; heading: string; body1: string; body2: string; imgAlt: string };
  visit: { eyebrow: string; heading: string; cards: { title: string; text: string }[] };
  transport: { eyebrow: string; heading: string; items: { title: string; text: string }[]; mapAlt: string; mapHl: string };
  points: { eyebrow: string; heading: string; items: { num: string; title: string; text: string }[] };
  nearby: { eyebrow: string; heading: string; cards: { title: string; text: string; chips: string[] }[] };
  faq: { eyebrow: string; heading: string; items: { q: string; a: string }[] };
  sourceHeading: string;
  footerNote: string;
  footer: {
    disclaimer: string;
    privacy: { title: string; text: string };
    cookies: { title: string; text: string };
    terms: { title: string; text: string };
  };
  attractionName: string;
  attractionAlternate: string[];
  attractionDescription: string;
  visualNote: string;
  sourceLinks: {label:string;url:string}[];
}

export const content: Record<Locale, GuideContent> = {
  "kk": {
    "meta": {
      "title": "28 гвардияшы-панфиловшылар саябағы, Алматы | Бару және собор",
      "description": "Алматыдағы Панфилов саябағы: кіру туралы дереккөздер, Вознесенск соборының бөлек тәртібі, мемориал тарихы, жету жолын тексеру және сілтемелер."
    },
    "nav": [
      "Бару",
      "Тарих",
      "Маңай",
      "FAQ"
    ],
    "hero": {
      "eyebrow": "Алматы · тарихи-мемориалдық саябақ",
      "h1a": "28 гвардияшы-панфиловшылар саябағы",
      "h1b": "Алматы",
      "intro": "Алматы орталығындағы тарихи-мемориалдық саябақта Даңқ мемориалы, Мәңгілік алау және Вознесенск соборы бар. Ашық аумақ пен әр ғимаратқа баруды бөлек жоспарлаңыз.",
      "chips": [
        "★ 4,8 · 14 370 пікір",
        "Maps дерегі · 30.10.2026",
        "Саябақ пен нысандардың кестесі бөлек"
      ],
      "imgAlt": "Ағаштар, жол және геометриялық естелік нышанының символдық иллюстрациясы; фото емес",
      "aerialAlt": "Ағаштар, жол және геометриялық естелік нышанының символдық иллюстрациясы; фото емес"
    },
    "memory": {
      "eyebrow": "Орынның мінезі",
      "heading": "Тыныштық пен салтанат қатар сезілетін саябақ",
      "body1": "Қала әкімдігі саябақтың қазіргі атауын 1942 жылмен, Даңқ мемориалының ашылуын 1975 жылғы 8 мамырмен байланыстырады. Ұлттық туристік портал атауды генерал Иван Панфилов басқарған 316-атқыштар дивизиясы және Мәскеуді қорғаумен байланыстырады.",
      "body2": "Мемориалдық баяндау мен нақты ұрыс деректері бір ұғым емес. Тарихи зерттеулер 28 панфиловшы туралы белгілі әңгіменің кейбір тұстарын даулаған. Бұл гид естелік орынның мағынасын түсіндіреді, танк саны не ұрыс реконструкциясын даусыз факт ретінде бермейді.",
      "imgAlt": "Ағаштар арасындағы күмбезді ғимараттың символдық иллюстрациясы; фото не реконструкция емес"
    },
    "visit": {
      "eyebrow": "Сапарды жоспарлау",
      "heading": "Бір қарағанда керек мәлімет",
      "cards": [
        {
          "title": "Саябақ туралы тізім",
          "text": "Kazakhstan.travel саябақты тәулік бойы және тегін деп көрсетеді; 2026 жылғы 30 қазандағы Maps дерегі де 24 сағатты көрсетті. Бұл барлық жол, шара немесе ғимарат түнде ашық деген кепілдік емес."
        },
        {
          "title": "Вознесенск соборы",
          "text": "Ғибадатхана сайты күндіз кіруге болатынын, кешкі құлшылық біткеннен кейін 30 минуттан соң жабылатынын жазады. Туристік порталдағы 10:00–16:00 қызметке тәуелді нақты кесте емес. Баратын күнді собордан тексеріңіз."
        },
        {
          "title": "Басқа нысандар",
          "text": "Музей, әскери мекеме, іс-шара және собордың кіру тәртібі бөлек. Операторлардың қазіргі тарифі немесе бәріне ортақ сапар ұзақтығы бұл жерде расталмаған."
        },
        {
          "title": "Келу және қолжетімділік",
          "text": "Maps мекенжайы — плюс-код пен өзен бағдары, тексерілген қақпа емес. Қолжетімді кіреберіс белгіленгенімен, барлық жол, еңіс және ішкі кеңістік зерттелмеген."
        }
      ]
    },
    "transport": {
      "eyebrow": "Толық көлік",
      "heading": "Қалай жетуге болады",
      "items": [
        {
          "title": "Нысанды анықтаңыз",
          "text": "Саябақтың толық атауын, Алматы, Қазақстан деп көрсетіп, керекті нысанның кіреберісін нақтылаңыз. Карта нүктесі көлік қақпасын емес, саябақты көрсетеді."
        },
        {
          "title": "Қоғамдық көлік",
          "text": "Тасымалдаушыдан қазіргі бағыт, аялдама, тариф және қозғалыс өзгерісін тексеріңіз. Белгілі автобус, ең жақын метро шығуы немесе жаяу уақыт уәде етілмейді."
        },
        {
          "title": "Көлік және түсіру",
          "text": "Жүргізушіден не нысаннан заңды тоқтау орнын, тұрақ шектеуі мен ақысын анықтаңыз. Туристік автобус орны, көше тұрағы немесе бос орын кепілдендірілмейді."
        }
      ],
      "mapAlt": "28 гвардияшы-панфиловшылар саябағы картасы",
      "mapHl": "kk"
    },
    "points": {
      "eyebrow": "Серуен өзегі",
      "heading": "Үш нүктені жібермеңіз",
      "items": [
        {
          "num": "01",
          "title": "Вознесенск соборы",
          "text": "Саябақтың ашық аумағынан бөлек қызмет ететін православ ғибадатханасы. Белгілерді ұстанып, құлшылыққа кедергі келтірмеңіз, адамдарды не шектеулі ішкі орындарды түсірмес бұрын сұраңыз. Бұл — құрметті мінез-құлық кеңесі, түсіруге рұқсат ережесінің дәйексөзі емес."
        },
        {
          "num": "02",
          "title": "Даңқ мемориалы және Мәңгілік алау",
          "text": "Еске алу кеңістігі. Мемориал беттерін ойынға пайдаланбай, қоршау мен белгілерді сақтаңыз. 2025 жылғы ақпандағы жөндеу мақаласы бүгінгі жұмыс, жабылу не аяқталу туралы дәлел емес."
        },
        {
          "num": "03",
          "title": "Музейлер және өзге нысандар",
          "text": "Ұлттық саябақ карточкасында әскери музей аталады. Бармас бұрын нақты мекемені, кіреберісті, бағдарламаны және билет шартын тексеріңіз; саябақтың жалпы кестесін оған қолданбаңыз."
        }
      ]
    },
    "nearby": {
      "eyebrow": "Маңайдағы жоспар",
      "heading": "Тамақ пен көрікті орындар",
      "cards": [
        {
          "title": "Тамақ және демалыс",
          "text": "Кафе немесе ас орнының нақты мекенжайын, филиалын және қазіргі жұмысын тексеріңіз. Мұнда расталмаған кафе атауы, саябақ ішіндегі қызмет не бос үстел уәдесі берілмейді.",
          "chips": []
        },
        {
          "title": "Алматы орталығындағы басқа орындар",
          "text": "Көк базар мен басқа қалалық орындар — бөлек бағыттар. Саябақ, собор, музей және базарды бір билет не тұрақты қысқа жаяу шеңбер деп қабылдамай, әрқайсысының бағыты мен кіруін тексеріңіз.",
          "chips": []
        }
      ]
    },
    "faq": {
      "eyebrow": "FAQ",
      "heading": "Жиі қойылатын сұрақтар",
      "items": [
        {
          "q": "Саябақ тәулік бойы және тегін бе?",
          "a": "Ұлттық туристік портал солай көрсетеді, ал 2026 жылғы 30 қазанда Maps 24 сағатты көрсетті. Бұл барлық қақпа, жол, шара, музей немесе ғибадатхана үздіксіз әрі тегін ашық деген растама емес."
        },
        {
          "q": "Соборға қашан кіруге болады?",
          "a": "Оператор күндіз кіріп, кешкі құлшылық аяқталғаннан 30 минуттан кейін жабылатынын жазады. Туристік портал 10:00–16:00 деп көрсетеді. Құлшылыққа тәуелді ресми ескертпеге сүйеніп, нақты күнді сұраңыз; қазіргі бөлек кіру тарифі расталмаған."
        },
        {
          "q": "Қанша уақыт жоспарлау керек?",
          "a": "Таңдалған нысандарды, құлшылық не шараны, қолжетімділік қажеттілігін және қайту көлігін ескеріңіз. Барлығына ортақ уақыт белгіленбеген."
        },
        {
          "q": "Барлық аумақ кедергісіз бе?",
          "a": "Maps кіреберісті ғана белгілейді, толық кедергісіз жол не интерьерді растамайды. Төсем, еңіс, дәретхана және көмек туралы сұраңыз."
        },
        {
          "q": "Собор мен мемориалды түсіруге бола ма?",
          "a": "Арнайы қазіргі фото рұқсаты тексерілмеген. Белгілерге бағынып, интерьер мен құрал шектеуін сұраңыз, құлшылыққа кедергі жасамаңыз және танылатын адамды түсірерде келісім алыңыз."
        },
        {
          "q": "Кіреберіс қайда?",
          "a": "Саябақ Алматы орталығында. Maps жазбасы — плюс-код пен өзен бағдары. Оны тексерілген көше мекенжайы не көлік қақпасы деп алмай, керек кіреберісті нақтылаңыз."
        }
      ]
    },
    "sourceHeading": "Фото және дерек ескертпесі",
    "footerNote": "2026 жылғы 30 қазанда тексерілді. Maps рейтингі — қолмен тіркелген дерек, тікелей ағын не осы гидтің сауалнамасы емес; пікір мәтіні көшірілмейді. Ұлттық портал саябақ тізімін, собор операторы құлшылыққа тәуелді тәртіпті береді. 2025 жылғы жөндеу жоспары қазіргі кіруді не аяқталуды дәлелдемейді.",
    "footer": {
      "disclaimer": "Бұл сайт саябақтың ресми сайты емес, тәуелсіз ақпараттық гид.",
      "privacy": {
        "title": "Құпиялық",
        "text": "Бұл гид GA4 пен оның баптауын беттегі таңдауды күтпей автоматты жүктейді. Браузерге байланысты Google бет қаралымын, URL/өту көзін, құрылғы/браузер және шамамен орналасу ақпаратын алып, cookie қолдануы мүмкін. Енгізілген Google Maps оған жақындағанда жүктелуі мүмкін. Скрипт не кейін жүктеу келісімді немесе сәтті жіберуді дәлелдемейді. Cloudflare шеткі хостинг өңдеуі IP, сұрау URL-і, уақыт және қауіпсіздік журналдарын қамтуы мүмкін. Бөлек хостинг баптауы кіру, бет қаралымы мен өнімділік үшін Cloudflare Web Analytics браузер beacon-ын енгізуі мүмкін; өлшемдерге жол, өту көзі, ел, құрылғы, браузер және операциялық жүйе кіреді. Қазіргі өндірісте енгізу, орындалу және жіберу расталмаған. Бастапқы CSP іске асқанда beacon-ды бұғаттайды деп күтіледі, бірақ бұл шеткі өңдеу мен Google Analytics-ті өшірмейді. Иллюстрациялар жергілікті, қаріптер құрылғы жүйесінен."
      },
      "cookies": {
        "title": "Cookie туралы ақпарат",
        "text": "Сайтта бақылау қосқышы жоқ. Браузердің cookie/контент баптауы немесе Google-дың бас тарту ақпараты аналитика мен сыртқы функцияға әсер етуі мүмкін, бірақ бұрын жіберілгенді өшірмейді және хостингтің шеткі өңдеуін тоқтатпайды. Бұл код беттегі cookie таңдауын сақтамайды."
      },
      "terms": {
        "title": "Пайдалану шарттары",
        "text": "Ақпарат сапарды жоспарлауға арналған анықтамалық сипатта. Кесте мен қызмет шарттарын ресми көзден қайта тексеріңіз."
      }
    },
    "attractionName": "28 гвардияшы-панфиловшылар саябағы",
    "attractionAlternate": [
      "28 Panfilov Guardsmen Park",
      "Парк 28 гвардейцев-панфиловцев"
    ],
    "attractionDescription": "Алматы орталығындағы тарихи-мемориалдық саябақта Даңқ мемориалы, Мәңгілік алау және Вознесенск соборы бар. Ашық аумақ пен әр ғимаратқа баруды бөлек жоспарлаңыз.",
    "visualNote": "Түпнұсқа CC0 иллюстрациясы; фото, жол жоспары не қазіргі көрініс емес.",
    "sourceLinks": [
      {
        "label": "Ұлттық саябақ карточкасы",
        "url": "https://www.kazakhstan.travel/en/attractions/402"
      },
      {
        "label": "Соборға кіру тәртібі",
        "url": "https://cathedral.kz/ru/pages/schedule"
      },
      {
        "label": "Мемориал тарихы / 2025 ескертпесі",
        "url": "https://www.gov.kz/memleket/entities/almaty/press/news/details/946470?lang=ru"
      },
      {
        "label": "Тарихи зерттеу",
        "url": "https://openurl.ebsco.com/contentitem/gcd%3A83743375?crl=c&id=ebsco%3Agcd%3A83743375&jrnl=1531023X&sid=ebsco%3Aplink%3Acrawler-gcd"
      }
    ]
  },
  "ru": {
    "meta": {
      "title": "Парк 28 гвардейцев-панфиловцев, Алматы | Посещение и собор",
      "description": "Парк Панфиловцев в Алматы: источники о доступе, отдельный порядок посещения Вознесенского собора, мемориальная история, прибытие и полезные ссылки."
    },
    "nav": [
      "Как добраться",
      "История",
      "Рядом",
      "FAQ"
    ],
    "hero": {
      "eyebrow": "Алматы · историко-мемориальный парк",
      "h1a": "Парк 28 гвардейцев-панфиловцев",
      "h1b": "Алматы",
      "intro": "Историко-мемориальный парк в центре Алматы с Мемориалом Славы, Вечным огнём и Вознесенским собором. Планируйте посещение открытой территории и каждого учреждения отдельно.",
      "chips": [
        "★ 4,8 · 14 370 отзывов",
        "Снимок Maps · 30.10.2026",
        "У парка и объектов разные часы"
      ],
      "imgAlt": "Символическая иллюстрация деревьев, дорожки и геометрического мемориального мотива; не фотография",
      "aerialAlt": "Символическая иллюстрация деревьев, дорожки и геометрического мемориального мотива; не фотография"
    },
    "memory": {
      "eyebrow": "Характер места",
      "heading": "Парк, где покой соседствует с величием",
      "body1": "Акимат относит нынешнее название парка к 1942 году, а открытие Мемориала Славы — к 8 мая 1975 года. Национальный туристический портал связывает название с 316-й стрелковой дивизией генерала Ивана Панфилова и обороной Москвы.",
      "body2": "Мемориальное повествование и точные утверждения о бое — разные вопросы. Исторические исследования оспаривают детали известного рассказа о 28 панфиловцах. Здесь описывается смысл памятного места, без подачи точных чисел подбитых танков или реконструкции боя как бесспорного факта.",
      "imgAlt": "Символическая иллюстрация здания с куполом среди деревьев; не фотография и не реконструкция"
    },
    "visit": {
      "eyebrow": "Планирование поездки",
      "heading": "Что нужно знать сразу",
      "cards": [
        {
          "title": "Сведения о парке",
          "text": "Kazakhstan.travel указывает круглосуточный и бесплатный доступ; снимок Maps от 30 октября 2026 также показывал 24 часа. Это сведения источников, а не гарантия ночного доступа ко всем маршрутам, мероприятиям и объектам."
        },
        {
          "title": "Вознесенский собор",
          "text": "Оператор храма пишет о посещении в течение дня и закрытии через 30 минут после вечернего богослужения. Туристическое указание 10:00–16:00 не является окончательным расписанием, зависящим от служб. Уточняйте дату у храма."
        },
        {
          "title": "Другие учреждения",
          "text": "Музеи, военные учреждения, мероприятия и собор имеют отдельные условия входа. Действующие тарифы операторов и единая продолжительность посещения здесь не подтверждены."
        },
        {
          "title": "Прибытие и доступность",
          "text": "Адрес Maps — плюс-код и ссылка на реку, а не проверенный вход. Отмечен доступный вход, но не обследованы все дорожки, уклоны и помещения."
        }
      ]
    },
    "transport": {
      "eyebrow": "Как добраться",
      "heading": "Как доехать",
      "items": [
        {
          "title": "Выберите объект",
          "text": "Указывайте полное название парка и Алматы, Казахстан; уточняйте вход в нужное учреждение. Точка карты обозначает парк, а не гарантированный автомобильный въезд."
        },
        {
          "title": "Общественный транспорт",
          "text": "Проверьте у перевозчика актуальные маршруты, остановки, тарифы и изменения движения. Здесь не обещаются определённый автобус, ближайший выход метро или время пешком."
        },
        {
          "title": "Автомобиль и высадка",
          "text": "Уточните у водителя или объекта законное место остановки, ограничения и оплату парковки. Место для туристического автобуса, уличная стоянка или свободное место не гарантируются."
        }
      ],
      "mapAlt": "Карта парка 28 гвардейцев-панфиловцев",
      "mapHl": "ru"
    },
    "points": {
      "eyebrow": "Сердце прогулки",
      "heading": "Три точки, которые нельзя пропустить",
      "items": [
        {
          "num": "01",
          "title": "Вознесенский собор",
          "text": "Действующий православный храм, отличный от открытой территории парка. Соблюдайте указания, не мешайте богослужению и спрашивайте перед съёмкой людей или закрытых интерьеров. Это рекомендация уважительного поведения, а не цитата о разрешении съёмки."
        },
        {
          "num": "02",
          "title": "Мемориал Славы и Вечный огонь",
          "text": "Место памяти. Не используйте мемориальные поверхности для развлечений, соблюдайте знаки и ограждения. Статья акимата о ремонте в феврале 2025 — исторический контекст, не подтверждение нынешних работ, закрытия или завершения."
        },
        {
          "num": "03",
          "title": "Музеи и другие объекты",
          "text": "Национальная карточка парка упоминает военный музей. Перед визитом уточните конкретное учреждение, вход, программу и билетные условия; общая карточка парка на него не распространяется."
        }
      ]
    },
    "nearby": {
      "eyebrow": "План поблизости",
      "heading": "Еда и достопримечательности",
      "cards": [
        {
          "title": "Еда и отдых",
          "text": "Выбирая кафе или обед, проверьте точный адрес, филиал и текущую работу самого заведения. Здесь не приводятся непроверенные названия кафе, услуги внутри парка или обещание свободного столика.",
          "chips": []
        },
        {
          "title": "Другие места центра Алматы",
          "text": "Зелёный базар и другие городские места — отдельные направления. Проверяйте каждый адрес, доступ и маршрут; парк, храм, музеи и рынок не составляют единый билет или фиксированный короткий круг пешком.",
          "chips": []
        }
      ]
    },
    "faq": {
      "eyebrow": "FAQ",
      "heading": "Часто задаваемые вопросы",
      "items": [
        {
          "q": "Парк круглосуточный и бесплатный?",
          "a": "Национальный туристический портал так указывает, а Maps 30 октября 2026 показывал 24 часа. Это сведения этих источников, а не подтверждение непрерывного или бесплатного доступа ко всем воротам, дорожкам, мероприятиям, музеям и храму."
        },
        {
          "q": "Когда можно посетить собор?",
          "a": "Оператор пишет о дневном посещении и закрытии через 30 минут после вечернего богослужения. Туристический портал вместо этого указывает 10:00–16:00. Ориентируйтесь на зависящее от служб сообщение храма и уточняйте дату; отдельный текущий тариф оператора не подтверждён."
        },
        {
          "q": "Сколько времени планировать?",
          "a": "Учитывайте выбранные учреждения, богослужения или мероприятия, свои потребности и обратный транспорт. Единое время посещения не установлено."
        },
        {
          "q": "Весь парк доступен без барьеров?",
          "a": "Maps отмечает вход, а не обследованный безбарьерный маршрут или интерьер. Спросите о покрытиях, уклонах, туалетах и помощи."
        },
        {
          "q": "Можно фотографировать храм и мемориал?",
          "a": "Действующее специальное разрешение на съёмку не проверено. Следуйте знакам, уточняйте ограничения интерьеров и оборудования, не мешайте службе и спрашивайте согласие узнаваемых людей."
        },
        {
          "q": "Где вход?",
          "a": "Парк находится в центре Алматы. Указание Maps — плюс-код и речной ориентир. Уточните нужный вход, не используя запись как проверенный уличный адрес или автомобильные ворота."
        }
      ]
    },
    "sourceHeading": "Фото и примечание к источнику",
    "footerNote": "Проверено 30 октября 2026. Рейтинг Maps — ручной снимок, не прямая трансляция или собственное исследование; отзывы не копируются. Национальный портал даёт сведения о парке и опубликованном доступе, оператор собора — порядок, зависящий от служб. План ремонта из статьи февраля 2025 не подтверждает нынешний доступ или завершение.",
    "footer": {
      "disclaimer": "Этот сайт не является официальным сайтом парка, а независимым информационным гидом.",
      "privacy": {
        "title": "Конфиденциальность",
        "text": "Сайт автоматически загружает GA4 и его настройку, не ожидая выбора на странице. В зависимости от браузера Google может получать просмотры, URL и источник перехода, сведения об устройстве/браузере и примерном местоположении и использовать cookie. Встроенная Google Maps также может загружаться при прокрутке к ней. Наличие скрипта или отложенная загрузка не доказывают согласие или передачу. Обработка Cloudflare на границе сети может включать IP, URL запросов, время и журналы безопасности. Отдельно настройки хостинга могут внедрять браузерный beacon Cloudflare Web Analytics для посещений, просмотров и производительности с такими измерениями, как путь, источник, страна, устройство, браузер и ОС. Внедрение, выполнение и передача в текущей рабочей версии не подтверждены. Исходная CSP, как ожидается, блокирует этот beacon при применении, но не отключает обработку на границе или Google Analytics. Иллюстрации локальные, шрифты системные."
      },
      "cookies": {
        "title": "Информация о cookie",
        "text": "На сайте нет переключателя отслеживания. Настройки cookie/контента браузера и информация об отказе Google могут влиять на аналитику и сторонние функции, но не стирают отправленное и не прекращают обработку Cloudflare на границе. Этот исходный код не сохраняет выбор cookie на странице."
      },
      "terms": {
        "title": "Условия использования",
        "text": "Информация носит справочный характер для планирования поездки. Расписание и условия уточняйте из официальных источников."
      }
    },
    "attractionName": "Парк 28 гвардейцев-панфиловцев",
    "attractionAlternate": [
      "28 Panfilov Guardsmen Park",
      "28 гвардияшы-панфиловшылар саябағы"
    ],
    "attractionDescription": "Историко-мемориальный парк в центре Алматы с Мемориалом Славы, Вечным огнём и Вознесенским собором. Планируйте посещение открытой территории и каждого учреждения отдельно.",
    "visualNote": "Оригинальная иллюстрация CC0; не фотография, план маршрута или текущий вид.",
    "sourceLinks": [
      {
        "label": "Национальная карточка парка",
        "url": "https://www.kazakhstan.travel/en/attractions/402"
      },
      {
        "label": "Порядок посещения собора",
        "url": "https://cathedral.kz/ru/pages/schedule"
      },
      {
        "label": "История мемориала / заметка 2025",
        "url": "https://www.gov.kz/memleket/entities/almaty/press/news/details/946470?lang=ru"
      },
      {
        "label": "Историческое исследование",
        "url": "https://openurl.ebsco.com/contentitem/gcd%3A83743375?crl=c&id=ebsco%3Agcd%3A83743375&jrnl=1531023X&sid=ebsco%3Aplink%3Acrawler-gcd"
      }
    ]
  },
  "en": {
    "meta": {
      "title": "28 Panfilov Guardsmen Park, Almaty | Hours, Cathedral & Visitor Guide",
      "description": "Plan Panfilov Park in Almaty: attributed park entry information, separate Ascension Cathedral visiting arrangements, memorial history, arrival and source links."
    },
    "nav": [
      "Getting there",
      "History",
      "Nearby",
      "FAQ"
    ],
    "hero": {
      "eyebrow": "Almaty · historic memorial park",
      "h1a": "28 Panfilov Guardsmen Park",
      "h1b": "Almaty",
      "intro": "A historic memorial park in central Almaty, with the Glory Memorial, Eternal Flame and Ascension Cathedral. Plan the public park and each indoor venue separately.",
      "chips": [
        "★ 4.8 · 14,370 reviews",
        "Maps snapshot · 30 Oct 2026",
        "Park and venues: separate hours"
      ],
      "imgAlt": "Symbolic illustration of trees, a path and a geometric memorial motif; not a photograph",
      "aerialAlt": "Symbolic illustration of trees, a path and a geometric memorial motif; not a photograph"
    },
    "memory": {
      "eyebrow": "The spirit of the place",
      "heading": "A park where calm meets grandeur",
      "body1": "The city administration dates the park’s present name to 1942 and the Glory Memorial’s opening to 8 May 1975. The national tourism portal associates the name with the 316th Rifle Division commanded by General Ivan Panfilov and the defense of Moscow.",
      "body2": "Commemorative narratives and precise wartime battle claims are different subjects. Scholarly research has challenged details of the familiar 28-guardsmen story; this guide describes the memorial’s purpose without presenting exact tank totals or a reconstructed battle account as settled fact.",
      "imgAlt": "Symbolic illustration of a domed building among trees; not a photograph or reconstruction"
    },
    "visit": {
      "eyebrow": "Plan your visit",
      "heading": "What you need at a glance",
      "cards": [
        {
          "title": "Park access listing",
          "text": "Kazakhstan.travel lists the park as 24 hours and free, consistent with the 30 October 2026 Maps snapshot. These are dated listings, not a guarantee that every route, event or facility is open at night."
        },
        {
          "title": "Ascension Cathedral",
          "text": "The cathedral operator says it is open through the day and closes 30 minutes after the evening service. The tourism portal’s 10:00–16:00 listing is not a definitive service-dependent schedule. Check the operator for your date."
        },
        {
          "title": "Other facilities",
          "text": "Museums, military facilities, events and the cathedral have separate admission and access arrangements. No current operator tariff or uniform visiting duration is verified here."
        },
        {
          "title": "Arrival and accessibility",
          "text": "The Maps address is a plus-code/river reference, not a verified entrance. It marks an accessible entrance only; full paths, gradients and interiors have not been independently audited."
        }
      ]
    },
    "transport": {
      "eyebrow": "Getting there",
      "heading": "How to get there",
      "items": [
        {
          "title": "Choose the destination",
          "text": "Use the park’s full name with Almaty, Kazakhstan, and confirm the entrance for your intended venue. The map point locates the park rather than a guaranteed vehicle entrance."
        },
        {
          "title": "Public transport",
          "text": "Check the transport operator’s current route, stops, fares and service notices for your journey. This guide does not promise a particular bus, nearest metro exit or walking time."
        },
        {
          "title": "Driving and drop-off",
          "text": "Ask your driver or venue to identify a legal stopping point and any parking restrictions or charges. No tourist-bus bay, street space or garage vacancy is guaranteed."
        }
      ],
      "mapAlt": "Map of Panfilov Park (28 Panfilov Guardsmen Park)",
      "mapHl": "en"
    },
    "points": {
      "eyebrow": "The heart of the stroll",
      "heading": "Three spots not to miss",
      "items": [
        {
          "num": "01",
          "title": "Ascension Cathedral",
          "text": "An active Orthodox church, distinct from the park’s public-space listing. Follow posted instructions, avoid interrupting worship and ask before photographing people or restricted interiors; this is respectful visitor guidance, not a quoted photography permission."
        },
        {
          "num": "02",
          "title": "Glory Memorial and Eternal Flame",
          "text": "A remembrance landscape. Keep recreation off memorial surfaces and follow current barriers and signs. A city restoration article from February 2025 is historical context, not evidence of current works, closure or completion."
        },
        {
          "num": "03",
          "title": "Museums and other venues",
          "text": "The national park listing includes a military museum. Confirm the specific institution, entrance, programme and ticket terms before adding an indoor stop; do not assume a park-level listing covers it."
        }
      ]
    },
    "nearby": {
      "eyebrow": "Nearby plan",
      "heading": "Food and sights",
      "cards": [
        {
          "title": "Food and rest",
          "text": "Choose a café or meal stop only after checking the exact business address, branch and current opening information. This guide does not retain unverified café names, park-internal service claims or a guaranteed nearby table.",
          "chips": []
        },
        {
          "title": "Other central-Almaty destinations",
          "text": "The Green Bazaar and other city sights are separate destinations. Check each location, access and route rather than treating the park, cathedral, museums and market as one ticket or a fixed short walking loop.",
          "chips": []
        }
      ]
    },
    "faq": {
      "eyebrow": "FAQ",
      "heading": "Frequently asked questions",
      "items": [
        {
          "q": "Is the park open 24 hours and free?",
          "a": "The national tourism portal lists 24 hours/free, and Maps displayed 24 hours on 30 October 2026. Attribute this to those listings: it does not establish every gate, route, event, museum or church as continuously accessible or free."
        },
        {
          "q": "When can I visit the cathedral?",
          "a": "The operator states daytime visiting with closure 30 minutes after evening worship. The tourism portal instead lists 10:00–16:00. Use the operator’s service-dependent notice and confirm the date; no separate current operator admission tariff was verified."
        },
        {
          "q": "How long should I allow?",
          "a": "Plan around the particular venues, worship or event arrangements, your access needs and return transport. No uniform visit duration is established."
        },
        {
          "q": "Is the whole park accessible?",
          "a": "Maps marks an accessible entrance, not a surveyed step-free route or accessible interior. Ask the venue about surfaces, gradients, toilets and assistance."
        },
        {
          "q": "Can I photograph the church and memorial?",
          "a": "No site-specific current photography permission was verified. Follow signs, ask about restricted interiors or equipment, do not interrupt worship, and seek consent before photographing identifiable people."
        },
        {
          "q": "Where is the entrance?",
          "a": "The park is in central Almaty. The supplied Maps address is a plus-code/river reference. Confirm the appropriate entrance for your chosen venue rather than using it as a street or vehicle-gate address."
        }
      ]
    },
    "sourceHeading": "Photo and source note",
    "footerNote": "Checked 30 October 2026. Maps rating is a manual snapshot, not a live feed or this guide’s own survey; review text is not copied. The national tourism portal supplies park identity and its published access listing; the cathedral operator supplies its service-dependent notice. The city’s February 2025 restoration target does not prove today’s access or completion.",
    "footer": {
      "disclaimer": "This site is not the park’s official website, but an independent information guide.",
      "privacy": {
        "title": "Privacy",
        "text": "This guide automatically loads GA4 and its configuration; it does not wait for an on-page choice. Depending on browser settings, Google can receive page views, URL/referrer, browser/device and approximate-location information and can use cookies. Embedded Google Maps can also load as you approach it. A script or lazy loading does not establish consent or successful transmission. Cloudflare hosting-edge processing may involve IP addresses, request URLs, timestamps and security logs. Separately, hosting settings may inject a Cloudflare Web Analytics browser beacon for visits, page views and performance, with dimensions such as path, referrer, country, device, browser and operating system. Current production injection/execution/transmission is unverified. Source CSP is expected to block that beacon while enforced; this does not disable edge processing or Google Analytics. Scenic assets are local and fonts use the device stack."
      },
      "cookies": {
        "title": "Cookie information",
        "text": "There is no on-site tracking switch. Browser cookie/content settings or Google’s opt-out information may affect analytics and third-party features, but do not erase previously sent data or stop hosting-edge processing. This source does not store an on-page cookie choice."
      },
      "terms": {
        "title": "Terms of use",
        "text": "Information is for trip planning reference. Confirm schedules and terms from official sources."
      }
    },
    "attractionName": "28 Panfilov Guardsmen Park",
    "attractionAlternate": [
      "Парк 28 гвардейцев-панфиловцев",
      "28 гвардияшы-панфиловшылар саябағы"
    ],
    "attractionDescription": "A historic memorial park in central Almaty, with the Glory Memorial, Eternal Flame and Ascension Cathedral. Plan the public park and each indoor venue separately.",
    "visualNote": "Original CC0 illustration; not a photograph, route plan or current view.",
    "sourceLinks": [
      {
        "label": "National park listing",
        "url": "https://www.kazakhstan.travel/en/attractions/402"
      },
      {
        "label": "Cathedral visitor notice",
        "url": "https://cathedral.kz/ru/pages/schedule"
      },
      {
        "label": "City memorial history / 2025 notice",
        "url": "https://www.gov.kz/memleket/entities/almaty/press/news/details/946470?lang=ru"
      },
      {
        "label": "Historical scholarship",
        "url": "https://openurl.ebsco.com/contentitem/gcd%3A83743375?crl=c&id=ebsco%3Agcd%3A83743375&jrnl=1531023X&sid=ebsco%3Aplink%3Acrawler-gcd"
      }
    ]
  }
};
