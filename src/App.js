import './App.css';
import Body from './sections/body/body.component';
import Header from './sections/header/header.section';

function App() {
  return (
    <div className="App pt-12 pb-6">
      <Header />
      <Body />
    </div>
  );
}

export default App;


// import React from "react";
// const App = () => {
//   const appRef = React.useRef()
//   console.log(appRef)
//   const [filesName, setFilesName] = React.useState([])
//   console.log(filesName)
//   const fileUploadHandler = ()=>{
//     appRef.current.click()
//   }
//   return (
//     <div className='bg-red-100' style={{margin: "30px auto", width: 450}}>
//       <form className='border border-black' onSubmit={(e)=>e.preventDefault()}>
//         <input 
//           className='bg-yellow-200'
//           type="file" 
//           ref={appRef} 
//           style={{ display: "none" }} 
//           onChange={(e) => {
//             let files = e.target.files
//             for(let file of files){
//               setFilesName((state)=>{
//                 return [...state, file.name]
//               })
//             }
//           }}
//           multiple={true}
//         />
//         <button 
//           className='bg-blue-300'
//           onClick={fileUploadHandler} 
//           style={{margin: "20px auto", padding: "10px 20px"}}
//         >
//           upload file
//         </button>
//       </form>
//       {filesName.map(
//         (filename, index) => (
//           <p key={index}>{filename}</p>
//         )
//       )}
//     </div>
    
//   );
// };
// export default App