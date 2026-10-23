/* =========================================================
   像素 Python · 翔安冒险  game.js
   完全单机 · 进度只存 localStorage · 无社交无排行无打卡
   ========================================================= */

/* ---------- 1. 像素素材 ---------- */
function svg(inner, vb){
  return '<svg viewBox="' + (vb || '0 0 8 8') + '" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">' + inner + '</svg>';
}
var SPR = {
  hero: svg('<rect x="2" y="0" width="4" height="1" fill="#6fb1e8"/><rect x="1" y="1" width="6" height="1" fill="#6fb1e8"/><rect x="2" y="2" width="4" height="2" fill="#ffdcc0"/><rect x="3" y="3" width="1" height="1" fill="#4a3f55"/><rect x="5" y="3" width="1" height="1" fill="#4a3f55"/><rect x="1" y="4" width="6" height="2" fill="#ffcf5e"/><rect x="1" y="6" width="2" height="1" fill="#5b6b8f"/><rect x="5" y="6" width="2" height="1" fill="#5b6b8f"/>'),
  penguin: svg('<rect x="2" y="0" width="4" height="1" fill="#4b5a7a"/><rect x="1" y="1" width="6" height="4" fill="#4b5a7a"/><rect x="2" y="2" width="4" height="3" fill="#fffdf7"/><rect x="3" y="2" width="1" height="1" fill="#4a3f55"/><rect x="4" y="2" width="1" height="1" fill="#4a3f55"/><rect x="3" y="3" width="2" height="1" fill="#ff9d4d"/><rect x="1" y="5" width="2" height="1" fill="#ff9d4d"/><rect x="5" y="5" width="2" height="1" fill="#ff9d4d"/>'),
  slime: svg('<rect x="2" y="2" width="4" height="1" fill="#7fd6a6"/><rect x="1" y="3" width="6" height="4" fill="#7fd6a6"/><rect x="2" y="4" width="1" height="1" fill="#4a3f55"/><rect x="5" y="4" width="1" height="1" fill="#4a3f55"/><rect x="3" y="6" width="2" height="1" fill="#5cbf88"/>'),
  bat: svg('<rect x="0" y="2" width="2" height="2" fill="#8f7fbe"/><rect x="6" y="2" width="2" height="2" fill="#8f7fbe"/><rect x="2" y="1" width="4" height="5" fill="#a08fd0"/><rect x="3" y="2" width="1" height="1" fill="#fff"/><rect x="4" y="2" width="1" height="1" fill="#fff"/><rect x="3" y="4" width="2" height="1" fill="#5c4f80"/>'),
  crab: svg('<rect x="1" y="2" width="6" height="4" fill="#ff9b8a"/><rect x="0" y="1" width="2" height="2" fill="#ffb3a6"/><rect x="6" y="1" width="2" height="2" fill="#ffb3a6"/><rect x="2" y="3" width="1" height="1" fill="#4a3f55"/><rect x="5" y="3" width="1" height="1" fill="#4a3f55"/><rect x="2" y="6" width="4" height="1" fill="#ffb3a6"/>'),
  ghost: svg('<rect x="2" y="1" width="4" height="2" fill="#cfe6f5"/><rect x="1" y="2" width="6" height="4" fill="#cfe6f5"/><rect x="1" y="6" width="1" height="1" fill="#cfe6f5"/><rect x="3" y="6" width="1" height="1" fill="#cfe6f5"/><rect x="6" y="6" width="2" height="1" fill="#cfe6f5"/><rect x="2" y="3" width="1" height="1" fill="#6f8fa8"/><rect x="5" y="3" width="1" height="1" fill="#6f8fa8"/>'),
  boss: svg('<rect x="1" y="0" width="6" height="1" fill="#8a6fb8"/><rect x="0" y="1" width="2" height="2" fill="#8a6fb8"/><rect x="6" y="1" width="2" height="2" fill="#8a6fb8"/><rect x="2" y="1" width="4" height="5" fill="#b79ae0"/><rect x="2" y="2" width="1" height="1" fill="#fff"/><rect x="5" y="2" width="1" height="1" fill="#fff"/><rect x="3" y="4" width="2" height="1" fill="#5c4f80"/><rect x="1" y="6" width="6" height="1" fill="#8a6fb8"/>'),
  tree: svg('<rect x="3" y="0" width="2" height="1" fill="#7fbf67"/><rect x="2" y="1" width="4" height="2" fill="#7fbf67"/><rect x="3" y="3" width="2" height="3" fill="#c79a6b"/>'),
  flower: svg('<rect x="3" y="2" width="2" height="1" fill="#ffc0d4"/><rect x="2" y="3" width="4" height="1" fill="#ffe0ec"/><rect x="3" y="4" width="2" height="3" fill="#8fd06a"/>'),
  star: svg('<rect x="3" y="0" width="2" height="2" fill="#ffd75e"/><rect x="1" y="2" width="6" height="2" fill="#ffd75e"/><rect x="0" y="4" width="8" height="1" fill="#ffc23f"/><rect x="1" y="5" width="2" height="1" fill="#ffc23f"/><rect x="5" y="5" width="2" height="1" fill="#ffc23f"/><rect x="2" y="3" width="1" height="1" fill="#fff6cf"/><rect x="4" y="2" width="1" height="1" fill="#fff6cf"/>'),
  book: svg('<rect x="1" y="1" width="6" height="6" fill="#c9a0dc"/><rect x="1" y="1" width="1" height="6" fill="#a67fc0"/><rect x="3" y="2" width="3" height="1" fill="#fffdf7"/><rect x="3" y="4" width="3" height="1" fill="#fffdf7"/>'),
  shell: svg('<rect x="3" y="0" width="2" height="1" fill="#ffb3c6"/><rect x="2" y="1" width="4" height="1" fill="#ffc9d6"/><rect x="1" y="2" width="6" height="2" fill="#ffd6e0"/><rect x="2" y="4" width="4" height="1" fill="#ffc9d6"/><rect x="3" y="5" width="2" height="2" fill="#ffb3c6"/>'),
  flag: svg('<rect x="2" y="0" width="1" height="7" fill="#c79a6b"/><rect x="3" y="1" width="4" height="1" fill="#ff8a9e"/><rect x="3" y="2" width="3" height="1" fill="#ff8a9e"/><rect x="3" y="3" width="2" height="1" fill="#ff8a9e"/>'),
  rock: svg('<rect x="2" y="2" width="4" height="1" fill="#b9b3c6"/><rect x="1" y="3" width="6" height="3" fill="#c9c4d4"/><rect x="2" y="6" width="4" height="1" fill="#a8a2b8"/>')
};
var HEART_ON = svg('<rect x="1" y="0" width="2" height="1" fill="#ff6b8a"/><rect x="4" y="0" width="2" height="1" fill="#ff6b8a"/><rect x="0" y="1" width="7" height="2" fill="#ff6b8a"/><rect x="1" y="3" width="5" height="1" fill="#ff6b8a"/><rect x="2" y="4" width="3" height="1" fill="#ff6b8a"/><rect x="3" y="5" width="1" height="1" fill="#ff6b8a"/>', '0 0 7 6');
var HEART_OFF = svg('<rect x="1" y="0" width="2" height="1" fill="#efe2ea"/><rect x="4" y="0" width="2" height="1" fill="#efe2ea"/><rect x="0" y="1" width="7" height="2" fill="#efe2ea"/><rect x="1" y="3" width="5" height="1" fill="#efe2ea"/><rect x="2" y="4" width="3" height="1" fill="#efe2ea"/><rect x="3" y="5" width="1" height="1" fill="#efe2ea"/>', '0 0 7 6');

