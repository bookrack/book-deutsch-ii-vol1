module.exports = function() {
  return {
    '04': {
      toc: [
        {
          route: '04-05',
          trigger: {
              top: '16%',
              bottom: '79%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '15-16',
          trigger: {
              top: '22%',
              bottom: '74%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '26-27',
          trigger: {
              top: '27%',
              bottom: '68%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '36-37',
          trigger: {
              top: '33%',
              bottom: '62%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '38-39',
          trigger: {
              top: '39%',
              bottom: '56%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '38-39',
          trigger: {
              top: '45%',
              bottom: '50%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '40-41',
          trigger: {
              top: '52%',
              bottom: '43%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '42-43',
          trigger: {
              top: '58%',
              bottom: '37%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '50-51',
          trigger: {
              top: '64%',
              bottom: '32%',
              left: '8%',
              width: '64%'
          }
        }
      ]
    },
    '05': {
      video: [
        {
          video: {
            source: 'p5_v1'
          },
          trigger: {
            button: {
              top: '18%'
            },
            zone: {
              top: '18%',
              bottom: '2%'
            }
          }
        }
      ]
    },
    '06': {
      video: [
        {
          video: {
            source: 'p6_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '07': {
      static: [
        {
          image: 'pg7ex3static1',
          audio: {
            source: 'pg7ex3a1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '15%',
              bottom: '54%',
              left: '14%',
              width: '31%'
            }
          }
        },
        {
          image: 'pg7ex3static2',
          audio: {
            source: 'pg7ex3a2',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '21%'
            },
            zone: {
              top: '15%',
              bottom: '53%',
              left: '48%',
              width: '37%'
            }
          }
        }
      ]
    },
    '08': {
      exercise: [
        {
          type: 'typer',
          title: 'Ergänze!',
          image: 'pg08ex5',
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'Scrie sub numele culorii partile corpului corespunzatoare. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '25.5%',
                left: '56%',
                width: '19%'
              },
              model: '',
              solution: 'Augen'
            },
            {
              identifier: 'two',
              position: {
                top: '14.5%',
                left: '48%',
                width: '19%'
              },
              model: '',
              solution: 'Haare'
            },
            {
              identifier: 'three',
              position: {
                top: '61%',
                left: '33%',
                width: '19%'
              },
              model: '',
              solution: 'Beine'
            },
            {
              identifier: 'four',
              position: {
                top: '37.5%',
                left: '69%',
                width: '19%'
              },
              model: '',
              solution: 'Hand'
            },
            {
              identifier: 'five',
              position: {
                top: '34%',
                left: '12%',
                width: '19%'
              },
              model: '',
              solution: 'Hand'
            },
            {
              identifier: 'six',
              position: {
                top: '70.5%',
                left: '73%',
                width: '19%'
              },
              model: '',
              solution: 'Füße'
            },
            {
              identifier: 'seven',
              position: {
                top: '50%',
                left: '22%',
                width: '19%'
              },
              model: '',
              solution: 'Arme'
            }
          ]
        }
      ]
    },
    '09': {
      video: [
        {
          video: {
            source: 'p9_v1'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '43%'
            }
          }
        }
      ]
    },
    '10': {
      static: [
        {
          image: 'pg10ichmag',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '50%'
            },
            zone: {
              top: '50%',
              bottom: '5%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p10_v1'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '50%'
            }
          }
        }
      ]
    },
    '11': {
     exercise: [
       {
         type: 'linker',
         image: '11-exercise-bg',
         title: 'VERBINDE!',
         trigger: {
           button: {
             top: '10%'
           },
           zone: {
             top: '8%',
             bottom: '4%'
           }
         },
         help: {
           toggle: false,
           text: 'Uneste cuvintele cu partile corpului corespunzatoare. Cand ai terminat apasa pe cheita si verifica. Succes!'
         },
         data: [
           {
             identifier: 'nase',
             style: {
               top: '10%',
               left: '8%',
               width: '13%',
               height: 'auto'
             },
             image: {
               src: '11-nase.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'augen',
             style: {
               top: '10%',
               left: '26%',
               width: '13%',
               height: 'auto'
             },
             image: {
               src: '11-augen.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'haare',
             style: {
               top: '10%',
               left: '44%',
               width: '13%',
               height: 'auto'
             },
             image: {
               src: '11-haare.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'mund',
             style: {
               top: '10%',
               left: '62%',
               width: '13%',
               height: 'auto'
             },
             image: {
               src: '11-mund.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'ohren',
             style: {
               top: '10%',
               left: '80%',
               width: '13%',
               height: 'auto'
             },
             image: {
               src: '11-ohren.png'
             },
             solutionBorder: true,
             sourceAnchors: ["BottomCenter"],
             targetAnchors: []
           },
           {
             identifier: 'fube',
             style: {
               top: '88%',
               left: '8%',
               width: '13%',
               height: 'auto'
             },
             image: {
               src: '11-fube.png'
             },
             solutionBorder: true,
             sourceAnchors: ["TopCenter"],
             targetAnchors: []
           },
           {
             identifier: 'arme',
             style: {
               top: '88%',
               left: '31%',
               width: '13%',
               height: 'auto'
             },
             image: {
               src: '11-arme.png'
             },
             solutionBorder: true,
             sourceAnchors: ["TopCenter"],
             targetAnchors: []
           },
           {
             identifier: 'beine',
             style: {
               top: '88%',
               left: '53%',
               width: '13%',
               height: 'auto'
             },
             image: {
               src: '11-beine.png'
             },
             solutionBorder: true,
             sourceAnchors: ["TopCenter"],
             targetAnchors: []
           },
           {
             identifier: 'hande',
             style: {
               top: '88%',
               left: '75%',
               width: '13%',
               height: 'auto'
             },
             image: {
               src: '11-hande.png'
             },
             solutionBorder: true,
             sourceAnchors: ["TopCenter"],
             targetAnchors: []
           },
           {
             identifier: 'nas-img',
             style: {
               top: '30.7%',
               left: '46.2%',
               width: '3.2%',
               height: '3%'
             },
             image: {
               src: '11-transparent-bg.png'
             },
             solution: ["nase"],
             sourceAnchors: [],
             targetAnchors: ["LeftMiddle"]
           },
           {
             identifier: 'ochi-img',
             style: {
               top: '28%',
               left: '47.6%',
               width: '2.5%',
               height: 'auto'
             },
             image: {
               src: '11-transparent-bg.png'
             },
             solution: ["augen"],
             sourceAnchors: [],
             targetAnchors: ["LeftMiddle"]
           },
           {
             identifier: 'par-img',
             style: {
               top: '21.4%',
               left: '44.6%',
               width: '5.7%',
               height: '3%'
             },
             image: {
               src: '11-transparent-bg.png'
             },
             solution: ["haare"],
             sourceAnchors: [],
             targetAnchors: ["TopCenter"]
           },
           {
             identifier: 'gura-img',
             style: {
               top: '33.9%',
               left: '46.7%',
               width: '3%',
               height: '2.5%'
             },
             image: {
               src: '11-transparent-bg.png'
             },
             solution: ["mund"],
             sourceAnchors: [],
             targetAnchors: ["RightMiddle"]
           },
           {
             identifier: 'ureche-img',
             style: {
               top: '21.9%',
               left: '50.7%',
               width: '5%',
               height: '5.3%'
             },
             image: {
               src: '11-transparent-bg.png'
             },
             solution: ["ohren"],
             sourceAnchors: [],
             targetAnchors: ["RightMiddle"]
           },
           {
             identifier: 'talpa-img',
             style: {
               top: '76.9%',
               left: '28.7%',
               width: '11%',
               height: '7.3%'
             },
             image: {
               src: '11-transparent-bg.png'
             },
             solution: ["fube"],
             sourceAnchors: [],
             targetAnchors: ["LeftMiddle"]
           },
           {
             identifier: 'brat-img',
             style: {
               top: '37.9%',
               left: '28.7%',
               width: '13%',
               height: '7.3%'
             },
             image: {
               src: '11-transparent-bg.png'
             },
             solution: ["arme"],
             sourceAnchors: [],
             targetAnchors: ["BottomCenter"]
           },
           {
             identifier: 'picior-img',
             style: {
               top: '56.9%',
               left: '55.7%',
               width: '18%',
               height: '18.3%'
             },
             image: {
               src: '11-transparent-bg.png'
             },
             solution: ["beine"],
             sourceAnchors: [],
             targetAnchors: ["BottomCenter"]
           },
           {
             identifier: 'mana-img',
             style: {
               top: '27.9%',
               left: '66.7%',
               width: '11%',
               height: '9.5%'
             },
             image: {
               src: '11-transparent-bg.png'
             },
             solution: ["hande"],
             sourceAnchors: [],
             targetAnchors: ["BottomCenter"]
           }
         ]
       }
     ]
   },
    '12': {
      static: [
        {
          image: 'pg12ex3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '54%'
            },
            zone: {
              top: '54%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '13': {
      static: [
        {
          image: 'pg13static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '22%'
            },
            zone: {
              top: '22%',
              bottom: '47%'
            }
          }
        },
        {
          image: 'pg13static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '56%'
            },
            zone: {
              top: '56%',
              bottom: '30%'
            }
          }
        },
        {
          image: 'pg13static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '73%'
            },
            zone: {
              top: '73%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '14': {
      static: [
        {
          image: 'pg14static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '13%'
            },
            zone: {
              top: '13%',
              bottom: '55%'
            }
          }
        },
        {
          image: 'pg14static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '47%'
            },
            zone: {
              top: '47%',
              bottom: '30%'
            }
          }
        },
        {
          image: 'pg14static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '73%'
            },
            zone: {
              top: '73%',
              bottom: '13%'
            }
          }
        }
      ]
    },
    '15': {
      exercise: [
        {
          type: 'typer',
          title: 'Antworte!',
          image: 'pg15ex2',
          trigger: {
            button: {
              top: '79%'
            },
            zone: {
              top: '79%',
              bottom: '1%'
            }
          },
          help: {
            toggle: false,
            text: 'Priveste imaginile si raspunde la intrebari. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '80.2%',
                left: '44%',
                width: '47%'
              },
              model: '',
              solution: 'Badezimmer'
            },
            {
              identifier: 'two',
              position: {
                top: '83.7%',
                left: '44%',
                width: '47%'
              },
              model: '',
              solution: 'Wohnzimmer'
            },
            {
              identifier: 'three',
              position: {
                top: '86.9%',
                left: '44%',
                width: '47%'
              },
              model: '',
              solution: 'Schlafzimmer'
            },
            {
              identifier: 'four',
              position: {
                top: '90.4%',
                left: '47%',
                width: '44%'
              },
              model: '',
              solution: 'Küche'
            }
          ]
        }
      ],
      video: [
        {
          video: {
            source: 'p15_v1'
          },
          trigger: {
            button: {
              top: '17%'
            },
            zone: {
              top: '17%',
              bottom: '21%'
            }
          }
        }
      ]
    },
    '16': {
      video: [
        {
          video: {
            source: 'p16_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '17': {
      video: [
        {
          video: {
            source: 'p17_v1'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '7%'
            }
          }
        }
      ]
    },
    '18': {
      video: [
        {
          video: {
            source: 'p18_v1'
          },
          trigger: {
            button: {
              top: '13%'
            },
            zone: {
              top: '13%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '19': {
      static: [
        {
          image: 'pg19ex7',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '48%'
            },
            zone: {
              top: '48%',
              bottom: '5%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p19_v1'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '52%'
            }
          }
        }
      ]
    },
    '20': {
      static: [
        {
          image: 'pg20-21ex8',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '21': {
      static: [
        {
          image: 'pg20-21ex8',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '22': {
      static: [
        {
          image: 'pg22ichmag',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '72%'
            },
            zone: {
              top: '72%',
              bottom: '2%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p22_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '28%'
            }
          }
        }
      ]
    },
    '23': {
      video: [
        {
          video: {
            source: 'p23_v1'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '20%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '24': {
      video: [
        {
          video: {
            source: 'p24_v1'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '48%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'checker',
          title: 'Lies und kreuze an!',
          image: 'pg24ex3',
          trigger: {
            button: {
              top: '53%'
            },
            zone: {
              top: '53%',
              bottom: '5%'
            }
          },
          help: {
            toggle: false,
            text: 'Citeste si bifeaza. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '49.9%',
                left: '19.7%',
                width: '9%',
                height: '1.3%'
              },
              answerFalse: {
                top: '5%',
                left: '0%'
              },
              answerTrue: {
                top: '5%',
                left: '80%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '49.9%',
                left: '36%',
                width: '9%',
                height: '1.3%'
              },
              answerTrue: {
                top: '5%',
                left: '3%'
              },
              answerFalse: {
                top: '5%',
                left: '80%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '49.9%',
                left: '52.2%',
                width: '9%',
                height: '1.3%'
              },
              answerTrue: {
                top: '5%',
                left: '0%'
              },
              answerFalse: {
                top: '5%',
                left: '80%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '60.7%',
                left: '19.7%',
                width: '9%',
                height: '1.3%'
              },
              answerTrue: {
                top: '5%',
                left: '0%'
              },
              answerFalse: {
                top: '5%',
                left: '80%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '60.7%',
                left: '36%',
                width: '9%',
                height: '1.3%'
              },
              answerFalse: {
                top: '5%',
                left: '3%'
              },
              answerTrue: {
                top: '5%',
                left: '82%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '60.7%',
                left: '52.2%',
                width: '9%',
                height: '1.3%'
              },
              answerTrue: {
                top: '5%',
                left: '0%'
              },
              answerFalse: {
                top: '5%',
                left: '80%'
              }
            },
            {
              identifier: 'seven',
              model: '',
              position: {
                top: '71.7%',
                left: '19.7%',
                width: '9%',
                height: '1.3%'
              },
              answerTrue: {
                top: '5%',
                left: '0%'
              },
              answerFalse: {
                top: '5%',
                left: '80%'
              }
            },
            {
              identifier: 'eight',
              model: '',
              position: {
                top: '71.7%',
                left: '36%',
                width: '9%',
                height: '1.3%'
              },
              answerFalse: {
                top: '5%',
                left: '3%'
              },
              answerTrue: {
                top: '5%',
                left: '82%'
              }
            },
            {
              identifier: 'nine',
              model: '',
              position: {
                top: '71.7%',
                left: '52.2%',
                width: '9%',
                height: '1.3%'
              },
              answerFalse: {
                top: '5%',
                left: '0%'
              },
              answerTrue: {
                top: '5%',
                left: '81%'
              }
            }
          ]
        }
      ]
    },
    '25': {
      static: [
        {
          image: 'pg25static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '23%'
            },
            zone: {
              top: '23%',
              bottom: '59%'
            }
          }
        },
        {
          image: 'pg25static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '41%'
            },
            zone: {
              top: '41%',
              bottom: '50%'
            }
          }
        },
        {
          image: 'pg25static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '50%'
            },
            zone: {
              top: '50%',
              bottom: '22%'
            }
          }
        },
        {
          image: 'pg25static4',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '78%'
            },
            zone: {
              top: '78%',
              bottom: '13%'
            }
          }
        },
        {
          image: 'pg25static5',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '87%'
            },
            zone: {
              top: '87%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '26': {
      static: [
        {
          image: 'pg26static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '5%'
            },
            zone: {
              top: '5%',
              bottom: '71%'
            }
          }
        },
        {
          image: 'pg26static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '32%'
            },
            zone: {
              top: '32%',
              bottom: '37%'
            }
          }
        },
        {
          image: 'pg26static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '63%'
            },
            zone: {
              top: '63%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '27': {
      video: [
        {
          video: {
            source: 'p27_v1'
          },
          trigger: {
            button: {
              top: '19%'
            },
            zone: {
              top: '19%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '28': {
      video: [
        {
          video: {
            source: 'p28-29_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '29': {
      static: [
        {
          image: 'pg29ichmag',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '82%'
            },
            zone: {
              top: '82%',
              bottom: '4%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p28-29_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '18%'
            }
          }
        }
      ]
    },
    '30': {
      video: [
        {
          video: {
            source: 'p30_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '31': {
      video: [
        {
          video: {
            source: 'p31_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '29%'
            }
          }
        }
      ]
    },
    '32': {
      static: [
        {
          image: 'pg32ex6',
          audio: {
            source: 'pg32ex6',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '63.5%'
            }
          }
        },
        {
          image: 'pg32ex8',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '69%'
            },
            zone: {
              top: '69%',
              bottom: '1.5%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'typer',
          title: 'Zähl und schreib die Zahl!',
          image: 'pg32ex7',
          trigger: {
            button: {
              top: '37%'
            },
            zone: {
              top: '37%',
              bottom: '31%'
            }
          },
          help: {
            toggle: false,
            text: 'Numara picioarele, cozile, ochii si aripile din fiecare imagine si scrie numarul. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '38%',
                left: '28%',
                width: '17%'
              },
              model: '',
              solution: '16'
            },
            {
              identifier: 'two',
              position: {
                top: '40.6%',
                left: '33%',
                width: '17%'
              },
              model: '',
              solution: '3'
            },
            {
              identifier: 'three',
              position: {
                top: '43%',
                left: '29%',
                width: '17%'
              },
              model: '',
              solution: '10'
            },
            {
              identifier: 'four',
              position: {
                top: '45.7%',
                left: '28%',
                width: '17%'
              },
              model: '',
              solution: '4'
            },
            {
              identifier: 'five',
              position: {
                top: '51.8%',
                left: '62%',
                width: '17%'
              },
              model: '',
              solution: '20'
            },
            {
              identifier: 'six',
              position: {
                top: '54.3%',
                left: '67%',
                width: '17%'
              },
              model: '',
              solution: '6'
            },
            {
              identifier: 'seven',
              position: {
                top: '56.8%',
                left: '63%',
                width: '17%'
              },
              model: '',
              solution: '12'
            },
            {
              identifier: 'eight',
              position: {
                top: '59.4%',
                left: '62.5%',
                width: '17%'
              },
              model: '',
              solution: '4'
            }
          ]
        }
      ]
    },
    '33': {
      video: [
        {
          video: {
            source: 'p33_v1'
          },
          trigger: {
            button: {
              top: '18%'
            },
            zone: {
              top: '18%',
              bottom: '34%'
            }
          }
        }
      ]
    },
    '34': {
      exercise: [
        {
          type: 'type',
          title: 'Schreib die Zahlen und lies laut!',
          image: 'pg34ex3',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '46%'
            }
          },
          help: {
            toggle: false,
            text: 'Scrie numerele si citeste-le. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '34.7%',
                left: '15.8%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '11'
            },
            {
              identifier: 'two',
              position: {
                top: '34.7%',
                left: '27.8%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '3'
            },
            {
              identifier: 'three',
              position: {
                top: '34.7%',
                left: '38.5%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '14'
            },
            {
              identifier: 'four',
              position: {
                top: '42.2%',
                left: '15.8%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '19'
            },
            {
              identifier: 'five',
              position: {
                top: '42.2%',
                left: '27.8%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '10'
            },
            {
              identifier: 'six',
              position: {
                top: '42.2%',
                left: '38.5%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '9'
            },
            {
              identifier: 'seven',
              position: {
                top: '49.9%',
                left: '15.8%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '9'
            },
            {
              identifier: 'eight',
              position: {
                top: '49.9%',
                left: '27.8%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '7'
            },
            {
              identifier: 'nine',
              position: {
                top: '49.9%',
                left: '38.5%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '16'
            },
            {
              identifier: 'ten',
              position: {
                top: '57.4%',
                left: '15.8%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '15'
            },
            {
              identifier: 'eleven',
              position: {
                top: '57.4%',
                left: '27.8%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '1'
            },
            {
              identifier: 'twelve',
              position: {
                top: '57.4%',
                left: '38.5%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '16'
            },
            {
              identifier: 'thirteen',
              position: {
                top: '64.9%',
                left: '15.8%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '16'
            },
            {
              identifier: 'fourteen',
              position: {
                top: '64.9%',
                left: '27.8%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '12'
            },
            {
              identifier: 'fifteen',
              position: {
                top: '64.9%',
                left: '38.5%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '4'
            },
            {
              identifier: 'sixteen',
              position: {
                top: '34.7%',
                left: '54.3%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '13'
            },
            {
              identifier: 'seventeen',
              position: {
                top: '34.7%',
                left: '66.3%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '8'
            },
            {
              identifier: 'eighteen',
              position: {
                top: '34.7%',
                left: '77.2%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '5'
            },
            {
              identifier: 'nineteen',
              position: {
                top: '42.2%',
                left: '54.3%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '18'
            },
            {
              identifier: 'twenty',
              position: {
                top: '42.2%',
                left: '66.3%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '2'
            },
            {
              identifier: 'twentyone',
              position: {
                top: '42.2%',
                left: '77.2%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '20'
            },
            {
              identifier: 'twentytwo',
              position: {
                top: '49.9%',
                left: '54.3%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '17'
            },
            {
              identifier: 'twentythree',
              position: {
                top: '49.9%',
                left: '66.3%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '5'
            },
            {
              identifier: 'twentyfour',
              position: {
                top: '49.9%',
                left: '77.2%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '12'
            },
            {
              identifier: 'twentyfive',
              position: {
                top: '57.4%',
                left: '54.3%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '14'
            },
            {
              identifier: 'twentysix',
              position: {
                top: '57.4%',
                left: '66.3%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '2'
            },
            {
              identifier: 'twentyseven',
              position: {
                top: '57.4%',
                left: '77.2%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '12'
            },
            {
              identifier: 'twentyeight',
              position: {
                top: '64.9%',
                left: '54.3%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '6'
            },
            {
              identifier: 'twentynine',
              position: {
                top: '64.9%',
                left: '66.3%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '4'
            },
            {
              identifier: 'thirty',
              position: {
                top: '64.9%',
                left: '77.2%',
                width: '7%',
                height: '3%'
              },
              model: '',
              solution: '10'
            }
          ]
        }
      ]
    },
    '35': {
      static: [
        {
          image: 'pg35static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '19%'
            },
            zone: {
              top: '19%',
              bottom: '35%',
              left: '4%',
              width: '50%'
            }
          }
        },
        {
          image: 'pg35static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '40%'
            },
            zone: {
              top: '40%',
              bottom: '25%',
              left: '57%',
              width: '36%'
            }
          }
        }
      ]
    },
    '36': {
      static: [
        {
          image: 'pg36static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '13%'
            },
            zone: {
              top: '13%',
              bottom: '71%'
            }
          }
        },
        {
          image: 'pg36static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '32%'
            },
            zone: {
              top: '32%',
              bottom: '23%'
            }
          }
        },
        {
          image: 'pg36static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '78%'
            },
            zone: {
              top: '78%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '37': {
      video: [
        {
          video: {
            source: 'p37_v1'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '20%',
              bottom: '1%'
            }
          }
        }
      ]
    },
    '38': {
      video: [
        {
          video: {
            source: 'p38_v1'
          },
          trigger: {
            button: {
              top: '17%'
            },
            zone: {
              top: '17%',
              bottom: '5%'
            }
          }
        }
      ]
    },
    '39': {
      static: [
        {
          image: 'pg39adventex1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '54%'
            },
            zone: {
              top: '54%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p39_v1'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '48%'
            }
          }
        }
      ]
    },
    '40': {
      video: [
        {
          video: {
            source: 'p40_v1'
          },
          trigger: {
            button: {
              top: '17%'
            },
            zone: {
              top: '17%',
              bottom: '41%'
            }
          }
        },
        {
          video: {
            source: 'p40_v2'
          },
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '41': {
      video: [
        {
          video: {
            source: 'p41_v1'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '50%'
            }
          }
        },
        {
          video: {
            source: 'p41_v2'
          },
          trigger: {
            button: {
              top: '50%'
            },
            zone: {
              top: '50%',
              bottom: '1%'
            }
          }
        }
      ]
    },
    '42': {
      video: [
        {
          video: {
            source: 'p42_v1'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '2%'
            }
          }
        }
      ]
    },
    '43': {
      static: [
        {
          image: 'pg43ex1static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '25%'
            },
            zone: {
              top: '25%',
              bottom: '52%',
              left: '38%',
              width: '29%'
            }
          }
        },
        {
          image: 'pg43ex1static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '30%'
            },
            zone: {
              top: '30%',
              bottom: '45%',
              left: '67%',
              width: '29%'
            }
          }
        },
        {
          image: 'pg43ex1static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '45%'
            },
            zone: {
              top: '45%',
              bottom: '32%',
              left: '13%',
              width: '29%'
            }
          }
        },
        {
          image: 'pg43ex1static4',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '73%'
            },
            zone: {
              top: '73%',
              bottom: '3%',
              left: '17%',
              width: '29%'
            }
          }
        },
        {
          image: 'pg43ex1static5',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '12%',
              left: '64%',
              width: '29%'
            }
          }
        }
      ]
    },
    '44': {
      exercise: [
        {
          type: 'checker',
          title: 'Lies und kreuze Richtig oder Falsch an! Schreib den richtigen Satz!',
          image: 'pg44ex2',
          trigger: {
            button: {
              top: '14%'
            },
            zone: {
              top: '14%',
              bottom: '13%'
            }
          },
          help: {
            toggle: false,
            text: 'Citeste si bifeaza corect (R) sau gresit(F). Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '19.6%',
                left: '61.5%',
                width: '7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '23.2%',
                left: '61.5%',
                width: '7%',
                height: '2.5%'
              },
              answerTrue: {
                top: '10%',
                left: '5%'
              },
              answerFalse: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '26.9%',
                left: '61.5%',
                width: '7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '30.5%',
                left: '61.5%',
                width: '7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '34.2%',
                left: '61.5%',
                width: '7%',
                height: '2.5%'
              },
              answerTrue: {
                top: '10%',
                left: '5%'
              },
              answerFalse: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '37.8%',
                left: '61.5%',
                width: '7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'seven',
              model: '',
              position: {
                top: '41.4%',
                left: '61.5%',
                width: '7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'eight',
              model: '',
              position: {
                top: '45.1%',
                left: '61.5%',
                width: '7%',
                height: '2.5%'
              },
              answerTrue: {
                top: '10%',
                left: '5%'
              },
              answerFalse: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'nine',
              model: '',
              position: {
                top: '55%',
                left: '61.4%',
                width: '7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'ten',
              model: '',
              position: {
                top: '58.6%',
                left: '61.4%',
                width: '7%',
                height: '2.5%'
              },
              answerTrue: {
                top: '10%',
                left: '5%'
              },
              answerFalse: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'eleven',
              model: '',
              position: {
                top: '62.3%',
                left: '61.4%',
                width: '7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'twelve',
              model: '',
              position: {
                top: '65.9%',
                left: '61.4%',
                width: '7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'thirteen',
              model: '',
              position: {
                top: '69.5%',
                left: '61.4%',
                width: '7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'fourteen',
              model: '',
              position: {
                top: '73.2%',
                left: '61.4%',
                width: '7%',
                height: '2.5%'
              },
              answerTrue: {
                top: '10%',
                left: '5%'
              },
              answerFalse: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'fifteen',
              model: '',
              position: {
                top: '76.8%',
                left: '61.4%',
                width: '7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '60%'
              }
            },
            {
              identifier: 'sixteen',
              model: '',
              position: {
                top: '80.4%',
                left: '61.4%',
                width: '7%',
                height: '2.5%'
              },
              answerTrue: {
                top: '10%',
                left: '5%'
              },
              answerFalse: {
                top: '10%',
                left: '60%'
              }
            }
          ]
        }
      ]
    },
    '45': {
      exercise: [
        {
          type: 'checker',
          title: 'Lies und kreuze Richtig oder Falsch an! Schreib den richtigen Satz!',
          image: 'pg45ex3',
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '3%'
            }
          },
          help: {
            toggle: false,
            text: 'Citeste si bifeaza corect (R) sau gresit(F). Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '16.7%',
                left: '58.4%',
                width: '6.6%',
                height: '2.1%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '61%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '32.8%',
                left: '76.1%',
                width: '6.6%',
                height: '2.1%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '61%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '49.7%',
                left: '58.3%',
                width: '6.6%',
                height: '2.1%'
              },
              answerTrue: {
                top: '10%',
                left: '5%'
              },
              answerFalse: {
                top: '10%',
                left: '61%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '68%',
                left: '72.2%',
                width: '6.6%',
                height: '2.1%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '61%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '81.4%',
                left: '66%',
                width: '6.6%',
                height: '2.1%'
              },
              answerFalse: {
                top: '10%',
                left: '5%'
              },
              answerTrue: {
                top: '10%',
                left: '61%'
              }
            }
          ]
        }
      ]
    },
    '46': {
      exercise: [
       {
          type: 'linker',
          image: '02',
          title: 'VERBINDE!',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '8%',
              bottom: '60%'
            }
          },
          help: {
            toggle: false,
            text: 'Uneste cu o linie imaginea cu enuntul corect. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'baiatul-blond',
              style: {
                top: '7%',
                left: '10%',
                width: '20%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '46-baiatul-blond.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'baiatul-brunet',
              style: {
                top: '31%',
                left: '10%',
                width: '20%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '46-baiatul-brunet.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'capcaunul',
              style: {
                top: '56%',
                left: '10%',
                width: '20%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '46-capcaunul.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'ursul',
              style: {
                top: '77%',
                left: '10%',
                width: '20%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '46-ursul.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'kurze-braune-haare',
              style: {
                top: '18%',
                left: '65%',
                width: '25%',
                height: 'auto'
              },
              image: {
                src: '46-kurze-braune-haare.png'
              },
              solution: 'ursul',
              solutionImg: {
                src: '46-kurze-braune-haare.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'eine-rote-nase',
              style: {
                top: '35%',
                left: '67.5%',
                width: '20%',
                height: 'auto'
              },
              image: {
                src: '46-eine-rote-nase.png'
              },
              solution: 'capcaunul',
              solutionImg: {
                src: '46-eine-rote-nase.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'kurze-blonde-haare',
              style: {
                top: '50%',
                left: '65%',
                width: '25%',
                height: 'auto'
              },
              image: {
                src: '46-kurze-blonde-haare.png'
              },
              solution: 'baiatul-blond',
              solutionImg: {
                src: '46-kurze-blonde-haare.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'blaue-augen',
              style: {
                top: '65%',
                left: '70%',
                width: '15%',
                height: 'auto'
              },
              image: {
                src: '46-blaue-augen.png'
              },
              solution: 'baiatul-brunet',
              solutionImg: {
                src: '46-blaue-augen.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            }
          ]
        }
      ],
      video: [
        {
          video: {
            source: 'p46_v1'
          },
          trigger: {
            button: {
              top: '42%'
            },
            zone: {
              top: '42%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '47': {
      exercise: [
        {
          type: 'picker',
          title: 'Was isst Bert? Such die Wörter!',
          image: 'pg47ex6',
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '44%'
            }
          },
          help: {
            toggle: false,
            text: 'Ce mananca Bert? Cauta cuvintele pe orizontala de la stanga la dreapta si invers si pe verticala de sus in jos si invers. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '31.7%',
                left: '31%',
                width: '30.8%',
                height: '4.2%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '39.7%',
                left: '25.8%',
                width: '25.8%',
                height: '4.2%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '47.9%',
                left: '30.8%',
                width: '30.8%',
                height: '4.2%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '56%',
                left: '10.5%',
                width: '20.5%',
                height: '4.2%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '56%',
                left: '36.1%',
                width: '25.5%',
                height: '4.2%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '64%',
                left: '25.8%',
                width: '40.9%',
                height: '4.2%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'seven',
              model: '',
              position: {
                top: '35.8%',
                left: '5.3%',
                width: '5.1%',
                height: '20.2%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'eight',
              model: '',
              position: {
                top: '31.8%',
                left: '15.5%',
                width: '5.1%',
                height: '32.2%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'nine',
              model: '',
              position: {
                top: '56%',
                left: '25.8%',
                width: '5.1%',
                height: '12.2%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'ten',
              model: '',
              position: {
                top: '31.9%',
                left: '56.5%',
                width: '5.1%',
                height: '20.2%'
              },
              answer: {
                left: '0'
              }
            }
          ]
        },
        {
          type: 'typer',
          title: 'Ergänze die Erzählung!',
          image: 'pg47ex7',
          trigger: {
            button: {
              top: '57%'
            },
            zone: {
              top: '57%',
              bottom: '7%'
            }
          },
          help: {
            toggle: false,
            text: 'Completeaza povestirea! Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '37.6%',
                left: '41%',
                width: '28%'
              },
              model: '',
              solution: 'Bauernhof'
            },
            {
              identifier: 'two',
              position: {
                top: '42.6%',
                left: '19%',
                width: '19%'
              },
              model: '',
              solution: 'Henne'
            },
            {
              identifier: 'three',
              position: {
                top: '42.6%',
                left: '51%',
                width: '16%'
              },
              model: '',
              solution: 'Küken'
            },
            {
              identifier: 'four',
              position: {
                top: '42.6%',
                left: '79%',
                width: '16%'
              },
              model: '',
              solution: 'Schaf'
            },
            {
              identifier: 'five',
              position: {
                top: '47.6%',
                left: '27%',
                width: '25%'
              },
              model: '',
              solution: 'Ente'
            },
            {
              identifier: 'six',
              position: {
                top: '47.6%',
                left: '65%',
                width: '17%'
              },
              model: '',
              solution: 'Pferd'
            },
            {
              identifier: 'seven',
              position: {
                top: '52.4%',
                left: '14%',
                width: '16%'
              },
              model: '',
              solution: 'Kuh'
            },
            {
              identifier: 'eight',
              position: {
                top: '52.4%',
                left: '55%',
                width: '22%'
              },
              model: '',
              solution: 'Traktor'
            },
            {
              identifier: 'nine',
              position: {
                top: '57.4%',
                left: '21%',
                width: '13%'
              },
              model: '',
              solution: 'Nick'
            },
            {
              identifier: 'ten',
              position: {
                top: '57.4%',
                left: '39%',
                width: '13%'
              },
              model: '',
              solution: 'Halt'
            },
            {
              identifier: 'eleven',
              position: {
                top: '62.4%',
                left: '6%',
                width: '15%'
              },
              model: '',
              solution: 'Hilfe'
            },
            {
              identifier: 'twelve',
              position: {
                top: '62.4%',
                left: '23.5%',
                width: '15%'
              },
              model: '',
              solution: 'Hilfe'
            }
          ]
        }
      ]
    },
    '48': {
      exercise: [
        {
          type: 'checker',
          title: 'Lies die Sätze und kreuze RICHTIG oder FALSCH an!',
          image: 'pg48ex9',
          trigger: {
            button: {
              top: '65%'
            },
            zone: {
              top: '65%',
              bottom: '6%'
            }
          },
          help: {
            toggle: false,
            text: 'Citeste si bifeaza corect (R) sau gresit(F). Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '72.9%',
                left: '54.9%',
                width: '7.3%',
                height: '2.5%'
              },
              answerFalse: {
                top: '11%',
                left: '3%'
              },
              answerTrue: {
                top: '9%',
                left: '58%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '76.5%',
                left: '54.9%',
                width: '7.3%',
                height: '2.5%'
              },
              answerTrue: {
                top: '11%',
                left: '3%'
              },
              answerFalse: {
                top: '11%',
                left: '58%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '80%',
                left: '54.9%',
                width: '7.3%',
                height: '2.5%'
              },
              answerTrue: {
                top: '14%',
                left: '2%'
              },
              answerFalse: {
                top: '11%',
                left: '58%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '83.7%',
                left: '54.9%',
                width: '7.3%',
                height: '2.5%'
              },
              answerFalse: {
                top: '11%',
                left: '2%'
              },
              answerTrue: {
                top: '11%',
                left: '58%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '87.3%',
                left: '54.9%',
                width: '7.3%',
                height: '2.5%'
              },
              answerTrue: {
                top: '11%',
                left: '2%'
              },
              answerFalse: {
                top: '11%',
                left: '58%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '90.8%',
                left: '54.9%',
                width: '7.3%',
                height: '2.5%'
              },
              answerTrue: {
                top: '11%',
                left: '2%'
              },
              answerFalse: {
                top: '11%',
                left: '58%'
              }
            }
          ]
        }
      ]
    },
    '49': {
      exercise: [
        {
          type: 'type',
          title: 'Wie viele Tiere sind auf dem Bild?',
          image: 'pg49ex10',
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '6%'
            }
          },
          help: {
            toggle: false,
            text: 'Numara animalele scrise sub tablou si scrie numarul in casuta. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '83%',
                left: '15.6%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '3'
            },
            {
              identifier: 'two',
              position: {
                top: '83%',
                left: '37.5%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '10'
            },
            {
              identifier: 'three',
              position: {
                top: '83%',
                left: '59.5%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '9'
            },
            {
              identifier: 'four',
              position: {
                top: '83%',
                left: '82.5%',
                width: '6.6%',
                height: '5.5%'
              },
              model: '',
              solution: '5'
            }
          ]
        }
      ]
    },
    '50': {
      exercise: [
        {
          type: 'typer',
          title: 'Schreib die Wörter!',
          image: 'pg50ex11',
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '5%'
            }
          },
          help: {
            toggle: false,
            text: 'Alege si scrie cuvintele potrivite pentru fiecare caseta. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '31%',
                left: '22%',
                width: '20%'
              },
              model: '',
              solution: 'Augen'
            },
            {
              identifier: 'two',
              position: {
                top: '33.7%',
                left: '22%',
                width: '20%'
              },
              model: '',
              solution: 'Nase'
            },
            {
              identifier: 'three',
              position: {
                top: '36.5%',
                left: '22%',
                width: '20%'
              },
              model: '',
              solution: 'Hände'
            },
            {
              identifier: 'four',
              position: {
                top: '39.3%',
                left: '22%',
                width: '20%'
              },
              model: '',
              solution: 'Füße'
            },
            {
              identifier: 'five',
              position: {
                top: '26.1%',
                left: '58%',
                width: '20%'
              },
              model: '',
              solution: 'Jogurt'
            },
            {
              identifier: 'six',
              position: {
                top: '28.9%',
                left: '58%',
                width: '20%'
              },
              model: '',
              solution: 'Banane'
            },
            {
              identifier: 'seven',
              position: {
                top: '31.7%',
                left: '58%',
                width: '20%'
              },
              model: '',
              solution: 'Käse'
            },
            {
              identifier: 'eight',
              position: {
                top: '34.5%',
                left: '58%',
                width: '20%'
              },
              model: '',
              solution: 'Apfel'
            },
            {
              identifier: 'nine',
              position: {
                top: '72%',
                left: '22%',
                width: '20%'
              },
              model: '',
              solution: 'Henne'
            },
            {
              identifier: 'ten',
              position: {
                top: '74.9%',
                left: '22%',
                width: '20%'
              },
              model: '',
              solution: 'Pferd'
            },
            {
              identifier: 'eleven',
              position: {
                top: '77.7%',
                left: '22%',
                width: '20%'
              },
              model: '',
              solution: 'Kuh'
            },
            {
              identifier: 'twelve',
              position: {
                top: '80.5%',
                left: '22%',
                width: '20%'
              },
              model: '',
              solution: 'Schwein'
            },
            {
              identifier: 'thirteen',
              position: {
                top: '70.5%',
                left: '60%',
                width: '20%'
              },
              model: '',
              solution: 'tanzen'
            },
            {
              identifier: 'fourteen',
              position: {
                top: '73.3%',
                left: '60%',
                width: '20%'
              },
              model: '',
              solution: 'singen'
            },
            {
              identifier: 'fifteen',
              position: {
                top: '76.1%',
                left: '60%',
                width: '20%'
              },
              model: '',
              solution: 'fliegen'
            },
            {
              identifier: 'sixteen',
              position: {
                top: '79%',
                left: '60%',
                width: '20%'
              },
              model: '',
              solution: 'klatschen'
            }
          ]
        }
      ]
    }
  }
}
