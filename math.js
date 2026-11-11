'use strict';
// Native MathML keeps equations accessible and available offline without a CDN.
const mi = v => `<mi>${v}</mi>`;
const mn = v => `<mn>${v}</mn>`;
const mo = v => `<mo>${v}</mo>`;
const row = (...v) => `<mrow>${v.join('')}</mrow>`;
const sub = (v,s) => `<msub>${mi(v)}<mtext>${s}</mtext></msub>`;
const frac = (a,b) => `<mfrac>${row(a)}${row(b)}</mfrac>`;
const par = a => row(mo('('),a,mo(')'));
const eq = (a,b) => row(a,mo('='),b);
const plus = (...v) => v.join(mo('+'));
const minus = (a,b) => row(a,mo('−'),b);
const Vout=sub('V','out'), Vs=sub('V','s'), Rp=sub('R','p'), Rlo=sub('R','lower'), Rup=sub('R','upper'), alpha=mi('α');
const Rload=sub('R','L'), Rparallel=sub('R','∥'), Vloaded=sub('V','loaded');
const R=mi('R'), L=mi('L'), eps=mi('ε'), dR=row(mo('Δ'),R), dL=row(mo('Δ'),L), GF=mi('GF');
const rn=i=>sub('R',i);
const equationGroups={
 pot:{
  rows:[eq(alpha,frac(mi('x'),L)),eq(Rlo,row(alpha,Rp)),eq(Rup,row(par(minus(mn(1),alpha)),Rp)),eq(Vout,row(Vs,frac(Rlo,plus(Rup,Rlo)))),eq(Vout,row(alpha,Vs)),eq(alpha,frac(mi('θ'),sub('θ','max')))],
  terms:[['α','Fractional wiper position (dimensionless), from 0 to 1.'],['x','Wiper displacement measured from the grounded end (m or mm).'],['L','Total usable linear track length, in the same unit as x.'],['R<sub>p</sub>','Total potentiometer track resistance (Ω).'],['R<sub>lower</sub>','Resistance from the grounded end to the wiper (Ω).'],['R<sub>upper</sub>','Resistance from the wiper to the supply end (Ω).'],['V<sub>s</sub>','Voltage applied across the whole track (V).'],['V<sub>out</sub>','Unloaded wiper voltage relative to ground (V).'],['θ','Angular displacement from the zero end for a rotary potentiometer (degrees or radians).'],['θ<sub>max</sub>','Full usable angular travel, in the same unit as θ.']]
 },
 loading:{rows:[eq(Rparallel,frac(row(alpha,Rp,Rload),plus(row(alpha,Rp),Rload))),eq(Vloaded,row(Vs,frac(Rparallel,plus(row(par(minus(mn(1),alpha)),Rp),Rparallel)))),eq(Vloaded,frac(row(Vs,alpha),plus(mn(1),row(frac(Rp,Rload),alpha,par(minus(mn(1),alpha))))))],terms:[['α','Wiper displacement divided by total track length (dimensionless).'],['R<sub>p</sub>','Total track resistance (Ω).'],['R<sub>L</sub>','Readout load resistance connected from wiper to ground (Ω).'],['R<sub>∥</sub>','Equivalent resistance of the lower track section in parallel with the load (Ω).'],['V<sub>s</sub>','Excitation voltage across the track (V).'],['V<sub>loaded</sub>','Wiper voltage with the load connected (V).']]},
 strain:{rows:[eq(eps,frac(dL,L)),eq(R,frac(row(mi('ρ'),L),mi('A'))),eq(GF,frac(frac(dR,R),eps)),eq(dR,row(GF,mo('·'),eps,mo('·'),R))],terms:[['ε','Longitudinal strain ΔL/L (dimensionless); 1 με = 10⁻⁶.'],['ΔL','Change in gauge length (m).'],['L','Original gauge length (m).'],['R','Unstrained gauge resistance (Ω).'],['ρ','Electrical resistivity of the gauge material (Ω·m).'],['A','Conductor cross-sectional area (m²).'],['GF','Gauge factor: fractional resistance change per unit strain (dimensionless).'],['ΔR','Resistance change caused by strain (Ω).']]},
 bridge:{rows:[eq(Vout,row(Vs,mo('['),minus(frac(rn(2),plus(rn(1),rn(2))),frac(rn(4),plus(rn(3),rn(4)))),mo(']'))),eq(row(rn(1),rn(4)),row(rn(2),rn(3)))],terms:[['R<sub>1</sub>, R<sub>2</sub>','Upper-left and lower-left bridge-arm resistances (Ω).'],['R<sub>3</sub>, R<sub>4</sub>','Upper-right and lower-right bridge-arm resistances (Ω).'],['V<sub>s</sub>','Excitation voltage applied top-to-bottom (V).'],['V<sub>out</sub>','Left midpoint voltage minus right midpoint voltage (V). The second equation is the zero-output balance condition.']]},
 calibration:{rows:[eq(mi('V'),plus(mi('a'),row(mi('b'),mi('F')))),eq(sub('F','estimated'),frac(minus(mi('V'),mi('a')),mi('b')))],terms:[['V','Measured amplifier output voltage (V).'],['a','Fitted output offset at zero force (V).'],['b','Fitted sensitivity or calibration slope (V/N); must be nonzero to estimate force.'],['F','Applied calibration force (N).'],['F<sub>estimated</sub>','Force inferred from the calibrated voltage (N).']]},
 basics:{rows:[eq(mi('V'),row(mi('I'),R)),eq(sub('R','series'),plus(rn(1),rn(2))),eq(sub('R','parallel'),frac(row(rn(1),rn(2)),plus(rn(1),rn(2))))],terms:[['V','Voltage across a resistor (V).'],['I','Current through the resistor (A).'],['R','Resistance of the resistor (Ω).'],['R<sub>1</sub>, R<sub>2</sub>','Individual resistor values (Ω).'],['R<sub>series</sub>','Equivalent resistance for two resistors in series (Ω).'],['R<sub>parallel</sub>','Equivalent resistance for two resistors in parallel (Ω).']]}
};
function equations(id){const g=equationGroups[id];return `<div class="equation-group"><div class="formula">${g.rows.map(r=>`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">${r}</math>`).join('')}</div><div class="symbol-key"><h4>Symbols and units</h4><dl>${g.terms.map(([s,d])=>`<dt>${s}</dt><dd>${d}</dd>`).join('')}</dl></div></div>`}