var ZONES = [
  {name:'校园 · 出发',    deco:['tree','flower']},
  {name:'操场 · 运动会',  deco:['flag','flower']},
  {name:'图书馆 · 书海',  deco:['book','tree']},
  {name:'海边 · 灯塔',    deco:['shell','rock']}
];
var MON_NAMES = {slime:'语法史莱姆', bat:'BUG 蝙蝠', crab:'括号蟹', ghost:'报错幽灵', boss:'期末大魔王'};

/* ---------- 2. 存档 ---------- */
var SAVE_KEY = 'pixelpy2';
var save = {cleared:[], pet:false};
try {
  var raw = localStorage.getItem(SAVE_KEY);
  if (raw) { var s = JSON.parse(raw); if (s && s.cleared) save = s; }
} catch(e){}
function persist(){ try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch(e){} }
function isCleared(i){ return save.cleared.indexOf(LEVELS[i].id) >= 0; }
function firstUncleared(){
  for (var i=0;i<LEVELS.length;i++) if (!isCleared(i)) return i;
  return LEVELS.length - 1;
}

/* ---------- 3. DOM ---------- */
function $(id){ return document.getElementById(id); }
var viewWorld=$('viewWorld'), worldWrap=$('worldWrap'), viewLevel=$('viewLevel');
var lvTitle=$('lvTitle'), lvStory=$('lvStory'), stagePips=$('stagePips');
var arena=$('arena'), heartsEl=$('hearts'), heroSpr=$('heroSpr'), monHpEl=$('monHp'),
    monSpr=$('monSpr'), monNameEl=$('monName'), petMini=$('petMini');
var card=$('card'), qType=$('qType'), qStage=$('qStage'), qText=$('qText'), qGoal=$('qGoal');
var stChoice=$('stChoice'), chCode=$('chCode'), chOpts=$('chOpts'), chWhy=$('chWhy');
var stFill=$('stFill'), flCode=$('flCode'), flChips=$('flChips'), flConfirm=$('flConfirm');
var stCode=$('stCode'), snipsEl=$('snips'), editor=$('editor'), btnRun=$('btnRun'), btnReset=$('btnReset');
var fb=$('fb'), btnHint=$('btnHint'), hintTxt=$('hintTxt');
var toastEl=$('toast');

$('brandLogo').innerHTML = SPR.hero;
$('bootHero').innerHTML = SPR.hero;
$('waveHero').innerHTML = SPR.hero;
$('clearStar').innerHTML = SPR.star;
heroSpr.innerHTML = SPR.hero;
petMini.innerHTML = SPR.penguin;

