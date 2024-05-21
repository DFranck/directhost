import Image from "next/image";
import { Button } from "./ui/button";
const PropertyDetails = () => {
  return (
    <div className="block px-4 py-2 md:col-span-2">
      <h3>Paris, France</h3>
      <p>2 voyageurs, 1 chambre1 lit, 1 salle de bain</p>
      <div className="w-full border opacity-50 my-4"></div>
      <div className="flex gap-4">
        <Image
          src={"/assets/imgs/cv_square.jpg"}
          width={500}
          height={300}
          alt="host"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4>Hôte: Franck Dufournet</h4>
          <p className="text-sm text-muted-foreground">
            Développeur web et un peu designer
          </p>
        </div>
      </div>
      <div className="w-full border opacity-50 my-4"></div>
      <div>
        <div className="flex gap-4">
          <div className="w-10 h-10 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="w-6 h-6"
              // style="display: block; height: 24px; width: 24px; fill: currentcolor;"
            >
              <path d="M28 2a2 2 0 0 1 2 1.85v9.99l1.85 5.54a3 3 0 0 1 .11.46l.03.24.01.24V30h-2v-2H2v2H0v-9.68a3 3 0 0 1 .09-.71l.06-.23L2 13.84V4a2 2 0 0 1 1.7-1.98L3.85 2H4zm2 20H2v4h28zm-1.39-6H3.4l-1.34 4h27.9zM28 4H4v10h2v-4a2 2 0 0 1 1.85-2H24a2 2 0 0 1 2 1.85V14h2zm-13 6H8v4h7zm9 0h-7v4h7z"></path>
            </svg>
          </div>
          <div>
            <h4>Chambres Confortables</h4>
            <p className="text-sm  text-muted-foreground">
              Nos chambres spacieuses et confortables offrent une vue imprenable
              sur le jardin et un cadre idéal pour se détendre.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="w-6 h-6"
              // style="display: block; height: 24px; width: 24px; fill: currentcolor;"
            >
              <path d="M29 1v2a13 13 0 0 0-.3 26h.3v2a15 15 0 0 1-.31-30zM3 1h2v6h2V1h2v6h2V1h2v9a5 5 0 0 1-4 4.9V31H7V14.9a5.01 5.01 0 0 1-3.98-4.44L3 10.22V10zm26 6v2a7 7 0 0 0-.24 14H29v2a9 9 0 0 1-.27-18zM11 9H5v1.15a3 3 0 0 0 6 .03V10z"></path>
            </svg>{" "}
          </div>
          <div>
            <h4>Restauration Gourmande</h4>
            <p className="text-sm  text-muted-foreground">
              Découvrez notre cuisine raffinée avec des plats préparés par des
              chefs renommés, utilisant des ingrédients frais et locaux.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="w-6 h-6"
              // style="display: block; height: 24px; width: 24px; fill: currentcolor;"
            >
              <path d="M16 1a7 7 0 0 1 7 6.76V9h4a2 2 0 0 1 2 1.85V29a2 2 0 0 1-1.85 2H5a2 2 0 0 1-2-1.85V11a2 2 0 0 1 1.85-2H9V8a7 7 0 0 1 7-7zm11 10H5v18h22zm-11 4a3 3 0 0 1 1 5.83V25h-2v-4.17A3 3 0 0 1 16 15zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-14a5 5 0 0 0-5 4.78V9h10V8a5 5 0 0 0-5-5z"></path>
            </svg>
          </div>
          <div>
            <h4>Sécurité Maximale</h4>
            <p className="text-sm  text-muted-foreground">
              Profitez de votre séjour en toute sérénité grâce à notre système
              de sécurité 24h/24 et nos mesures de protection avancées.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full border opacity-50 my-4"></div>
      <div>
        <div className="mt-4">
          <h4>Pour une nuit seulement</h4>
          <p className="mt-2">
            Nous transformons notre maison au cœur d&apos;un champ de
            coquelicots en une retraite de rêve. Imaginez un lieu où la beauté
            naturelle rencontre le confort moderne, offrant une expérience
            inoubliable. Enveloppé par la mer rouge des coquelicots, vous vivrez
            une soirée exceptionnelle, culminant avec un coucher de soleil
            spectaculaire sur les champs fleuris.
          </p>
        </div>
        <Button
          className="mt-2 p-0 text-foreground text-normal flex gap-2 "
          variant={"link"}
        >
          <span className="underline">En savoir plus</span>
          {">"}
        </Button>
        <div className="mt-4 hidden md:block">
          <h4>Votre Soirée Exclusive</h4>
          <p className="mt-2">
            Nichée au milieu d&apos;un champ de coquelicots, notre maison offre
            une évasion parfaite du quotidien. Les vastes étendues de fleurs
            rouges créent un paysage à couper le souffle, offrant une vue
            panoramique magnifique depuis chaque fenêtre. Pour cette nuit
            spéciale, notre maison a été métamorphosée en une retraite
            somptueuse. Recouverte de bois naturel du sol au plafond, cette
            maison éphémère combine la chaleur du bois avec des touches
            contemporaines. Les plafonds voûtés et les planchers en bois créent
            une ambiance à la fois intime et luxueuse. Les grandes baies vitrées
            offrent une vue spectaculaire sur le champ de coquelicots,
            accentuant la beauté naturelle du lieu. Le lit suspendu au-dessus du
            sol est la pièce maîtresse de cette mise en scène élégante. Vous
            pourrez également admirer certaines de mes créations, telles que les
            suspensions florales en céramique et les divans aux lignes
            organiques.
          </p>
          <p className="mt-2">
            Un brasero extérieur est également à votre disposition pour vous
            permettre de vous réchauffer sous les étoiles. De plus, vous aurez
            accès à une terrasse privée offrant une vue imprenable sur les
            champs de coquelicots. Préparez-vous pour une soirée inoubliable !
          </p>
        </div>

        <div className="mt-4 hidden md:block">
          <h3>Profitez de Moments Inoubliables</h3>
          <ul>
            <li>
              <h4>Coucher de Soleil Panoramique</h4>
              <p className="mt-2">
                Assistez à un coucher de soleil spectaculaire depuis la
                terrasse, avec une vue époustouflante sur le champ de
                coquelicots et les montagnes au loin.
              </p>
            </li>
            <li>
              <h4>Randonnée Privée dans les Champs</h4>
              <p className="mt-2">
                Découvrez la beauté des coquelicots lors d&apos;une randonnée
                privée, où vous pourrez vous perdre dans les vastes étendues de
                fleurs.
              </p>
            </li>
            <li>
              <h4>Dîner Gastronomique en Plein Air</h4>
              <p className="mt-2">
                Dégustez un repas exceptionnel avec les grands classiques de la
                cuisine française, préparé par des chefs renommés, tout en étant
                entouré par la beauté naturelle des coquelicots.
              </p>
            </li>
            <li>
              <h4>Nuit dans la Maison des Coquelicots</h4>
              <p className="mt-2">
                Passez une nuit magique dans une maison spécialement aménagée
                pour cette occasion, avec un lit flottant et une ambiance
                unique.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
