## Website for John Millane, Attorney at Law

# www.millanelaw.com


add payment page that redirects to square business page?

## Contact form deployment

The static contact form follows [Netlify's HTML form setup](https://docs.netlify.com/manage/forms/setup/)
and uses its [honeypot spam filter](https://docs.netlify.com/manage/forms/spam-filters/).
It submits via POST and redirects to `/thank-you.html` after a successful submission.

In Netlify, enable form detection before deploying these changes. After deployment,
confirm the `contact` form appears in Forms, configure submission notifications for
the office, and submit a non-confidential test inquiry to verify receipt and the
confirmation page. A local static preview does not process form submissions.

## Content and images

Confirm the practice start date before restoring a specific "since" year or increasing
the current "over 30 years" experience claim.

The pages use resized 640px and 1200px JPEGs. The original `pic01.jpg` and `pic02.jpg`
are retained as source images but are no longer loaded by the pages.