/* ---------- 4. Python 引擎（Web Worker + Pyodide） ---------- */
var PY_HELPER = [
'import sys, io, json, traceback, builtins',
'',
'def _no_input(*args, **kwargs):',
'    raise RuntimeError("这个编辑器里没有键盘输入，直接用题目里已经给好的变量就好～")',
'',
'def _friend_exec(user_code, check_code):',
'    g = {"__name__": "__main__", "__builtins__": builtins}',
'    g["input"] = _no_input',
'    buf = io.StringIO()',
'    old = sys.stdout',
'    sys.stdout = buf',
'    err_name = ""',
'    err_msg = ""',
'    line = 0',
'    try:',
'        exec(compile(user_code, "<你的代码>", "exec"), g)',
'    except Exception as e:',
'        err_name = type(e).__name__',
'        err_msg = str(e)',
'        if isinstance(e, SyntaxError):',
'            line = e.lineno or 0',
'        else:',
'            try:',
'                for fr in traceback.extract_tb(sys.exc_info()[2]):',
'                    if fr.filename == "<你的代码>":',
'                        line = fr.lineno',
'            except Exception:',
'                line = 0',
'    finally:',
'        sys.stdout = old',
'    out = buf.getvalue()',
'    if err_name:',
'        return json.dumps({"ok": False, "out": out, "err": err_name, "msg": err_msg, "line": line})',
'    cg = dict(g)',
'    cg["_out"] = out',
'    cg["_g"] = g',
'    cbuf = io.StringIO()',
'    sys.stdout = cbuf',
'    msg = ""',
'    try:',
'        exec(compile(check_code, "<检查>", "exec"), cg)',
'    except AssertionError as e:',
'        msg = str(e) or "再加一点点就对了～"',
'    except Exception as e:',
'        msg = "检查结果的时候出了点小状况：" + str(e)',
'    finally:',
'        sys.stdout = old',
'    return json.dumps({"ok": msg == "", "out": out, "err": "", "msg": msg, "line": 0})'
].join('\n');

var CDNS = [
  'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',
  'https://cdn.npmmirror.com/packages/pyodide/0.26.4/files/',
  'https://unpkg.com/pyodide@0.26.4/'
];
var WORKER_SRC = [
  'var CDNS = ' + JSON.stringify(CDNS) + ';',
  'var HELPER = ' + JSON.stringify(PY_HELPER) + ';',
  'var py = null;',
  'async function boot(){',
  '  var last = "";',
  '  for (var i=0;i<CDNS.length;i++){',
  '    var base = CDNS[i];',
  '    try {',
  '      importScripts(base + "pyodide.js");',
  '      py = await loadPyodide({ indexURL: base });',
  '      py.runPython(HELPER);',
  '      postMessage({type:"ready"});',
  '      return;',
  '    } catch(e){ last = String((e && e.message) || e); }',
  '  }',
  '  postMessage({type:"fatal", message:last});',
  '}',
  'self.onmessage = function(ev){',
  '  var d = ev.data;',
  '  if (d.type === "run"){',
  '    try {',
  '      var fn = py.globals.get("_friend_exec");',
  '      var res = fn(d.code, d.check);',
  '      postMessage({type:"result", id:d.id, data: JSON.parse(res)});',
  '    } catch(e){',
  '      postMessage({type:"result", id:d.id, data:{ok:false, err:"RuntimeError", msg:String((e && e.message) || e), line:0, out:""}});',
  '    }',
  '  }',
  '};',
  'boot();'
].join('\n');

var worker=null, engineReady=false, runTimer=null, runSeq=0, busy=false;
var bootEl=$('boot'), bootTitle=$('bootTitle'), bootMsg=$('bootMsg');

function bootWorker(){
  engineReady=false;
  if (worker){ try{worker.terminate();}catch(e){} }
  try {
    worker = new Worker(URL.createObjectURL(new Blob([WORKER_SRC],{type:'text/javascript'})));
  } catch(e){ engineFatal('浏览器不支持后台运行引擎'); return; }
  worker.onmessage = onWorkerMsg;
  worker.onerror = function(e){ engineFatal((e && e.message) || '引擎加载出错'); };
}
function showBoot(msg){
  bootTitle.textContent='正在唤醒 Python 引擎';
  bootMsg.innerHTML = msg || '第一次进入需要下载约 10MB 的引擎，之后会快很多。<br>不需要注册，也不会向任何地方上传数据。';
  bootEl.classList.remove('error'); bootEl.classList.remove('hide');
}
function hideBoot(){ bootEl.classList.add('hide'); }
function engineFatal(msg){
  try{ if(worker) worker.terminate(); }catch(e){}
  worker=null; engineReady=false;
  bootTitle.textContent='引擎还没准备好';
  bootMsg.innerHTML='没能把 Python 引擎下载下来（大约 10MB）。<br>连上网络后点重试就可以；不影响看题。<br><span style="font-size:10.5px;opacity:.7">'+(msg||'')+'</span>';
  bootEl.classList.add('error'); bootEl.classList.remove('hide');
}
$('bootRetry').addEventListener('click', function(){ showBoot(); setTimeout(bootWorker, 200); });

