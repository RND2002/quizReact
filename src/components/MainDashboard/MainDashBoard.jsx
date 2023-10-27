import { useParams, Link, useNavigate } from "react-router-dom";
import React from "react";
import java from '../assets/java.png'
import python from '../assets/python.png'
import javascript from '../assets/javascript.png'

const MainDashBoard = () => {
  const navigate=useNavigate()
  function goToQuestionCreationDashboard(){
      navigate(`createQuiz`)
  }
  const { username } = useParams();
  // const authContext=useAuth()
  return (
    <div>
      <div className="mt-12">
        <h1 className="font-bold text-xl md: text-2xl">
          What will you teach today?
        </h1>

        <div className="flex justify-center mt-8">
          <div class="flex items-center justify-center m-2">
            <div action="">
              <label class="text-blue border-blue hover:bg-blue flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-full border bg-white uppercase tracking-wide shadow-lg hover:text-white">
                <img className="rounded-full object-cover " src={java}  alt=""/>
               
               
              </label>
            </div>
          </div>
          <div class="flex items-center justify-center m-2">
            <form action="">
              <label class="text-blue border-blue hover:bg-blue flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-full border bg-white uppercase tracking-wide shadow-lg hover:text-white">
                
                <img src={python} alt=""/>
              </label>
            </form>
          </div>
          <div class="flex items-center justify-center m-2">
            <form action="">
              <label class="text-blue border-blue hover:bg-blue flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-full border bg-white uppercase tracking-wide shadow-lg hover:text-white">
                <img src={javascript} alt=""/>
              </label>
            </form>
          </div>
          {/* create quiz */}
        
    
    </div>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:bg-stringColor">
    <div class="md:flex">
        <div class="md:flex-shrink-0">
       
        </div>
        <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Make your own Quizes</div>
        <p class="block mt-1 text-lg leading-tight font-medium text-black">Create an engaging quiz to your fellow students</p>
        <div className="mt-4">
        <button class="bg-transparent hover:bg-mainColor text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={goToQuestionCreationDashboard}>
  Create Quiz
</button>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashBoard;
