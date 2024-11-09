import React from 'react'

const achivementsList = [
    {
        metric: "Projects",
        value: "50+",
    },
    {
        metric: "Users",
        value: "1k+",
    },
    {
        metric: "Awards",
        value: "7+",
    },
    {
        metric: "years",
        value: "2+",
    },
];

const AchievmentSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between'>
        {achivementsList.map((achivement, index) =>{
            return(
                <div key={index} className='flex flex-col items-center justify-center mx-4'
                >
                    <h2 className='text-white text-4xl font-bold'>{achivement.value}</h2>
                    <p className='text-[#ADB7BE] text-base'>{achivement.metric}</p>
                </div>
            )
        })}
        </div>
      
    </div>
  )
}

export default AchievmentSection