/* 多检查点顺序执行 */
var pending = null; // {checks, i, code, onPassOne, onFail, onAllPass}
function runChecks(checks, code, onPassOne, onFail, onAllPass){
  pending = {checks:checks, i:0, code:code, onPassOne:onPassOne, onFail:onFail, onAllPass:onAllPass};
  runNext();
}
function runNext(){
  if (!pending) return;
  if (!engineReady){ var p=pending; pending=null; p.onFail({title:'引擎还在准备', tip:'Python 引擎还没睡醒，等它一小下再点运行。'}); return; }
  busy=true; setRunBusy();
  runSeq++;
  var id=runSeq;
  if (runTimer) clearTimeout(runTimer);
  runTimer=setTimeout(onTimeout, 6000);
  worker.postMessage({type:'run', id:id, code:pending.code, check:pending.checks[pending.i]});
}
function onWorkerMsg(ev){
  var d=ev.data;
  if (d.type==='ready'){ engineReady=true; hideBoot(); setRunIdle(); return; }
  if (d.type==='fatal'){ engineFatal(d.message); return; }
  if (d.type!=='result' || d.id!==runSeq || !pending) return;
  if (runTimer){ clearTimeout(runTimer); runTimer=null; }
  var p=pending, r=d.data;
  if (r.ok){
    p.onPassOne(p.i);
    p.i++;
    if (p.i >= p.checks.length){ pending=null; busy=false; setRunIdle(); p.onAllPass(); }
    else setTimeout(runNext, 320);
  } else {
    pending=null; busy=false; setRunIdle();
    p.onFail(r);
  }
}
function onTimeout(){
  if (runTimer){ clearTimeout(runTimer); runTimer=null; }
  pending=null; busy=false; engineReady=false;
  try{ if(worker) worker.terminate(); }catch(e){}
  worker=null; setRunIdle();
  showFb('bad','代码停不下来了','循环好像没有出口。检查 while 的条件是不是永远成立、循环里的变量有没有变化。引擎正在重新准备。');
  monAttack();
  showBoot('正在重新唤醒 Python 引擎，稍等一下…');
  setTimeout(bootWorker, 300);
}
function setRunIdle(){ btnRun.disabled = busy || !engineReady; btnRun.textContent = engineReady ? '运 行' : '准备中'; }
function setRunBusy(){ btnRun.disabled=true; btnRun.textContent='运行中'; }

/* ---------- 5. 友好报错 ---------- */
function friendly(r){
  var t=r.err||'', m=r.msg||'';
  if (!t) return {title:'还差一点', tip:m || '再加一点点就对了～'};
  if (t==='SyntaxError'||t==='IndentationError'||t==='TabError'){
    if (/expected ':'/.test(m)) return {title:'少了一个冒号', tip:'这一行结尾少了一个冒号「:」。if、elif、else、for、while、def 后面都要加冒号。', line:r.line};
    if (/expected an indented block/.test(m)) return {title:'这里需要缩进', tip:'冒号后面要换行，并且缩进 4 个空格，缩进的那几行才属于这个条件或循环。', line:r.line};
    if (/unexpected indent/.test(m)) return {title:'缩进多了一点', tip:'这一行开头多了空格，它不属于上面任何一个循环或条件，把它顶格写试试。', line:r.line};
    if (/unexpected EOF|was never closed|closing parenthesis/.test(m)) return {title:'括号没配对', tip:'括号或引号只写了一半。数一数左括号和右括号、左引号和右引号是不是成对。', line:r.line};
    if (/unterminated string|EOL while scanning/.test(m)) return {title:'引号没配对', tip:'字符串的引号要成对出现，检查这一行是不是只写了一个引号。', line:r.line};
    if (/invalid character|invalid non-printable/.test(m)) return {title:'混进了中文符号', tip:'代码里好像混进了中文标点（：，（）「」）。切到英文输入法重新敲一遍。', line:r.line};
    return {title:'语法上还差一点', tip:'常见原因是少冒号、少括号、少引号，或者该缩进的地方没缩进。对照示例看看这一行。', line:r.line};
  }
  if (t==='NameError'){
    var mm=m.match(/name '([^']+)' is not defined/);
    return {title:'有个名字还不认识', tip:'「'+(mm?mm[1]:'这个名字')+'」还没有定义。检查拼写，或者先用 = 给它赋个值再使用。', line:r.line};
  }
  if (t==='TypeError'){
    if (/can only concatenate str|unsupported operand type/.test(m)) return {title:'类型对不上', tip:'文字和数字不能直接相加。先用 int() 把文字变成数字，或者用 str() 把数字变成文字。', line:r.line};
    if (/not callable/.test(m)) return {title:'这个不能直接调用', tip:'检查是不是把变量当成了函数；调用函数要写 name()，括号别丢。', line:r.line};
    if (/missing .*required positional argument/.test(m)) return {title:'参数少给了', tip:'调用函数时括号里的参数个数要和定义时对得上。', line:r.line};
    return {title:'类型不太对', tip:'参与运算的数据类型可能不匹配，检查是文字还是数字。', line:r.line};
  }
  if (t==='IndexError') return {title:'下标超出范围', tip:'列表没有这么长的位置。下标从 0 开始，最后一个元素可以用 [-1]。', line:r.line};
  if (t==='KeyError') return {title:'字典里没有这个键', tip:'字典里找不到这个键。键名要和字典里的一字不差，或者用 .get() 更保险。', line:r.line};
  if (t==='ValueError') return {title:'这个值转不了', tip:'比如 int("abc") 没法转换，确认引号里放的是数字。', line:r.line};
  if (t==='ZeroDivisionError') return {title:'不能除以 0', tip:'除号后面的值不能是 0，检查参与除法的变量。', line:r.line};
  if (t==='AttributeError') return {title:'没有这个属性或方法', tip:'检查拼写；列表加元素用 .append()，字典取值用 []，字符串方法要加括号。', line:r.line};
  if (t==='RuntimeError' && /键盘输入/.test(m)) return {title:'这里不需要输入', tip:m, line:r.line};
  return {title:'运行到一半停住了', tip:'代码遇到了一点问题：'+(m||'暂时看不出原因'), line:r.line};
}

