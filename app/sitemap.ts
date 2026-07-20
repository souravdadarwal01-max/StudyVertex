import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://studyvertex.in";


  return [

    // Main Pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },


    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/subjects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/submit-assignment`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },


    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },


    // Main SEO Service Pages

    {
      url: `${baseUrl}/assignment-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/homework-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/essay-writing-service`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: `${baseUrl}/research-paper-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    // Country SEO Pages

    {
      url: `${baseUrl}/usa-assignment-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/uk-assignment-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/australia-assignment-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/canada-assignment-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },


    // Subject SEO Pages

    {
      url: `${baseUrl}/engineering-assignment-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/mba-assignment-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/computer-science-assignment-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },


    {
      url: `${baseUrl}/nursing-assignment-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

  ];

}
