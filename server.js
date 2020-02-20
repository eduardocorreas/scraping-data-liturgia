const express = require("express");
const server = express();

const rp = require("request-promise");
const cheerio = require("cheerio");
const leituras = require("./leituras");

const options = {
  url: "https://www.paulus.com.br/portal/liturgia-diaria/dia-23-domingo-14"
};

server.listen(3000, function() {
  rp(options).then(function(htmlString) {
    const $ = cheerio.load(htmlString);
    const prev = $("[rel=prev]")[0].attribs.href;
    const next = $("[rel=next]")[0].attribs.href;
    const l = leituras.createObjectLectures($);
    console.log(l);

    //console.log({ prev, next, l });
  });
});
