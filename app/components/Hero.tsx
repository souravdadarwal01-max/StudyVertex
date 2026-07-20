export default function Hero() {

  return (

    <section className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white py-24">

      <div className="max-w-6xl mx-auto px-6 text-center">


        <h1 className="text-5xl font-bold leading-tight">
          Expert Assignment Help
          <br />
          For International Students
        </h1>


        <p className="mt-6 text-lg text-indigo-100 max-w-2xl mx-auto">
          Get personalized academic support from subject experts.
          Quality solutions, timely delivery, and trusted guidance.
        </p>



        <div className="mt-8 flex justify-center gap-4">


          <a
            href="/submit-assignment"
            className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-xl font-semibold"
          >
            Submit Assignment
          </a>



          <a
            href="/pricing"
            className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold"
          >
            View Pricing
          </a>


        </div>


      </div>

    </section>

  );

}