/* ---------- 6. 战斗表现 ---------- */
function renderHearts(){
  heartsEl.innerHTML='';
  for (var i=0;i<3;i++){
    var s=document.createElement('span');
    s.style.cssText='width:20px;height:18px;display:inline-block';
    s.innerHTML = i<hearts ? HEART_ON : HEART_OFF;
    heartsEl.appendChild(s);
  }
}
function renderMonHp(){
  monHpEl.innerHTML='';
  for (var i=0;i<monHpMax;i++){
    var b=document.createElement('i');
    if (i<monHp) b.className='on';
    monHpEl.appendChild(b);
  }
}
function dmgFloat(txt, cls, x, y){
  var s=document.createElement('span');
  s.className='dmg '+cls; s.textContent=txt;
  s.style.left=x+'%'; s.style.top=y+'%';
  arena.appendChild(s);
  setTimeout(function(){ s.remove(); }, 850);
}
function hitMonster(big){
  monSpr.classList.remove('hitflash'); void monSpr.offsetWidth;
  monSpr.classList.add('hitflash');
  setTimeout(function(){ monSpr.classList.remove('hitflash'); }, 180);
  dmgFloat('-'+(40+Math.floor(Math.random()*60)) + (big?' ✦':''), 'hurt', 62+Math.random()*10, 8+Math.random()*16);
}
function monAttack(){
  monSpr.classList.remove('lunge'); void monSpr.offsetWidth;
  monSpr.classList.add('lunge');
  card.classList.remove('card-shake'); void card.offsetWidth;
  card.classList.add('card-shake');
  setTimeout(function(){ monSpr.classList.remove('lunge'); }, 320);
}
function heroAttack(){
  heroSpr.classList.remove('plunge'); void heroSpr.offsetWidth;
  heroSpr.classList.add('plunge');
  setTimeout(function(){ heroSpr.classList.remove('plunge'); }, 320);
}
function loseHeart(){
  hearts=Math.max(0, hearts-1);
  renderHearts();
  dmgFloat('-1 ❤', 'hurt', 18, 10);
  if (hearts<=0){
    setTimeout(function(){ $('sheetWave').classList.add('show'); }, 650);
  }
}
function monDefeat(cb){
  monSpr.classList.add('poof');
  dmgFloat('击破！', 'heal', 60, 20);
  setTimeout(function(){ monSpr.classList.remove('poof'); if (cb) cb(); }, 520);
}

/* ---------- 7. 反馈 / 提示 ---------- */
function showFb(kind, title, tip, line){
  fb.className='fb show '+kind;
  fb.innerHTML='<b>'+escapeHtml(title)+'</b>'+escapeHtml(tip||'')+
    (line ? '<div class="ln">大约在第 <b>'+line+'</b> 行附近</div>' : '');
}
function hideFb(){ fb.className='fb'; fb.innerHTML=''; }
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}
var toastTimer=null;
function toast(msg, err){
  toastEl.textContent=msg;
  toastEl.className = err ? 'err show' : 'show';
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer=setTimeout(function(){ toastEl.classList.remove('show'); }, 1900);
}

/* ---------- 8. 世界地图 ---------- */
function renderWorld(){
  worldWrap.innerHTML='';
  var cur=firstUncleared();
  for (var z=0; z<ZONES.length; z++){
    var zone=document.createElement('div'); zone.className='zone';
    var zh=document.createElement('div'); zh.className='zhead';
    zh.innerHTML='<span class="zchip">'+ZONES[z].name+'</span><span class="zline"></span>';
    zone.appendChild(zh);
    var nodes=document.createElement('div'); nodes.className='nodes';
    for (var k=0; k<5; k++){
      var i=z*5+k; if (i>=LEVELS.length) break;
      (function(i){
        var lv=LEVELS[i];
        var row=document.createElement('div'); row.className='nrow';
        if (i>0) row.innerHTML='<span class="conn"></span>';
        var nd=document.createElement('div');
        var state = isCleared(i) ? 'done' : (i===cur ? 'cur' : 'lock');
        nd.className='node '+state;
        nd.innerHTML='<span class="num">'+(i+1)+'</span><span class="nic">'+SPR[lv.mon]+'</span>'+
          (state==='done' ? '<span class="stamp">'+SPR.star+'</span>' : '');
        var lb=document.createElement('div'); lb.className='nlabel';
        lb.innerHTML='<b>'+escapeHtml(lv.name)+(lv.boss?' 👑':'')+'</b>'+escapeHtml(lv.points[0])+' 等 '+lv.points.length+' 个知识点';
        nd.addEventListener('click', function(){
          if (isCleared(i) || i===cur) enterLevel(i);
          else toast('先通过前面的关卡，这里就会解锁');
        });
        row.appendChild(nd); row.appendChild(lb);
        if (i===cur){
          var h=document.createElement('div'); h.className='heroat'; h.innerHTML=SPR.hero;
          row.appendChild(h);
          setTimeout(function(){
            var r=nd.getBoundingClientRect(), rr=row.getBoundingClientRect();
            h.style.left=(r.left-rr.left-8)+'px'; h.style.top=(r.top-rr.top-26)+'px';
          }, 30);
        }
        nodes.appendChild(row);
      })(i);
    }
    zone.appendChild(nodes);
    worldWrap.appendChild(zone);
  }
}

