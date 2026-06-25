import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Phone, Mail, MapPin, Hammer, Home, Bath, ChefHat, CheckCircle2, ShieldCheck, Star, ArrowRight, Calculator, Menu, X } from 'lucide-react';
import './styles.css';

const services = [
  ['Kitchen Remodel', 'Cabinetry, islands, tile, finishes, and modern layouts.'],
  ['Bathroom Remodel', 'Showers, vanities, tile work, waterproofing, and upgrades.'],
  ['Basement Remodel', 'Finished basements, drywall, flooring, lighting, and paint.'],
  ['Whole Home Remodel', 'Full renovation coordination from demo to punch list.'],
  ['Additions', 'Room additions, framing, exterior tie-ins, and project support.'],
  ['Commercial Improvement', 'Tenant improvements, repairs, and buildout support.']
];

function App(){
  const [open,setOpen]=useState(false);
  const [menu,setMenu]=useState(false);
  const [budget,setBudget]=useState(25000);
  const payment=Math.round((budget*1.13)/60);
  return <main>
    <nav className="nav">
      <div className="brand"><span className="mark">J</span><span>J.JD Contractors Inc.</span></div>
      <button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      <div className={menu?'links show':'links'}><a href="#services">Services</a><a href="#work">Work</a><a href="#quote">Estimate</a><a href="tel:2025284679" className="call">Call Now</a></div>
    </nav>

    <section className="hero">
      <div className="heroText">
        <p className="eyebrow"><ShieldCheck size={18}/> Licensed Home Improvement Contractor • Hyattsville, MD</p>
        <h1>Premium remodeling for homes and commercial spaces.</h1>
        <p className="lead">J.JD Contractors Inc. helps homeowners and businesses plan, improve, and complete high-quality renovation projects across Maryland and DC.</p>
        <div className="actions"><button onClick={()=>setOpen(true)}>Get a Free Estimate <ArrowRight size={18}/></button><a href="tel:2025284679">(202) 528-4679</a></div>
        <div className="stats"><span><b>90</b> BuildZoom Score</span><span><b>Active</b> License verified</span><span><b>MD + DC</b> Service Area</span></div>
      </div>
      <div className="heroCard"><div className="project"><Home/><h3>Whole Home Remodel</h3><p>Planning • Design • Build</p></div><div className="floating"><Star/> 5-star client experience</div></div>
    </section>

    <section className="trust"><span>MHIC License #05-136300</span><span>DC License #410519000028</span><span>Commercial License #16037842</span></section>

    <section id="services" className="section"><div className="sectionTop"><p className="eyebrow">What We Do</p><h2>Remodeling services built around your project.</h2></div><div className="grid">{services.map(([t,d])=><article className="card" key={t}><Hammer/><h3>{t}</h3><p>{d}</p><button onClick={()=>setOpen(true)}>Request this service</button></article>)}</div></section>

    <section id="work" className="split"><div><p className="eyebrow">Interactive Project Planner</p><h2>Estimate your project before the first call.</h2><p>Move the slider to preview a simple monthly planning number. Final pricing depends on materials, scope, permits, and site conditions.</p><input type="range" min="5000" max="150000" step="2500" value={budget} onChange={e=>setBudget(e.target.value)} /><div className="calc"><b>${Number(budget).toLocaleString()}</b><span>Estimated project budget</span><b>${payment.toLocaleString()}/mo</b><span>Planning estimate over 60 months</span></div></div><div className="photoWall"><div>Kitchen</div><div>Bath</div><div>Basement</div><div>Commercial</div></div></section>

    <section id="quote" className="cta"><h2>Ready to start a project?</h2><p>Send the client this preview and let them request a quote directly from the site.</p><button onClick={()=>setOpen(true)}>Open Quote Form</button></section>

    <footer><div><b>J.JD Contractors Inc.</b><p>6004 10th Pl, Hyattsville, MD 20782</p></div><div><a href="mailto:info@jjdcontractorsinc.com"><Mail/> info@jjdcontractorsinc.com</a><a href="tel:2025284679"><Phone/> (202) 528-4679</a><a href="https://www.jjdcontractorsinc.com"><MapPin/> jjdcontractorsinc.com</a></div></footer>

    {open && <div className="modal"><div className="modalBox"><button className="close" onClick={()=>setOpen(false)}>×</button><h2>Request an Estimate</h2><p>Interactive mockup form for client testing.</p><input placeholder="Full name"/><input placeholder="Phone number"/><input placeholder="Project address"/><select><option>Kitchen Remodel</option><option>Bathroom Remodel</option><option>Basement Remodel</option><option>Whole Home Remodel</option><option>Addition</option><option>Commercial Improvement</option></select><textarea placeholder="Tell us about the project"></textarea><button onClick={()=>alert('Demo form submitted')}>Submit Demo Request</button></div></div>}
  </main>
}

createRoot(document.getElementById('root')).render(<App/>);