// import React, { useState } from "react";
// import axios from 'axios';
// // import { Link } from 'react-router-dom';
// import Sbar from "../nav/Sbar";


// export default function AddUsser() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [adresse, setadresse] = useState('');
//   const [ville , setville ] = useState('');
//   const [telephone , setTelephone ] = useState('');
//   const [encadrant, setEncadrant] = useState('');
//   const [sujet, setSujet] = useState('');
//   const [message, setMessage] = useState('');

//   const handleAdd = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/AddUsser', { name, email,adresse });
  
//       if (response && response.data) {
//         setMessage(response.data.message || 'Add successful');
//       } else {
//         setMessage('No response data received');
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'An error occurred during Add');
//     }
//   };
// //inphand
//   const inpN = (e) => {
//     setName(e.target.value);
//   }
//   const inpNu = (e) => {
//     setEmail(e.target.value);
//   }
//   const inpAd = (e) => {setadresse(e.target.value);} 
//   const inpVi = (e) => {setville(e.target.value);} 
//   const inpTe = (e) => {setTelephone(e.target.value);}
//   const inpCa = (e) => {setEncadrant(e.target.value);} 
//   const inpSuj= (e) => { setSujet(e.target.value);}
//   return (
//     <>
//     <Sbar/>
  
//     <div className="container mt-4">
      
//       <form>
//         <div className="form-group">
//         {/* <Link to='/UserList' className='btn btn-primary mt-2 mb-2'><i className='fa-solid fa-plus'> back</i></Link> */}
// <br/>
//           <label htmlFor="name">Name</label>
//           <input type="text" value={name} className="form-control" id="name" onChange={inpN} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" value={email} className="form-control" id="email" onChange={inpNu} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">adresse </label>
//           <input type="email" value={adresse } className="form-control" id="email" onChange={inpAd} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">adresse </label>
//           <input type="email" value={adresse } className="form-control" id="email" onChange={inpVi} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">adresse </label>
//           <input type="email" value={adresse } className="form-control" id="email" onChange={inpAd} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">adresse </label>
//           <input type="email" value={adresse } className="form-control" id="email" onChange={inpAd} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">adresse </label>
//           <input type="email" value={adresse } className="form-control" id="email" onChange={inpAd} />
//         </div>
//         <button type="button" className="btn btn-primary" onClick={handleAdd}>Ajouter</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//     </>
//   );
// }
import React, { useState } from "react";
import axios from 'axios';
import Sbar from "../nav/Sbar";

export default function AddUsser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [Ville, setVille] = useState('');
  const [telephone, setTelephone] = useState('');
  const [encadrant, setEncadrant] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:5000/AddUsser', { name, email, adresse, Ville, telephone, encadrant, sujet });
  
      if (response && response.data) {
        setMessage(response.data.message || 'Add successful');
      } else {
        setMessage('No response data received');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred during Add');
    }
  };

  return (
    <>
      <Sbar />

      <div className="container mt-5" style={{marginBottom: '30px'}}>

        <h1>Ajouter un Stage</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" value={name} className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" value={email} className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="adresse">Adresse de l'entreprise</label>
            <input type="text" value={adresse} className="form-control" id="adresse" onChange={(e) => setAdresse(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="ville">Ville de  l'entreprise</label>
            <input type="text" value={Ville} className="form-control" id="ville" onChange={(e) => setVille(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Téléphone</label>
            <input type="number" value={telephone} className="form-control" id="telephone" onChange={(e) => setTelephone(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="encadrant">Encadrant</label>
            <input type="text" value={encadrant} className="form-control" id="encadrant" onChange={(e) => setEncadrant(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="sujet">Intitule de sujet</label>
            <input type="text" value={sujet} className="form-control" id="sujet" onChange={(e) => setSujet(e.target.value)} />
          </div><br/>
          <button type="button" className="btn btn-primary" onClick={handleAdd}>Ajouter</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

