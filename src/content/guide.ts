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
}

export const content: Record<Locale, GuideContent> = {
  kk: {
    meta: {
      title: '28 гвардияшы-панфиловшылар саябағы — Алматы',
      description:
        'Алматыдағы 28 гвардияшы-панфиловшылар саябағына қысқа гид: тарихы, Мәңгілік алау, Вознесенск соборы, қалай жету, тұрақ, тамақ және жақын көрікті жерлер.',
    },
    nav: ['Бару', 'Тарих', 'Маңай', 'FAQ'],
    hero: {
      eyebrow: 'Алматы · тарихи-мемориалдық саябақ',
      h1a: 'Жады сақталған',
      h1b: 'жасыл кеңістік',
      intro:
        '28 гвардияшы-панфиловшылар саябағы — қала ортасындағы серуен орны ғана емес. Мұнда Мәңгілік алау, монументалды жады және Алматының ең танымал ағаш сәулет ескерткіштерінің бірі бір ансамбльге тоғысады.',
      chips: ['★ 4.8 · 14 293 пікір', 'Тәулік бойы', 'Кіру тегін'],
      imgAlt: 'Даңқ мемориалындағы ерлік композициясы',
      aerialAlt: 'Саябақтың әуеден көрінісі',
    },
    memory: {
      eyebrow: 'Орынның мінезі',
      heading: 'Тыныштық пен салтанат қатар сезілетін саябақ',
      body1:
        'Саябақтың тарихы XIX ғасырдағы Верный қаласының қоғамдық бақтарынан басталады. 1942 жылы оған генерал Иван Панфилов басқарған дивизия жауынгерлерінің құрметіне қазіргі атауы берілді. Даңқ мемориалы мен Мәңгілік алау 1975 жылы ашылған мемориалдық ансамбльдің өзегіне айналды.',
      body2:
        'Серуен кезінде бір жағынан қалың ағаштар мен тыныш аллеяларды, екінші жағынан Вознесенск кафедралды соборының ашық түстерін және мемориалдың қатаң қола пластикасын көресіз.',
      imgAlt: 'Вознесенск кафедралды соборы',
    },
    visit: {
      eyebrow: 'Сапарды жоспарлау',
      heading: 'Бір қарағанда керек мәлімет',
      cards: [
        {
          title: 'Билет / шығын',
          text: 'Саябақ аумағына кіру тегін. Музейлерге билет бөлек алынады; баға мен кестені сол нысаннан нақтылаған дұрыс.',
        },
        {
          title: 'Үздік уақыт',
          text: 'Таңертең немесе күн еңкейген шақта серуен жайлырақ әрі фотосуретке жарық жұмсақ болады. 9 мамыр маңында адам көп болуы мүмкін.',
        },
        {
          title: 'Ұсынылатын уақыт',
          text: 'Негізгі аллеялар, собор және мемориал үшін 1,5–2 сағат. Музейлерді қоссаңыз, жарты күнге дейін созуға болады.',
        },
        {
          title: 'Тұрақ',
          text: 'Саябақ ішіне көлік кірмейді. Зенков көшесі жағында туристік автобустарға белгіленген тұрақ орындары бар; жеке көлікке көше бойы/ақылы тұрақтарды қараңыз.',
        },
      ],
    },
    transport: {
      eyebrow: 'Толық көлік',
      heading: 'Қалай жетуге болады',
      items: [
        {
          title: 'Метро + жаяу',
          text: '«Жібек жолы» станциясынан орталық көшелер арқылы саябаққа жаяу баруға ыңғайлы. Бағытты картадан нақтылап алыңыз.',
        },
        {
          title: 'Автобус / такси',
          text: 'Саябақ айналасында бірнеше аялдама бар. Таксиге «28 гвардияшы-панфиловшылар саябағы» немесе «Вознесенск соборы» деп көрсету оңай.',
        },
        {
          title: 'Жаяу маршрут',
          text: 'Көк базармен біріктіру ыңғайлы: базардан саябаққа дейін орталық кварталдар арқылы қысқа серуен жасап келуге болады.',
        },
      ],
      mapAlt: '28 гвардияшы-панфиловшылар саябағы картасы',
      mapHl: 'kk',
    },
    points: {
      eyebrow: 'Серуен өзегі',
      heading: 'Үш нүктені жібермеңіз',
      items: [
        {
          num: '01',
          title: 'Вознесенск соборы',
          text: 'XX ғасыр басындағы әйгілі ағаш кафедралды собор. Сыртқы фасадын асықпай айналып көруге және ғибадат орнына құрметпен кіруге болады.',
        },
        {
          num: '02',
          title: 'Даңқ мемориалы',
          text: '1975 жылы ашылған монументалды кешен. Орталық композиция мен Мәңгілік алау саябақтың мемориалдық мағынасын айқындайды.',
        },
        {
          num: '03',
          title: 'Ықылас музейі',
          text: 'Қазақтың дәстүрлі музыкалық аспаптарына арналған музей тарихи ағаш ғимаратта орналасқан.',
        },
      ],
    },
    nearby: {
      eyebrow: 'Маңайдағы жоспар',
      heading: 'Тамақ пен көрікті орындар',
      cards: [
        {
          title: 'Жақын жерде тамақтану',
          text: 'Саябақ ішіндегі және Панфилов/Қазыбек би көшелері бойындағы кафелер серуен арасында ыңғайлы. Көк базарға барсаңыз, кептірілген жеміс, жаңғақ, нан-тоқаш және жергілікті өнімдерді көруге болады.',
          chips: ['Agosto Coffee', 'КофеБара', 'Көк базар'],
        },
        {
          title: 'Жақын көрікті жерлер',
          text: 'Саябақтың өзінде Вознесенск соборы мен Ықылас музейі бар. Одан әрі Көк базарға, Панфилов жаяу жүргіншілер көшесіне және орталық Алматының тарихи кварталдарына жалғастыруға болады.',
          chips: ['Вознесенск соборы', 'Ықылас музейі', 'Көк базар'],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'Жиі қойылатын сұрақтар',
      items: [
        {
          q: 'Саябаққа кіру ақылы ма?',
          a: 'Жоқ, саябақтың ашық аумағына кіру тегін. Музейлер мен арнайы іс-шаралардың өз билеті болуы мүмкін.',
        },
        {
          q: 'Саябақ тәулік бойы ашық па?',
          a: 'Иә. Бірақ собор, музей және кафе секілді ішкі нысандардың кестесі бөлек.',
        },
        {
          q: 'Қанша уақыт жоспарлаған дұрыс?',
          a: '1,5–2 сағат — негізгі көрікті нүктелерге жеткілікті. Музейлерді қоссaңыз, көбірек уақыт қарастырыңыз.',
        },
        {
          q: 'Баламен келуге бола ма?',
          a: 'Иә, аллеялар серуенге қолайлы. Мемориал аумағында тыныштық пен құрметті мінез-құлықты сақтаған жөн.',
        },
        {
          q: 'Қайда орналасқан?',
          a: 'Алматыдың тарихи орталығында, Малая Алматинка өзені маңында (7X53+GMJ). Орталықтан метро немесе жаяу баруға болады.',
        },
      ],
    },
    sourceHeading: 'Фото және дерек ескертпесі',
    footerNote:
      'Фотолар: Wikimedia Commons — Nikolai Bulykin (CC BY-SA 4.0), Petar Milošević (CC BY-SA 4.0), Ken and Nyetta (CC BY 2.0). Сапар алдында музейлердің жұмыс уақытын және уақытша іс-шараларды ресми арналардан тексеріңіз.',
    footer: {
      disclaimer: 'Бұл сайт саябақтың ресми сайты емес, тәуелсіз ақпараттық гид.',
      privacy: {
        title: 'Құпиялық',
        text: 'Сайтта тіркелу формасы жоқ. GA4 анонимдендірілген пайдалану статистикасын жинауы мүмкін.',
      },
      cookies: {
        title: 'Cookie баптауы',
        text: 'Сайттың өз аккаунттық cookie-лері жоқ; аналитикаға қатысты cookie-лер браузер саясатына байланысты қолданылуы мүмкін.',
      },
      terms: {
        title: 'Пайдалану шарттары',
        text: 'Ақпарат сапарды жоспарлауға арналған анықтамалық сипатта. Кесте мен қызмет шарттарын ресми көзден қайта тексеріңіз.',
      },
    },
    attractionName: '28 гвардияшы-панфиловшылар саябағы',
    attractionAlternate: ['28 Panfilov Guardsmen Park', 'Парк 28 гвардейцев-панфиловцев'],
    attractionDescription:
      'Алматының тарихи орталығындағы мемориалдық қалалық саябақ. Мұнда Вознесенск кафедралды соборы, Даңқ мемориалы, Мәңгілік алау және халық музыкалық аспаптар музейі орналасқан.',
  },

  ru: {
    meta: {
      title: 'Парк 28 гвардейцев-панфиловцев, Алматы — что посмотреть, как добраться',
      description:
        'Гид по парку 28 гвардейцев-панфиловцев в Алматы: история, Вечный огонь, собор Вознесения, транспорт, парковка, кафе и достопримечательности рядом.',
    },
    nav: ['Как добраться', 'История', 'Рядом', 'FAQ'],
    hero: {
      eyebrow: 'Алматы · историко-мемориальный парк',
      h1a: 'Пространство,',
      h1b: 'хранящее память',
      intro:
        'Парк 28 гвардейцев-панфиловцев в Алматы — это не просто прогулочная зона в центре города. Здесь в единый ансамбль соединяются Вечный огонь, монументальная память и один из самых известных деревянных храмов Алматы.',
      chips: ['★ 4.8 · 14 293 отзывов', 'Круглосуточно', 'Вход свободный'],
      imgAlt: 'Композиция музея Славы в мемориале',
      aerialAlt: 'Вид на парк сверху',
    },
    memory: {
      eyebrow: 'Характер места',
      heading: 'Парк, где покой соседствует с величием',
      body1:
        'История парка начинается с общественных садов города Верный в XIX веке. В 1942 году ему присвоили нынешнее имя в честь бойцов дивизии под командованием генерала Ивана Панфилова. Мемориал Славы и Вечный огонь стали ядром мемориального ансамбля, открытого в 1975 году.',
      body2:
        'Прогуливаясь здесь, вы видите с одной стороны густые деревья и тихие аллеи, а с другой — светлый фасад собора Вознесения и строгую бронзовую пластику мемориала.',
      imgAlt: 'Собор Вознесения (Зенкова)',
    },
    visit: {
      eyebrow: 'Планирование поездки',
      heading: 'Что нужно знать сразу',
      cards: [
        {
          title: 'Билет / расходы',
          text: 'Вход на территорию парка бесплатный. В музеи билеты покупаются отдельно; точные цены и расписание уточняйте на месте.',
        },
        {
          title: 'Лучшее время',
          text: 'Прогулка приятнее и свет мягче рано утром или ближе к закату. В начале мая (около 9 Мая) здесь бывает многолюдно.',
        },
        {
          title: 'Сколько планировать',
          text: 'На главные аллеи, собор и мемориал достаточно 1,5–2 часов. С музеями можно растянуть на полдня.',
        },
        {
          title: 'Парковка',
          text: 'Внутрь парка машины не заезжают. У улицы Зенкова есть места для туристических автобусов; для личного транспорта — уличная или платная парковка.',
        },
      ],
    },
    transport: {
      eyebrow: 'Как добраться',
      heading: 'Как доехать',
      items: [
        {
          title: 'Метро + пешком',
          text: 'От станции «Жибек жолы» (Шёлковый путь) удобно дойти до парка по центральным улицам. Маршрут уточняйте на карте.',
        },
        {
          title: 'Автобус / такси',
          text: 'Вокруг парка несколько остановок. Таксисту легко назвать «Парк 28 гвардейцев-панфиловцев» или «Собор Вознесения».',
        },
        {
          title: 'Пеший маршрут',
          text: 'Удобно совместить с «Зелёным базаром»: от базара до парка — короткая прогулка через центральные кварталы.',
        },
      ],
      mapAlt: 'Карта парка 28 гвардейцев-панфиловцев',
      mapHl: 'ru',
    },
    points: {
      eyebrow: 'Сердце прогулки',
      heading: 'Три точки, которые нельзя пропустить',
      items: [
        {
          num: '01',
          title: 'Собор Вознесения',
          text: 'Знаменитый деревянный кафедральный собор начала XX века. Можно неспешно обойти фасад и зайти внутрь с уважением к храму.',
        },
        {
          num: '02',
          title: 'Мемориал Славы',
          text: 'Монументальный комплекс, открытый в 1975 году. Центральная композиция и Вечный огонь задают мемориальный смысл парка.',
        },
        {
          num: '03',
          title: 'Музей «Ыкылас»',
          text: 'Музей казахских традиционных музыкальных инструментов размещён в историческом деревянном здании.',
        },
      ],
    },
    nearby: {
      eyebrow: 'План поблизости',
      heading: 'Еда и достопримечательности',
      cards: [
        {
          title: 'Где поесть рядом',
          text: 'Кафе внутри парка и вдоль улиц Панфилова / Казыбек би удобны для перерыва. На Зелёном базаре найдёте сухофрукты, орехи, выпечку и местные продукты.',
          chips: ['Agosto Coffee', 'КофеБара', 'Зелёный базар'],
        },
        {
          title: 'Достопримечательности рядом',
          text: 'В самом парке есть собор Вознесения и музей «Ыкылас». Дальше можно продолжить к Зелёному базару, пешеходной улице Панфилова и историческим кварталам центра Алматы.',
          chips: ['Собор Вознесения', 'Музей «Ыкылас»', 'Зелёный базар'],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'Часто задаваемые вопросы',
      items: [
        {
          q: 'Вход в парк платный?',
          a: 'Нет, вход на открытую территорию парка бесплатный. В музеях и на спецмероприятиях могут быть отдельные билеты.',
        },
        {
          q: 'Парк открыт круглосуточно?',
          a: 'Да. Но у собора, музеев и кафе — своё расписание.',
        },
        {
          q: 'Сколько времени планировать?',
          a: '1,5–2 часа хватит на основные точки. С музеями — до полудня.',
        },
        {
          q: 'Можно с детьми?',
          a: 'Да, аллеи удобны для прогулок. На территории мемориала соблюдайте тишину и уважительное поведение.',
        },
        {
          q: 'Где находится?',
          a: 'В историческом центре Алматы, у реки Малая Алматинка (7X53+GMJ). Из центра — на метро или пешком.',
        },
      ],
    },
    sourceHeading: 'Фото и примечание к источнику',
    footerNote:
      'Фото: Wikimedia Commons — Nikolai Bulykin (CC BY-SA 4.0), Petar Milošević (CC BY-SA 4.0), Ken and Nyetta (CC BY 2.0). Перед поездкой уточняйте часы работы музеев и временные мероприятия на официальных ресурсах.',
    footer: {
      disclaimer: 'Этот сайт не является официальным сайтом парка, а независимым информационным гидом.',
      privacy: {
        title: 'Конфиденциальность',
        text: 'На сайте нет формы регистрации. GA4 может собирать анонимную статистику использования.',
      },
      cookies: {
        title: 'Настройки cookie',
        text: 'У сайта нет собственных учётных cookie; аналитические cookie могут применяться в зависимости от настроек браузера.',
      },
      terms: {
        title: 'Условия использования',
        text: 'Информация носит справочный характер для планирования поездки. Расписание и условия уточняйте из официальных источников.',
      },
    },
    attractionName: 'Парк 28 гвардейцев-панфиловцев',
    attractionAlternate: ['28 Panfilov Guardsmen Park', '28 гвардияшы-панфиловшылар саябағы'],
    attractionDescription:
      'Мемориальный городской парк в историческом центре Алматы. Здесь расположены собор Вознесения (Зенкова), Мемориал Славы, Вечный огонь и музей казахских музыкальных инструментов.',
  },

  en: {
    meta: {
      title: 'Panfilov Park Almaty — Guide, How to Get There & What to See',
      description:
        'Visitor guide to Panfilov Park (28 Panfilov Guardsmen Park) in Almaty, Kazakhstan: history, Eternal Flame, Zenkov Cathedral, transport, parking, cafés and nearby sights.',
    },
    nav: ['Getting there', 'History', 'Nearby', 'FAQ'],
    hero: {
      eyebrow: 'Almaty · historic memorial park',
      h1a: 'A green space',
      h1b: 'that keeps the memory',
      intro:
        'Panfilov Park (28 Panfilov Guardsmen Park) in Almaty is more than a stroll in the city centre. Here the Eternal Flame, monumental memory and one of Almaty’s most famous wooden landmarks come together as one ensemble.',
      chips: ['★ 4.8 · 14,293 reviews', 'Open 24 hours', 'Free entry'],
      imgAlt: 'Heroic composition at the Memorial of Glory',
      aerialAlt: 'Aerial view of the park',
    },
    memory: {
      eyebrow: 'The spirit of the place',
      heading: 'A park where calm meets grandeur',
      body1:
        'The park’s history begins with the public gardens of the town of Verny in the 19th century. In 1942 it received its current name in honour of the soldiers of the division commanded by General Ivan Panfilov. The Memorial of Glory and the Eternal Flame became the heart of the memorial ensemble opened in 1975.',
      body2:
        'As you walk, on one side you see dense trees and quiet alleys; on the other, the bright façade of the Zenkov (Ascension) Cathedral and the austere bronze sculpture of the memorial.',
      imgAlt: 'Zenkov (Ascension) Cathedral',
    },
    visit: {
      eyebrow: 'Plan your visit',
      heading: 'What you need at a glance',
      cards: [
        {
          title: 'Tickets / cost',
          text: 'Entry to the park grounds is free. Museums sell separate tickets; check exact prices and hours on site.',
        },
        {
          title: 'Best time',
          text: 'A walk is most pleasant and the light softest early morning or near sunset. Around 9 May it can get crowded.',
        },
        {
          title: 'How long to plan',
          text: '1.5–2 hours covers the main alleys, cathedral and memorial. With museums, allow up to half a day.',
        },
        {
          title: 'Parking',
          text: 'Cars do not enter the park. Along Zenkova Street there are spots for tour buses; for private cars use street or paid parking.',
        },
      ],
    },
    transport: {
      eyebrow: 'Getting there',
      heading: 'How to get there',
      items: [
        {
          title: 'Metro + walk',
          text: 'From Zhibek Zholy (Silk Way) station it’s an easy walk to the park through the central streets. Confirm the route on the map.',
        },
        {
          title: 'Bus / taxi',
          text: 'Several stops surround the park. Just tell the taxi driver “Panfilov Park” or “Zenkov Cathedral”.',
        },
        {
          title: 'Walking route',
          text: 'Easy to combine with the Green Bazaar: a short walk from the bazaar to the park through the central blocks.',
        },
      ],
      mapAlt: 'Map of Panfilov Park (28 Panfilov Guardsmen Park)',
      mapHl: 'en',
    },
    points: {
      eyebrow: 'The heart of the stroll',
      heading: 'Three spots not to miss',
      items: [
        {
          num: '01',
          title: 'Zenkov Cathedral',
          text: 'The famous wooden cathedral from the early 20th century. Walk around the façade at leisure and enter respectfully as a place of worship.',
        },
        {
          num: '02',
          title: 'Memorial of Glory',
          text: 'A monumental complex opened in 1975. The central composition and the Eternal Flame give the park its memorial meaning.',
        },
        {
          num: '03',
          title: 'Ikylas Museum',
          text: 'A museum of traditional Kazakh musical instruments, housed in a historic wooden building.',
        },
      ],
    },
    nearby: {
      eyebrow: 'Nearby plan',
      heading: 'Food and sights',
      cards: [
        {
          title: 'Where to eat nearby',
          text: 'Cafés inside the park and along Panfilov / Qazybek Bi streets are handy for a break. At the Green Bazaar you’ll find dried fruit, nuts, baked goods and local produce.',
          chips: ['Agosto Coffee', 'KofeBara', 'Green Bazaar'],
        },
        {
          title: 'Sights nearby',
          text: 'The park itself has the Zenkov Cathedral and the Ikylas Museum. From there continue to the Green Bazaar, Panfilov pedestrian street and the historic blocks of central Almaty.',
          chips: ['Zenkov Cathedral', 'Ikylas Museum', 'Green Bazaar'],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Is entry to the park paid?',
          a: 'No, entry to the open park grounds is free. Museums and special events may have separate tickets.',
        },
        {
          q: 'Is the park open 24 hours?',
          a: 'Yes. But the cathedral, museums and cafés keep their own hours.',
        },
        {
          q: 'How long should I plan?',
          a: '1.5–2 hours covers the main sights. With museums, allow up to half a day.',
        },
        {
          q: 'Is it good with children?',
          a: 'Yes, the alleys are easy to walk. Around the memorial, keep a calm and respectful manner.',
        },
        {
          q: 'Where is it located?',
          a: 'In the historic centre of Almaty, by the Malaya Almatinka river (7X53+GMJ). Reach it from the centre by metro or on foot.',
        },
      ],
    },
    sourceHeading: 'Photo and source note',
    footerNote:
      'Photos: Wikimedia Commons — Nikolai Bulykin (CC BY-SA 4.0), Petar Milošević (CC BY-SA 4.0), Ken and Nyetta (CC BY 2.0). Before your trip, confirm museum hours and any temporary events on official channels.',
    footer: {
      disclaimer: 'This site is not the park’s official website, but an independent information guide.',
      privacy: {
        title: 'Privacy',
        text: 'The site has no sign-up form. GA4 may collect anonymous usage statistics.',
      },
      cookies: {
        title: 'Cookie settings',
        text: 'The site has no account cookies of its own; analytics cookies may apply depending on your browser policy.',
      },
      terms: {
        title: 'Terms of use',
        text: 'Information is for trip planning reference. Confirm schedules and terms from official sources.',
      },
    },
    attractionName: '28 Panfilov Guardsmen Park',
    attractionAlternate: ['Парк 28 гвардейцев-панфиловцев', '28 гвардияшы-панфиловшылар саябағы'],
    attractionDescription:
      'A memorial city park in the historic centre of Almaty, Kazakhstan. It is home to the Zenkov (Ascension) Cathedral, the Memorial of Glory, the Eternal Flame and a museum of traditional musical instruments.',
  },
};
