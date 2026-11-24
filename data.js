/* Masters Security FC content. Replace provisional contact details, fixtures and claims with club-confirmed information. */
const COACH = "coach.jpg";
const PH = {
  hero:"hero (1).jpg", about:"team (1).jpg", stadium:"mitundu.jpg", train:"training.jpg",
  celebrate:"mitundu.jpg", act:"warmup-portrait.jpg", act2:"action-player.jpg",
  team16:"team (1).jpg", coach16:"coach-wide (1).jpg"
};
const D = {
  club: {
    name:"Masters Security FC", logo:"masters_fc_logo.svg", city:"Lilongwe, Malawi", league:"FDH Bank Premiership", season:"2026/27",
    tagline:"My People, My Football", motto:"My People, My Football",
    intro:"Masters Security FC are a Lilongwe-based club competing in Malawi's top flight and the FDH Bank Premiership.",
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
    {name:"Williams",number:1,role:"Goalkeeper"},{name:"Mpirisi",number:8,role:"Midfielder"},
    {name:"Saidi",number:9,role:"Forward"},{name:"Ali",number:10,role:"Midfielder"},
    {name:"Majuti",number:11,role:"Midfielder"},{name:"M'Madi",number:12,role:"Midfielder"},
    {name:"Tseteka",number:13,role:"Midfielder"},{name:"Chinjoka",number:15,role:"Defender"},
    {name:"Butawo",number:17,role:"Player (Captain — 15 Nov)"},{name:"Machira",number:26,role:"Player"},
    {name:"Mlenga",number:30,role:"Player"},
    {name:"Banda Rashid",role:"Substitute"},{name:"Mapila Hassan",role:"Substitute"},
    {name:"Precious Sambani",role:"Player (reported captain)"},{name:"Hastings Ndau",role:"Winger, 21"},
    {name:"Luke Chima",role:"Forward"},{name:"Enock Kaunga",role:"Forward"},
    {name:"Hassan Kajoke",role:"Player"},{name:"Abraham Makumba",role:"Player"},
    {name:"Frank Sanudi",role:"Player"},{name:"Khuda Muyaba",role:"Striker"},
    {name:"Mike Mkwate",role:"Player"},{name:"Mclean Mwale",role:"Goalkeeper"}
  ],
  sponsors:[
    {n:"Master Group of Companies",tier:"Club backer",logo:"master-group-logo.png",url:"https://www.facebook.com/MSGROUPMW/"},
    {n:"MWOS — Moors World of Sport",tier:"Sports partner",logo:"mwos-logo.png",url:"https://mwos.bet"},
    {n:"Karls Solutions",tier:"Club partner",logo:"karls-solutions-logo.png",url:"https://www.facebook.com/karlsolutions/"},
    {n:"Chisomo Electronics Malawi",tier:"Club partner",logo:"chisomo-electronics-logo.png",url:"#contact"}
  ],
  staff:[
    {name:"Peter Mponda",role:"Head Coach",photo:COACH},
    {name:"Amidu Mustafa",role:"Assistant Coach",photo:""},
    {name:"Albert Tseka",role:"Tech Manager",photo:""},
    {name:"Dustin Mzokomela",role:"Tech Director",photo:""},
    {name:"Francis Songo",role:"Youth Director",photo:""}
  ],
  news:[
    {d:"2026-11-22",cat:"Match Report",t:"Red card turns the tide as Mitundu come from behind",b:"Masters Security FC went ahead at Dedza Stadium through Luke Chima in the 48th minute, set up by Hassan Kajoke. Captain Precious Sambani was sent off in the 65th minute. LUANAR Mitundu levelled through Raheem Mtondera and won it through Emmanuel Nyakutepa, finishing 2–1.",s:"Malawi24",u:"https://malawi24.com/2026/11/22/mitundu-stun-masters/",img:"act"},
    {d:"2026-10-16",cat:"Community",t:"Masters Security FC partner with Chibiso Motors to train players for life after football",b:"Eligible players will receive three months of practical automotive training covering mechanics, panel beating, bodywork and car polishing, valued at K1.5 million each. The monthly Player of the Month winner also receives K350,000.",s:"Malawi24",u:"https://malawi24.com/2026/10/16/masters-fc-players-prepare-for-life-after-football/",img:"train"},
    {d:"2026-08-09",cat:"Match Report",t:"Narrow win over Civo Service lifts Masters Security FC into the top five",b:"A 1–0 victory at Nankhaka Stadium in Lilongwe moved Masters Security FC into the top five of the Premiership in week 12.",s:"Nyasa Times",u:"https://www.nyasatimes.com/masters-climb-into-fdh-premiership-top-five-with-narrow-win-over-civo-service-united/",img:"act2"},
    {d:"2026-07-01",cat:"Player Spotlight",t:"Hastings Ndau scores the Premiership's first hat-trick of the season",b:"The 21-year-old winger was named Man of the Match as Masters Security FC beat Dedza Dynamos 4–0.",s:"Maravi Express",u:"https://www.maraviexpress.com/masters-fcs-21-year-old-winger-hastings-ndau-scored-first-hat-trick-of-fdh-bank-premiership/",img:"team16"},
    {d:"2026-09-01",cat:"Transfers",t:"Masters Security FC confirm signings of Khuda Muyaba and Mike Mkwate",b:"Nyasa Times reports the club announced both players. The date shown is approximate and should be confirmed before publication.",s:"Nyasa Times",u:"https://www.nyasatimes.com/masters-confirm-signing-of-muyaba-and-mkwate/",img:"coach16"}
  ],
  about:[
    "Masters Security FC entered Malawi's top flight after taking over the trading rights of NDL side Baka City, according to published reports. Please confirm this history with the club before treating it as official.",
    "Early results were strong, with wins in the opening matches putting Masters Security FC near the top of the table.",
    "The club has reported investing in players' futures through a vocational training partnership with Chibiso Motors.",
    "Masters Security FC is reported to have won the Carlsberg Cup in 2018. Historical details should be verified with the club."
  ],
  stats:[]
};

// Turn sponsor cards into linked logo cards after the static renderer creates them.
(() => {
  const enhance = () => {
    document.querySelectorAll(".partner").forEach(card => {
      if (card.dataset.linked === "true") return;
      const sponsor = (D.sponsors || []).find(item => item.n === card.querySelector(".partner-name")?.textContent?.trim());
      if (!sponsor) return;
      const anchor = document.createElement("a");
      anchor.className = "partner partner-link";
      anchor.href = sponsor.url;
      if (/^https:\/\//.test(sponsor.url)) {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
      const image = document.createElement("img");
      image.src = sponsor.logo;
      image.alt = sponsor.n;
      image.loading = "lazy";
      image.onerror = () => { image.replaceWith(document.createTextNode(sponsor.n)); };
      const name = card.querySelector(".partner-name");
      if (name) name.replaceChildren(image);
      anchor.append(...card.childNodes);
      anchor.dataset.linked = "true";
      card.replaceWith(anchor);
    });
    document.querySelectorAll(".section-dark .stats").forEach(stats => stats.closest(".section-dark")?.remove());
  };
  const styles = document.createElement("style");
  styles.textContent = ".partner-link { color: inherit; text-decoration: none; cursor: pointer; } .partner-link:hover { transform: translateY(-2px); }";
  document.head.append(styles);
  new MutationObserver(enhance).observe(document.documentElement, {childList:true, subtree:true});
  document.addEventListener("DOMContentLoaded", enhance, {once:true});
})();
