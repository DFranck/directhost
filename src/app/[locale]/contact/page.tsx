import EmbeddedMap from "@/components/EmbeddedMap";
import Section from "@/components/layout/section";
import { Mail, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <Section className="min-h-screen px-0 md:px-5 pb-0 mt-20 md:mt-0">
      <div className="bg-background/80 flex flex-col-reverse md:grid md:grid-cols-2 rounded md:gap-5 md:p-5 md:shadow-xl md:border">
        <EmbeddedMap />
        <div className="flex flex-col gap-5">
          <ul className="flex flex-col gap-5 bg-background/90 md:rounded md:shadow-xl md:border p-5">
            <li className="flex gap-2">
              <Mail />
              <a href="mailto:contacts@decathlon.com">contacts@client.com</a>
            </li>
            <li className="flex gap-2">
              <Phone />
              <a href="tel:+33612345678">06 12 34 56 78</a>
            </li>
          </ul>
          <ul className="flex flex-col bg-card md:rounded md:shadow-xl md:border h-full gap-5 p-5">
            <li>
              <h4>Merci de nous contacter dans la plange horaire suivante:</h4>
            </li>
            <ul>
              <li>
                Lundi au vendredi de 9h à 18h <b>UTC+07:00</b>
              </li>
              <li>
                Samedi de 9h à 12h <b>UTC+07:00</b>
              </li>
              <li>
                Dimanche de 9h à 12h <b>UTC+07:00</b>
              </li>
            </ul>
            <li>
              <p>
                Nous sommes à votre disposition pour toute questions dont vous
                navez trouvé la réponse sur le site.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
