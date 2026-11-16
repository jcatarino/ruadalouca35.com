/*
  The collection. Edit this file to add, retitle or reorder works.
  - id:     image file prefix in assets/works/ (id-800.webp, and id-1800.webp when large: true)
  - size:   real dimensions in cm [long side, short side]; orientation is taken from the image
  - w, h:   pixel size of the source image (sets the aspect ratio)
  - title:  never translated; null shows "Untitled" in the visitor's language
  - medium: English; translations live in MEDIA in i18n.js
  - note, room name/intro: { en, pt, es }
*/
window.ROOMS = [
  {
    id: "light",
    name: { en: "Light", pt: "Luz", es: "Luz" },
    intro: {
      en: "Light is the thread through most of Victoria’s titles: how it gathers, echoes, is born, and refuses to give way.",
      pt: "A luz atravessa a maioria dos títulos de Victoria: como se acumula, ecoa, nasce e se recusa a ceder.",
      es: "La luz recorre la mayoría de los títulos de Victoria: cómo se acumula, resuena, nace y se niega a ceder."
    }
  },
  {
    id: "verticals",
    name: { en: "Verticals", pt: "Verticais", es: "Verticales" },
    intro: {
      en: "Pulled downward with the palette knife, colour falls in columns. The series takes its name from that gesture.",
      pt: "Puxada para baixo com a espátula, a cor cai em colunas. A série deve o nome a esse gesto.",
      es: "Arrastrado hacia abajo con la espátula, el color cae en columnas. La serie toma su nombre de ese gesto."
    }
  },
  {
    id: "city",
    name: { en: "The city", pt: "A cidade", es: "La ciudad" },
    intro: {
      en: "Skylines, bridges and river light, remembered rather than observed.",
      pt: "Perfis de cidade, pontes e a luz do rio, recordados mais do que observados.",
      es: "Siluetas urbanas, puentes y la luz del río, recordados más que observados."
    }
  },
  {
    id: "nature",
    name: { en: "Nature and memory", pt: "Natureza e memória", es: "Naturaleza y memoria" },
    intro: {
      en: "The tropical landscapes of her Colombian childhood, returning as forests, flowers and suns.",
      pt: "As paisagens tropicais da sua infância na Colômbia regressam como florestas, flores e sóis.",
      es: "Los paisajes tropicales de su infancia en Colombia regresan como bosques, flores y soles."
    }
  }
];

