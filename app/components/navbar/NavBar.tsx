import React from "react";
import Hero from "../hero/Hero";
import Nav from "./Nav";
import { useTranslations } from "next-intl";
import MenuNav from "./MenuNav";

function NavBar({ lang, page }: { lang: string; page: string }) {
  const t = useTranslations("NavBar");
  const tPage = useTranslations(page);

  return (
    <div style={{ position: "relative" }}>
      <Nav
        links={[
          t("Links.firstLink"),
          t("Links.secondLink"),
          t("Links.thirdLink"),
        ]}
        lang={lang}
      />
      <MenuNav />
      <Hero
        page={page}
        content={[
          t("heroSection.header"),
          t("heroSection.description"),
          t("heroSection.link"),
        ]}
        tPage={tPage("title")}
      />
    </div>
  );
}

export default NavBar;
