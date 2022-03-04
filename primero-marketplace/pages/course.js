
import ReactPlayer from 'react-player'



export default function courses() {

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12 text-2xl font-bold">
       <h2>Video Courses</h2>
       <div className='flex-row p-8 place-items-center'>
       <ReactPlayer controls url='https://www.youtube.com/watch?v=hMwdd664_iw&list=PLO5VPQH6OWdULDcret0S0EYQ7YcKzrigz' />
       <br/>
       <ReactPlayer controls url='https://www.youtube.com/watch?v=dVJzcFDo498&list=PLHx4UicbtUoYvCvRouZ4XbaDpE7cbCCqo' />
           
           </div>
      </div>
    </div>
  )
}
