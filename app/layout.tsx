import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";


const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "StudyVertex - Expert Assignment Help",
  description:
    "Get expert assignment help, homework support and online tutors for students worldwide.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const schema = {
    "@context": "https://schema.org",

    "@graph": [

      {
        "@type": "Organization",

        "@id": "https://studyvertex.in/#organization",

        "name": "StudyVertex",

        "alternateName": "StudyVertex Assignment Help",

        "url": "https://studyvertex.in",

        "logo": {
          "@type": "ImageObject",
          "url": "https://studyvertex.in/logo.png"
        },

        "description":
          "StudyVertex provides expert assignment help, homework assistance, essay writing support and research paper help for students worldwide.",


        "contactPoint": {

          "@type": "ContactPoint",

          "contactType": "customer support",

          "availableLanguage": [
            "English"
          ]

        },


        "sameAs": [

          "https://www.facebook.com/studyvertex",

          "https://www.instagram.com/studyvertex",

          "https://www.linkedin.com/company/studyvertex"

        ]

      },



      {
        "@type": "WebSite",

        "@id": "https://studyvertex.in/#website",

        "url": "https://studyvertex.in",

        "name": "StudyVertex",


        "publisher": {

          "@id": "https://studyvertex.in/#organization"

        },


        "potentialAction": {

          "@type": "SearchAction",

          "target": {

            "@type": "EntryPoint",

            "urlTemplate":
              "https://studyvertex.in/search?q={search_term_string}"

          },

          "query-input":
            "required name=search_term_string"

        }

      }

    ]

  };



  return (

    <html lang="en">

      <body className={inter.className}>


        {/* Global SEO Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />



        {/* Navbar */}

        <Navbar />



        {/* Page Content */}

        {children}



        {/* WhatsApp Button */}

        <WhatsAppButton />



        {/* Footer */}

        <Footer />


      </body>

    </html>

  );

}
