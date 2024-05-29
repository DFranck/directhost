import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Footer = async () => {
  const locale = useLocale();
  const t = useTranslations("Layout.Footer");
  return (
    <footer className="bg-gradient text-primary-foreground py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-evenly">
          <div>
            {/* <h4 className="font-semibold text-xl mb-4">Contact</h4> */}
            <ul>
              <li className="flex items-center justify-center">
                <Link href={`/${locale}/contact`}>Contact</Link>
              </li>
            </ul>
          </div>
          {/* <span className="w-full border opacity-50 my-10"></span> */}
          {/* <div className="flex flex-col md:flex-row justify-center md:gap-5">
            <div className="flex  items-center py-2 justify-center  md:justify-end">
              <Link href={`/${locale}/legal-notice`}>{t("legalNotice")} </Link>
            </div>
            <div className="flex  items-center py-2 justify-center md:justify-start">
              <Link href={`/${locale}/terms-and-conditions`}>
                {t("generalConditions")}
              </Link>
            </div>
          </div> */}
          <span className="w-full border opacity-50 my-10"></span>
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
