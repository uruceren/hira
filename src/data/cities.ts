export interface City {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  color: string;
  highlights: string[];
  content: {
    intro: string;
    sections: {
      title: string;
      content: string;
      image?: string;
    }[];
  };
}

export const cities: City[] = [
  {
    id: 1,
    name: "İstanbul",
    slug: "istanbul",
    description: "Boğaz'ın iki yakasını birleştiren şehir",
    shortDescription: "Doğu ile Batı'nın, geçmiş ile geleceğin buluştuğu şehir",
    coverImage: "https://images.pexels.com/photos/13956751/pexels-photo-13956751.jpeg",
    color: "bg-blue-600",
    highlights: [
      "Boğaz'ın iki yakasını birleştiren hikayeleri",
      "Tarihi yarımadanın büyülü atmosferi",
      "Mahalle kültürü ve günlük yaşam"
    ],
    content: {
      intro: "İstanbul, sadece bir şehir değil, içinde binlerce hikâye barındıran bir dünya. Boğaz'ın iki yakasını birleştiren köprüler gibi, bu şehir de Doğu ile Batı'yı, geçmiş ile geleceği, gelenek ile modernliği ustalıkla harmanlıyor.",
      sections: [
        {
          title: "Boğaz'ın İki Yakası",
          content: "Sabahın ilk ışıklarıyla Üsküdar'da başlayan günüm, vapurla karşıya geçerken Boğaz'ın masmavi sularında bulduğum huzurla devam ediyor. Martıların eşlik ettiği bu kısa yolculuk, her gün binlerce İstanbullu'nun rutini olsa da, her seferinde aynı büyüyü yaşatıyor. Avrupa ve Asya arasındaki bu geçiş, sadece fiziksel değil, ruhsal bir yolculuk gibi.",
          image: "https://images.pexels.com/photos/8200360/pexels-photo-8200360.jpeg"
        },
        {
          title: "Tarihi Yarımadanın Büyüsü",
          content: "Sultanahmet'in dar sokaklarında yürürken, her adımda farklı bir yüzyıla tanıklık ediyorsunuz. Ayasofya'nın kubbesi altında durduğunuzda, yüzyılların ağırlığı omuzlarınıza çöküyor. Topkapı Sarayı'nın avlularında gezerken, bir imparatorluğun kalbinde olduğunuzu hissediyorsunuz. Kapalıçarşı'nın labirent gibi sokaklarında kaybolmak ise, İstanbul'un en keyifli kaybolmalarından biri.",
          image: "https://images.pexels.com/photos/3732494/pexels-photo-3732494.jpeg"
        },
        {
          title: "Mahalle Kültürü",
          content: "İstanbul'un gerçek ruhu, turistik bölgelerinden ziyade, sıcak mahallelerinde saklı. Balat'ın renkli evleri, Kuzguncuk'un çınar ağaçlı sokakları, Kadıköy'ün canlı pazar yerleri... Her mahalle, kendine has bir karaktere sahip. Çay bahçesinde oturup sohbet eden yaşlılar, sokakta top oynayan çocuklar, köşedeki bakkal amca - işte İstanbul'un gerçek sahipleri.",
          image: "https://images.pexels.com/photos/5414041/pexels-photo-5414041.jpeg"
        }
      ]
    }
  },
  {
    id: 2,
    name: "Ankara",
    slug: "ankara",
    description: "Başkentin modern yüzü ve tarihi dokusu",
    shortDescription: "Cumhuriyetin kalbi, modern Türkiye'nin doğduğu şehir",
    coverImage: "https://images.pexels.com/photos/31529118/pexels-photo-31529118/free-photo-of-anitkabir-turbesi-ankara-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    color: "bg-red-600",
    highlights: [
      "Başkentin modern yüzü",
      "Eski sokakların nostaljik havası",
      "Kale'den şehre bakış hikayeleri"
    ],
    content: {
      intro: "Ankara, sadece bir başkent değil, Cumhuriyet'in ve modern Türkiye'nin kalbidir. Atatürk'ün vizyonuyla şekillenen bu şehir, tarihî dokusu ve modern siluetiyle iki dünyayı bir araya getiriyor.",
      sections: [
        {
          title: "Başkentin Modern Yüzü",
          content: "Kızılay'ın canlı caddelerinde yürürken, her köşede modern bir başkentin atardamarlarını hissediyorsunuz. Bakanlıklar, geniş bulvarlar, kültür merkezleri... Tüm bunlar, genç Cumhuriyet'in kurulurken hayal ettiği modern şehrin izdüşümleri. Gece olduğunda, şehrin ışıkları altında yürümek, bambaşka bir Ankara'yı keşfetmek gibi.",
          image: "https://images.pexels.com/photos/17887431/pexels-photo-17887431/free-photo-of-akinci-sehitlik-abidesi-anit-golbasi-ankara.jpeg"
        },
        {
          title: "Eski Sokakların Nostaljisi",
          content: "Hamamönü ve Samanpazarı'nın daracık, taş döşeli sokaklarında gezinirken, zamanın başka bir diliminde yolculuk yapıyorsunuz sanki. Restore edilmiş Osmanlı evleri, küçük el sanatları dükkânları, geleneksel Türk kahvesi sunan kahvehaneler... Burada Ankara'nın modern yüzünden çok farklı, nostaljik bir atmosfer hâkim.",
          image: "https://images.pexels.com/photos/15484827/pexels-photo-15484827/free-photo-of-ankara-kale-turkiye-turkey.jpeg"
        },
        {
          title: "Kale'den Şehre Bakış",
          content: "Ankara Kalesi'nin burçlarından şehre baktığınızda, tarih ile bugünün muhteşem panoramasını görüyorsunuz. Bir yanda Ulus'un tarihi dokusu, diğer yanda modern gökdelenler... Bu manzara, Ankara'nın tüm kimliğini özetliyor adeta. Güneş batarken kalenin taş duvarlarına vuran son ışıklar, şehre bambaşka bir güzellik katıyor.",
          image: "https://images.pexels.com/photos/30561667/pexels-photo-30561667.jpeg"
        }
      ]
    }
  },
  {
    id: 3,
    name: "İzmir",
    slug: "izmir",
    description: "Ege'nin incisi",
    shortDescription: "Deniz kokan sokakları ve eşsiz yaşam tarzıyla Ege'nin incisi",
    coverImage: "https://images.pexels.com/photos/13018236/pexels-photo-13018236.jpeg",
    color: "bg-sky-500",
    highlights: [
      "Ege'nin incisi",
      "Kordon'da günbatımı hikayeleri",
      "Kemeraltı'nın renkleri"
    ],
    content: {
      intro: "İzmir, sadece bir şehir değil, bir yaşam biçimi. Denizin, güneşin ve rüzgârın şekillendirdiği bu Ege incisi, kendine has ritmi ve özgür ruhuyla sizi karşılıyor.",
      sections: [
        {
          title: "Ege'nin İncisi",
          content: "İzmir'e adım attığınız andan itibaren, denizin tuzlu kokusu ve rüzgârın serinliği sizi karşılıyor. Şehrin her köşesinde, Ege'nin o rahat, telaşsız yaşam tarzını hissediyorsunuz. Sokaklar, insanlar, evler... Hepsi İzmir'in karakterini yansıtıyor. Burada zaman, diğer şehirlere göre daha yavaş akıyor sanki.",
          image: "https://images.pexels.com/photos/14631621/pexels-photo-14631621.jpeg"
        },
        {
          title: "Kordon'da Günbatımı",
          content: "Kordon'da bir bankta oturup, denizi seyrederken geçirdiğim saatleri unutamıyorum. Günbatımında Kordon bambaşka bir güzelliğe bürünüyor. Gökyüzü turuncu, pembe ve mor renklere boyanırken, martıların çığlıkları ve bisikletçilerin zil sesleri fonda hafif bir melodi oluşturuyor. İzmirliler için günün en güzel saatleri burada, bu manzara eşliğinde geçiyor.",
          image: "https://images.pexels.com/photos/31034294/pexels-photo-31034294/free-photo-of-izmir-sahil-gun-batiminin-havadan-gorunumu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "Kemeraltı'nın Renkleri",
          content: "Kemeraltı Çarşısı, İzmir'in kalbi gibi. Yüzlerce yıllık hanlar, dükkânlar, camiler ve sinagoglar arasında kaybolmak, şehrin tarihine yolculuk yapmak gibi. Burada her köşe başında farklı bir hikâye, farklı bir lezzet, farklı bir renk sizi bekliyor. Taze baharatların kokuları, kumaşların renkleri, zanaatkârların el işleri... Kemeraltı, İzmir'in kültürel zenginliğinin en canlı örneklerinden biri.",
          image: "https://images.pexels.com/photos/6337455/pexels-photo-6337455.jpeg"
        }
      ]
    }
  },
  {
    id: 4,
    name: "Konya",
    slug: "konya",
    description: "Mevlana'nın şehrindeki manevi atmosfer",
    shortDescription: "Mistik atmosferi ve derin tarihi ile gönüllere dokunan şehir",
    coverImage: "https://images.pexels.com/photos/28539992/pexels-photo-28539992.jpeg",
    color: "bg-teal-600",
    highlights: [
      "Mevlana'nın şehrindeki manevi atmosfer",
      "Selçuklu mirasının izleri",
      "Mistik akşamların betimlemesi"
    ],
    content: {
      intro: "Konya, sadece bir şehir değil, ruhani bir yolculuğun mekânı. Mevlana'nın felsefesi ve Selçuklu'nun ihtişamıyla şekillenen bu kadim şehir, ziyaretçilerine derin bir huzur vadediyor.",
      sections: [
        {
          title: "Mevlana'nın Şehri",
          content: "Mevlana Müzesi'nin bahçesine adım attığınız anda, şehrin günlük telaşından sıyrılıp başka bir âleme geçiyorsunuz sanki. Yeşil kubbenin altında, Mevlana'nın türbesinin önünde durup düşüncelere dalmak, insana tarif edilemez bir huzur veriyor. Her yıl binlerce ziyaretçi, bu manevi atmosferi deneyimlemek için dünyanın dört bir yanından Konya'ya geliyor.",
          image: "https://images.pexels.com/photos/29717080/pexels-photo-29717080/free-photo-of-konya-da-sufi-semazenleri.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "Selçuklu Mirasının İzleri",
          content: "Konya, Selçuklu İmparatorluğu'nun başkenti olarak, bu dönemden kalma sayısız mimari şahesere ev sahipliği yapıyor. İnce Minare Medresesi, Karatay Medresesi, Alaeddin Camii... Her biri, Selçuklu döneminin ihtişamını ve zarafetini yansıtıyor. Bu yapılardaki taş işçiliği ve geometrik desenler, o dönemin sanat anlayışının muhteşem örnekleri.",
          image: "https://images.pexels.com/photos/29332484/pexels-photo-29332484/free-photo-of-mevlana-muzesi-sokak-gorunumu-konya-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "Mistik Akşamlar",
          content: "Konya'da akşamlar, bambaşka bir atmosfere bürünüyor. Sema gösterilerinin yapıldığı gecelerde, semazenler Mevlana'nın öğretilerini adeta canlandırıyor. Müziğin, dansın ve spirituel deneyimin iç içe geçtiği bu gösteriler, izleyenlere unutulmaz anlar yaşatıyor. Gösteriden sonra, şehrin sakin sokaklarında yürüyüş yapmak, günün tüm yorgunluğunu alıp götürüyor.",
          image: "https://images.gezinomi.com/fit-in/640x480/filters:quality(100)/filters:format(webp)/assets/blog/konya-night_334642220-12.08.2021094449.jpg"
        }
      ]
    }
  },
  {
    id: 5,
    name: "Bursa",
    slug: "bursa",
    description: "Yeşilin bin bir tonu",
    shortDescription: "Osmanlı'nın ilk başkenti, doğa ve tarihin kucaklaştığı şehir",
    coverImage: "https://images.pexels.com/photos/17094597/pexels-photo-17094597/free-photo-of-tarih-osmanli-cami-bursa.jpeg",
    color: "bg-green-600",
    highlights: [
      "Yeşilin bin bir tonu",
      "Osmanlı'nın ilk başkentinin hikayeleri",
      "İpek Yolu'nun izleri"
    ],
    content: {
      intro: "Bursa, yeşilin her tonunu barındıran doğası ve Osmanlı İmparatorluğu'nun ilk başkenti olmanın görkemiyle sizi karşılayan eşsiz bir şehir.",
      sections: [
        {
          title: "Yeşilin Bin Bir Tonu",
          content: "Uludağ'ın eteklerinde kurulan Bursa, adeta yeşil bir cennet. Şehrin her köşesinde, farklı tonlarda yeşillikler sizi karşılıyor. Parklar, bahçeler, korular... Bursa'nın doğası, şehir yaşamının stresinden uzaklaşmak isteyenler için mükemmel bir sığınak. Özellikle ilkbaharda, kiraz çiçeklerinin açtığı dönemde, şehir masalsı bir güzelliğe bürünüyor.",
          image: "https://images.pexels.com/photos/32245101/pexels-photo-32245101/free-photo-of-bursa-nin-yamac-kentsel-peyzajinin-manzarasi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "Osmanlı'nın İlk Başkenti",
          content: "Bursa sokaklarında yürürken, Osmanlı İmparatorluğu'nun ilk dönemlerinin izlerini görüyorsunuz. Yeşil Türbe, Ulu Cami, Muradiye Külliyesi... Her biri, Osmanlı mimarisinin erken dönem örnekleri olarak, şehrin tarihsel kimliğini oluşturuyor. Bu yapıların içindeki çini işçiliği ve hat sanatı örnekleri, ziyaretçileri büyülüyor.",
          image: "https://images.pexels.com/photos/13286627/pexels-photo-13286627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "İpek Yolu'nun İzleri",
          content: "Bursa, tarihi İpek Yolu üzerindeki önemli duraklardan biri olarak, zengin bir ticaret geleneğine sahip. Kapalı Çarşı ve Koza Han, bu geleneğin yaşayan örnekleri. İpek dokumacılığı, Bursa'nın en ünlü el sanatlarından biri. Bugün bile, şehrin bazı bölgelerinde geleneksel yöntemlerle ipek üretimi devam ediyor. Bu tarihi hanlarda alışveriş yapmak, geçmişe yapılan bir yolculuk gibi.",
          image: "https://images.pexels.com/photos/17777833/pexels-photo-17777833/free-photo-of-adam-sanayi-endustri-zanaat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ]
    }
  },
  {
    id: 6,
    name: "Diyarbakır",
    slug: "diyarbakir",
    description: "Surların ardındaki kadim şehir",
    shortDescription: "Kadim tarihi ve zengin kültürüyle Mezopotamya'nın incisi",
    coverImage: "https://www.kulturportali.gov.tr/contents/images/Diyarbak%C4%B1r_Ulu%20Cami_Ali%20D%C3%BCzdemir-38%20kopya.jpg",
    color: "bg-amber-700",
    highlights: [
      "Surların ardındaki kadim şehir",
      "Dicle'nin şahitliğindeki tarih",
      "Taş evlerin hikayeleri"
    ],
    content: {
      intro: "Diyarbakır, Mezopotamya'nın kalbinde, binlerce yıllık tarihi ile bugüne uzanan kadim bir şehir. Siyah bazalt surları ve Dicle Nehri'nin beslediği verimli topraklarıyla, ziyaretçilerine zengin bir kültürel miras sunuyor.",
      sections: [
        {
          title: "Surların Ardındaki Kadim Şehir",
          content: "Diyarbakır Surları, UNESCO Dünya Mirası Listesi'nde yer alan, dünyanın en iyi korunmuş surlarından biri. Bu siyah bazalt surların içinde, dar sokaklar, avlulu evler, hanlar ve hamamlarla dolu tarihi bir şehir yaşıyor. Surlar üzerinde yürürken, şehrin panoramik manzarasını görmek mümkün. Güneşin surların siyah taşlarına vurduğu anlarda, Diyarbakır'ın mistik atmosferi daha da belirginleşiyor.",
          image: "https://images.pexels.com/photos/12010280/pexels-photo-12010280.jpeg"
        },
        {
          title: "Dicle'nin Şahitliğindeki Tarih",
          content: "Dicle Nehri, Diyarbakır'ın ayrılmaz bir parçası. Şehrin doğusundan geçen nehir, binlerce yıldır şehrin hayat kaynağı olmuş. On Gözlü Köprü üzerinde durup, Dicle'nin sularını izlemek, insana tarif edilemez bir huzur veriyor. Nehir kenarındaki bahçelerde, özellikle akşamüstü saatlerinde, yerel halkın çay içip sohbet ettiği sahneler, Diyarbakır'ın günlük yaşamına dair güzel kareler sunuyor.",
          image: "https://images.pexels.com/photos/18735384/pexels-photo-18735384/free-photo-of-insanlar-kent-simgesi-gorulecek-yer-yaz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "Taş Evlerin Hikayeleri",
          content: "Diyarbakır'ın geleneksel evleri, siyah bazalt taşından yapılmış, avlulu yapılar. Bu evlerin her biri, yüzlerce yıllık hikayeleri barındırıyor. Cahit Sıtkı Tarancı Evi ve Ziya Gökalp Müzesi gibi restore edilmiş konaklar, ziyaretçilere geleneksel Diyarbakır evlerinin mimarisini ve yaşam tarzını tanıtıyor. Yaz aylarında, bu evlerin serin avlularında oturmak, sıcaktan bunalan şehir sakinleri için vazgeçilmez bir rahatlama yöntemi.",
          image: "https://images.pexels.com/photos/27927025/pexels-photo-27927025/free-photo-of-sokak-koy-bina-yapi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ]
    }
  },
  {
    id: 7,
    name: "Erzurum",
    slug: "erzurum",
    description: "Dadaşlar diyarının sert ama sıcak yüzü",
    shortDescription: "Karların altında yatan sıcak yürekli insanların şehri",
    coverImage: "https://images.pexels.com/photos/11493250/pexels-photo-11493250.jpeg",
    color: "bg-blue-800",
    highlights: [
      "Dadaşlar diyarının sert ama sıcak yüzü",
      "Kış masalları",
      "Palandöken'in heybeti"
    ],
    content: {
      intro: "Erzurum, Doğu Anadolu'nun çetin iklimi ve yüksek rakımıyla, sert bir coğrafyada kurulmuş, ama içinde sıcacık insanlar barındıran bir şehir. Kışın uzun sürdüğü bu diyarda, kar şehrin ayrılmaz bir parçası.",
      sections: [
        {
          title: "Dadaşlar Diyarı",
          content: "Erzurum denince akla ilk gelen, belki de şehrin mert ve yiğit insanları, yani 'dadaşlar'. Misafirperverlik, burada adeta bir yaşam biçimi. En soğuk kış gününde bile, bir Erzurum evinin kapısını çaldığınızda, sizi içeri davet edip çay ikram etmeleri, bu şehrin insanlarının sıcaklığını gösteriyor. Geleneklerine bağlı olan Erzurumlular, bar oyunları ve türküleriyle de kültürel miraslarını yaşatıyorlar.",
          image: "https://cdnuploads.aa.com.tr/uploads/Contents/2019/07/03/thumbs_b_c_39e32ed8a5cc834c7e8d5f3a00193c4d.jpg?v=121605"
        },
        {
          title: "Kış Masalları",
          content: "Erzurum'da kış, bambaşka bir deneyim. Şehir, kar altında beyaz bir örtüye bürünüyor ve adeta masalsı bir görünüm kazanıyor. Çifte Minareli Medrese'nin karla kaplı avlusu, Yakutiye Medresesi'nin beyaz örtü altındaki kubbesi... Kışın Erzurum'u ziyaret edenler, unutulmaz manzaralarla karşılaşıyor. Soğuk havaya rağmen, cağ kebabı yiyip sıcak salep içmek, Erzurum kışının vazgeçilmez ritüellerinden.",
          image: "https://images.pexels.com/photos/8001913/pexels-photo-8001913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "Palandöken'in Heybeti",
          content: "Palandöken Dağı, Erzurum'un simgesi ve gururu. Türkiye'nin en önemli kayak merkezlerinden birine ev sahipliği yapan bu heybetli dağ, kış sporları tutkunlarının vazgeçilmez destinasyonlarından. Karlı pistlerde kayak yapmanın keyfini yaşadıktan sonra, dağ evlerinde sıcak şömine başında dinlenmek, Erzurum'da kış tatilinin en güzel yanlarından biri. Palandöken'den şehre baktığınızda, Erzurum'un tüm panoraması ayaklarınızın altında uzanıyor.",
          image: "https://images.pexels.com/photos/29635937/pexels-photo-29635937/free-photo-of-erzurum-da-muhtesem-karli-dag-manzarasi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ]
    }
  },
  {
    id: 8,
    name: "Antalya",
    slug: "antalya",
    description: "Akdeniz'in mavisiyle buluşan tarih",
    shortDescription: "Masmavi denizi ve antik kentleriyle eşsiz bir Akdeniz masalı",
    coverImage: "https://images.pexels.com/photos/30522303/pexels-photo-30522303.jpeg",
    color: "bg-cyan-500",
    highlights: [
      "Akdeniz'in mavisiyle buluşan tarih",
      "Kaleiçi'nin dar sokakları",
      "Portakal çiçeği kokan bahar"
    ],
    content: {
      intro: "Antalya, Türkiye'nin güney sahillerinde, Akdeniz'in masmavi sularıyla tarihin iç içe geçtiği büyüleyici bir şehir. Antik kentleri, muhteşem plajları ve dört mevsim yaşanabilen iklimi ile hem yerli hem yabancı turistlerin gözdesi.",
      sections: [
        {
          title: "Akdeniz'in Mavisiyle Buluşan Tarih",
          content: "Antalya'da tarih ve doğa, muhteşem bir uyum içinde bir araya geliyor. Side Antik Kenti'nde, Apollon Tapınağı'nın sütunları arasından Akdeniz'in mavisini seyretmek, insana tarif edilemez bir huzur veriyor. Aspendos Tiyatrosu'nun muhteşem akustiği, binlerce yıl öncesinin mimari dehasını gözler önüne seriyor. Perge Antik Kenti'nin mermer caddesinde yürürken, Roma döneminin ihtişamını hayal etmek mümkün.",
          image: "https://images.pexels.com/photos/13956422/pexels-photo-13956422.jpeg"
        },
        {
          title: "Kaleiçi'nin Dar Sokakları",
          content: "Antalya'nın kalbi, hiç şüphesiz Kaleiçi. Dar, taş döşeli sokakları, restore edilmiş Osmanlı evleri, butik otelleri ve şirin kafeleriyle, Kaleiçi adeta açık hava müzesi gibi. Yat Limanı'na açılan Hadrian Kapısı'ndan geçip, tarihi surların içine adım attığınızda, modern şehrin gürültüsünden uzaklaşıyorsunuz. Kaleiçi'nde kaybolmak, en güzel keşif yolculuklarından biri.",
          image: "https://images.pexels.com/photos/12580190/pexels-photo-12580190.jpeg"
        },
        {
          title: "Portakal Çiçeği Kokan Bahar",
          content: "Antalya'da bahar, bambaşka bir güzellik. Şehrin her yanını saran portakal ve limon ağaçları çiçek açtığında, tüm şehir mis gibi kokuyor. Düden Şelalesi'nin çevresindeki yeşillikler daha da canlanıyor, Lara Plajı'nın kumsalları güneşlenenlerle dolmaya başlıyor. Bahar aylarında, Antalya'nın iklimi adeta cennet gibi; ne çok sıcak, ne çok soğuk. Bu dönemde, şehrin dışına çıkıp, Saklıkent Kanyonu'nu veya Olimpos Antik Kenti'ni ziyaret etmek, doğa ve tarih tutkunları için mükemmel bir deneyim.",
          image: "https://images.pexels.com/photos/13956417/pexels-photo-13956417.jpeg"
        }
      ]
    }
  },
  {
    id: 9,
    name: "Trabzon",
    slug: "trabzon",
    description: "Yeşil ile mavinin dansı",
    shortDescription: "Yeşilin ve mavinin kucaklaştığı Karadeniz'in asi şehri",
    coverImage: "https://media.istockphoto.com/id/1443215041/tr/foto%C4%9Fraf/sumeli-manastr-trabzon-da-mountain-manastr-sumela-hr.jpg?s=612x612&w=0&k=20&c=yhY2cMscCbIIuRf2ag509J4sMOmX2leVI8Dyd-DJBFQ=",
    color: "bg-emerald-600",
    highlights: [
      "Yeşil ile mavinin dansı",
      "Hamsi kokulu sokaklar",
      "Karadeniz'in asi çocuğu"
    ],
    content: {
      intro: "Trabzon, Karadeniz'in hırçın dalgaları ve yemyeşil yaylaları arasında, kendine has karakteriyle öne çıkan bir şehir. Dik yamaçlardan denize uzanan bu şehirde, doğa ve kültür eşsiz bir harmoni içinde.",
      sections: [
        {
          title: "Yeşil ile Mavinin Dansı",
          content: "Trabzon'da yeşil ve mavi, adeta dans ediyor. Şehrin yüksek kesimlerinden Karadeniz'e baktığınızda, yeşilin bin bir tonu ile mavinin derinliği buluşuyor. Uzungöl, bu muhteşem buluşmanın en güzel örneklerinden biri. Göl etrafındaki yemyeşil ormanlar ve arka plandaki karlı dağlar, ziyaretçilere unutulmaz manzaralar sunuyor. Ayder Yaylası'nın sisli atmosferi ise, adeta masalsı bir dünyaya adım attığınızı hissettiriyor.",
          image: "https://static.tekce.com/files/upload/images/trabzon-uzungol(1).jpg"
        },
        {
          title: "Hamsi Kokulu Sokaklar",
          content: "Trabzon'un sokaklarında yürürken, özellikle kış aylarında, hamsi kokusu sizi karşılıyor. Karadeniz mutfağının vazgeçilmezi olan hamsi, burada sadece bir balık değil, adeta bir yaşam biçimi. Mısır ekmeği, karalahana ve tabii ki hamsi, Trabzon'un lezzet üçlüsü. Şehrin merkezindeki tarihi Bedesten'de alışveriş yapmak, yerel ürünleri keşfetmek için mükemmel bir fırsat. Boztepe'den şehre bakıp, bir bardak demli çay yudumlayarak günü sonlandırmak, Trabzon ziyaretinin olmazsa olmazlarından.",
          image: "https://static.daktilo.com/sites/1641/uploads/2024/12/29/275970473-1735463594.webp"
        },
        {
          title: "Karadeniz'in Asi Çocuğu",
          content: "Trabzon, karakteri kadar insanlarıyla da dikkat çekiyor. Karadenizlilerin o meşhur hareketli, coşkulu ve biraz da asi tavırları, şehrin ruhuna yansımış. Horon tepilen bir düğünde, bu coşkuyu yakından hissetmek mümkün. Sümela Manastırı'nın sarp kayalara inşa edilmiş yapısı, adeta Karadeniz insanının zorluklarla mücadele azmini simgeliyor. Atatürk Köşkü'nün zarif mimarisi ve bahçesi ise, şehrin sakin yüzünü gösteriyor.",
          image: "https://www.rizetakip.com/Arsiv/Icerik/2022/08/01/1659357358.png"
        }
      ]
    }
  },
  {
    id: 10,
    name: "Mardin",
    slug: "mardin",
    description: "Taş evlerin anlattığı hikayeler",
    shortDescription: "Altın renkli taşlarıyla Mezopotamya'ya bakan kadim şehir",
    coverImage: "https://images.pexels.com/photos/32318224/pexels-photo-32318224.jpeg",
    color: "bg-yellow-600",
    highlights: [
      "Taş evlerin anlattığı hikayeler",
      "Mezopotamya'ya açılan pencere",
      "Güneşin taşlara vurduğu an"
    ],
    content: {
      intro: "Mardin, Mezopotamya Ovası'na bakan yamaçlara kurulmuş, bal rengi taşlardan yapılmış evleriyle tanınan kadim bir şehir. Farklı dinlerin, dillerin ve kültürlerin yüzyıllardır bir arada yaşadığı bu şehir, adeta açık hava müzesi gibi.",
      sections: [
        {
          title: "Taş Evlerin Anlattığı Hikayeler",
          content: "Mardin'in taş evleri, yüzlerce yıllık hikayeleri barındırıyor. Her biri, ustasının elinden çıkmış birer sanat eseri gibi. Cumbalı pencereler, işlemeli kapılar, avlular... Mardin evlerinin mimarisi, şehrin karakterini yansıtıyor. Bu evlerin arasından geçen dar, taş döşeli sokaklar, ziyaretçileri adeta zaman yolculuğuna çıkarıyor. Özellikle gün batımında, güneşin bu taş evlere vurduğu anlarda, Mardin büyülü bir atmosfere bürünüyor.",
          image: "https://imaj.emlakjet.com/resize/730/730/Haberler_Unicrow/1530280975162.jpg"
        },
        {
          title: "Mezopotamya'ya Açılan Pencere",
          content: "Mardin'den Mezopotamya Ovası'na baktığınızda, tarihin derinliklerine doğru bir yolculuğa çıkıyorsunuz sanki. Bu manzara, insanlık tarihinin en eski yerleşim yerlerinden birine açılan bir pencere gibi. Deyrulzafaran Manastırı ve Mor Gabriel Manastırı gibi tarihi yapılar, bölgenin dini çeşitliliğini gözler önüne seriyor. Mardin Müzesi'nde sergilenen eserler ise, şehrin zengin tarihine ışık tutuyor.",
          image: "https://www.tyb.org.tr/d/news/2053.jpg"
        },
        {
          title: "Güneşin Taşlara Vurduğu An",
          content: "Mardin'de gün batımı, unutulmaz bir deneyim. Güneş, şehrin bal rengi taşlarına vurduğunda, tüm şehir altın bir ışıkla kaplanıyor. Ulu Cami'nin minaresinden yükselen ezan sesi, sokakları dolduruyor. Kasımiye Medresesi'nin avlusunda, bu mistik anı yaşamak, ziyaretçilere eşsiz bir huzur veriyor. Mardin'in geleneksel el sanatları, özellikle gümüş işçiliği, telkâri, bu şehrin kültürel zenginliğinin bir parçası. Şehrin çarşılarında, bu el sanatlarının en güzel örneklerini görmek mümkün.",
          image: "https://live.staticflickr.com/65535/54174701787_06ca84c55d_z.jpg"
        }
      ]
    }
  }
];