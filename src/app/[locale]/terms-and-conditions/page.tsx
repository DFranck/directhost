import { Button } from "@/components/ui/button";

const TermsAndConditions = () => {
  const title = "text-xl md:text-2xl font-bold mb-4";
  const text = "text-sm mb-16";
  return (
    <div className="max-w-7xl p-20">
      <h2 className={title}>Nos conditions générales</h2>
      <p className={text}>
        Vous êtes à la recherche des conditions générales du site et des
        services proposés sur le site decathlon.fr ? Vous êtes au bon endroit !
      </p>
      <div className="space-x-4 space-y-4 mb-16">
        <p>Cliquez sur les conditions générales qui vous intéressent :</p>
        <Button variant={"outline"} className="p-10">
          Conditions générales de vente decathlon.fr
        </Button>
        <Button variant={"outline"} className="p-10">
          Conditions générales d’utilisation decathlon.fr
        </Button>
        <Button variant={"outline"} className="p-10">
          Conditions Générales Marketplace
        </Button>
      </div>
      <div className="space-x-4 space-y-4 mb-16">
        <p>Conditions générales de nos services :</p>
        <Button variant={"outline"} className="p-10">
          CGU du service après-vente
        </Button>
        <Button variant={"outline"} className="p-10">
          CGU des avis clients
        </Button>
        <Button variant={"outline"} className="p-10">
          CG de la location
        </Button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
