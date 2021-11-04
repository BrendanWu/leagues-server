const { Router } = require("express");
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")
const mailRouter = Router();

const thankYouHtml = `
<html
  data-editor-version="2"
  class="sg-campaigns"
  xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
    />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {
          width: 600px;
          margin: 0 auto;
        }
        table {
          border-collapse: collapse;
        }
        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
        img {
          -ms-interpolation-mode: bicubic;
        }
      </style>
    <![endif]-->
    <style type="text/css">
      body,
      p,
      div {
        font-family: arial, helvetica, sans-serif;
        font-size: 14px;
      }
      body {
        color: #000000;
      }
      body a {
        color: #8d782e !important;
        text-decoration: none;
      }
      p {
        margin: 0;
        padding: 0;
      }
      table.wrapper {
        width: 100% !important;
        table-layout: fixed;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      img.max-width {
        max-width: 100% !important;
      }
      .column.of-2 {
        width: 50%;
      }
      .column.of-3 {
        width: 33.333%;
      }
      .column.of-4 {
        width: 25%;
      }
      @media screen and (max-width: 480px) {
        .preheader .rightColumnContent,
        .footer .rightColumnContent {
          text-align: left !important;
        }
        .preheader .rightColumnContent div,
        .preheader .rightColumnContent span,
        .footer .rightColumnContent div,
        .footer .rightColumnContent span {
          text-align: left !important;
        }
        .preheader .rightColumnContent,
        .preheader .leftColumnContent {
          font-size: 80% !important;
          padding: 5px 0;
        }
        table.wrapper-mobile {
          width: 100% !important;
          table-layout: fixed;
        }
        img.max-width {
          height: auto !important;
          max-width: 100% !important;
        }
        a.bulletproof-button {
          display: block !important;
          width: auto !important;
          font-size: 80%;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .columns {
          width: 100% !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      }
    </style>
    <!--user entered Head Start-->

    <!--End Head user entered-->
  </head>
  <body>
    <center
      class="wrapper"
      data-link-color="#42ee99"
      data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#000000;"
    >
      <div class="webkit">
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          class="wrapper"
          bgcolor="#000000"
        >
          <tbody>
            <tr>
              <td valign="top" bgcolor="#000000" width="100%">
                <table
                  width="100%"
                  role="content-container"
                  class="outer"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                >
                  <tbody>
                    <tr>
                      <td width="100%">
                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  style="width: 100%; max-width: 600px"
                                  align="center"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        role="modules-container"
                                        style="
                                          padding: 0px 0px 0px 0px;
                                          color: #000000;
                                          text-align: left;
                                        "
                                        bgcolor="#FFFFFF"
                                        width="100%"
                                        align="left"
                                      >
                                        <table
                                          class="module preheader preheader-hide"
                                          role="module"
                                          data-type="preheader"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="
                                            display: none !important;
                                            mso-hide: all;
                                            visibility: hidden;
                                            opacity: 0;
                                            color: transparent;
                                            height: 0;
                                            width: 0;
                                          "
                                        >
                                          <tbody>
                                            <tr>
                                              <td role="module-content">
                                                <p>Show What You Know!</p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="spacer"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="vB9TDziyvx65CC2nx3oyRH"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  padding: 0px 0px 20px 0px;
                                                "
                                                role="module-content"
                                                bgcolor="#000000"
                                              ></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="wrapper"
                                          role="module"
                                          data-type="image"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="uXsDxMnn1bRMmDcX8NB6rW"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  font-size: 6px;
                                                  line-height: 10px;
                                                  padding: 30px 0px 30px 0px;
                                                "
                                                bgcolor="#000000"
                                                valign="top"
                                                align="center"
                                              >
                                                <img
                                                  class="max-width"
                                                  border="0"
                                                  style="
                                                    display: block;
                                                    color: #000000;
                                                    text-decoration: none;
                                                    font-family: Helvetica,
                                                      arial, sans-serif;
                                                    font-size: 16px;
                                                    max-width: 50% !important;
                                                    width: 100px;
                                                    height: auto !important;
                                                  "
                                                  src="http://cdn.mcauto-images-production.sendgrid.net/6800f0e530508134/32f47d98-14a1-4b9c-a297-09e57aa02a41/60x72.png"
                                                  alt="SongRiddle"
                                                  width="50px"
                                                  data-responsive="true"
                                                  data-proportionally-constrained="false"
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="text"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="hL6wjQ2qknNd5qDwT1p7Up"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  background-color: #000000;
                                                  padding: 10px 20px 10px 20px;
                                                  line-height: 40px;
                                                  text-align: justify;
                                                "
                                                height="100%"
                                                valign="top"
                                                bgcolor="#000000"
                                              >
                                                <div>
                                                  <h1
                                                    style="text-align: center"
                                                  >
                                                    <span
                                                      style="
                                                        color: #ffffff;
                                                        font-size: 28px;
                                                        font-family: verdana,
                                                          geneva, sans-serif;
                                                      "
                                                      ><strong
                                                        >Thanks for Getting in
                                                        Touch</strong
                                                      ></span
                                                    >
                                                  </h1>
                                                  <div></div>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="wrapper"
                                          role="module"
                                          data-type="image"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="37c1DUYE1TN31PTwSNoaE7"
                                        ></table>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="text"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="qk51Jjn4bm3rn2Yb31Dxzb"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  background-color: #ffffff;
                                                  padding: 50px 50px 10px 50px;
                                                  line-height: 22px;
                                                  text-align: center;
                                                "
                                                height="100%"
                                                valign="top"
                                                bgcolor="#ffffff"
                                              >
                                                <div>
                                                  <div
                                                    style="
                                                      font-family: inherit;
                                                      text-align: inherit;
                                                    "
                                                  >
                                                    <span
                                                      style="
                                                        font-size: 24px;
                                                        font-family: verdana,
                                                          geneva, sans-serif;
                                                      "
                                                      ><strong
                                                        >We have received your
                                                        message and we will get
                                                        back to you
                                                        promptly.&nbsp;</strong
                                                      ></span
                                                    >
                                                  </div>
                                                  <div></div>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="text"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="iTBXe9c6QUCujvmJs8hYKr"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  background-color: #ffffff;
                                                  padding: 40px 40px 40px 40px;
                                                  line-height: 22px;
                                                  text-align: inherit;
                                                "
                                                height="100%"
                                                valign="top"
                                                bgcolor="#ffffff"
                                              >
                                                <div>
                                                  <div
                                                    style="
                                                      font-family: inherit;
                                                      text-align: inherit;
                                                    "
                                                  >
                                                    <span
                                                      style="
                                                        font-size: 16px;
                                                        font-family: verdana,
                                                          geneva, sans-serif;
                                                      "
                                                      >At Ellicott Realty, we
                                                      appreciate every client is
                                                      unique and we aspire to
                                                      anticipate client
                                                      obstacles, whether it's
                                                      buying your first home or
                                                      expanding your investment
                                                      portfolio. We deliver
                                                      white-glove service that's
                                                      professional, trustworthy
                                                      and genuine, using our
                                                      knowledge of global
                                                      markets to inform how we
                                                      excel locally. Our
                                                      cohesive team delivers
                                                      fine-tuned service that's
                                                      both meticulous and
                                                      thoughtful. And with an
                                                      office culture that's
                                                      truly innovative, we value
                                                      every member of our team
                                                      for their unique qualities
                                                      and fresh
                                                      contributions.</span
                                                    >
                                                  </div>
                                                  <div
                                                    style="
                                                      font-family: inherit;
                                                      text-align: inherit;
                                                    "
                                                  >
                                                    &nbsp;
                                                  </div>
                                                  <div></div>
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="module"
                                          data-role="module-button"
                                          data-type="button"
                                          role="module"
                                          style="table-layout: fixed"
                                          width="100%"
                                          data-muid="qY8ouFUf6bFVP8tHkQ5gq7"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="center"
                                                bgcolor="#ffffff"
                                                class="outer-td"
                                                style="
                                                  padding: 20px 20px 60px 20px;
                                                  background-color: #ffffff;
                                                "
                                              >
                                                <table
                                                  border="0"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  class="button-css__deep-table___2OZyb wrapper-mobile"
                                                  style="text-align: center"
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        align="center"
                                                        bgcolor="#8d782e !important"
                                                        class="inner-td"
                                                        style="
                                                          border-radius: 6px;
                                                          font-size: 16px;
                                                          text-align: center;
                                                          background-color: inherit;
                                                        "
                                                      >
                                                        <a
                                                          style="
                                                            background-color: #212121;
                                                            border: 0px solid
                                                              #212121;
                                                            border-color: #08b65d;
                                                            border-radius: 0px;
                                                            border-width: 0px;
                                                            color: #ffffff;
                                                            display: inline-block;
                                                            font-family: verdana,
                                                              geneva, sans-serif;
                                                            font-size: 16px;
                                                            font-weight: normal;
                                                            letter-spacing: 3px;
                                                            line-height: 30px;
                                                            padding: 12px 18px
                                                              12px 18px;
                                                            text-align: center;
                                                            text-decoration: none;
                                                            border-style: solid;
                                                          "
                                                          href=""
                                                          target="_blank"
                                                          >VIST OUR SITE</a
                                                        >
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="wrapper"
                                          role="module"
                                          data-type="image"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="3Aagmop5AhcW2BFjGgfLGu"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  font-size: 6px;
                                                  line-height: 10px;
                                                  padding: 0px 0px 0px 0px;
                                                "
                                                valign="top"
                                                align="center"
                                              >
                                                <img
                                                  class="max-width"
                                                  border="0"
                                                  style="
                                                    display: block;
                                                    color: #000000;
                                                    text-decoration: none;
                                                    font-family: Helvetica,
                                                      arial, sans-serif;
                                                    font-size: 16px;
                                                    max-width: 100% !important;
                                                    width: 100%;
                                                    height: auto !important;
                                                  "
                                                  src="https://ellicottrealty.netlify.app/static/prefClients-a502c940a5631b4171dfff9d4b36ce19.jpg"
                                                  alt=""
                                                  width="600"
                                                  data-responsive="true"
                                                  data-proportionally-constrained="false"
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="spacer"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="2ga5f7koD5ApvUfnqUK6aT"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  padding: 0px 0px 30px 0px;
                                                "
                                                role="module-content"
                                                bgcolor="#000000"
                                              ></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="divider"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="c3nRrjMndqXf1snYDFPSF9"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="padding: 0px 0px 0px 0px"
                                                role="module-content"
                                                height="100%"
                                                valign="top"
                                                bgcolor="#000000"
                                              >
                                                <table
                                                  border="0"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  align="center"
                                                  width="100%"
                                                  height="3px"
                                                  style="
                                                    line-height: 3px;
                                                    font-size: 3px;
                                                  "
                                                >
                                                  <tbody>
                                                    <tr>
                                                      <hr />
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="spacer"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="pa9PeYjCEFyByuP5878Sd2"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  padding: 0px 0px 30px 0px;
                                                "
                                                role="module-content"
                                                bgcolor="#000000"
                                              ></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="social"
                                          align="center"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="n7FceQWVnLmounEt32B1gj"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                valign="top"
                                                style="
                                                  padding: 0px 0px 0px 0px;
                                                  font-size: 6px;
                                                  line-height: 10px;
                                                  background-color: #000000;
                                                "
                                                align="center"
                                              >
                                                <table align="center">
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        style="padding: 0px 5px"
                                                      >
                                                        <a
                                                          role="social-icon-link"
                                                          href="http://www.facebook.com/ellicottrealty/"
                                                          target="_blank"
                                                          alt="Facebook"
                                                          title="Facebook"
                                                          style="
                                                            display: inline-block;
                                                            background-color: transparent !important;
                                                            height: 30px;
                                                            width: 30px;
                                                          "
                                                        >
                                                          <img
                                                            role="social-icon"
                                                            alt="Facebook"
                                                            title="Facebook"
                                                            src="http://cdn.mcauto-images-production.sendgrid.net/6800f0e530508134/7730f70a-1343-4d6e-815b-511b93508cdd/167x167.png"
                                                            style="
                                                              height: 30px;
                                                              width: 30px;
                                                            "
                                                            height="30"
                                                            width="30"
                                                          />
                                                        </a>
                                                      </td>
                                                      <td
                                                        style="padding: 0px 5px"
                                                      >
                                                        <a
                                                          role="social-icon-link"
                                                          href="http://www.linkedin.com/company/11389761/"
                                                          target="_blank"
                                                          alt="Twitter"
                                                          title="Twitter"
                                                          style="
                                                            display: inline-block;
                                                            background-color: transparent !important;
                                                            height: 30px;
                                                            width: 30px;
                                                          "
                                                        >
                                                          <img
                                                            role="social-icon"
                                                            alt="Twitter"
                                                            title="Twitter"
                                                            src="http://cdn.mcauto-images-production.sendgrid.net/6800f0e530508134/a2b8fc01-f442-49f5-87c5-9e244d22007c/167x167.png"
                                                            style="
                                                              height: 30px;
                                                              width: 30px;
                                                            "
                                                            height="30"
                                                            width="30"
                                                          />
                                                        </a>
                                                      </td>
                                                      <td
                                                        style="padding: 0px 5px"
                                                      >
                                                        <a
                                                          role="social-icon-link"
                                                          href="http://www.instagram.com/ellicottrealty/"
                                                          target="_blank"
                                                          alt="Instagram"
                                                          title="Instagram"
                                                          style="
                                                            display: inline-block;
                                                            background-color: transparent !important;
                                                            height: 30px;
                                                            width: 30px;
                                                          "
                                                        >
                                                          <img
                                                            role="social-icon"
                                                            alt="Instagram"
                                                            title="Instagram"
                                                            src="http://cdn.mcauto-images-production.sendgrid.net/6800f0e530508134/191dc13c-95f7-463b-b0d4-8305f27edab5/167x167.png"
                                                            style="
                                                              height: 30px;
                                                              width: 30px;
                                                            "
                                                            height="30"
                                                            width="30"
                                                          />
                                                        </a>
                                                      </td>
                                                      <td
                                                        style="padding: 0px 5px"
                                                      >
                                                        <a
                                                          role="social-icon-link"
                                                          href="http://www.youtube.com/channel/UCDlQ7IvLOGCaOwohM3bnNng?view_as=subscriber"
                                                          target="_blank"
                                                          alt="Pinterest"
                                                          title="Pinterest"
                                                          style="
                                                            display: inline-block;
                                                            background-color: transparent !important;
                                                            height: 30px;
                                                            width: 30px;
                                                          "
                                                        >
                                                          <img
                                                            role="social-icon"
                                                            alt="Pinterest"
                                                            title="Pinterest"
                                                            src="http://cdn.mcauto-images-production.sendgrid.net/6800f0e530508134/dddf6712-3f28-461e-96b7-7bd9a43ac2d0/167x167.png"
                                                            style="
                                                              height: 30px;
                                                              width: 30px;
                                                            "
                                                            height="30"
                                                            width="30"
                                                          />
                                                        </a>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="spacer"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="vHVg85Rtcz7gagZZquA4Bw"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  padding: 0px 0px 30px 0px;
                                                "
                                                role="module-content"
                                                bgcolor="#000000"
                                              >
                                                <p
                                                  style="
                                                    color: #fff;
                                                    padding: 2em 0 0;
                                                  "
                                                  align="center"
                                                >
                                                  Ellicott Realty Inc.,
                                                  Brokerage
                                                </p>
                                                <p
                                                  style="
                                                    color: #fff;
                                                    padding: 1em 0 0;
                                                  "
                                                  align="center"
                                                >
                                                  www.EllicottRealty.ca
                                                </p>
                                                <p
                                                  style="
                                                    color: #fff;
                                                    padding: 1em 0 0;
                                                  "
                                                  align="center"
                                                >
                                                  hello@ellicottrealty.ca
                                                </p>
                                                <p
                                                  style="
                                                    color: #fff;
                                                    padding: 1em 0 0;
                                                  "
                                                  align="center"
                                                >
                                                  10184 Yonge St, Richmond Hill,
                                                  ON L4C 1T6
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                 
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="spacer"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="vKe4rfbECMPFgNz27Wg5EW"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  padding: 0px 0px 30px 0px;
                                                "
                                                role="module-content"
                                                bgcolor="#000000"
                                              ></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table
                                          class="module"
                                          role="module"
                                          data-type="spacer"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          style="table-layout: fixed"
                                          data-muid="35xFa9abxGTBYt9yR9BeQ2"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style="
                                                  padding: 0px 0px 30px 0px;
                                                "
                                                role="module-content"
                                                bgcolor="#000000"
                                              ></td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  </body>
</html>`



