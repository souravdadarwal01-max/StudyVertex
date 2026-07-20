export default function LoginPage() {

  return (

    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">


      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">


        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Student Login
        </h1>


        <p className="text-center text-gray-600 mt-3">
          Access your StudyVertex dashboard
        </p>




        <form className="mt-8 space-y-5">


          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3"
          />



          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3"
          />



          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
          >
            Login
          </button>


        </form>



        <p className="text-center mt-6 text-gray-600">

          Don't have an account?

          <a
            href="/signup"
            className="text-indigo-600 font-semibold ml-2"
          >
            Create Account
          </a>

        </p>


      </div>


    </main>

  );

}