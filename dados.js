const dados = [
    {
        nome: "Aurora Boreal",
        descricao: "A aurora boreal é um dos espetáculos mais fascinantes da natureza. Um fenômeno luminoso que ocorre nos céus das regiões polares, principalmente no Hemisfério Norte, e que encanta observadores de todo o mundo.",
        tipo: "astronômico",
        localizacao: "Regiões polares (Ártico e Antártico)",
        causas: "Vento solar e campo magnético terrestre",
        consequencias: "Espectáculo visual espetacular, sem impactos significativos na vida terrestre.",
        imagem: "aurora_boreal.jpg",
        video: "http://www.youtube.com/watch?v=2rSkBL7jIHI",
        mapa: "https://www.google.com/maps/d/edit?mid=1s0K8m8o5u-A",
        intensidade: "Alta",
        probabilidade: "Alta em períodos de alta atividade solar",
        previsao: "Difícil de prever com precisão devido à variabilidade do vento solar",
        links: ["https://www.nasa.gov/auroras", "https://pt.wikipedia.org/wiki/Aurora_polar"]
    },
    {
        nome: "Terremoto",
        descricao: "Esse evento ocorre quando a Lua se alinha entre a Terra e o Sol, projetando sua sombra sobre uma parte do planeta. Existem diferentes tipos de eclipses solares, como o total, parcial e anular, cada um com suas características únicas.",
        tipo: "geológico",
        localizacao: "Zonas de falhas tectônicas",
        causas: "Movimento das placas tectônicas",
        consequências: "Destruição de cidades, tsunamis, deslizamentos de terra",
        imagem: "terremoto.jpg",
        video: "https://www.youtube.com/watch?v=qTxzClx2-sg&pp=ygUSbyBxdWUgw6kgdGVycmVtb3Rv",
        mapa: "https://www.google.com/maps/d/edit?mid=1s0K8m8o5u-B",
        intensidade: "Escala Richter",
        probabilidade: "Varia de acordo com a localização geográfica",
        previsao: "Difícil de prever com precisão, mas existem sistemas de alerta",
        links: ["https://www.britannica.com/science/earthquake", "https://www.dgterritorio.gov.pt/riscos-naturais/sismicidade"]
    },
    {
        nome: "Vulcão",
        descricao: "A atividade vulcânica desempenha um papel fundamental na formação da crosta terrestre e na liberação de gases que influenciam o clima global. Os vulcões podem ser ativos, dormentes ou extintos.",
        tipo: "geológico",
        localizacao: "Zonas de subducção e limites de placas tectônicas",
        causas: "Pressão interna da Terra e movimento das placas tectônicas",
        consequências: "Fluxos de lava, nuvens de cinzas, terremotos",
        imagem: "vulcao.jpg",
        video: "https://www.youtube.com/watch?v=RpY84sSV9QU",
        mapa: "https://www.google.com/maps/d/edit?mid=1s0K8m8o5u-C",
        intensidade: "VEI (Índice de Explosividade Vulcânica)",
        probabilidade: "Varia de acordo com a atividade vulcânica da região",
        previsao: "Pode ser prevista com alguma antecedência através de monitoramento",
        links: ["https://www.nationalgeographic.com/science/volcanoes/"]
    },
    {
        nome: "Furacão",
        descricao: "Furacões são sistemas de baixa pressão que se formam sobre águas quentes dos oceanos tropicais. Eles são acompanhados por ventos fortes, chuvas intensas e tempestades.",
        tipo: "meteorológico",
        localizacao: "Oceanos tropicais",
        causas: "Evaporação da água do mar e formação de nuvens de tempestade",
        consequências: "Inundações, ventos destrutivos, ondas gigantes",
        imagem: "furacao.jpg",
        video: "http://www.youtube.com/watch?v=IAgregchvqU",
        mapa: "https://www.google.com/maps/d/edit?mid=1s0K8m8o5u-D",
        intensidade: "Escala de Saffir-Simpson",
        probabilidade: "Maior durante a temporada de furacões",
        previsao: "Pode ser prevista com alguns dias de antecedência",
        links: ["https://www.nhc.noaa.gov/"]
    },
    {
        nome: "Eclipse Solar",
        descricao: "Esse evento ocorre quando a Lua se alinha entre a Terra e o Sol, projetando sua sombra sobre uma parte do planeta. Existem diferentes tipos de eclipses solares, como o total, parcial e anular, cada um com suas características únicas.",
        tipo: "astronômico",
        localizacao: "Varia de acordo com a trajetória da Lua",
        causas: "Alinhamento do Sol, Lua e Terra",
        consequências: "Escurecimento temporário do dia",
        imagem: "eclipse_solar.jpg",
        video: "https://www.youtube.com/watch?v=65CyoCYkyeo",
        mapa: "https://www.google.com/maps/d/edit?mid=1s0K8m8o5u-E",
        intensidade: "Total, parcial ou anular",
        probabilidade: "Ocorre em intervalos regulares",
        previsao: "Pode ser previsto com precisão",
        links: ["https://eclipse.gsfc.nasa.gov/eclipse.html"]
    },
    {
        nome: "Aurora Austral",
        descricao: "A Aurora Austral é um espetáculo luminoso que ocorre nos céus do Hemisfério Sul, principalmente nas regiões próximas à Antártida. Assim como sua irmã do norte, a Aurora Boreal, ela é resultado da interação entre partículas carregadas do Sol e a atmosfera terrestre, criando um show de cores vibrantes e formas hipnotizantes.",
        tipo: "astronômico",
        localizacao: "Regiões polares do hemisfério sul (Antártida)",
        causas: "Interação de partículas carregadas do Sol com a atmosfera terrestre",
        consequências: "Espectáculo visual espetacular, sem impactos significativos na vida terrestre.",
        imagem: "aurora_austral.jpg",
        video: "https://www.youtube.com/watch?v=41Rh0D3lY1M",
        mapa: "https://www.google.com/maps/d/edit?mid=1s0K8m8o5u-F",
        intensidade: "Alta",
        probabilidade: "Alta em períodos de alta atividade solar",
        previsao: "Difícil de prever com precisão devido à variabilidade do vento solar",
        links: ["https://www.nasa.gov/auroras"]
    },

    {
        nome: "Tsunami",
        descricao: "As ondas de um tsunami podem viajar a velocidades de até 800 km/h no oceano aberto, diminuindo à medida que se aproximam da costa. A altura das ondas pode chegar a dezenas de metros, causando destruição em áreas costeiras.",
        tipo: "geológico/oceanográfico",
        localizacao: "Zonas costeiras próximas a áreas sismicamente ativas",
        causas: "Deslocamento de grandes volumes de água",
        consequências: "Inundações, erosão costeira, destruição de infraestrutura",
        imagem: "tsunami.jpg",
        video: "https://www.youtube.com/watch?v=ngoTVV28rw4&pp=ygUTbyBxdWUgw6kgdW0gdHN1bmFtaQ%3D%3D",
        mapa: "https://www.google.com/maps/d/edit?mid=1s0K8m8o5u-G",
        intensidade: "Escala de Intensidade de Tsunamis",
        probabilidade: "Varia de acordo com a atividade sísmica e vulcânica",
        previsao: "Pode ser prevista com alguma antecedência através de sistemas de alerta",
        links: ["https://www.ngdc.noaa.gov/hazard/tsu.shtml"]
    },
    {
        nome: "Geiser",
        descricao: "A formação de um geiser depende de uma combinação de fatores, como a presença de água subterrânea, rochas quentes e fraturas na crosta terrestre. A periodicidade das erupções de um geiser pode variar desde alguns minutos até vários dias.",
        tipo: "geológico",
        localização: "Regiões vulcânicas",
        causas: "Aquecimento da água subterrânea por rochas quentes",
        consequências: "Formação de paisagens únicas, atração turística",
        imagem: "geiser.jpg",
        video: "https://www.youtube.com/watch?v=Jzb5vvkwSN4",
        mapa: "https://www.google.com/maps/d/edit?mid=1s0K8m8o5u-H",
        intensidade: "Vazão e altura da coluna d'água",
        probabilidade: "Constante em áreas com atividade geotérmica",
        previsao: "Previsível em termos de periodicidade",
        links: ["https://www.nps.gov/yell/learn/nature/geysers.htm"]
    },
    {
        nome: "Tornado",
        descricao: "A formação de um tornado envolve a interação de diferentes massas de ar com diferentes temperaturas e umidades. Os tornados são classificados em categorias de acordo com a escala Fujita ou Enhanced Fujita.",
        tipo: "meteorológico",
        localização: "Zonas temperadas, principalmente nos Estados Unidos",
        causas: "Diferenças de temperatura e umidade no ar",
        consequências: "Destruição de propriedades, ferimentos e mortes",
        imagem: "tornado.jpg",
        video: "http://www.youtube.com/watch?v=hvjvj5Ahzq4",
        mapa: "https://www.google.com/maps/d/edit?mid=1s0K8m8o5u-I",
        intensidade: "Escala de Fujita",
        probabilidade: "Maior durante a temporada de tempestades",
        previsao: "Pode ser prevista com pouca antecedência",
        links: ["https://www.spc.noaa.gov/"]
    },
    {
        nome: "Arco-íris",
        descricao: "Além do arco-íris primário, que é o mais comum, existem também arcos-íris secundários e terciários, que são menos intensos e apresentam as cores invertidas.",
        tipo: "meteorológico",
        localização: "Qualquer lugar onde haja chuva e luz solar ao mesmo tempo",
        causas: "Refração e reflexão da luz solar nas gotas de chuva",
        consequências: "Fenômeno visual bonito e inspirador",
        imagem: "arco-iris.jpg",
        video: "https://www.youtube.com/watch/v=example_video",
        mapa: "Não aplicável",
        intensidade: "Não aplicável",
        probabilidade: "Depende das condições climáticas",
        previsao: "Não previsível",
        links: ["https://www.sciencefacts.net/rainbow-facts/"]
    }
];