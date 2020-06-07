let puppeteer = require("puppeteer");
let MovieOrSeriesName = process.argv[2];
(async function () {
// starts browser
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized", "--incognito","--disable-notifications"]
    });
    // creates an empty page
    // await browser.newPage();
    // returns array of curently open tab
    let numberofPages = await browser.pages();
    let tab = numberofPages[0];
    // goto page
    await tab.goto("https://1337x.to/home/");
    // arrived
    /* ******* */ 
    // search 
    await tab.waitForSelector("#autocomplete");
    await tab.type("#autocomplete",MovieOrSeriesName, {delay: 100});
    await tab.keyboard.press("Enter",{delay:400});
    // search done
    /* ******* */
    // selecting the movie 
    await tab.goto("https://1337x.to/torrent/3911065/Avengers-Endgame-2019-WEBRip-1080p-YTS-YIFY/",{delay: 100});
    // opening utorrent
    //await tab.waitForSelector()
    await tab.click(".lba73c52398fe74af66637c1f43edeeaffcc86269.l40cdaf7b6c416a74afe175499e4a1cf4295b6b77.l00b05e8de9b89dbedc1c0d53ddff8eef8787c685");
})()