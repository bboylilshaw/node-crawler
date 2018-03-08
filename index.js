const request = require('request');
const cheerio = require('cheerio');

let offset = 1;
let url = 'https://www.douban.com/group/qfatty/members?start=';

let options = {
  url: url + offset,
  headers: {
    'Cookie': 'bid=DIFFCX5rqBQ; _pk_id.100001.8cb4=83c121704836d79d.1520414763.1.1520414763.1520414763.; _pk_ses.100001.8cb4=*; __utma=30149280.1107153442.1520414764.1520414764.1520414764.1; __utmb=30149280.1.10.1520414764; __utmz=30149280.1520414764.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1',
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:58.0) Gecko/20100101 Firefox/58.0'
  }
};

setInterval(() => {
  console.log(options);
  offset = offset + 35;
  options.url = url + offset;
}, 1000);

// request(options, function (error, response, body) {
//   // console.log('body:', body); // Print the HTML for the Google homepage.
//   const $ = cheerio.load(body);
//
//   $('div.member-list').find('li').find('span').each(function (i, elem) {
//     if (elem.children[0] && elem.children[0].data == '(成都)') {
//       console.log(elem.parent.children[1].attribs.href);
//     }
//   });
// });