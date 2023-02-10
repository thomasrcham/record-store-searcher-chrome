const form = document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let searchTerm = searchTermPrep(e.target.search.value);

  function workpls() {
    alert("pls");
  }
  let searchStr;

  for (let i = 0; i < stores.length; i++) {
    searchStr = stores[i].Search === 1 ? "search?q=" : stores[i].Search;
    console.log(searchStr);
    chrome.tabs.create({
      url: `${stores[i].Website}${searchStr}${searchTerm}`,
      active: false,
    });
  }
});

const searchTermPrep = (term) => {
  let query = term.split(" ").join("+");
  return query;
};

const stores = [
  {
    Store: "10,000 Hz",
    Website: "https://10000hzrecords.com/",
    Search: 1,
  },
  {
    Store: "Plaid Room",
    Website: "https://www.plaidroomrecords.com/",
    Search: 1,
  },
  {
    Store: "Mad World",
    Website: "https://madworldrecordstx.com/",
    Search: 1,
  },
  {
    Store: "Cameron",
    Website: "https://cameronrecords.com/",
    Search: 1,
  },
  {
    Store: "Comeback Vinyl",
    Website: "https://comebackvinyl.com/",
    Search: "?post_type=product&s=",
  },
  {
    Store: "Seasick Records",
    Website: "https://seasickbham.com/",
    Search: 1,
  },
  {
    Store: "SolSta Records",
    Website: "https://solstarecords.com/",
    Search: 1,
  },
  {
    Store: "Knick Knack",
    Website: "https://knickknackrecords.com/",
    Search: 1,
  },
  {
    Store: "Thrillhouse",
    Website: "https://thrillhouserecords.com/",
    Search: 1,
  },
  {
    Store: "Audiogazing",
    Website: "http://www.audiogazingmusic.com/",
    Search: "search.php?search_query=",
  },
  {
    Store: "Desert Island",
    Website: "https://desertislandrecords.com/",
    Search: 1,
  },
  {
    Store: "Tarik Records (fka Metamodern Music)",
    Website: "https://www.tarikrecords.com/",
    Search: 1,
  },
  {
    Store: "Studio Records",
    Website: "https://studiorecordstulsa.com/",
    Search: "shop-online/ols/search?keywords=",
  },
  {
    Store: "Port of Sound",
    Website: "https://portofsoundrecords.com/",
    Search: 1,
  },
  {
    Store: "Hi-Fi Hits",
    Website: "https://www.hi-fihits.com/product-category/new-vinyl-lp/",
    Search: "?post_type=product&s=",
  },
  {
    Store: "Underdog Records",
    Website: "https://www.underdogrecordswsnc.com/",
    Search: 1,
  },
  {
    Store: "Nail City",
    Website: "https://nailcityrecord.com/",
    Search: 1,
  },
  {
    Store: "Reb Records",
    Website: "https://rebrecordsmd.com/",
    Search: 1,
  },
  {
    Store: "Shuga",
    Website: "https://www.shugarecords.com/",
    Search: 1,
  },
  {
    Store: "Tone Deaf",
    Website: "https://tonedeafrecs.com/",
    Search: 1,
  },
  {
    Store: "Mobius Records",
    Website: "https://www.mobiusrecordshop.com/s/",
    Search: 1,
  },
  {
    Store: "Lunchbox Records",
    Website: "https://lunchboxrecords.com/",
    Search: 1,
  },
  {
    Store: "Bull City",
    Website: "https://www.bullcityrecords.com/",
    Search: 1,
  },
  {
    Store: "Euclid Records",
    Website: "https://www.euclidrecords.com/",
    Search: "catalog/search.jsp?action=new&searchwords=",
  },
  {
    Store: "Black Dots",
    Website: "https://blackdotsbuffalo.shop/",
    Search: 1,
  },
  {
    Store: "Yellow Dog",
    Website: "https://www.yellowdogdiscs.com/",
    Search: 1,
  },
  {
    Store: "Record Stop",
    Website: "https://record-stop.com/",
    Search: 1,
  },
  {
    Store: "Square Cat",
    Website: "https://www.squarecatvinylshop.com/s/",
    Search: 1,
  },
  {
    Store: "Heavy Heads",
    Website: "https://www.heavyheadsrecords.com/",
    Search: "search-results?q=",
  },
  {
    Store: "Lagniappe Records",
    Website: "https://lagniapperecords.com/",
    Search: "search?keyword=",
  },
  {
    Store: "All The Best",
    Website: "https://www.allthebestflorence.com/",
    Search: 1,
  },
  {
    Store: "Vinyl Oasis",
    Website: "https://www.vinyloasisocala.com/",
    Search: "search-results-page/",
  },
  {
    Store: "Technique Records",
    Website: "https://www.techniquerecords.com/",
    Search: 1,
  },
  {
    Store: "Smartpunk",
    Website: "https://smartpunkshop.com/",
    Search: 1,
  },
  {
    Store: "Sound Exchange",
    Website: "https://www.soundexchangetampabay.com/",
    Search: "index.php/advanced-search/?search_text=",
  },
  {
    Store: "Beachside Retro",
    Website: "https://www.beachsideretro.com/",
    Search: "search?keyword=",
  },
  {
    Store: "Autumn Records",
    Website: "https://www.autumnrecordsvt.com/s/",
    Search: 1,
  },
  {
    Store: "Burlington Records",
    Website: "https://www.burlingtonrecords.com/s/",
    Search: 1,
  },
  {
    Store: "Mel's Record Shop",
    Website: "https://melsrecordshop.square.site/s/",
    Search: 1,
  },
  {
    Store: "Dyno Records",
    Website: "https://dynorecords.com/",
    Search: "?post_type=product&s=",
  },
  {
    Store: "Joe's Albums",
    Website: "https://www.joesalbums.com/",
    Search: 1,
  },
  {
    Store: "Iris Records",
    Website: "https://www.irisrecordsjc.com/s/",
    Search: 1,
  },
  {
    Store: "Squeezebox Records",
    Website: "https://shopsqueezeboxrecords.com/",
    Search: "shop/ols/search?keywords=",
  },
  {
    Store: "Byrdland Records",
    Website: "https://shop.byrdlandrecords.com/",
    Search: 1,
  },
  {
    Store: "Sorry State Records",
    Website: "https://www.sorrystaterecords.com/",
    Search: 1,
  },
  {
    Store: "Modern Legend",
    Website: "https://modern-legend.com/",
    Search: 1,
  },
  {
    Store: "The Pour House",
    Website: "https://the-pour-house-record-shop.myshopify.com/",
    Search: 1,
  },
  {
    Store: "Deaf Man",
    Website: "https://www.deafmanvinyl.com/",
    Search: 1,
  },
  {
    Store: "Yellow Racket",
    Website: "https://yellowracketcha.com/",
    Search: 1,
  },
  {
    Store: "AndVinyl",
    Website: "https://www.andvinyl.com/s/",
    Search: 1,
  },
  {
    Store: "Luna Record Shop",
    Website: "https://lunarecordshop.com/",
    Search: 1,
  },
  {
    Store: "Goner Records",
    Website: "https://goner-records.com/",
    Search: 1,
  },
  {
    Store: "Jet Age Records",
    Website: "https://www.jetagerecords.com/shop/",
    Search: "?s=",
  },
  {
    Store: "Roar Records",
    Website: "https://www.roarrecs.com/",
    Search: 1,
  },
  {
    Store: "Torn Light Records",
    Website: "https://www.tornlightrecords.com/",
    Search: "?post_type=product&s=",
  },
  {
    Store: "Spoonful Records",
    Website: "https://spoonfulrecordsohio.com/",
    Search: 1,
  },
  {
    Store: "Shake It Records",
    Website: "https://www.shakeitrecords.com/",
    Search: 1,
  },
  {
    Store: "Vinylgram",
    Website: "https://vinylgram.com/",
    Search: 1,
  },
  {
    Store: "The Record Lounge",
    Website: "https://www.therecordloungereotown.com/s/",
    Search: 1,
  },
  {
    Store: "Going Underground",
    Website: "https://www.goingundergroundrecords.com/",
    Search: "search?type=product&q=",
  },
  {
    Store: "Programme",
    Website: "https://www.programmehq.com/",
    Search: "?post_type=product&s=",
  },
  {
    Store: "Third Eye",
    Website: "https://www.thirdeyerecordslb.com/s/",
    Search: 1,
  },
  {
    Store: "High Fidelity",
    Website: "https://highfidelityla.com/",
    Search: 1,
  },
  {
    Store: "Fatbeats",
    Website: "https://www.fatbeats.com/",
    Search: 1,
  },
  {
    Store: "Stranded",
    Website: "https://www.strandedrecords.com/",
    Search: 1,
  },
  {
    Store: "Zoinks",
    Website: "https://www.zoinksrecords.com/",
    Search: 1,
  },
  {
    Store: "Power Plant Records",
    Website: "https://power-plant-records.myshopify.com/",
    Search: 1,
  },
  {
    Store: "The Next Record Store",
    Website: "https://the-next-record-store.square.site/s/",
    Search: 1,
  },
  {
    Store: "Zia Records",
    Website: "https://www.ziarecords.com/",
    Search: 1,
  },
  {
    Store: "Good Day Sunshine",
    Website: "https://good-day-sunshine-record-shop.square.site/s/",
    Search: 1,
  },
  {
    Store: "Silver Platters",
    Website: "https://www.silverplatters.com/",
    Search: 1,
  },
  // {
  //   ~CANNOT BUY ONLINE~
  //   Store: "Rainy Day",
  //   Website: "http://rainydayolympia.net/new-music/",
  //   Search: "?query=",
  // },
  {
    Store: "Hi-Voltage",
    Website: "https://hivoltagerecords.com/",
    Search: 1,
  },
  {
    Store: "Atomic Genius",
    Website: "https://www.atomicgeniusrecords.com/s/",
    Search: 1,
  },
  {
    Store: "Adventure Underground",
    Website: "https://www.advunderground.com/",
    Search: "search?query=",
  },
  {
    Store: "606 Records",
    Website: "https://www.606records.com/",
    Search: 1,
  },
  {
    Store: "Beverly Phono Mart",
    Website: "https://www.beverlyphonomart.com/",
    Search: "search-results?q=",
  },
  {
    Store: "Dusty Groove",
    Website: "https://www.dustygroove.com/",
    Search: "search.php?sf=",
  },
  {
    Store: "Pinwheel",
    Website: "https://pinwheelrecords.square.site/s/",
    Search: 1,
  },
  {
    Store: "Record Breakers",
    Website: "https://shop.recordbreakerschi.com/",
    Search: 1,
  },
  {
    Store: "Rediscover",
    Website: "https://www.rediscoverrecords.com/",
    Search: "search.html?searchword=",
  },
  {
    Store: "Waiting Room",
    Website: "https://waitingroomrecords.com/",
    Search: 1,
  },
  {
    Store: "Vals Halla",
    Website: "https://valshallarecords.com/",
    Search: "?s=",
  },
  {
    Store: "Antone's",
    Website: "https://antonesrecordshop.com/",
    Search: 1,
  },
  {
    Store: "Spinster",
    Website: "https://www.spinsterrecords.com/",
    Search: 1,
  },
  {
    Store: "Good Records",
    Website: "https://goodrecordstogo.myshopify.com/",
    Search: 1,
  },
  {
    Store: "Hybrid",
    Website: "https://hybridrecordstx.com/",
    Search: 1,
  },
  {
    Store: "Fourth Rock",
    Website: "https://fourthrockrecords.com/",
    Search: "?ixwpss=",
  },
  {
    Store: "Record Town",
    Website: "https://recordtowntx.com/",
    Search: 1,
  },
  {
    Store: "NH Vintage Vinyl",
    Website: "https://nhvintagevinyl.com/",
    Search: 1,
  },
  {
    Store: "Red Zeppelin",
    Website: "https://redzeppelinrecords.com/",
    Search: "search?keyword=",
  },
  {
    Store: "Del Bravo",
    Website: "https://delbravorecordshop.com/",
    Search: 1,
  },
  {
    Store: "Spinning Jenny's",
    Website: "https://www.spinningjennys.com/",
    Search: 1,
  },
  {
    Store: "CI",
    Website: "https://www.cirecordsandskates.com/s/",
    Search: 1,
  },
  {
    Store: "A Day in the Life",
    Website: "https://aditl-records-lancaster.square.site/s/",
    Search: 1,
  },
  {
    Store: "Vinyl Fantasy",
    Website: "https://vinylfantasybk.com/",
    Search: 1,
  },
  {
    Store: "HiFi Records",
    Website: "https://www.hifi-records.com/",
    Search: 1,
  },
  {
    Store: "Revolver Records",
    Website: "https://www.revolverrecordsbuffalo.com/s/",
    Search: 1,
  },
  {
    Store: "Record Runner",
    Website: "http://www.recordrunnerusa.com/",
    Search: "search.php?search_query=",
  },
  {
    Store: "Main Street Beat",
    Website: "https://www.mainstreetbeat.com/#!/",
    Search: "~/search/keyword=",
  },
  {
    Store: "Record Stop",
    Website: "https://record-stop.com/",
    Search: 1,
  },
  {
    Store: "Looney Tunes",
    Website: "https://www.looneytuneslongisland.com/",
    Search: "search-results?q=",
  },
  {
    Store: "Sound Garden",
    Website: "https://www.sgrecordshop.com/",
    Search: 1,
  },
  {
    Store: "Further Records",
    Website: "https://furtherrecords.com/",
    Search: 1,
  },
  {
    Store: "Rust & Wax",
    Website: "https://rustandwax.com/",
    Search: 1,
  },
  {
    Store: "CD Central",
    Website: "https://cdcentral.bigcartel.com/",
    Search: "products?utf8=✓&search=",
  },
  {
    Store: "Nice Price",
    Website: "https://nicepriceboo.com/",
    Search: 1,
  },
  {
    Store: "Off Beat",
    Website: "https://www.offbeatjxn.com/s/",
    Search: 1,
  },
  {
    Store: "B's Music Shop",
    Website: "https://shop.bsmusicshop.com/",
    Search: 1,
  },
  {
    Store: "Sisters in Christ",
    Website: "https://sistersinchrist.space/",
    Search: "?s=",
  },
  {
    Store: "Louisiana Music Factory",
    Website: "https://www.louisianamusicfactory.com/",
    Search: "?post_type=product&s=",
  },
  {
    Store: "1-2-3-4 Go! Records",
    Website: "https://1234gorecords.com/",
    Search: 1,
  },
  {
    Store: "Mill City Sound",
    Website: "https://mill-city-sound.shoplightspeed.com/",
    Search: 1,
  },
  {
    Store: "Static Age",
    Website: "https://staticagemc.square.site/s/",
    Search: 1,
  },
  {
    Store: "Rock and Soul",
    Website:
      "https://rockandsoul.com/collections/vinyl-0?view=view-48&grid_list=grid-view&sort_by=title-ascending",
    Search: 8,
  },
  // {
  //   ~SEARCH CURRENTLY BROKEN~
  //   Store: "Grimey's",
  //   Website: "https://www.grimeys.com/",
  //   Search: 1,
  // },
  {
    Store: "Mount Analog",
    Website: "https://climbmountanalog.com/",
    Search: "?post_type=product&s=",
  },
  {
    Store: "Sweat",
    Website: "https://sweatrecordsmiami.com/",
    Search: "search/",
  },
];
