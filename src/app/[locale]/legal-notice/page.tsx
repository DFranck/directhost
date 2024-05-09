const LegalNotice = () => {
  const title = "text-xl md:text-2xl font-bold mb-4";
  const text = "text-sm mb-16";
  return (
    <div className="max-w-7xl p-10 md:p-20">
      <div>
        <h2 className={title}>Legal Notice</h2>
        <p className={text}>
          Le site www.decathlon.fr (ci-après le “Site”) est édité par la société
          DECATHLON France, société paractions simplifiée à capital variable,
          dont le siège social est situé sis 4, boulevard de Mons,
          59650Villeneuve d&apos;Ascq et immatriculée au Registre du Commerce et
          des Sociétés de Lille Métropole sousle numéro 500 569 405. N° TVA
          Intracommunautaire : FR11500569405 Numéro de téléphone : 09 69 36 32
          10 Email : contacts@decathlon.com Directeur de la publication :
          Monsieur Elalami LAFKHI
        </p>
      </div>
      <div>
        <h2 className={title}>Contact</h2>
        <p className={text}>
          Le Centre Relation Clients de decathlon.fr est joignable : • Par
          internet : via le lien de Contact sur le site www.decathlon.fr • Par
          téléphone au 0969 368 369 (N° Cristal, prix d&apos;un appel local
          depuis un téléphone fixe), du lundi au samedi de 9h à 20h. • Par voie
          postale : DECATHLON SAS – Service Relation Clients - 4 boulevard de
          Mons, 59650 Villeneuve d&apos;Ascq
        </p>
      </div>
      <div>
        <h2 className={title}>Hébergeur</h2>
        <p className={text}>
          Tour Europlaza 17ème étage 20 avenue André Prothin 92927 Paris La
          Défense +33 1 73 02 02 03
        </p>
      </div>
      <div>
        <h2>Protection des données personnelles</h2>
        <p className={text}>
          Pour consulter notre charte de protection de données personnelles,
          cliquez ici. Pour consulter la politique Cookies de DECATHLON, cliquez
          ici.
        </p>
      </div>
      <div>
        <h2 className={title}>Propriété intellectuelle</h2>
        <p className={text}>
          Le Site est protégé au titre de la propriété intellectuelle, notamment
          droits d&apos;auteurs, dessins etmodèles, marques, noms de domaine,
          brevets, savoir-faire, logiciels ou bases de données. Legroupe
          DECATHLON SE (Groupe DECATHLON ) et/ou ses partenaires reste(nt)
          propriétaire(s)de l&apos;ensemble de ces contenus et droits associés.
          Sur ces contenus, Groupe DECATHLON vous accorde une licence limitée,
          non-exclusive,révocable, sans droit de sous-licencier pour les simples
          accès, navigation et utilisation liés auprésent Site. Cette licence ne
          vous accorde aucun autre droit, en particulier
          d&apos;exploitationcommerciale de ces contenus.
        </p>
      </div>
      <div>
        <h2 className={title}>Nos prix</h2>
        <p className={text}>
          Le Site vous permet de prendre connaissance des prix des produits
          pratiqués dans les magasinsDECATHLON situés en France métropolitaine.
          Les prix affichés sont les prix définis par lacentrale d&apos;achat de
          DECATHLON, il s&apos;agit de prix maximum conseillés, ces prix peuvent
          doncvarier selon la politique commerciale de chaque magasin
          DECATHLON.Par ailleurs, l&apos;internaute est informé que les offres
          de produits et prix proposés à l&apos;achat dans lesmagasins DECATHLON
          ne sont pas applicables aux achats en ligne sur le site
          www.decathlon.fret inversement.
        </p>
      </div>
      <div>
        <h2 className={title}>Utilisation du site</h2>
        <p className={text}>
          L&apos;utilisation du Site par l&apos;Internaute doit se faire en
          conformité avec les Conditions Générales d&apos;Utilisation du Site
          accessibles via le lien ICI
        </p>
      </div>
      <div>
        <h2 className={title}>Moyenne mensuelle destinataires actifs</h2>
        <p className={text}>
          Nombre de destinataires actifs (Plateforme decathlon.fr / moyenne
          mensuelle calculée sur les 6 derniers mois) : 13 038 420 destinataires
          actifs (mise à jour 17/08/2023).
        </p>
      </div>
    </div>
  );
};

export default LegalNotice;
