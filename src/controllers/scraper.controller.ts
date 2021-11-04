// reddit-scraper.js

// import { endianness } from "node:os";

// const cheerio = require("cheerio");
// const puppeteer = require("puppeteer");
// const fs = require("fs");

// // const url = "https://old.reddit.com/r/wallstreetbets";

// const scrapeUrbanToronto = async () => {
//   let browser = await puppeteer.launch({
//     args: [
//       '--no-sandbox',
//       '--disable-setuid-sandbox',
//     ],
//   });
//   let page = await browser.newPage();

//   await page.goto("https://www.urbantoronto.ca", {
//     waitUntil: "networkidle0",
//   });
//   let listings = [];
//   let queries = 10; //set max page queries
//   let isLastPage = false;
//   for (let index = 0; index < queries && !isLastPage; index++) {
//     console.log(`Scanning page ${index}`);

//     let data = await page.evaluate(() => {
//       //extract inner text from title element
//       let titles = Array.from(
//         document.querySelectorAll(".feed-article-title"),
//         (e: any) => e.firstChild.innerText
//       );
//       //extract description
//       let descriptions = Array.from(
//         document.querySelectorAll(".feed-article-teaser"),
//         (e: any) => e.innerText
//       );
//       let images = Array.from(
//         document.querySelectorAll(".feed-article-image"),
//         (e: any) => e.src
//       );

//       let infos = Array.from(
//         document.querySelectorAll(".feed-article-info"),
//         (e: any) => e.innerText
//       );
//       let links = Array.from(
//         document.querySelectorAll(".feed-article-title"),
//         (e: any) => e.firstChild.getAttribute("href")
//       );

//       console.log(links);

//       //extract image uri

//       let b = document.querySelector<HTMLImageElement>(".feed-load-icon");
//       //firstchild is for reddit use case only
//       if (b) {
//         b.click();
//       } else {
//         // console.log("last page");
//         isLastPage = true;
//       }

//       const listings = [];
//       // console.log(titles.length);
//       // console.log(descriptions.length);
//       // console.log(images.length);
//       // console.log(links.length);
//       if (
//         titles.length == descriptions.length &&
//         titles.length == images.length &&
//         titles.length == infos.length && 
//         titles.length == links.length
//       ) {
//         // if(titles?.length == descriptions?.length == images?.length) {

//         for (let i = 0; i < titles.length; i++) {
//           let dateSplit = infos[i].split("|")[0];
//           let date =  dateSplit.substring(0, dateSplit.length -1);
//           console.log(links[i]);
//           listings.push({
//             title: titles[i],
//             description: descriptions[i],
//             image: images[i],
//             info: infos[i],
//             date,
//             link: links[i]
//           });
//           // console.log(listings);
//         }
//         // }
//       }

//       return listings;
//     });
//     if (isLastPage) break;
//     listings.push(...data);
//   }
//   // console.log(titles)
//   return listings;
// };

// const scrape = async () => {
//   let browser = await puppeteer.launch({ headless: false });
//   let page = await browser.newPage();

//   await page.goto(url, {
//     waitUntil: "networkidle0",
//   });
//   let titles = [];
//   let queries = 55; //set max page queries
//   let isLastPage = false;
//   for (let index = 0; index < queries && !isLastPage; index++) {
//     console.log(`Scanning page ${index}`);
//     if (index > 0) {
//       try {
//         //wait for page load
//         await page.waitForNavigation();
//       } catch (error) {
//         writeToDisk(titles);
//         return;
//       }
//     }
//     let data = await page.evaluate(() => {
//       //extract inner text from title element
//       let d = Array.from(
//         document.querySelectorAll("a.title"),
//         (e: HTMLElement) => e.innerText
//       );

//       let b: HTMLElement = document.querySelector<HTMLSpanElement>(
//         ".next-button"
//       ) as HTMLElement;
//       //firstchild is for reddit use case only
//       if (b && b.firstChild && b.firstChild instanceof HTMLElement) {
//         b.firstChild.click();
//       } else {
//         console.log("last page");
//         isLastPage = true;
//       }

//       return d;
//     });
//     if (isLastPage) break;
//     // titles.push(...data);
//   }

//   // writeToDisk(titles);
// };

// export default scrapeUrbanToronto;
// function writeToDisk(titles: any[]) {
//   throw new Error("Function not implemented.");
// }
