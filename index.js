export default function handler(req, res) => {
  const now = new Date();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][now.getUTCDay()];
  const day = Math.ceil(
    (now - new Date(2020, 2, 1, 0, 0, 0)) / (24 * 60 * 60 * 1000)
  );
  const suffix = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  }[new Intl.PluralRules("en", { type: "ordinal" }).select(day)];
  const siteName = "Wake Me Up When March Ends";
  const title = `Today is ${dayOfWeek}, March ${day}${suffix}, 2020`;
  res.write(
    `<head>
       <title>${siteName}</title>
       <meta property="og:site_name" content="${siteName}">
       <meta property="og:title" content="${title}">
       <meta name="twitter:creator" content="@zemlanin">
    </head>
    <h1>Today is ${dayOfWeek}, March ${day}<sup>${suffix}</sup>, 2020</h1>`
  );

  res.writeHead(200, {
    "Content-Type": "text/html",
    "Cache-Control": `s-maxage=${60 * 60}, max-age=0`,
  });
  res.end();
};
