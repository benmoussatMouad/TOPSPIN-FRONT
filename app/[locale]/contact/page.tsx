import ContactForm from "@/app/components/contactForm/ContactForm";
import NavBar from "@/app/components/navbar/NavBar";
import Sponsors from "@/app/components/sponsors/sponsors";
import Whatsapp from "@/app/components/whatsAppSection/whatsapp";
import { useTranslations } from "next-intl";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslator(locale, "ContactPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

function Page({ params }: { params: any }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("ContactPage");
  const tHomePage = useTranslations("HomePage");

  return (
    <>
      <NavBar
        page={"ContactPage"}
        imageData={{
          width: 4096,
          src: "/images/contactusImage.jpeg",
          alt: "background image",
          height: 2305,
        }}
        lang={params.locale}
      />
      <ContactForm translate={t.raw("formContact")} />
      <Whatsapp translatedContent={tHomePage.raw("whatsupSection")} />
      <Sponsors translatedContent={tHomePage.raw("sponsors")} />
    </>
  );
}

export default Page;