mailRouter.post("/homePageForm", (req, res) => {
  const body = req.body
  const msg = {
    to: body.email,
    from: "hello@ellicottrealty.ca",
    subject: 'Ellicott Realty Welcomes You',
    text: 'Thank you',
    html: thankYouHtml
  };
  sgMail.send(msg).then(function (data) {
    res.json({ success: true, msg: "Email sent." });
  }).catch(function (err) {
    res.json({ success: false, msg: JSON.stringify(err) });
  });
})


mailRouter.post("/contactPageForm", (req, res) => {
  const body = req.body
  const fname = body.fname
  const lname = body.lname
  const phone = body.phone
  const interestedProperties = body.interestedProperties
  const underContract = body.underContract
  const email = body.email
  const additionalDetails = body.additionalDetails



  const msg = {
    to: email,
    from: "hello@ellicottrealty.ca",
    subject: 'Ellicott Realty Welcomes You',
    text: 'Thank you',
    html: thankYouHtml
  };

  const msgReceipt = {
    to: ["anshul@liftedsolutions.com", "brendan@liftedsolutions.com", "dominik@ellicottfinancial.ca", "dante@ellicottrealty.ca", "anthonytropea@ellicottrealty.ca"],

    from: email,
    subject: "Ellicott contact form receipt",
    text: email,
    html: `
    <div>
    <h3>Ellicott receipt</h3>
      <ul>
      <li>Name : ${fname} ${lname}</li>
      <li>Phone : ${phone}</li>
      <li>Interested properties : ${interestedProperties}</li>
      <li>Under contract : ${underContract}</li>
        <li>Additional details : ${additionalDetails}</li>
      </ul>
    </div>
    `

  }

  sgMail.send(msgReceipt).then(function (data) {
    if (data) {

      sgMail.send(msg).then(function (data) {
        res.json({ success: true, msg: "Email sent." });
      }).catch(function (err) {
        res.json({ success: false, msg: JSON.stringify(err) });
      });
    }
  })

})


