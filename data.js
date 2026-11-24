/* Masters FC content. Replace provisional contact details, fixtures and claims with club-confirmed information. */
const COACH = "coach.jpg";
const PH = {
  hero:"hero (1).jpg", about:"team (1).jpg", stadium:"mitundu.jpg", train:"training.jpg",
  celebrate:"mitundu.jpg", act:"warmup-portrait.jpg", act2:"action-player.jpg",
  team16:"team (1).jpg", coach16:"coach-wide (1).jpg"
};
const D = {
  club: {
    name:"Masters FC", city:"Lilongwe, Malawi", league:"FDH Bank Premiership", season:"2026/27",
    tagline:"My People, My Football", motto:"My People, My Football",
    intro:"Masters FC are a Lilongwe-based club who earned their place in Malawi's top flight through the National Division League and compete in the FDH Bank Premiership.",
    ground:"Nankhaka Stadium, Lilongwe (please confirm)", email:"info@example.com (TBC)", phone:"+265 000 000 000 (TBC)",
    social:{Facebook:"#", X:"#", Instagram:"#"}
  },
  photos:PH,
  results:[
    {d:"2026-11-22",opp:"LUANAR Mitundu FC",ha:"A",gf:1,ga:2,v:"Dedza Stadium",c:"League"},
    {d:"2026-08-09",opp:"Civo Service United",ha:"H",gf:1,ga:0,v:"Nankhaka Stadium, Lilongwe",c:"League"},
    {d:"2026-05-17",opp:"Silver Strikers",ha:"A",gf:0,ga:3,v:"Away",c:"League"},
    {d:"2026-05-11",opp:"LUANAR Mitundu FC",ha:"H",gf:2,ga:0,v:"Home",c:"League"},
    {d:"2026-04-26",opp:"Chitipa United",ha:"H",gf:1,ga:0,v:"Home",c:"League"}
  ],
  upcoming:[],
  squad:[
    {name:"Precious Sambani",role:"Captain"},{name:"Hastings Ndau",role:"Winger, 21"},
    {name:"Luke Chima",role:"Forward"},{name:"Enock Kaunga",role:"Forward"},
    {name:"Hassan Kajoke",role:"Player"},{name:"Abraham Makumba",role:"Player"},
    {name:"Frank Sanudi",role:"Player"},{name:"Khuda Muyaba",role:"Striker"},
    {name:"Mike Mkwate",role:"Player"},{name:"Mclean Mwale",role:"Goalkeeper"}
  ],
  sponsors:[
    {n:"FDH Bank",tier:"League partner",logo:""},{n:"Masters Finance",tier:"Shirt partner",logo:""},
    {n:"Chibiso Motors",tier:"Player development partner",logo:""},{n:"Masters Group",tier:"Club backer",logo:""}
  ],
  staff:[{name:"Peter Mponda",role:"Head Coach",photo:COACH}],
  news:[
    {d:"2026-11-22",cat:"Match Report",t:"Red card turns the tide as Mitundu come from behind",b:"Masters went ahead at Dedza Stadium through Luke Chima in the 48th minute, set up by Hassan Kajoke. Captain Precious Sambani was sent off in the 65th minute. LUANAR Mitundu levelled through Raheem Mtondera and won it through Emmanuel Nyakutepa, finishing 2–1.",s:"Malawi24",u:"https://malawi24.com/2026/11/22/mitundu-stun-masters/",img:"act"},
    {d:"2026-10-16",cat:"Community",t:"Masters partner with Chibiso Motors to train players for life after football",b:"Eligible players will receive three months of practical automotive training covering mechanics, panel beating, bodywork and car polishing, valued at K1.5 million each. The monthly Player of the Month winner also receives K350,000.",s:"Malawi24",u:"https://malawi24.com/2026/10/16/masters-fc-players-prepare-for-life-after-football/",img:"train"},
    {d:"2026-08-09",cat:"Match Report",t:"Narrow win over Civo Service lifts Masters into the top five",b:"A 1–0 victory at Nankhaka Stadium in Lilongwe moved Masters into the top five of the Premiership in week 12.",s:"Nyasa Times",u:"https://www.nyasatimes.com/masters-climb-into-fdh-premiership-top-five-with-narrow-win-over-civo-service-united/",img:"act2"},
    {d:"2026-07-01",cat:"Player Spotlight",t:"Hastings Ndau scores the Premiership's first hat-trick of the season",b:"The 21-year-old winger was named Man of the Match as Masters beat Dedza Dynamos 4–0.",s:"Maravi Express",u:"https://www.maraviexpress.com/masters-fcs-21-year-old-winger-hastings-ndau-scored-first-hat-trick-of-fdh-bank-premiership/",img:"team16"},
    {d:"2026-09-01",cat:"Transfers",t:"Masters confirm signings of Khuda Muyaba and Mike Mkwate",b:"Nyasa Times reports the club announced both players. The date shown is approximate and should be confirmed before publication.",s:"Nyasa Times",u:"https://www.nyasatimes.com/masters-confirm-signing-of-muyaba-and-mkwate/",img:"coach16"}
  ],
  about:[
    "Masters FC entered Malawi's top flight after taking over the trading rights of NDL side Baka City, according to published reports. Please confirm this history with the club before treating it as official.",
    "Early results were strong, with wins in the opening matches putting Masters near the top of the table.",
    "The club has reported investing in players' futures through a vocational training partnership with Chibiso Motors.",
    "Masters Security FC is reported to have won the Carlsberg Cup in 2018. Historical details should be verified with the club."
  ],
  stats:[["K1.5M","Reported training value per player"],["K350K","Reported Player of the Month prize"],["36K","Reported Facebook followers"],["2018","Reported Carlsberg Cup win"]]
};
