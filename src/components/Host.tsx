import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

const Host = () => {
  return (
    <div>
      <Card className="w-fit pt-6 px-20 rounded-xl shadow-xl">
        <CardContent className="flex flex-col justify-center items-center gap-5">
          <Image
            src={"/assets/imgs/cv_square.jpg"}
            width={100}
            height={100}
            alt="host"
            className="rounded-full"
          />
          <div className="text-center">
            <CardTitle>Franck Dufournet</CardTitle>
            <CardDescription>Gérant</CardDescription>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Host;