/* ---------- 9. 关卡流程 ---------- */
var li=0, si=0, hearts=3, monHp=1, monHpMax=1, stage=null, hintStep=0;
var fillState=null, choiceLock=false;

function enterLevel(i){
  li=i; si=0;
  viewWorld.hidden=true; viewLevel.hidden=false;
  var lv=LEVELS[li];
  lvTitle.textContent='第 '+(li+1)+' 关 · '+lv.name;
  lvStory.textContent=lv.story;
  arena.classList.remove('enrage');
  petMini.hidden=!save.pet;
  renderStage();
  window.scrollTo(0,0);
}
function leaveLevel(){
  viewLevel.hidden=true; viewWorld.hidden=false;
  renderWorld();
}
function renderPips(){
  stagePips.innerHTML='';
  var n=LEVELS[li].stages.length;
  for (var i=0;i<n;i++){
    var p=document.createElement('i');
    if (i<si) p.className='done'; else if (i===si) p.className='cur';
    stagePips.appendChild(p);
  }
}
var TYPE_NAMES={choice:'🔮 想一想', fill:'🧩 补全代码', fix:'🐛 找出 Bug', write:'⚔️ 手写代码'};

function renderStage(){
  stage=LEVELS[li].stages[si];
  hintStep=0;
  renderPips();
  renderStageMonster();
  hearts=3; renderHearts();
  hideFb();
  btnHint.style.display='';
  btnHint.textContent='💡 给我一点提示';
  hintTxt.hidden=true; hintTxt.innerHTML='';
  stChoice.hidden=stFill.hidden=stCode.hidden=true;
  qType.textContent=TYPE_NAMES[stage.t]||'挑战';
  qStage.textContent='第 '+(si+1)+' / '+LEVELS[li].stages.length+' 波';
  qText.textContent=stage.q;
  qGoal.textContent=stage.goal||'';
  qGoal.style.display=stage.goal?'':'none';
  card.scrollTop=0;
  if (stage.t==='choice') renderChoice();
  else if (stage.t==='fill') renderFill();
  else renderCodeStage();
  if (LEVELS[li].boss && si===LEVELS[li].stages.length-1){
    arena.classList.add('enrage');
    monNameEl.textContent=MON_NAMES[LEVELS[li].mon]+' · 狂暴';
    toast('大魔王进入狂暴状态，最后一波！');
  }
}
function renderStageMonster(){
  var lv=LEVELS[li];
  var hpMap={choice:1, fill:1, fix:2, write:0};
  monHpMax = stage.t==='write'||stage.t==='fix' ? stage.checks.length : 1;
  monHp=monHpMax;
  monSpr.innerHTML=SPR[lv.mon];
  monNameEl.textContent=MON_NAMES[lv.mon];
  renderMonHp();
}

/* --- choice --- */
function renderChoice(){
  stChoice.hidden=false; choiceLock=false;
  chWhy.hidden=true; chWhy.textContent='';
  if (stage.code){ chCode.hidden=false; chCode.innerHTML=hlCode(stage.code); }
  else chCode.hidden=true;
  chOpts.innerHTML='';
  stage.options.forEach(function(op, idx){
    var b=document.createElement('button');
    b.className='opt'; b.innerHTML=escapeHtml(op);
    b.addEventListener('click', function(){ onChoose(idx, b); });
    chOpts.appendChild(b);
  });
}
function onChoose(idx, btn){
  if (choiceLock) return;
  if (idx===stage.answer){
    choiceLock=true;
    btn.classList.add('ok');
    Array.prototype.forEach.call(chOpts.children, function(c, j){
      if (j!==idx) c.classList.add('dim');
    });
    if (stage.why){ chWhy.hidden=false; chWhy.textContent='💡 '+stage.why; }
    heroAttack(); hitMonster(true); monHp=0; renderMonHp();
    hideFb();
    setTimeout(function(){ monDefeat(stageClear); }, 700);
  } else {
    btn.classList.add('no');
    setTimeout(function(){ btn.classList.remove('no'); }, 500);
    monAttack(); loseHeart();
    showFb('bad','这个不是它', stage.wrong || '再读一遍代码，注意每一行到底做了什么。实在想不出就点开下面的提示。');
  }
}

