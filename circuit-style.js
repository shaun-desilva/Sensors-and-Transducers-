'use strict';
function styleCircuits(root=document){
 const add=(el,...classes)=>el.classList.add(...classes);
 root.querySelectorAll('svg').forEach(svg=>{
  const name=(svg.getAttribute('aria-label')||'').toLowerCase();
  const isBridge=/bridge:|wheatstone bridge schematic/.test(name);
  const isDivider=/^voltage divider|^closed series circuit|potentiometer equivalent circuit/.test(name);
  if(!isBridge&&!isDivider)return;
  add(svg,'colour-circuit');
  svg.querySelectorAll('path').forEach(el=>add(el,'circuit-wire'));
  svg.querySelectorAll('circle').forEach(el=>add(el,'circuit-node'));
  const resistors=[...svg.querySelectorAll('rect')];
  if(isBridge){
   const kind=name.startsWith('full')?'full':name.startsWith('half')?'half':name.startsWith('quarter')?'quarter':'base';
   let states=kind==='full'?['tension','compression','compression','tension']:kind==='half'?['fixed','fixed','compression','tension']:kind==='quarter'?['fixed','fixed','fixed','tension']:['fixed','fixed','fixed','fixed'];
   if(svg.closest('#p5-live-diagram')&&+document.getElementById('bridge-strain').value<0)states=states.map(s=>s==='tension'?'compression':s==='compression'?'tension':s);
   resistors.slice(0,4).forEach((el,i)=>add(el,'circuit-resistor',states[i]));
   if(resistors[4])add(resistors[4],'circuit-output');
   svg.querySelectorAll('text').forEach(el=>{
    const text=el.textContent;
    if(/Vout|ΔV/.test(text))add(el,'circuit-output-text');
    const arm=['₁','₂','₃','₄'].findIndex(n=>text.startsWith('R'+n));
    if(arm>=0){add(el,'circuit-arm-label',states[arm]);if(states[arm]!=='fixed'&&!svg.querySelector(`[data-state-for="${arm}"]`)){const label=document.createElementNS('http://www.w3.org/2000/svg','text');label.setAttribute('x',el.getAttribute('x'));label.setAttribute('y',+el.getAttribute('y')+17);label.setAttribute('text-anchor','middle');label.setAttribute('data-state-for',arm);label.setAttribute('class','circuit-state-label '+states[arm]);label.textContent=states[arm]==='tension'?'Tension':'Compression';el.parentNode.append(label);}}
   });
  }else{
   resistors.forEach((el,i)=>add(el,'circuit-resistor',name.includes('equivalent circuit')&&i===2?'load':'fixed'));
   svg.querySelectorAll('text').forEach(el=>{if(/Vout|Midpoint|Rᴸ/.test(el.textContent))add(el,'circuit-output-text')});
   const current=svg.querySelector('.current-flow');if(current){current.classList.remove('circuit-wire');add(current,'circuit-current')}
  }
 });
}
