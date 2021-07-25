import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { i18n } from "next-i18next";
import Link from "../components/Link/Link";

import { getRouteSource } from "../getRouteSource";

export default function About() {
  const { t } = useTranslation();
  const router = useRouter();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language, () => {
      router.push(
        {
          pathname: getRouteSource(router.pathname, language),
          query: router.query,
        },
        null,
        { locale: language }
      );
    });
  };

  return (
    <div>
      <h2>{t("currentLocale", { locale: router.locale })}</h2>
      <h2>{t("availableLocales", { locales: router.locales.toString() })}</h2>
      {t("hi")}
      <br />
      <Link name="/">/index</Link>
      <button
        onClick={() => changeLanguage("en")}
        disabled={router.locale === "en"}
      >
        en
      </button>
      <button
        onClick={() => changeLanguage("tr")}
        disabled={router.locale === "tr"}
      >
        tr
      </button>
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
