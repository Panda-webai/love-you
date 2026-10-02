'use strict';
const scenes = [
 {place:'จุดเริ่มต้น · ดาวโลก',coord:'EARTH',q:'จักรวาลกว้างขนาดนี้<br>ไปด้วยกัน<em>ไหมเธอ</em>',copy:'มีที่นั่งข้างๆ ว่างอยู่หนึ่งที่\nตั้งใจเก็บไว้ให้เธอเลยนะ',hint:'เที่ยวบินนี้ ใช้หัวใจเป็นเชื้อเพลิง',err:'ไม่พบเส้นทางหนี',why:'ระบบนำทางหาเส้นทางที่ไม่มีเธอไม่เจอ\nลองเลือกเดินทางด้วยกันดูนะ ♡'},
 {place:'สถานีที่ 2 · วงโคจรแห่งความคิดถึง',coord:'ORBIT',q:'ขอวนอยู่ใกล้ๆ<br><em>หัวใจเธอ</em>ได้ไหม',copy:'ไม่ต้องเจอกันทุกวินาทีก็ได้\nแค่ขอให้คิดถึงกันบ้างก็พอ',hint:'แรงดึงดูดของเธอ มีผลกับใจเราเป็นพิเศษ',err:'แรงดึงดูดสูงเกินไป',why:'ยานออกจากวงโคจรไม่ได้\nเพราะเธอน่ารักเกินค่าที่ระบบรับไหว'},
 {place:'สถานีที่ 3 · ด้านสว่างของดวงจันทร์',coord:'MOON',q:'คืนไหนเงียบเหงา<br>ให้เรา<em>อยู่ข้างๆ</em>นะ',copy:'จะนั่งดูพระจันทร์ หรือฟังเธอเล่าเรื่องทั้งวัน\nเราก็อยากใช้เวลานั้นด้วยกัน',hint:'บนดวงจันทร์ไม่มีเสียง แต่เรายังได้ยินใจตัวเอง',err:'สัญญาณปฏิเสธขาดหาย',why:'ดวงจันทร์รับสัญญาณได้แค่คำว่า “ตกลง”\nช่างซ่อมกำลังเขิน เลยยังไม่มาทำงาน'},
 {place:'สถานีที่ 4 · ฝนดาวตก',coord:'METEOR',q:'ขอเป็น<em>คำอธิษฐาน</em><br>ของเธอสักข้อได้ไหม',copy:'ส่วนคำอธิษฐานของเราไม่ซับซ้อนเลย\nแค่อยากเห็นเธอยิ้มบ่อยๆ',hint:'อธิษฐานไปแล้วหนึ่งข้อ และข้อนั้นก็คือเธอ',err:'คำอธิษฐานถูกจองแล้ว',why:'ดาวตกทุกดวงมีชื่อเธอติดอยู่\nยกเลิกไม่ได้ เพราะเราอธิษฐานจริงจังมาก'},
 {place:'สถานีที่ 5 · ดาวเสาร์',coord:'SATURN',q:'ดาวเสาร์มีวงแหวน<br>ส่วนเรา<em>มีเธอ</em>ได้ไหม',copy:'ไม่ต้องสัญญาอะไรไกลถึงปลายจักรวาล\nแค่ลองจับมือกันในวันนี้ก็พอ',hint:'คำถามนี้ อาจทำให้นักบินเสียอาการ',err:'นักบินเสียอาการ',why:'ตรวจพบความน่ารักเกินพิกัด\nระบบปฏิเสธเลยเขินจนหยุดทำงาน'},
 {place:'สถานีที่ 6 · เนบิวลาสีชมพู',coord:'NEBULA',q:'วันไหนโลกใจร้าย<br>มา<em>พักใจที่เรา</em>นะ',copy:'ไม่ต้องเก่งหรือเข้มแข็งตลอดเวลาก็ได้\nอยู่กับเรา เธอเป็นตัวเองได้เลย',hint:'ตรงนี้มีพื้นที่ให้ทุกความรู้สึกของเธอ',err:'ระบบพักใจเปิดแล้ว',why:'หมอน ผ้าห่ม และคนรอฟังเตรียมพร้อมแล้ว\nปุ่มยกเลิกดันถูกความห่วงใยทับอยู่'},
 {place:'สถานีที่ 7 · ทางช้างเผือก',coord:'MILKY WAY',q:'มีดาวเป็นล้านดวง<br>แต่เรา<em>เลือกเธอ</em>นะ',copy:'อยากส่งคำว่า “ฝันดี” ให้เธอทุกคืน\nยอมเป็นคนพิเศษของเราไหม',hint:'ค้นหาทั่วกาแล็กซีแล้ว เจอคนที่ชอบแค่คนเดียว',err:'ไม่พบคนอื่นในระบบ',why:'ค้นหาแล้ว 1,000,000 ดวงดาว\nผลลัพธ์ที่หัวใจเลือกยังเป็นเธอคนเดิม'},
 {place:'สถานีที่ 8 · ขอบจักรวาล',coord:'INFINITY',q:'การเดินทางต่อจากนี้<br>มี<em>เราสองคน</em>ได้ไหม',copy:'อาจมีวันที่หลงทางหรือเหนื่อยบ้าง\nแต่เราอยากค่อยๆ เรียนรู้ไปพร้อมเธอ',hint:'ใกล้ถึงปลายทางแล้ว ใจเต้นแรงหน่อยนะ',err:'หัวใจไม่ตอบสนองต่อคำนี้',why:'ลองส่งคำว่า “ปฏิเสธ” อีกครั้งแล้ว\nหัวใจแปลกลับมาเป็น “คิดถึงเธอ” ทุกที'},
 {place:'สถานีสุดท้าย · ดาวของเรา',coord:'OUR PLANET',q:'ไม่ได้อยากได้ทั้งจักรวาล<br>แค่อยากเป็น<em>แฟนเธอ</em>',copy:'ที่พาเดินทางมาตั้งไกล เพราะอยากถามว่า\n“เป็นแฟนกันไหม”',hint:'คำถามสุดท้าย จากคนที่ชอบเธอจริงๆ',err:'ERROR 404 : ไม่พบใจแข็ง',why:'เดินทางมาตั้งไกล ใจเราดันอยู่กับเธอแล้ว\nให้เราลองถามอีกทีนะ ♡'}
];
const $=id=>document.getElementById(id), reduced=matchMedia('(prefers-reduced-motion: reduce)');
let step=0,busy=false,complete=false,warpUntil=0;
const route=$('route');scenes.forEach(()=>{const el=document.createElement('span');el.className='stop';el.setAttribute('aria-hidden','true');route.append(el)});
function paint(){
 const s=scenes[step];document.body.classList.toggle('ending',complete);
 $('destination').textContent=complete?'ถึงแล้ว · ดาวของเราสองคน':s.place;
 $('coordinate').textContent=complete?'YOU + ME / INFINITY':`00.${String(step+1).padStart(2,'0')} / ${s.coord}`;
 $('eyebrow').textContent=complete?'MISSION COMPLETE ♡':`MISSION ${String(step+1).padStart(2,'0')} / 09`;
 $('question').innerHTML=complete?'ต่อจากนี้<br><em>มีเราอยู่ข้างๆ นะ</em>':s.q;
 $('copy').textContent=complete?'ขอบคุณที่เดินทางมาด้วยกัน\nเธอคือการค้นพบที่ดีที่สุดของเรา':s.copy;
 $('hint').textContent=complete?'รักเธอนะ มากกว่าดวงดาวทั้งหมดเลย':s.hint;
 $('yes').innerHTML=complete?'♡ เดินทางด้วยกันอีกครั้ง':'<span aria-hidden="true">♡</span> ตกลง';
 $('counter').textContent=complete?'YOU + ME':`${String(step+1).padStart(2,'0')} — 09`;
 $('footer-text').textContent=complete?'ปลายทางที่อยากอยู่ให้นานที่สุด':'ปลายทาง : เราสองคน';
 Array.from(route.children).forEach((el,i)=>{el.className='stop'+(i<step||complete?' done':i===step?' active':'')});
 route.setAttribute('aria-label',complete?'การเดินทางสำเร็จ':`การเดินทางด่านที่ ${step+1} จาก 9`);
 $('art').style.filter=`hue-rotate(${complete?-17:step*8}deg)`;
 $('art').style.objectPosition=`${50+Math.sin(step)*10}% ${45+step*2}%`;
}
function accept(){
 if(busy||$('error').open)return Promise.resolve({status:'busy'});busy=true;
 $('yes').disabled=true;$('no').disabled=true;$('content').classList.add('leaving');
 if(!reduced.matches){document.body.classList.add('warp');warpUntil=performance.now()+850;}
 return new Promise(resolve=>setTimeout(()=>{
 if(complete){complete=false;step=0}else if(step===scenes.length-1){complete=true}else step++;
 paint();$('content').classList.remove('leaving');$('content').style.animation='none';void $('content').offsetWidth;$('content').style.animation='';
 document.body.classList.remove('warp');$('yes').disabled=false;$('no').disabled=false;busy=false;
 if(complete)celebrate();resolve({step:step+1,complete});
 },reduced.matches?0:700));
}
function reject(){if(busy||complete||$('error').open)return;const s=scenes[step];$('error-code').textContent=`ERROR ${String(step+1).padStart(3,'0')} / HEART SYSTEM`;$('error-title').textContent=s.err;$('error-copy').textContent=s.why;$('error').showModal();}
$('yes').addEventListener('click',accept);$('no').addEventListener('click',reject);
$('close').addEventListener('click',()=>$('error').close());$('retry').addEventListener('click',()=>$('error').close());
$('error').addEventListener('click',e=>{if(e.target===$('error')){const r=$('error').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('error').close()}});
function celebrate(){if(reduced.matches)return;for(let i=0;i<22;i++){const p=document.createElement('span');p.className='heart-particle';p.textContent='♡';p.style.left=`${Math.random()*100}%`;p.style.animationDelay=`${Math.random()*1.2}s`;document.body.append(p);setTimeout(()=>p.remove(),6500)}}
const canvas=$('stars'),ctx=canvas.getContext('2d');let width=0,height=0,stars=[];
function resize(){width=innerWidth;height=innerHeight;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:65},()=>({x:Math.random()*width,y:Math.random()*height,r:Math.random()*1.15+.35,phase:Math.random()*6.3,speed:Math.random()*.1+.04}))}
function draw(t){ctx.clearRect(0,0,width,height);const warping=t<warpUntil&&!reduced.matches;for(const p of stars){ctx.globalAlpha=.25+(Math.sin(t*.0015+p.phase)+1)*.28;ctx.fillStyle='#e8ecff';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();if(warping){ctx.strokeStyle='#e4caff';ctx.lineWidth=p.r*.7;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+(p.x-width/2)*.11,p.y+(p.y-height*.4)*.11);ctx.stroke()}if(!reduced.matches){p.y-=p.speed;if(p.y<0)p.y=height}}if(!reduced.matches&&!document.hidden)requestAnimationFrame(draw)}
addEventListener('resize',()=>{resize();if(reduced.matches)draw(0)});document.addEventListener('visibilitychange',()=>{if(!document.hidden)draw(performance.now())});reduced.addEventListener('change',()=>draw(performance.now()));resize();draw(0);paint();
// Optional browser agent support uses the very same visible actions.
if(document.modelContext?.registerTool){const lifecycle=new AbortController();addEventListener('pagehide',()=>lifecycle.abort(),{once:true});const register=tool=>{try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{})}catch{}};register({name:'read_love_journey',description:'Read the current love journey scene.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>({step:step+1,total:9,complete,question:$('question').textContent,errorOpen:$('error').open})});register({name:'answer_love_scene',description:'Choose accept or reject in the current scene. Reject opens a playful error popup; accept advances the journey.',inputSchema:{type:'object',properties:{choice:{type:'string',enum:['accept','reject']}},required:['choice'],additionalProperties:false},annotations:{readOnlyHint:false},execute:async input=>{if(!input||!['accept','reject'].includes(input.choice))throw Error('Invalid choice');if(busy||$('error').open||complete)throw Error('Current scene is not accepting answers');if(input.choice==='accept')return await accept();reject();return {step:step+1,errorOpen:$('error').open}}});}
