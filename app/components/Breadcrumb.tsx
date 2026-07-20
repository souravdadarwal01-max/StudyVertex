import Link from "next/link";


interface BreadcrumbProps {
  items: {
    name: string;
    url?: string;
  }[];
}


export default function Breadcrumb({ items }: BreadcrumbProps) {


  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",

      "position": index + 1,

      "name": item.name,

      ...(item.url && {
        "item": `https://studyvertex.in${item.url}`
      })

    }))
  };


  return (

    <>

      {/* Breadcrumb Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />


      {/* Visible Breadcrumb */}

      <nav className="text-sm mb-6 text-gray-600">

        <Link href="/">
          Home
        </Link>


        {items.map((item, index) => (

          <span key={index}>

            {" > "}


            {item.url ? (

              <Link href={item.url}>
                {item.name}
              </Link>

            ) : (

              <span className="font-medium text-gray-800">
                {item.name}
              </span>

            )}

          </span>

        ))}

      </nav>

    </>

  );
}