/* --- fill --- */
function renderFill(){
  stFill.hidden=false;
  fillState={slots:[], sel:0};
  var html=escapeHtml(stage.code).replace(/\[\[(\d+)\]\]/g, function(_, n){
    return '<button class="slot" data-n="'+n+'" id="slot'+n+'">&nbsp;</button>';
  });
  flCode.innerHTML=html;
  for (var i=0;i<stage.blanks.length;i++) fillState.slots.push(null);
  flChips.innerHTML='';
  stage.chips.forEach(function(c){
    var b=document.createElement('button');
    b.className='chip'; b.textContent=c;
    b.addEventListener('click', function(){ onChip(c, b); });
    flChips.appendChild(b);
  });
  flCode.querySelectorAll('.slot').forEach(function(s){
    s.addEventListener('click', function(){ onSlot(parseInt(s.dataset.n,10)); });
  });
  selectSlot(0);
}
function slotEl(n){ return flCode.querySelector('[data-n="'+n+'"]'); }
function selectSlot(n){
  fillState.sel=n;
  flCode.querySelectorAll('.slot').forEach(function(s){ s.classList.remove('sel'); });
  var el=slotEl(n); if (el && !fillState.slots[n]) el.classList.add('sel');
}
function onSlot(n){
  if (fillState.slots[n]){ // 已填 → 取下来
    var v=fillState.slots[n]; fillState.slots[n]=null;
    var el=slotEl(n); el.innerHTML='&nbsp;'; el.classList.remove('filled','bad','good');
    Array.prototype.forEach.call(flChips.children, function(c){
      if (c.textContent===v && c.classList.contains('used')){ c.classList.remove('used'); }
    });
    selectSlot(n);
  } else selectSlot(n);
}
function onChip(val, btn){
  var n=fillState.sel;
  if (fillState.slots[n]!==null){ onSlot(n); }
  if (fillState.slots[n]===null){
    fillState.slots[n]=val;
    var el=slotEl(n); el.textContent=val; el.classList.add('filled'); el.classList.remove('bad');
    btn.classList.add('used');
    var nxt=fillState.slots.indexOf(null);
    if (nxt>=0) selectSlot(nxt); else el.classList.remove('sel');
  }
}
flConfirm.addEventListener('click', function(){
  if (fillState.slots.indexOf(null)>=0){
    toast('还有空没填'); return;
  }
  var bad=0;
  stage.blanks.forEach(function(ans, n){
    var got=String(fillState.slots[n]).replace(/\s+/g,'');
    var want=String(ans).replace(/\s+/g,'');
    var el=slotEl(n);
    if (got===want){ el.classList.add('good'); }
    else { el.classList.add('bad'); bad++; }
  });
  if (bad===0){
    heroAttack(); hitMonster(true); monHp=0; renderMonHp(); hideFb();
    setTimeout(function(){ monDefeat(stageClear); }, 650);
  } else {
    monAttack(); loseHeart();
    showFb('bad','有 '+bad+' 个空还不太对','红色的空再想想，点一下红色的空可以把它取下来重填。');
  }
});

/* --- fix / write --- */
var SNIPPETS=['print(',')','"','f"','if',':','else','elif','for','in','range(','while','break','continue','def','return','len(','int(','str(','float(','append(','.get(','==','!=','<=','>=','and','or','not','+','-','*','//','%','**','=',',','.','[',']','{','}','#  '];
function renderCodeStage(){
  stCode.hidden=false;
  editor.value = stage.t==='fix' ? stage.code : stage.starter;
  if (!snipsEl.dataset.built){
    snipsEl.dataset.built='1';
    SNIPPETS.forEach(function(t){
      var b=document.createElement('button'); b.textContent=t.trim()||t;
      b.addEventListener('click', function(){ insertAtCursor(t); });
      snipsEl.appendChild(b);
    });
  }
}
function insertAtCursor(t){
  var s=editor.selectionStart||0, e=editor.selectionEnd||0;
  editor.setRangeText(t, s, e, 'end');
  editor.focus();
}
btnReset.addEventListener('click', function(){
  editor.value = stage.t==='fix' ? stage.code : stage.starter;
  toast('代码已经还原成题目初始样子');
});
btnRun.addEventListener('click', function(){
  if (busy || !stage || !stage.checks) return;
  hideFb();
  runChecks(stage.checks, editor.value,
    function(){ // 通过一个检查点
      heroAttack(); hitMonster(false);
      monHp=Math.max(0, monHp-1); renderMonHp();
    },
    function(r){ // 失败
      var f=friendly(r);
      showFb('bad', f.title, f.tip, f.line);
      monAttack(); loseHeart();
    },
    function(){ // 全部通过
      monHp=0; renderMonHp(); hideFb();
      monDefeat(stageClear);
    });
});

