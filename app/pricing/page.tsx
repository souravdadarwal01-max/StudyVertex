export default function PricingPage() {

  const plans = [
    {
      title: "Basic",
      price: "$19",
      description: "For simple assignments and quick academic support.",
      features: [
        "Assignment Review",
        "Basic Formatting",
        "Topic Explanation",
        "48 Hours Delivery"
      ],
      button: "Get Started"
    },


    {
      title: "Standard",
      price: "$49",
      description: "Most popular plan for university students.",
      features: [
        "Complete Assignment Solution",
        "Expert Subject Tutor",
        "Plagiarism Check",
        "Formatting & References",
        "24-48 Hours Delivery"
      ],
      button: "Choose Standard",
      popular: true
    },


    {
      title: "Premium",
      price: "$99",
      description: "For complex projects and urgent deadlines.",
      features: [
        "Dedicated Expert Tutor",
        "Research Assistance",
        "Unlimited Revisions",
        "Priority Support",
        "Urgent Delivery"
      ],
      button: "Get Premium"
    }

  ];



  return (

    <main className="min-h-screen bg-gray-50 py-16">


      <section className="max-w-6xl mx-auto px-6">


        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-gray-900">
            Affordable Assignment Help Plans
          </h1>


          <p className="mt-4 text-gray-600 text-lg">
            Choose the right support package based on your academic needs.
          </p>

        </div>





        <div className="grid md:grid-cols-3 gap-8">



          {plans.map((plan, index) => (

            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.popular
                ? "border-4 border-blue-600"
                : ""
              }`}
            >



              {
                plan.popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    Popular
                  </span>
                )
              }





              <h2 className="text-2xl font-bold">
                {plan.title}
              </h2>



              <p className="text-gray-600 mt-3">
                {plan.description}
              </p>



              <h3 className="text-4xl font-bold mt-6">
                {plan.price}
              </h3>



              <ul className="mt-6 space-y-3">


                {
                  plan.features.map((feature, i) => (

                    <li
                      key={i}
                      className="text-gray-700"
                    >
                      ✅ {feature}
                    </li>

                  ))
                }


              </ul>




              <a
                href="/submit-assignment"
                className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                {plan.button}
              </a>



            </div>

          ))}


        </div>





        <div className="mt-16 bg-green-600 text-white rounded-2xl p-10 text-center">


          <h2 className="text-3xl font-bold">
            Need Help Before Choosing a Plan?
          </h2>


          <p className="mt-3">
            Chat with our academic support team and get a free consultation.
          </p>



          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="inline-block mt-6 bg-white text-green-600 px-8 py-3 rounded-lg font-semibold"
          >
            WhatsApp Us
          </a>



        </div>



      </section>


    </main>

  );
}