mailRouter.post("/developmentsPageForm", (req, res) => {
  const body = req.body
  const email = body.email
  const fname = body.fname
  const lname = body.lname
  const interestedProperties = body.interestedProperties
  const phone = body.phone
  const underContract = body.underContract

  const msg = {
    to: email,
    from: "hello@ellicottrealty.ca",
    subject: 'Ellicott Realty Welcomes You',
    text: 'Thank you',
    html: thankYouHtml
  };


  const msgReceipt = {
    to: ["anshul@liftedsolutions.com", "brendan@liftedsolutions.com", "dominik@ellicottfinancial.ca", "dante@ellicottrealty.ca", "anthonytropea@ellicottrealty.ca"],
    from: email,
    subject: "Ellicott contact form receipt",
    text: email,
    html: `
    <div>
    <h3>Ellicott receipt</h3>
      <ul>
      <li>Name : ${fname} ${lname}</li>
      <li>Phone : ${phone}</li>
      <li>Interested properties : ${interestedProperties}</li>
      <li>Under contract : ${underContract}</li>

      </ul>
    </div>
    `

  }

  sgMail.send(msgReceipt).then(function (data) {
    if (data) {

      sgMail.send(msg).then(function (data) {
        res.json({ success: true, msg: "Email sent." });
      }).catch(function (err) {
        res.json({ success: false, msg: JSON.stringify(err) });
      });
    }
  })
})


