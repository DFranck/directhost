import { Product } from "@/providers/cart/cart-provider";
import Mailjet from "node-mailjet";
export async function GET() {
  return Response.json({
    message: "Hello, this route is for asking a quote",
  });
}

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { quoteList, client, totalQuantity } = body;
    console.log(body);
    const mailjet = Mailjet.apiConnect(
      process.env.MAILJET_API_KEY as string,
      process.env.MAILJET_API_SECRET as string
    );
    const groupedByManufacturer: { [key: string]: any } = {};

    quoteList.forEach((item: any) => {
      const { manufacturer } = item.product;
      if (!groupedByManufacturer[manufacturer]) {
        groupedByManufacturer[manufacturer] = [];
      }
      groupedByManufacturer[manufacturer].push(item);
    });

    const htmlCustomer = `<!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Email Professionnel</title>
        <style>
          body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
          }
          .content {
            background-color: #ffffff;
            width: 90%;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
          .header {
            background-color: #d9f99d;
            color: #000;
            padding: 10px 20px;
            text-align: center;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 10px;
          }
          h1 {
            margin: 0 0 10px 0;
          }
          h2 {
            color: #349a2c;
            margin: 10px 0;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
            background-color: #e9e9e9;
            padding: 10px;
            border-radius: 5px;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
            color: #666;
          }
          a {
            color: #008080;
            text-decoration: none;
          }
          .footer {
            text-align: center;
            padding: 10px 20px;
            font-size: 12px;
            color: #777;
          }
          @media screen and (max-width: 600px) {
            .header {
              flex-direction: column;
            }
            .header img {
              margin: auto;
              width: 50px;
            }
          }
        </style>
      </head>
      <body>
        <div class="content">
          <div class="header">
            <img src="https://i.ibb.co/pQMDxsW/Group-2.png" alt="logo-transplantation-arbres" />
            <h1>Transplantation Arbres</h1>
          </div>
          <div style="padding: 20px">
            <h2>Bonjour ${client?.firstName} ${client?.lastName},</h2>
            <p>
              Vous trouverez ci-dessous la liste de vos produits pour lesquels un
              devis vient d'être transmis :
            </p>
            <ul>
            ${quoteList
              .map(
                (item: Product) => `
              <li style="margin-bottom: 10px;">${item.quantity} x ${item.product.reference}</li>
            `
              )
              .join("")}
            </ul>
            <p>
              Vous serez contacté dans les plus brefs délais à cette adresse pour
              confirmer votre commande.
            </p>
            <p>Merci de faire confiance à notre entreprise.</p>
            <a href="http://www.transplantation-arbres.fr"
              >Visitez notre site web</a
            >
          </div>
          <div class="footer">© 2023 Transplantation Arbres, Inc.</div>
        </div>
      </body>
    </html>
`;

    const htmlClient = `
    <!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Professionnel</title>
    <style>
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color: #333;
      }
      .content {
        background-color: #ffffff;
        width: 90%;
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }
      .header {
        background-color: #d9f99d;
        color: #000;
        padding: 10px 20px;
        text-align: center;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
      }
      h1 {
        margin: 0 0 10px 0;
      }
      h2 {
        color: #349a2c;
        margin: 10px 0;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
        background-color: #e9e9e9;
        padding: 10px;
        border-radius: 5px;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
        color: #666;
      }
      a {
        color: #008080;
        text-decoration: none;
      }
      .footer {
        text-align: center;
        padding: 10px 20px;
        font-size: 12px;
        color: #777;
      }
      @media screen and (max-width: 600px) {
        .header {
          flex-direction: column;
        }
        .header img {
          margin: auto;
          width: 50px;
        }
      }
    </style>
  </head>
  <body>
    <div class="content">
      <div class="header">
        <img src="https://i.ibb.co/pQMDxsW/Group-2.png" alt="logo-transplantation-arbres" />
        <h1>Transplantation Arbres</h1>
      </div>
      <div style="padding: 20px">
        <h2>Informations du client:</h2>
        <ul>
        ${Object.entries(client)
          .map(
            ([key, value]) =>
              `<li><b>${
                key.slice(0, 1).toUpperCase() + key.slice(1)
              }:</b> ${value}</li>`
          )
          .join("")}
        </ul>
        <h2>Liste des produits:</h2>
        <ul>
        ${Object.entries(groupedByManufacturer)
          .map(
            ([manufacturer, items]) => `<div>
              <h3>${manufacturer}</h3>
              <ul>${items
                .map(
                  (item: Product) =>
                    `<li>${item.product.model} x ${item.quantity}</li>`
                )
                .join("")}</ul>
            </div>`
          )
          .join("")}
        </ul>
      </div>
      <div class="footer">© 2023 Transplantation Arbres, Inc.</div>
    </div>
  </body>
</html>
`;

    const emailDataClient = {
      Messages: [
        {
          From: {
            Email: process.env.MAIL_DOMAIN as string,
            Name: "[Transplantation-arbres] Get A Quote",
          },
          To: [
            {
              Email: process.env.MAIL_DOMAIN as string,
              Name: `A.Seradni`,
            },
          ],
          Subject: `Demande de devis de la compagny ${client.companyName} pour ${totalQuantity} produits`,
          TextPart: "Voici les détails de votre demande de devis...",
          HTMLPart: htmlClient,
        },
      ],
    };
    const emailDataCustomer = {
      Messages: [
        {
          From: {
            Email: process.env.MAIL_DOMAIN as string,
            Name: "[Transplantation-arbres] Votre Devis",
          },
          To: [
            {
              Email: client.email,
              Name: `${client.lastName} ${client.firstName} for ${client.companyName}`,
            },
          ],
          Subject: `Votre devis`,
          TextPart: "Voici les détails de votre demande de devis...",
          HTMLPart: htmlCustomer,
        },
      ],
    };

    await mailjet.post("send", { version: "v3.1" }).request(emailDataClient);
    await mailjet.post("send", { version: "v3.1" }).request(emailDataCustomer);
    return Response.json({
      message: `Quote succefully send ! from ${process.env.MAIL_DOMAIN} to ${client.email}`,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return Response.json({
      message: "Échec de l'envoi du devis. Veuillez réessayer.",
    });
  }
}
