export default function Subjects() {


const subjects = [

{
title:"Computer Science & IT",
icon:"💻",
link:"/subjects/computer-science-it"
},

{
title:"Engineering",
icon:"⚙️",
link:"/subjects/engineering"
},

{
title:"Mathematics",
icon:"📐",
link:"/subjects/mathematics"
},

{
title:"Business & Management",
icon:"📈",
link:"/subjects/business-management"
},

{
title:"Science",
icon:"🔬",
link:"/subjects/science"
},

{
title:"Healthcare & Nursing",
icon:"🏥",
link:"/subjects/healthcare-nursing"
},

{
title:"Arts & Humanities",
icon:"🎨",
link:"/subjects/arts-humanities"
},

{
title:"Finance & Accounting",
icon:"💰",
link:"/subjects/finance-accounting"
},

{
title:"Research & Writing",
icon:"📚",
link:"/subjects/research-writing"
}

];


return (

<section className="bg-gray-100 py-16 px-6">


<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold text-center">
Explore Subjects
</h2>


<p className="text-center text-gray-600 mt-3">
Expert help available across multiple academic disciplines.
</p>



<div className="grid md:grid-cols-3 gap-6 mt-10">


{subjects.map((subject)=>(


<a
key={subject.title}
href={subject.link}
className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
>


<div className="text-4xl">
{subject.icon}
</div>


<h3 className="font-bold text-xl text-blue-700 mt-3">
{subject.title}
</h3>


<span className="block mt-3 text-blue-700">
Explore →
</span>


</a>


))}


</div>


</div>


</section>


);


}
