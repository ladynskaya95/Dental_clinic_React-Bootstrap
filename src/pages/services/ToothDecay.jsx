import React from 'react'

const ToothDecay = () => {
   return (
     <div className="services_tooth_decay">
       <h2>Лікування карієсу</h2>
       <div className="services_tooth_decay_row row">
         <div className="col-3 services_tooth_decay_item">
           <div className="card">
             <div className="card-body">
               <h3>Пломби</h3>
             </div>
           </div>
         </div>
         <div className="col-3 services_tooth_decay_item">
           <div className="card">
             <div className="card-body">
               <h3>Коронки на зуб</h3>
             </div>
           </div>
         </div>
         <div className="col-3 services_tooth_decay_item">
           <div className="card">
             <div className="card-body">
               <h3>Керамічні вкладки</h3>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
}

export default ToothDecay