/* --- 阶段/关卡推进 --- */
function stageClear(){
  var lv=LEVELS[li];
  if (si < lv.stages.length-1){
    si++;
    toast('第 '+si+' 波击破，怪物变强了！');
    setTimeout(renderStage, 480);
  } else {
    levelClear();
  }
}
function levelClear(){
  var lv=LEVELS[li];
  var first=!isCleared(li);
  if (first){
    save.cleared.push(lv.id); persist();
  }
  $('clearTitle').textContent='第 '+(li+1)+' 关通关！';
  $('clearSub').textContent=lv.name+' · 全部 '+lv.stages.length+' 波击破';
  var ul=$('clearPoints'); ul.innerHTML='';
  lv.points.forEach(function(p){
    var liEl=document.createElement('li'); liEl.textContent=p; ul.appendChild(liEl);
  });
  $('clearItem').textContent='🎁 获得道具：'+lv.item;
  var petLine=$('clearPet');
  if (li===0 && !save.pet){
    save.pet=true; persist();
    petLine.hidden=false;
    petLine.innerHTML='<span class="ps">'+SPR.penguin+'</span>小企鹅「小布若」被你的代码吸引，决定跟着你一起冒险！';
  } else petLine.hidden=true;
  $('btnNextLv').textContent = li<LEVELS.length-1 ? '前往下一关' : '回到地图';
  $('sheetClear').classList.add('show');
}
$('btnNextLv').addEventListener('click', function(){
  $('sheetClear').classList.remove('show');
  if (li<LEVELS.length-1) enterLevel(li+1);
  else leaveLevel();
});
$('btnClearWorld').addEventListener('click', function(){
  $('sheetClear').classList.remove('show');
  leaveLevel();
});
$('btnRetryWave').addEventListener('click', function(){
  $('sheetWave').classList.remove('show');
  hearts=3; renderHearts();
  monHp=monHpMax; renderMonHp();
  hideFb();
  toast('状态回满，代码还保留着，继续！');
});
$('btnBack').addEventListener('click', leaveLevel);
$('btnWorld').addEventListener('click', function(){
  if (viewLevel.hidden===false) leaveLevel();
  else { viewWorld.scrollTo({top:0}); }
});
btnHint.addEventListener('click', function(){
  var hs=stage.hints||[];
  if (!hs.length){ toast('这一关没有提示，靠自己！'); return; }
  if (hintStep<hs.length){
    hintTxt.hidden=false;
    hintTxt.innerHTML=(hintStep===0?'':'<hr style="border:none;border-top:1px dashed #e2d5ee;margin:6px 0">')+
      hintTxt.innerHTML;
    var div=document.createElement('div');
    div.textContent=(hintStep===0?'💡 ':'🔎 更具体一点：')+hs[hintStep];
    hintTxt.appendChild(div);
    hintStep++;
    btnHint.textContent = hintStep<hs.length ? '💡 还是想不到，再来一点' : '提示就这么多啦';
    if (hintStep>=hs.length) btnHint.style.display='none';
  }
});

/* ---------- 10. 图鉴 ---------- */
function renderCodex(){
  var list=$('codexList'); list.innerHTML='';
  LEVELS.forEach(function(lv, i){
    var unlocked=isCleared(i);
    var item=document.createElement('div');
    item.className='cxitem'+(unlocked?'':' lock');
    var sol='';
    if (unlocked){
      for (var k=lv.stages.length-1;k>=0;k--){
        if (lv.stages[k].sol){ sol=lv.stages[k].sol; break; }
      }
      var lines=sol.split('\n').filter(function(l){return l.trim();});
      if (lines.length>7) sol=lines.slice(0,7).join('\n')+'\n…';
    }
    item.innerHTML=
      '<div class="cxicon">'+SPR[lv.mon]+'</div>'+
      '<div class="cxbody"><div class="t">'+(unlocked?('第 '+(i+1)+' 关 · '+escapeHtml(lv.name)):'？？？')+'</div>'+
      '<div class="p">'+(unlocked?escapeHtml(lv.points.join('；')):'通关第 '+(i+1)+' 关后收录这张卡片')+'</div>'+
      (unlocked&&sol?'<pre class="code">'+escapeHtml(sol)+'</pre>':'')+'</div>'+
      (unlocked?'<button class="cxgo">重玩</button>':'');
    if (unlocked){
      item.querySelector('.cxgo').addEventListener('click', function(){
        $('sheetCodex').classList.remove('show');
        enterLevel(i);
      });
    }
    list.appendChild(item);
  });
}
$('btnCodex').addEventListener('click', function(){ renderCodex(); $('sheetCodex').classList.add('show'); });
$('btnCodexClose').addEventListener('click', function(){ $('sheetCodex').classList.remove('show'); });

/* ---------- 11. 语法高亮（轻量） ---------- */
function hlCode(code){
  var esc = escapeHtml(code);
  var parts = [];
  // 先注释，再字符串，最后关键字；用占位符避免互相嵌套
  esc = esc.replace(/#[^\n]*/g, function(m){ parts.push('<span class="cm">'+m+'</span>'); return ''+(parts.length-1)+''; });
  esc = esc.replace(/&quot;[^\n]*?&quot;|&#39;[^\n]*?&#39;|"[^\n"]*"|'[^\n']*'/g, function(m){ parts.push('<span class="st">'+m+'</span>'); return ''+(parts.length-1)+''; });
  esc = esc.replace(/\b(print|def|return|for|while|if|elif|else|in|not|and|or|break|continue|import|from|try|except|True|False|None|len|range|int|str|float|type)\b/g, '<span class="kw">$1</span>');
  esc = esc.replace(/(\d+)/g, function(_, n){ return parts[+n]; });
  return esc;
}

/* ---------- 12. 启动 ---------- */
renderWorld();
showBoot();
setTimeout(bootWorker, 100);
