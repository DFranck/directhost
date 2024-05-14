import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  const locale = useLocale();
  const t = useTranslations("Layout.Footer");
  return (
    <footer className="bg-gradient text-primary-foreground py-8 text-center mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-evenly">
          <div>
            <h4 className="font-semibold text-xl mb-4">{t("Partner.title")}</h4>
            <ul>
              <li className="flex items-center justify-center py-2">
                <Image
                  src={"/assets/imgs/partners/asc.png"}
                  alt="ASC-logo"
                  width={50}
                  height={50}
                />
                <a href="https://www.asc-tcd.com/" className="hover:underline">
                  ASC
                </a>
              </li>
            </ul>
          </div>
          <span className="w-full border opacity-50 my-10"></span>
          <div className="flex flex-col md:flex-row justify-center md:gap-5">
            <div className="flex  items-center py-2 justify-center  md:justify-end">
              <Link href={`/${locale}/legal-notice`}>{t("legalNotice")} </Link>
            </div>
            <div className="flex  items-center py-2 justify-center md:justify-start">
              <Link href={`/${locale}/terms-and-conditions`}>
                {t("generalConditions")}
              </Link>
            </div>
          </div>
          <span className="w-full border opacity-50 my-10"></span>
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
