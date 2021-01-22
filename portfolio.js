(() => {

  const portfolio = [

    {
      title: 'ONE MINUTE FESTIVAL 2019',
      synopsis: 'Studenten Audiovisual Design organiseren elk jaar het One Minute Festival. Deze liveshow organiseren ze volledig zelf en wordt live uitgezonden. Studenten kunnen hun video van 1 minuut opsturen en hieruit worden verschillende winnaars gekozen onder verschillende categorieën. In 2019 was het al de tiende editie van dit festival.',
      thumbnailUrl: 'https://dl.airtable.com/.attachments/390f09ce47764815c0373ff6110fe39f/97d1e2dc/88357350_2821450874557657_2180164243133825024_n.jpg',
      likes: Math.floor(Math.random() * 20000),
      views: Math.floor(Math.random() * 100000),
      created: new Date(1587731519000),
      modified: new Date(1588239984000),
      assets: [
        {
          title: 'Eerste asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/8503b35090ac88e310bb039ec0f70660/f6629191/65103218_2327890440580372_4914994856524251136_o.jpg',
        },
        {
          title: 'Tweede asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/5a9d3716191331482915faa0d56a724c/6493b895/65305565_2327888483913901_316772443878326272_o.jpg',
        },
        {
          title: 'Derde asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/ea2c5ceb9790902e76107af87709cd81/ec7d8a40/65809481_2327891177246965_7676042697613770752_o.jpg',
        },
        {
          title: 'Vierde asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/0324ba839af5828a98f2caf7c6125064/e7f012d3/65078300_2327882660581150_2781483372793298944_o.jpg',
        },
        {
          title: 'Vijfde asset',
          type: 'Video',
          sourceUrl: 'https://youtu.be/Cppp1pnoF-8',
        }
      ]
    },
    {
      title: 'O3DA03: OEFENING IN ISOMETRIC DESIGN',
      synopsis: 'De bedoeling van deze opdracht is een "stilleven" te maken in Isometric Design. Ook al komt er geen "Motion" aan te pas, toch moet het beeld een lengte hebben van 20 seconden. Maak er een boeiende 20 seconden van waarin ik me kan verliezen in een mooie verhaallijn, strak design of fijne details.',
      thumbnailUrl: 'https://dl.airtable.com/.attachments/5ad3689d8b96732f8509ae752f3edb92/7c3f26fc/projects_lg_09_3Da03_3Danim1_2017_18_Jelle_DHondt.jpg',
      likes: Math.floor(Math.random() * 20000),
      views: Math.floor(Math.random() * 100000),
      created: new Date(1586962961000),
      modified: new Date(1587984989000),
      assets: [
        {
          title: 'Eerste asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/58abc22ac11e37a7091cdfca44555711/cc4eb547/projects_lg_09_3Da03_3Danim1_2017_18_Jelle_DHondt.jpg',
        },
        {
          title: 'Tweede asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/0a96f59a621f4d3cc1188d4c25afd847/14d5e019/projects_lg_13_3Da03_3Danim1_2017_18_Lisanne_Debrabandere.jpg',
        },
        {
          title: 'Derde asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/22fac8bd38704351500aad34f790e420/4bb03223/projects_lg_14_3Da03_3Danim1_2017_18_Jeroen_Depauw.jpg',
        },
        {
          title: 'Vierde asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/4518ca9731523b38349c8c1ec848786a/d657d527/projects_lg_19_3Da03_3DanimI_2017_18_Simon_Hoornaert.jpg',
        },
        {
          title: 'Vijfde asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/a6a7e31e99f502dda02cf721daa0cd50/af4deb31/projects_lg_21_3Da03_3DanimI_2017_18_Mat_Huylebroeck.jpg',
        },
        {
          title: 'Zesde asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/05cb56288bb3ee3892931d22b12722cc/c8300204/projects_lg_24_3Da03_3DanimI_2017_18_Helena_Mestdag.jpg',
        },
        {
          title: 'Zevende asset',
          type: 'Image',
          sourceUrl: 'https://dl.airtable.com/.attachments/3817ec3a35bfbc9158881f44d6d5c367/0cac6146/projects_lg_51_3Da03_3Danim1_2017_18_Inge_Verschatse.jpg',
        }
      ]
    }
  ];

  const app = {

    initialize: function () {
      this.showProjectsInConsole();
    },

    showProjectsInConsole: function () {
      let tempStr = `
============================================================================================
|                                        PORTFOLIO                                         |
============================================================================================`;
      tempStr += this.getStringForProjects(this.portfolio);
      console.log(tempStr);
    },

    getStringForProjects: function () {
      let tempStr = '';
      tempStr += portfolio.map((proj, index) => {
        
        function getStringForAssets () {
          let tempAssStr = '';
          tempAssStr += proj.assets.map((ass, index) => {
            return `Asset ${index + 1}: \t${proj.title} - ${ass.type} 00${ass.type == 'Image' ? (index + 1) : ((index - (index - 1)))} (type ${ass.type}) \n \t\t${ass.sourceUrl}\n`
          }).join('');
          return tempAssStr;
        }

        return `
Project ${index + 1}: \t${proj.title}
============================================================================================
Synopsis: \t${proj.synopsis}
Thumbnail: \t${proj.thumbnailUrl}
Likes: \t\t${proj.likes}
Views: \t\t${proj.views}
Created at: \t${proj.created.toUTCString()}
Modified at: \t${proj.modified.toUTCString()}
--------------------------------------------------------------------------------------------
Assets
--------------------------------------------------------------------------------------------;
${getStringForAssets ()}============================================================================================`;
          }).join('');
      return tempStr;
    },
  };

  app.initialize();

})();