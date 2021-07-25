import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Link from "../components/Link/Link";

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div>
      <h2>{t("currentLocale", { locale: router.locale })}</h2>
      <h2>{t("availableLocales", { locales: router.locales.toString() })}</h2>
      {t("hi")}
      <br />
      <Link name="/about">/about</Link>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
