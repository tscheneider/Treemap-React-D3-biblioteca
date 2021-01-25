export const data = {
  id: 1,
  name: "Sistema Cardiovascular",
  parent: "null",
  value: 1,
  children: [
    {
      id: 11,
      name: "Coração",
      parent: "Sistema Cardiovascular",
      value: 2,
      "slug": "coracao"
    },
    {
      id: 12,
      name: "Vasos Sanguíneos",
      parent: "Sistema Cardiovascular",
      value: 1,
      children: [
        {
          id: 121,
          name: "Artérias",
          parent: "Vasos Sanguíneos",
          value: 6,
          children: [
            {
              id: 1211,
              name: "Cabeça e Pescoço",
              parent: "Artérias",
              value: 0,
              children: [
                {
                  id: 12111,
                  name: "Artéria Carótida Comum",
                  parent: "Cabeça e Pescoço",
                  value: 8,
                  children: [
                    {
                      id: 121112,
                      name: "Artéria Carótida Externo",
                      parent: "Artéria Carótida Comum",
                      value: 3,
                      children: [
                        {
                          id: 1211121,
                          name: "Artéria Temporal Superficial",
                          parent: "Artéria Carótida Externo",
                          value: 7,
                          "slug": "arteria-temporal-superficial"
                        },
                        {
                          id: 1211122,
                          name: "Artéria Maxiliar",
                          parent: "Artéria Carótida Externo",
                          value: 3,
                          "slug": "arteria-maxiliar"
                        },
                        {
                          id: 1211123,
                          name: "Artéria Facial",
                          parent: "Artéria Carótida Externo",
                          value: 1,
                          "slug": "arteria-facial"
                        }
                      ]
                    },
                    {
                      id: 121111,
                      name: "Artéria Carótida Interno",
                      parent: "Artéria Carótida Comum",
                      value: 1,
                      "slug": "arteria-carotida-interno"
                    }
                  ]
                }
              ]
            },
            {
              id: 1212,
              name: "Tórax",
              parent: "Artérias",
              value: 5,
              children: [
                {
                  id: 12121,
                  name: "Tronco Pulmonar",
                  parent: "Tórax",
                  value: 1,
                  children: [
                    {
                      id: 121211,
                      name: "Artéria Pulmonar Direita",
                      parent: "Tronco Pulmonar",
                      value: 2,
                      "slug": "arteria-pulmonar-direita"
                    },
                    {
                      id: 121212,
                      name: "Artéria Pulmonar Esquerda",
                      parent: "Tronco Pulmonar",
                      value: 1,
                      "slug": "arteria-pulmonar-esquerda"
                    }
                  ]
                },
                {
                  id: 1213,
                  name: "Parte Ascendente da Aorta",
                  parent: "Tórax",
                  value: 5,
                  children: [
                    {
                      id: 12131,
                      name: "Artéria Coronária Esquerda",
                      parent: "Parte Ascendente da Aorta",
                      value: 5,
                      children: [
                        {
                          id: 121311,
                          name: "Ramo Interventricular Anterior",
                          parent: "Artéria Coronária Esquerda",
                          value: 6,
                          "slug": "ramo-interventricular-anterior"
                        },
                        {
                          id: 121312,
                          name: "Ramo Circunflexo",
                          parent: "Artéria Coronária Esquerda",
                          value: 4,
                          "slug": "ramo-circunflexo"
                        }
                      ]
                    },
                    {
                      id: 12132,
                      name: "Artéria Coronária Direita",
                      parent: "Parte Ascendente da Aorta",
                      value: 5,
                      children: [
                        {
                          id: 121321,
                          name: "Ramo Interventricular Posterior",
                          parent: "Artéria Coronária Direita",
                          value: 1,
                          "slug": "ramo-interventricular-posterior"
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 1214,
                  name: "Arco da Aorta",
                  parent: "Tórax",
                  value: 8,
                  children: [
                    {
                      id: 12141,
                      name: "Artéria Subclávia Esquerda",
                      parent: "Arco da Aorta",
                      value: 2,
                      "slug": "arteria-subclavia-esquerda"
                    },
                    {
                      id: 12142,
                      name: "Artéria Subclávia Comum Esquerda",
                      parent: "Arco da Aorta",
                      value: 5,
                      "slug": "arteria-subclavia-comum-esquerda"
                    },
                    {
                      id: 12143,
                      name: "Tronco Branquiocafélico",
                      parent: "Arco da Aorta",
                      value: 5,
                      children: [
                        {
                          id: 121431,
                          name: "Artéria Subclávia Direita",
                          parent: "Tronco Branquiocafélico",
                          value: 2,
                          "slug": "arteria-subclavia-direita"
                        },
                        {
                          id: 121432,
                          name: "Artéria Subclávia Comum Direita",
                          parent: "Tronco Branquiocafélico",
                          value: 2,
                          "slug": "arteria-subclavia-comum-direita"
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 1215,
                  name: "Parte Torácica da Aorta",
                  parent: "Tórax",
                  value: 5,
                  children: [
                    {
                      id: 12151,
                      name: "Artéria Intercostais Posteriores",
                      parent: "Parte Torácica da Aorta",
                      value: 7,
                      "slug": "arteria-intercostais-posteriores"
                    },
                    {
                      id: 12152,
                      name: "Artéria Esofágicas",
                      parent: "Parte Torácica da Aorta",
                      value: 4,
                      "slug": "arteria-esofagicas"
                    },
                    {
                      id: 12153,
                      name: "Artéria Brônquicas",
                      parent: "Parte Torácica da Aorta",
                      value: 8,
                      "slug": "arteria-bronquicas"
                    }
                  ]
                }
              ]
            },
            {
              id:213,
              name: "Abdômen",
              parent: "Artérias",
              value: 5,
              children: [
                {
                  id:2131,
                  name: "Parte Abdominal da Aorta",
                  parent: "Abdômen",
                  value: 16,
                  children: [
                    {
                      id:21311,
                      name: "Artérias Subcostais",
                      value: 5,
                      "slug": "arteria-subcostais"
                    },
                    {
                      id:21312,
                      name: "Artérias Frênicas Inferiores",
                      parent: "Parte Abdominal da Aorta",
                      value: 2,
                      "slug": "arteria-frenicas-inferiores"
                    },
                    {
                      id:21313,
                      name: "Artéria Mesestérica Superior",
                      parent: "Parte Abdominal da Aorta",
                      value: 2,
                      "slug": "arteria-mesesterica-superior"
                    },
                    {
                      id:21314,
                      name: "Artérias Lombares",
                      parent: "Parte Abdominal da Aorta",
                      value: 0,
                      "slug": "arteria-lombares"
                    },
                    {
                      id:21315,
                      name: "Artérias Renal",
                      parent: "Parte Abdominal da Aorta",
                      value: 5,
                      "slug": "arteria-renal"
                    },
                    {
                      id:21316,
                      name: "Artéria Gonadal",
                      parent: "Parte Abdominal da Aorta",
                      value: 3,
                      "slug": "arteria-gonadal"
                    },
                    {
                      id:21317,
                      name: "Artéria Mesentérica Inferior",
                      parent: "Parte Abdominal da Aorta",
                      value: 3,
                      "slug": "arteria-mesenterica-inferiores"
                    },
                    {
                      id:21318,
                      name: "Artérias Sacral Mediana",
                      parent: "Parte Abdominal da Aorta",
                      value: 8,
                      "slug": "arteria-sacral-mediana"
                    },
                    {
                      id:21319,
                      name: "Artérias Ilíaca Comum",
                      parent: "Parte Abdominal da Aorta",
                      value: 5,
                      children: [
                        {
                          id:213191,
                          name: "Artéria ilíaca Interna",
                          parent: "Artérias Ilíaca Comum",
                          value: 5,
                          "slug": "arteria-iliaca-intera"
                        },
                        {
                          id:213192,
                          name: "Artéria ilíaca Externa",
                          parent: "Artérias Ilíaca Comum",
                          value: 5,
                          "slug": "arteria-iliaca-externa"
                        }
                      ]
                    },
                    {
                      id:213110,
                      name: "Tronco Celíaco",
                      parent: "Parte Abdominal da Aorta",
                      value: 1,
                      children: [
                        {
                          id:2131101,
                          name: "Artéria Hepática Comum",
                          parent: "Tronco Celíaco",
                          value: 6,
                          "slug": "arteria-hepatica-comum"
                        },
                        {
                          id:2131102,
                          name: "Artéria Gástrica Esquerda",
                          parent: "Tronco Celíaco",
                          value: 5,
                          "slug": "arteria-hepatica-esquerda"
                        },
                        {
                          id:2131103,
                          name: "Artéria Esplênica",
                          parent: "Tronco Celíaco",
                          value: 3,
                          "slug": "arteria-esplenica"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2214,
              name: "Membro Superior",
              parent: "Artérias",
              value: 5,
              children: [
                {
                  id: 22141,
                  name: "Artéria Axiliar",
                  parent: "Membro Superior",
                  value: 5,
                  "slug": "arteria-axiliar"
                },
                {
                  id: 22142,
                  name: "Artéria Braquial",
                  parent: "Membro Superior",
                  value: 8,
                  children: [
                    {
                      id: 221421,
                      name: "Artéria Radial",
                      parent: "Artéria Braquial",
                      value: 5,
                      children: [
                        {
                          id: 2214211,
                          name: "Arco Palmar Profundo",
                          parent: "Artéria Radial",
                          value: 2,
                          "slug": "arco-palmar-profundo"
                        }
                      ]
                    },
                    {
                      id: 221422,
                      name: "Artéria Ulnar",
                      parent: "Artéria Braquial",
                      value: 5,
                      children: [
                        {
                          id: 2214221,
                          name: "Arco Palmar Superficial",
                          parent: "Artéria Ulnar",
                          value: 3,
                          "slug": "arco-palmar-superficial"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 1216,
              name: "Membro Inferior",
              parent:"Artérias",
              value: 7,
              children: [
                {
                  id: 12161,
                  name: "Artéria Femoral",
                  parent: "Membro Inferior",
                  value: 7,
                  children: [
                    {
                      id: 121611,
                      name: "Artéria Femoral Profunda",
                      parent: "Artéria Femoral",
                      value: 6,
                      "slug": "arco-femoral-profunda"
                    }
                  ]
                },
                {
                  id: 12162,
                  name: "Artéria Poplítea",
                  parent: "Membro Inferior",
                  value: 5,
                  children: [
                    {
                      id: 121621,
                      name: "Artéria Tibial Anterior",
                      parent: "Artéria Poplítea",
                      value: 3,
                      children: [
                        {
                          id: 1216211,
                          name: "Artéria Dorsal do pé",
                          parent: "Artéria Tibial Anterior",
                          value: 3,
                          "slug": "arteria-dorsal-do-pe"
                        }
                      ]
                    },
                    {
                      id: 221422,
                      name: "Artéria Tibial Posterior",
                      parent: "Artéria Poplítea",
                      value: 1,
                      children: [
                        {
                          id: 2214221,
                          name: "Artéria Fibular",
                          parent: "Artéria Tibial Posterior",
                          value: 5,
                          "slug": "arteria-fibular"
                        },
                        {
                          id: 2214222,
                          name: "Artéria Plantar Medial",
                          parent: "Artéria Tibial Posterior",
                          value: 4,
                          "slug": "arteria-planar-medial"
                        },
                        {
                          id: 2214223,
                          name: "Artéria Plantar Lateral",
                          parent: "Artéria Tibial Posterior",
                          value: 4,
                          "slug": "arteria-planar-lateral"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 122,
          name: "Veias",
          parent: "Vasos Sanguíneos",
          value: 1,
          children: [
            {
              id: 1221,
              name: "Cabeça e Pescoço",
              parent: "Veias",
              value: 5,
              children: [
                {
                  id: 12211,
                  name: "Veia Jugular Interna",
                  parent: "Cabeça e Pescoço",
                  value: 5,
                  "slug": "veia-jugular-interna"
                },
                {
                  id: 12212,
                  name: "Veia Jugular Externa",
                  parent: "Cabeça e Pescoço",
                  value: 5,
                  "slug": "veia-jugular-externa"
                },
                {
                  id: 12213,
                  name: "Veia Facial",
                  parent: "Cabeça e Pescoço",
                  value: 8,
                  "slug": "veia-facial"
                },
                {
                  id: 12214,
                  name: "Veia Retromandibular",
                  parent: "Cabeça e Pescoço",
                  value: 5,
                  "slug": "veia-retromandibular"
                },
                {
                  id: 12215,
                  name: "Veia Temporal Suerficial",
                  parent: "Cabeça e Pescoço",
                  value: 2,
                  "slug": "veia-temporal-superficial"
                }
              ]
            },
            {
              id: 1222,
              name: "Tórax",
              parent: "Veias",
              value: 5,
              children: [
                {
                  id: 12221,
                  name: "Veias Pulmonares",
                  parent: "Tórax",
                  value: 5,
                  "slug": "veias-pulmonares"
                },
                {
                  id: 12222,
                  name: "Veia Cava Superior",
                  parent: "Tórax",
                  value: 6,
                  "slug": "veia-cava-superior"
                },
                {
                  id: 12223,
                  name: "Veia Braquiocefálica",
                  parent: "Tórax",
                  value: 5,
                  "slug": "veia-branquiocefalica"
                },
                {
                  id: 12224,
                  name: "Veia Jugular Interna",
                  value: 1,
                  "slug": "veia-jugular-interna"
                },
                {
                  id: 12225,
                  name: "Veia Subclávia",
                  parent: "Tórax",
                  value: 0,
                  "slug": "veia-subclavia"
                },
                {
                  id: 12226,
                  name: "Veia Ázigo",
                  parent: "Tórax",
                  value: 0,
                  "slug": "veia-azigo"
                },
                {
                  id: 12227,
                  name: "Veia Intercostais",
                  parent: "Tórax",
                  value: 7,
                  "slug": "veia-intercostais"
                },
                {
                  id: 12228,
                  name: "Veia Subcostal",
                  parent: "Tórax",
                  value: 6,
                  "slug": "veia-subcostal"
                }
              ]
            },
            {
              id: 1223,
              name: "Membro Superior",
              parent: "Veias",
              value: 5,
              children: [
                {
                  id: 12231,
                  name: "Veia Superficiais",
                  parent: "Membro Superior",
                  value: 1,
                  children: [
                    {
                      id: 122311,
                      name: "Veia Cefálica",
                      parent: "Veia Superficiais",
                      value: 5,
                      "slug": "veia-cefalica"
                    },
                    {
                      id: 122312,
                      name: "Veia Brasílica",
                      parent: "Veia Superficiais",
                      value: 0,
                      "slug": "veia-brasilica"
                    },
                    {
                      id: 122313,
                      name: "Veia Intermédia do Cotovelo",
                      parent: "Veia Superficiais",
                      value: 1,
                      "slug": "veia-intermedia-do-cotovelo"
                    },
                    {
                      id: 122314,
                      name: "Veia Intermédia do Antebraço",
                      parent: "Veia Superficiais",
                      value: 2,
                      "slug": "veia-intermedia-do-antebraco"
                    }
                  ]
                },
                {
                  id: 12232,
                  name: "Veia Profundas",
                  parent: "Membro Superior",
                  value: 3,
                  children: [
                    {
                      id: 122321,
                      name: "Veia Axiliar",
                      parent: "Veia Profundas",
                      value: 6,
                      "slug": "veia-axiliar"
                    },
                    {
                      id: 122322,
                      name: "Veia Branquial",
                      parent: "Veia Profundas",
                      value: 5,
                      "slug": "veia-branquial"
                    },
                    {
                      id: 122323,
                      name: "Veia Ulnar",
                      parent: "Veia Profundas",
                      value: 2,
                      "slug": "veia-ulnar"
                    },
                    {
                      id: 122324,
                      name: "Veia Radial",
                      parent: "Veia Profundas",
                      value: 2,
                      "slug": "veia-radial"
                    }
                  ]
                }
              ]
            },
            {
              id: 1224,
              name: "Membro Inferior",
              parent: "Veias",
              value: 5,
              children: [
                {
                  id: 12241,
                  name: "Veias Superficiais",
                  parent: "Membro Inferior",
                  value: 6,
                  children: [
                    {
                      id: 122411,
                      name: "Veia Safena Magna",
                      parent: "Veias Superficiais",
                      value: 1,
                      "slug": "veia-safena-magna"
                    },
                    {
                      id: 122412,
                      name: "Veia Safena Parva",
                      value: 8,
                      "slug": "veia-safena-parva"
                    }
                  ]
                },
                {
                  id: 12242,
                  name: "Veia Profundas",
                  parent: "Membro Inferior",
                  value: 4,
                  children: [
                    {
                      id: 122421,
                      name: "Veia Femoral",
                      parent: "Veia Profundas",
                      value: 3,
                      "slug": "veia-femoral"
                    },
                    {
                      id: 122422,
                      name: "Veia Femoral Profunda",
                      parent: "Veia Profundas",
                      value: 5,
                      "slug": "veia-femoral-profunda"
                    },
                    {
                      id: 122423,
                      name: "Veia Poplítea",
                      parent: "Veia Profundas",
                      value: 9,
                      "slug": "veia-poplitea"
                    },
                    {
                      id: 122424,
                      name: "Veia Tibial Anterior",
                      parent: "Veia Profundas",
                      value: 8,
                      "slug": "veia-tibial-anterior"
                    },
                    {
                      id: 122425,
                      name: "Veia Tibial Posterior",
                      parent: "Veia Profundas",
                      value: 8,
                      "slug": "veia-tibial-posterior"
                    },
                    {
                      id: 122426,
                      name: "Veia Fibular",
                      parent: "Veia Profundas",
                      value: 3,
                      "slug": "veia-fibular"
                    }
                  ]
                }
              ]
            },
            {
              id: 1225,
              name: "Abdômen",
              parent: "Veias",
              value: 5,
              children: [
                {
                  id: 12251,
                  name: "Veia Cava Inferior",
                  parent: "Abdômen",
                  value: 11,
                  "slug": "veia-cava-inferior"
                },
                {
                  id: 12252,
                  name: "Veia Hepáticas",
                  parent: "Abdômen",
                  value: 9,
                  "slug": "veia-hepaticas"
                },
                {
                  id: 12253,
                  name: "Veia Gástrica Esquerda",
                  parent: "Abdômen",
                  value: 5,
                  "slug": "veia-gastrica-esquerda"
                },
                {
                  id: 12254,
                  name: "Veia Gástrica Direita",
                  parent: "Abdômen",
                  value: 0,
                  "slug": "veia-gastrica-direita"
                },
                {
                  id: 12255,
                  name: "Veia Porta",
                  parent: "Abdômen",
                  value: 1,
                  "slug": "veia-porta"
                },
                {
                  id: 12256,
                  name: "Veia Esplênica",
                  parent: "Abdômen",
                  value: 8,
                  "slug": "veia-esplenica"
                },
                {
                  id: 12257,
                  name: "Veia Mesentérica Superior",
                  parent: "Abdômen",
                  value: 5,
                  "slug": "veia-mesenterica-superior"
                },
                {
                  id: 12258,
                  name: "Veia Mesentérica Inferior",
                  parent: "Abdômen",
                  value: 6,
                  "slug": "veia-mesenterica-inferior"
                },
                {
                  id: 12259,
                  name: "Veia Renal",
                  parent: "Abdômen",
                  value: 0,
                  "slug": "veia-renal"
                },
                {
                  id: 122510,
                  name: "Veia Sacral Mediana",
                  parent: "Abdômen",
                  value: 1,
                  "slug": "veia-sacral-mediana"
                },
                {
                  id: 122511,
                  name: "Veia Ilíaca Comum",
                  parent: "Abdômen",
                  value: 3,
                  "slug": "veia-iliaca-comum"
                },
                {
                  id: 122512,
                  name: "Veia Ilíaca Interna",
                  parent: "Abdômen",
                  value: 5,
                  "slug": "veia-iliaca-interna"
                },
                {
                  id: 122513,
                  name: "Veia Ilíaca Externa",
                  parent: "Abdômen",
                  value: 1,
                  "slug": "veia-iliaca-externa"
                },
                {
                  id: 122514,
                  name: "Veia Gonadal",
                  parent: "Abdômen",
                  value: 6,
                  "slug": "veia-gonadal"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}