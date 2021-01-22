(() => {

  const news = [
  
    {
      title: 'GROUND2SKY (STUDENT-ONDERNEMER)',
      synopsis: 'Dinsdag 20 februari ging er een workshop rond drones door op onze campus. En welk bedrijf kwam deze workshop geven?',
      body: 'Niemand minder dan onze eigenste GDM-student Tomas Hoste, met zijn bedrijf Ground2Sky.Gelukkig viel het weer mee, waardoor de geïnteresseerde studenten een initiatie “vliegen met drones” konden meevolgen in de gezonde buitenlucht.Hoe ging dat eraan toe? Tomas runt het bedrijf Ground2Sky samen met zijn vader, naast zijn studentenleven. In 2014 werd hij reeds door GoPro geprezen als “video van de dag”, met zijn knappe compilatie van zijn roadtrip door Utah. Iets dat ook de VRT en andere persbedrijven zeker niet ongemerkt voorbij lieten gaan!Je kan zijn voorbije producties volgen via zijn YouTube-kanaal.Naast zijn audiovisuele producties en drones-business, is Tomas ook een fervente reiziger. Zijn roadmaps & blog kan je vinden onder Kalaman Travel.',
      thumbnailUrl: 'https://dl.airtable.com/.attachments/c36f9364163442c261e4717af7803c19/47ed76bd/posts_lg_28699109_1989830077937744_5372907581299522850_o.jpg',
      created: new Date(1582964163000),
      modified: new Date(1584801934000),
      authors: [
        {
          firstName: 'Lisa',
          lastName: 'De Wilde'
        }
      ],
      comments: [
        {
          comment: 'Is chroma subsampling normaal voor video opnames? Lijkt me toch onwenselijk dat je bron materiaal al chroma subsampling heeft',
          nickName: 'Gamebuster'
        },
        {
          comment: 'Voor wat betreft het formaat, dat kon al langer in de vorm van actioncamera\'s. Maar ik weet niet goed of hier een doelgroep voor is, of eigenlijk bedoel ik of die doelgroep de prijs wil betalen. Wellicht is het iets voor medische afdelingen als monitor voor patiënten?',
          nickName: 'antonyv'
        },
        {
          comment: 'Wow super naice, en dan die hoge output over HDMI en dat je dus meerdere video signalen tegelijk hebt. Lijpe camera, echt ideaal voor live streamen van kerkdiensten. Je ploft er zo paar bij de band en kan van afstand bedienen.',
          nickName: 'Gelomidor'
        }
      ]
    },
    {
      title: 'HERLINDE DERYCKE WINT DE FEBELGRA-PRIJS 2019',
      synopsis: 'Herlinde Derycke wint de Febelgra-prijs 2019',
      body: 'Studente Herlinde Derycke, afgestudeerd in de afstudeerrichting Grafimediabeleid, wint de Febelgra-prijs 2019. Die is uitgereikt op de proclamatieviering 5 oktober 2019 in Gent. Febelgra, de beroepsvereniging van de Belgische grafische industrie, reikt elk jaar de Febelgra-prijs uit aan een student wie uitzonderlijk werk heeft geleverd tijdens zijn of haar studie en uitblonk als ambassadeur is voor de grafische sector. Martin Desmaele van Febelgra: “In haar presentatie liet Herlinde snel blijken dat ze een uitstekende ambassadrice is voor onze branche. Zowel technisch-inhoudelijk als verbaal liet ze zich van haar sterkste kant zien.” Haar bachelorproef handelt over de problematiek en duurzame oplossingen binnen de verpakkingswereld waar ze op zoek gaat naar opportuniteiten en innovaties voor bedrijven om hun duurzaamheid te optimaliseren. Tijdens haar verdediging vertelde ze ook hoe ze energie haalt uit de passie en gedrevenheid van haar docenten. Desmaele is onder de indruk van de studente: “Wij zijn ervan overtuigd dat ze een enorme meerwaarde zal betekenen voor het werkveld en dat ze haar professionele ambities tot een goed einde zal brengen.” Andere genomineerde studenten waren Jordy Van der Haegen, afgestudeerd in de richting Multimediaproductie en Céline Van Nieuwenhuyse, afgestudeerd in de richting Crossmedia-ontwerp.',
      thumbnailUrl: 'https://dl.airtable.com/.attachments/44d28e423b0b92ea6433db31b10dbe2b/2d56ac9b/febelgra-IMG_1209kl_2.jpg',
      created: new Date(1570869408000),
      modified: new Date(1573734319000),
      authors: [
        {
          firstName: 'Lisa',
          lastName: 'De Wilde'
        }
      ],
      comments: [
        {
          comment: 'Interessant (video)camera die overigens helemaal niet zo compact is. De bedoeling is dat je gebruik maakt van een gimbal, er komt nog een flinke accu die uitsteekt plus een beeldschermpje bovenop ingeplugd moet worden. Ben wel heel benieuw naar de resultaten bij weinig licht.',
          nickName: 'Tweddy'
        },
        {
          comment: 'Is dit een body waar nog een lens op moet?',
          nickName: 'Icefellow'
        },
        {
          comment: 'Ben ik de enige die dit ziet als een camera voor 3d muur.',
          nickName: 'tailfox'
        }
      ]
    }
  ];
  
  const app = {
  
    initialize: function () {
      this.showPostsInConsole();
    },

    showPostsInConsole: function () {
      let tempStr = `
=============================================================================================
|                                           NEWS                                            |
=============================================================================================`;
      tempStr += this.getStringForPosts(this.news);
      console.log(tempStr);
    },
  
    getStringForPosts: function () {
      let tempStr = '';
      tempStr += news.map((post, index) => {
        
        function getStringForAuthors () {
          let tempAuthorsStr = '';
          tempAuthorsStr += post.authors.map((aut, index) => {
            return `Author ${index + 1}: \t${aut.firstName} ${aut.lastName}\n`
          }).join('');
          return tempAuthorsStr;
        }

        function getStringForComments () {
          let tempCommentsStr = '';
          tempCommentsStr += post.comments.map((com) => {
            return `* ${com.comment}\n  Written by: ${com.nickName}\n`
          }).join('');
          return tempCommentsStr;
        }
      
      return `
Post ${index + 1}: ${post.title}
============================================================================================
Synopsis: \t${post.synopsis}
body: \t\t<p>${post.body}</p>
Thumbnail: \t${post.thumbnailUrl}
Created at: \t${post.created.toUTCString()}
Modified at: \t${post.modified.toUTCString()}
--------------------------------------------------------------------------------------------
Authors
--------------------------------------------------------------------------------------------
${getStringForAuthors ()}--------------------------------------------------------------------------------------------
Comments
--------------------------------------------------------------------------------------------
${getStringForComments ()}============================================================================================`;
      }).join('');
      return tempStr;
    }
  };
  
  app.initialize();
  
})();