mailRouter.post("/registerPageForm", (req, res) => {
  const body = req.body
  const email = body.email;
  const fname = body.fname;
  const phonenumber = body.phonenumber;
  const lname = body.lname;
  const minBaths = body.minBaths;
  const minBeds = body.minBeds;
  const minPrice = body.minPrice;
  const maxPrice = body.maxPrice;
  const bounds = body.bounds;
  const locationLabel = body.locationLabel;
  const propertyTypes = body.propertyTypes
  const msg = {
    to: email,
    from: "hello@ellicottrealty.ca",
    subject: 'Ellicott Realty Welcomes You',
    text: 'Thank you',
    html: thankYouHtml
  };


  const msgReceipt = {
    to: ["anshul@liftedsolutions.com", "brendan@liftedsolutions.com", "dominik@ellicottfinancial.ca", "dante@ellicottrealty.ca", "anthonytropea@ellicottrealty.ca"],
    from: email,
    subject: "Ellicott contact form receipt",
    text: email,
    html: `
    <div>
    <h3>Ellicott receipt</h3>
      <ul>
      <li>Name : ${fname && fname} ${lname && lname}</li>
      <li>Phone : ${phonenumber && phonenumber}</li>
      <li>Min Beds : ${minBeds && minBeds}</li>
      <li>Min Baths : ${minBaths && minBaths}</li>
      <li>Min Price : ${minPrice && minPrice}</li>
      <li>Max Price: ${maxPrice && maxPrice}</li>
      <li>Property types : ${propertyTypes && propertyTypes}</li>
      <li>Location : ${locationLabel && locationLabel}</li>
      <li>Location bounds saved to Repliers : ${bounds ? "Yes" : "No"}</li>


      </ul>
    </div>
    `

  }

  sgMail.send(msgReceipt).then(function (data) {
    if (data) {

      sgMail.send(msg).then(function (data) {
        res.json({ success: true, msg: "Email sent." });
      }).catch(function (err) {
        res.json({ success: false, msg: JSON.stringify(err) });
      });
    }
  })
})
mailRouter.post("/scheduleModalForm", (req, res) => {
  const body = req.body
  const email = body.email;
  const fname = body.fname;
  const lname = body.lname;
  const phone = body.phone;
  const dates = body.dates;
  const additionalDetails = body.additionalDetails;
  const timeslot = body.timeslot;
  const underContract = body.underContract;
  const listing = body.listing


  const msg = {
    to: email,
    from: "hello@ellicottrealty.ca",
    subject: 'Ellicott Realty Welcomes You',
    text: 'Thank you',
    html: thankYouHtml
  };

  const address = listing.address.streetNumber + ' ' + listing.address.streetName + ' ' + listing.address.streetSuffix


  const msgReceipt = {
    to: ["anshul@liftedsolutions.com", "brendan@liftedsolutions.com", "dominik@ellicottfinancial.ca", "dante@ellicottrealty.ca", "anthonytropea@ellicottrealty.ca"],
    from: email,
    subject: `${address} schedule request `,
    text: `Schedule request`,
    html: `
    <div>
    <h3>Schedule request from ${fname} ${lname} for MLS# ${listing.mlsNumber}</h3>
      <ul>
      
      <li>Phone : ${phone}</li> 
      <li>Dates : ${dates[0]} -> ${dates[1]}</li>
      <li>Timeslot : ${timeslot}</li>
      <li>List price : ${listing.listPrice}</li>
      <li>Contract type : ${listing.type}</li>
      <li>Under contract : ${underContract}</li>
      <li>Additional details : ${additionalDetails}</li>
      

      </ul>
    </div>
    `

  }

  sgMail.send(msgReceipt).then(function (data) {
    if (data) {

      sgMail.send(msg).then(function (data) {
        res.json({ success: true, msg: "Email sent." });
      }).catch(function (err) {
        res.json({ success: false, msg: JSON.stringify(err) });
      });
    }
  })
})
mailRouter.post("/requestDetailsForm", (req, res) => {
  const body = req.body
  const email = body.email;
  const name = body.name;
  const phone = body.phone;
  const additionalDetails = body.additionalDetails;
  const underContract = body.underContract;
  const listing = body.listing


  const msg = {
    to: email,
    from: "hello@ellicottrealty.ca",
    subject: 'Ellicott Realty Welcomes You',
    text: 'Thank you',
    html: thankYouHtml
  };

  const address = listing.address.streetNumber + ' ' + listing.address.streetName + ' ' + listing.address.streetSuffix
  console.log(body)

  const msgReceipt = {
    to: ["anshul@liftedsolutions.com", "brendan@liftedsolutions.com", "dominik@ellicottfinancial.ca", "dante@ellicottrealty.ca", "anthonytropea@ellicottrealty.ca"],
    from: email,
    subject: `${address} info requested `,
    text: `Info request`,
    html: `
    <div>
    <h3>Info request from ${name} for MLS# ${listing.mlsNumber}</h3>
      <ul>
      
      <li>Phone : ${phone}</li> 
      <li>List price : ${listing.listPrice}</li>
      <li>Contract type : ${listing.type}</li>
      <li>Under contract : ${underContract}</li>
      <li>Additional details : ${additionalDetails}</li>
      

      </ul>
    </div>
    `

  }

  sgMail.send(msgReceipt).then(function (data) {
    if (data) {

      sgMail.send(msg).then(function (data) {
        res.json({ success: true, msg: "Email sent." });
      }).catch(function (err) {
        res.json({ success: false, msg: JSON.stringify(err) });
      });
    }
  })
})

export default mailRouter;