window.WORKS = [
  // Light
  { id: "vestigios-de-luz", room: "light", title: "Vestigios de Luz", year: 2026, medium: "Acrylic on canvas", size: [155, 90], w: 3480, h: 1866, large: true,
    note: {
      en: "An exploration of light, matter, space and memory. Through vertical gestures, layers and incisions of colour, an abstract landscape emerges that recalls fragments of architecture and reflections of the city.",
      pt: "Explora a relação entre luz, matéria, espaço e memória. Através de gestos verticais, camadas e incisões de cor, constrói-se uma paisagem abstrata que evoca fragmentos arquitetónicos e reflexos urbanos.",
      es: "Explora la relación entre luz, materia, espacio y memoria. A través de gestos verticales, capas e incisiones de color, surge un paisaje abstracto que evoca fragmentos arquitectónicos y reflejos urbanos."
    } },
  { id: "entre-terra-e-luz", room: "light", title: "Entre Terra e Luz", medium: "Acrylic on canvas", size: [120, 90], w: 3457, h: 1605, large: true },
  { id: "ecos-de-luz", room: "light", title: "Ecos de Luz", medium: "Acrylic and coffee on canvas", size: [60, 50], w: 2582, h: 3492, large: true },
  { id: "nascimento-da-luz", room: "light", title: "Nascimento da Luz", series: "Luz", medium: "Acrylic on canvas", size: [100, 100], w: 3094, h: 3472, large: true },
  { id: "campo-de-lumens", room: "light", title: "Campo de Lumens", year: 2026, medium: "Acrylic and mixed media on canvas", size: [120, 60], w: 475, h: 595 },
  { id: "onde-a-luz-nao-cede", room: "light", title: "Onde a Luz Não Cede", medium: "Acrylic on canvas", size: [155, 90], w: 1885, h: 3474, large: true },
  { id: "vestigio", room: "light", title: "Vestígio", year: 2026, medium: "Acrylic on canvas", size: [80, 60], w: 3484, h: 2821, large: true,
    note: { en: "Memories that remain in colour.", pt: "Memórias que permanecem na cor.", es: "Memorias que permanecen en el color." } },
  { id: "topografia-da-alma", room: "light", title: "Topografía da Alma", medium: "Acrylic on canvas", size: [100, 100], w: 583, h: 595 },
  { id: "liminar", room: "light", title: "Liminar", medium: "Acrylic and pastel on canvas", size: [155, 90], w: 595, h: 348 },
  { id: "explosion", room: "light", title: "Explosión", year: 2026, medium: "Acrylic on canvas", size: [155, 90], w: 3478, h: 1869, large: true },
  { id: "purgatorio", room: "light", title: "Purgatorio", year: 2026, medium: "Acrylic on canvas", size: [120, 60], w: 637, h: 1357 },
  { id: "untitled-0138", room: "light", title: null, medium: "Acrylic on canvas", size: null, w: 2494, h: 3137, large: true },
  { id: "untitled-0793", room: "light", title: null, medium: "Acrylic on canvas", size: null, w: 3454, h: 3480, large: true },
  { id: "untitled-3121", room: "light", title: null, medium: "Acrylic on canvas", size: null, w: 1211, h: 1395 },

  // Verticals
  { id: "pedestal", room: "verticals", title: "Pedestal", year: 2026, medium: "Acrylic on canvas", size: [155, 90], w: 3492, h: 1817, large: true },
  { id: "impulso-luminoso", room: "verticals", title: "Impulso Luminoso", series: "Verticais", medium: "Acrylic on canvas", size: [155, 90], w: 349, h: 594 },
  { id: "estratos-de-luz", room: "verticals", title: "Estratos de Luz", series: "Verticais", year: 2026, medium: "Oil and palette knife on canvas", size: [130, 60], w: 561, h: 221,
    note: {
      en: "Built up in four layers of oil, where matter, gesture and memory overlap. Blues, whites, yellows and greens form an abstract field of depth and movement, letting light surface between the layers.",
      pt: "Construída em quatro camadas de óleo, onde matéria, gesto e memória se sobrepõem. Os azuis, brancos, amarelos e verdes criam um campo abstrato de profundidade e movimento, fazendo emergir a luz entre as diferentes camadas.",
      es: "Construida en cuatro capas de óleo, donde materia, gesto y memoria se superponen. Los azules, blancos, amarillos y verdes crean un campo abstracto de profundidad y movimiento, haciendo emerger la luz entre las distintas capas."
    } },
  { id: "vertical-1", room: "verticals", title: "Vertical 1", medium: "Acrylic and pastel on canvas", size: [155, 90], w: 1899, h: 3492, large: true },
  { id: "untitled-7205", room: "verticals", title: null, medium: "Acrylic on canvas", size: [155, 90], w: 1999, h: 3491, large: true },
  { id: "untitled-5390", room: "verticals", title: null, medium: "Acrylic on canvas", size: [155, 90], w: 1152, h: 2048, large: true },
  { id: "untitled-7493", room: "verticals", title: null, medium: "Acrylic on canvas", size: [155, 90], w: 833, h: 466 },
  { id: "black-and-white", room: "verticals", title: "Black & White", medium: "Acrylic on canvas", size: [120, 80], w: 3491, h: 2110, large: true },
  { id: "entre-silencios", room: "verticals", title: "Entre Silêncios", medium: "Acrylic on canvas", size: [60, 50], w: 718, h: 879 },
  { id: "chuva-interior", room: "verticals", title: "Chuva Interior", medium: "Acrylic on canvas", size: [60, 50], w: 783, h: 841 },
  { id: "untitled-6743", room: "verticals", title: null, medium: "Acrylic on canvas", size: [60, 50], w: 3449, h: 3135, large: true },
  { id: "untitled-8743", room: "verticals", title: null, medium: "Acrylic on canvas", size: null, w: 1275, h: 1003 },
  { id: "untitled-8744", room: "verticals", title: null, medium: "Acrylic on canvas", size: null, w: 1278, h: 1044 },

  // The city
  { id: "ritmos-da-cidade", room: "city", title: "Ritmos da Cidade", medium: "Acrylic on canvas", size: [155, 90], w: 3500, h: 2115, large: true },
  { id: "irrupcao", room: "city", title: "Irrupção", year: 2026, medium: "Acrylic on canvas", size: [155, 90], w: 3480, h: 1973, large: true },
  { id: "ecos-de-horizonte", room: "city", title: "Ecos de Horizonte", year: 2026, medium: "Acrylic on canvas", size: [155, 90], w: 990, h: 472 },
  { id: "aveiro", room: "city", title: "Aveiro", year: 2026, medium: "Acrylic on canvas", size: [155, 90], w: 3472, h: 1891, large: true },
  { id: "umbral-de-fuego", room: "city", title: "Umbral de Fuego", year: 2026, medium: "Acrylic on canvas", size: [155, 90], w: 913, h: 658 },
  { id: "mujeres-guajiras", room: "city", title: "Mujeres Guajiras", year: 2026, medium: "Acrylic on canvas", size: [155, 90], w: 604, h: 1088 },
  { id: "cidade-em-chamas", room: "city", title: "Cidade em Chamas de Cor", medium: "Acrylic on canvas", size: [120, 60], w: 475, h: 596 },
  { id: "after-the-noise", room: "city", title: "After the Noise", medium: "Acrylic on canvas", size: [120, 60], w: 3166, h: 1568, large: true },
  { id: "untitled-3110", room: "city", title: null, medium: "Acrylic on canvas", size: [120, 60], w: 3500, h: 2120, large: true },
  { id: "untitled-2604", room: "city", title: null, medium: "Acrylic on canvas", size: [120, 120], w: 3242, h: 3490, large: true },
  { id: "untitled-7162", room: "city", title: null, medium: "Acrylic on canvas", size: [155, 90], w: 3484, h: 2198, large: true },
  { id: "untitled-7145", room: "city", title: null, medium: "Acrylic on canvas", size: [120, 60], w: 3464, h: 1755, large: true },
  { id: "untitled-horizon", room: "city", title: null, medium: "Acrylic on canvas", size: null, w: 596, h: 308 },
  { id: "coimbra", room: "city", title: "Coimbra", medium: "Oil on canvas", size: [60, 30], w: 3500, h: 1571, large: true },
  { id: "estrutura-do-gesto-i", room: "city", title: "Estrutura do Gesto I", medium: "Acrylic on canvas", size: [120, 120], w: 559, h: 593,
    note: {
      en: "Gestural abstraction in layers of vibrant colour, where gesture and chance build a visual field.",
      pt: "Abstração gestual em camadas de cor vibrante, onde o gesto e o acaso constroem um campo visual.",
      es: "Abstracción gestual en capas de color vibrante, donde el gesto y el azar construyen un campo visual."
    } },
  { id: "untitled-6073", room: "city", title: null, medium: "Acrylic on canvas", size: [120, 120], w: 3422, h: 3500, large: true },
  { id: "untitled-8368", room: "city", title: null, medium: "Acrylic on canvas", size: null, w: 3486, h: 2105, large: true },
  { id: "untitled-9434", room: "city", title: null, medium: "Acrylic on canvas", size: null, w: 1526, h: 762 },

  // Nature and memory
  { id: "bosque-interior", room: "nature", title: "Bosque Interior", medium: "Acrylic on canvas", size: [100, 100], w: 582, h: 595,
    note: {
      en: "In this work I let the colours grow like trees inside me. Ochre is the earth, yellow is the light passing through, and blue is the silence that watches. It is not just a forest. It is an inner place where everything transforms, where emotions take root and find their own space to exist.",
      pt: "Nesta obra, deixei que as cores crescessem como árvores dentro de mim. O ocre é a terra, o amarelo é a luz que atravessa, e o azul é o silêncio que observa. Não é apenas um bosque: é um lugar interior, onde tudo se transforma, onde as emoções criam raízes e encontram o seu próprio espaço para existir.",
      es: "En esta obra dejé que los colores crecieran como árboles dentro de mí. El ocre es la tierra, el amarillo es la luz que atraviesa y el azul es el silencio que observa. No es solo un bosque: es un lugar interior, donde todo se transforma, donde las emociones echan raíces y encuentran su propio espacio para existir."
    } },
  { id: "fuego-y-memoria", room: "nature", title: "Fuego y Memoria", year: 2026, medium: "Acrylic on canvas", size: [90, 90], w: 519, h: 524 },
  { id: "jardim-de-los-instantes", room: "nature", title: "Jardim de los Instantes", year: 2026, medium: "Acrylic on canvas", size: [60, 50], w: 443, h: 340 },
  { id: "untitled-5733", room: "nature", title: null, medium: "Acrylic on canvas", size: [100, 100], w: 3242, h: 3427, large: true },
  { id: "untitled-roses", room: "nature", title: null, medium: "Oil on canvas", size: [100, 100], w: 429, h: 422,
    note: {
      en: "Each rose, with its vivid texture and intense colour, stands for a feeling: love, joy, serenity, hope.",
      pt: "Cada rosa, com a sua textura viva e cores intensas, representa um sentimento: amor, alegria, serenidade, esperança.",
      es: "Cada rosa, con su textura viva y colores intensos, representa un sentimiento: amor, alegría, serenidad, esperanza."
    } },
  { id: "untitled-7146", room: "nature", title: null, medium: "Oil on canvas", size: [155, 90], w: 1536, h: 919, large: true },
  { id: "untitled-0037", room: "nature", title: null, medium: "Acrylic and oil on canvas", size: [80, 60], w: 1267, h: 1352 },
  { id: "untitled-4720", room: "nature", title: null, medium: "Acrylic on canvas", size: [155, 90], w: 3500, h: 1941, large: true },
  { id: "untitled-8729", room: "nature", title: null, medium: "Acrylic on canvas", size: null, w: 1838, h: 2033, large: true },
  { id: "untitled-8925", room: "nature", title: null, medium: "Acrylic on canvas", size: null, w: 3211, h: 3476, large: true }
];
