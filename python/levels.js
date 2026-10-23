/* =========================================================
   像素 Python · 关卡数据（共 20 关，每关 3~4 波挑战）
   阶段类型：
     choice  预测输出/概念判断   {t,q,code?,options[4],answer,why,hints[2]}
     fill    补全代码           {t,q,goal?,code(空位用 [[0]] 标记),blanks,chips,hints[2]}
     fix     找 bug 改错        {t,q,goal?,code(有问题的代码),checks[],sol,hints[2]}
     write   手写代码           {t,q,goal?,starter,checks[],sol,hints[2]}
   checks 说明：每条 check 是一段 Python 代码，会在「用户代码运行后」执行；
   可用 _out（标准输出字符串）和 _g（全局变量字典）；
   断言失败时的中文消息会直接作为 friendly 提示展示给用户。
   ========================================================= */
var LEVELS = [];
function L(o){ LEVELS.push(o); }

/* ==================== 第一区 · 校园 ==================== */

L({ id:1, name:'校门口', mon:'slime', boss:false, item:'薄荷糖',
story:'开学第一天，小布在校门口捡到一张会发光的纸条。',
points:['print() 把内容打印到屏幕','变量：用 = 把值装进名字里','文字（字符串）必须加引号，变量名不能加'],
stages:[
  { t:'choice',
    q:'这段代码运行后，屏幕上会出现什么？',
    code:'name = "小布"\nprint("name")',
    options:['小布','name','"name"','报错：name 未定义'],
    answer:1,
    why:'带引号的 "name" 是一串普通文字，print 会原样打印；想打印变量里的内容，就不能加引号。',
    hints:['print 打印的是括号里的东西——仔细看看括号里到底是变量，还是一段文字？','文字一旦被引号包住，就和变量没有任何关系了。'] },
  { t:'fill',
    q:'补全代码，让程序打印出：翔安',
    goal:'运行结果：翔安',
    code:'place = [[0]]\nprint([[1]])',
    blanks:['"翔安"','place'],
    chips:['"翔安"','翔安','place','"place"','print'],
    hints:['第一个空要填一段文字，第二个空要填装文字的盒子（变量名）','文字必须带引号；print 里放变量名，才能打印盒子里的内容'] },
  { t:'write',
    q:'新生打卡：用代码做自我介绍',
    goal:'定义变量 name（一段文字）和 age（一个数字），并分两行把它们打印出来',
    starter:'# 第 1 行：定义 name\n# 第 2 行：定义 age\n# 再各用一行 print 打印它们\n',
    checks:[
      'assert isinstance(_g.get("name"), str) and _g.get("name").strip() != "", "还没有定义变量 name，它得是一段带引号的文字"',
      'assert isinstance(_g.get("age"), (int, float)) and not isinstance(_g.get("age"), bool), "age 应该是一个数字（数字不要加引号）"',
      'assert str(_g["name"]) in _out, "name 定义好了，还要用 print(name) 把它打印出来"',
      'assert str(_g["age"]) in _out, "age 也要用 print(age) 打印出来"'
    ],
    sol:'name = "小布"\nage = 18\nprint(name)\nprint(age)',
    hints:['名字是文字要加引号，年龄是数字不用加；打印用 print(变量名)，变量名本身不加引号','name = "小布" 这样定义；print(name) 和 print(age) 各占一行'] }
]});

L({ id:2, name:'教学楼', mon:'slime', boss:false, item:'指南针',
story:'教学楼的签到机只认数字，可课表上写的全是文字。',
points:['int / float / str 是三种不同类型','带引号的数字其实是字符串','int() 转整数、float() 转小数、str() 转文字'],
stages:[
  { t:'choice',
    q:'这段代码会打印出什么？',
    code:'x = "3.14"\nprint(type(x))',
    options:["<class 'float'>","<class 'str'>",'3.14',"<class 'int'>"],
    answer:1,
    why:'只要被引号包住，不管里面长得多像数字，类型都是 str（字符串）。',
    hints:['type() 会老实告诉你数据的真实类型','关键在引号：带着引号的 3.14，还是数字吗？'] },
  { t:'fix',
    q:'这段代码想打印 10.5，但一运行就报错，帮它改对',
    goal:'运行结果应该是：10.5',
    code:'price = "9.5"\nn = int(price)\nprint(n + 1)',
    checks:[
      'assert "10.5" in _out, "输出里应该出现 10.5"',
      'assert isinstance(_g.get("n"), float), "int() 只能转换长得像整数的文字；带小数点的要用 float()"'
    ],
    sol:'price = "9.5"\nn = float(price)\nprint(n + 1)',
    hints:['想想 int("9.5") 为什么会报错：9.5 是整数吗？','把 int 换成专门装小数的那个转换函数：float'] },
  { t:'write',
    q:'体测登记处：h 是字符串 "1.72"（身高/米），w 是数字 60（体重/公斤）',
    goal:'第一行打印：身高1.72米，体重60公斤；第二行打印 bmi，bmi = w ÷ (h × h)',
    starter:'h = "1.72"\nw = 60\n\n# 第一行：把身高体重拼成那句话\n\n# 第二行：算出 bmi 并打印\n',
    checks:[
      'assert "身高" in _out and "体重" in _out, "第一行的格式是：身高1.72米，体重60公斤"',
      'assert "1.72" in _out and "60" in _out, "句子里要带上身高 1.72 和体重 60"',
      'assert abs(_g.get("bmi", 0) - 60/(1.72*1.72)) < 0.01, "bmi = w / (h*h)，注意 h 是字符串，要先 float(h) 再参与计算"',
      'assert "20.2" in _out or "20.3" in _out, "bmi 算好了，别忘了 print(bmi)"'
    ],
    sol:'h = "1.72"\nw = 60\nprint("身高" + h + "米，体重" + str(w) + "公斤")\nbmi = w / (float(h) * float(h))\nprint(bmi)',
    hints:['h 带引号是字符串，做乘法之前要 float(h)；w 是数字，拼进句子要 str(w)','print("身高" + h + "米，体重" + str(w) + "公斤")，bmi = w / (float(h) ** 2)'] }
]});

L({ id:3, name:'一期食堂', mon:'slime', boss:false, item:'饭卡贴纸',
story:'食堂阿姨把价签贴好了，可找零还算不明白。',
points:['// 整除：只要商不要零头','% 取余：分完剩下的零头','** 是乘方，不是乘法'],
stages:[
  { t:'choice',
    q:'这一行会打印出什么？',
    code:'print(7 // 2, 7 % 2, 2 ** 3)',
    options:['3 1 8','3.5 1 8','3 1 6','4 0 8'],
    answer:0,
    why:'// 整除得 3（扔掉 .5），% 取余得 1，** 是乘方：2 的 3 次方是 8。',
    hints:['// 和 / 不一样：整除会把小数部分整个扔掉','% 是余数：7 除以 2 商 3 余几？** 是乘方，不是 2×3'] },
  { t:'fill',
    q:'17 颗糖分给 5 个同学，补全代码算出：每人几颗、还剩几颗',
    goal:'运行结果：3 2',
    code:'candy = 17\nn = 5\neach = candy [[0]] n\nleft = candy [[1]] n\nprint(each, left)',
    blanks:['//','%'],
    chips:['//','/','%','*','-'],
    hints:['“每人几颗”不能有小数，“还剩几颗”是分完剩下的零头','整除用 //，取余用 %'] },
  { t:'write',
    q:'小布有 100 元，食堂一顿饭 13 元',
    goal:'第一行打印最多能吃几顿，第二行打印吃完还剩几元',
    starter:'money = 100\nprice = 13\n\n',
    checks:[
      'lines = [l for l in _out.strip().split("\\n") if l.strip()]\nassert len(lines) >= 2, "要打印两行：第一行能吃几顿，第二行还剩几元"',
      'assert "7" in lines[0], "100 元能吃几顿？100 // 13 算一算"',
      'assert "9" in lines[1], "吃完还剩几元？100 % 13 算一算"'
    ],
    sol:'money = 100\nprice = 13\nprint("最多能吃", money // price, "顿")\nprint("还剩", money % price, "元")',
    hints:['顿数不能有零头 → 整除；剩下的钱是除不尽的零头 → 取余','print("最多能吃", money // price, "顿") 这样的写法就可以'] }
]});

L({ id:4, name:'宿舍楼', mon:'slime', boss:false, item:'星星夜灯',
story:'熄灯前，室友的明信片只写了一半地址。',
points:['下标从 0 开始数','负数下标从尾巴开始数，-1 是最后一个','切片 s[a:b]：从 a 开始，到 b 前面为止'],
stages:[
  { t:'choice',
    q:'这段代码会打印出什么？',
    code:'s = "python"\nprint(s[1], s[-1])',
    options:['p n','y n','y o','p o'],
    answer:1,
    why:'下标从 0 开始：s[1] 是第二个字符 y；s[-1] 是倒数第一个字符 n。',
    hints:['编程里数数从 0 开始，s[0] 才是 p','负数下标从尾巴数：-1 是最后一个字符'] },
  { t:'fill',
    q:'s = "xiangan"，用切片打印出前 5 个字符：xiang',
    goal:'运行结果：xiang',
    code:'s = "xiangan"\nprint(s[[[0]]:[[1]]])',
    blanks:['0','5'],
    chips:['0','1','4','5','6'],
    hints:['切片 s[a:b] 从 a 开始，到 b 前面为止（不含 b）','前 5 个字符的下标是 0~4，所以 b 要写 5'] },
  { t:'write',
    q:'校园卡号是 "2026XMU007"',
    goal:'第一行单独打印后三位 007，第二行单独打印前四位 2026（必须用切片取出来）',
    starter:'sid = "2026XMU007"\n\n',
    checks:[
      'lines = [l.strip() for l in _out.strip().split("\\n") if l.strip()]\nassert "007" in lines, "要单独一行打印出后三位 007，试试 sid[-3:]"',
      'assert "2026" in lines, "要单独一行打印出前四位 2026，试试 sid[:4]"'
    ],
    sol:'sid = "2026XMU007"\nprint(sid[-3:])\nprint(sid[:4])',
    hints:['后三位：用负数下标从尾巴开始切；前四位：从 0 切到 4','sid[-3:] 拿后三位；sid[:4] 拿前四位'] }
]});

L({ id:5, name:'宿舍大检查', mon:'boss', boss:true, item:'宿舍之星徽章',
story:'宿管阿姨突击检查值日表，字符串小怪们集体出动了！',
points:['strip() 去掉首尾空白','split() 按分隔符把字符串切成列表','replace() 返回新字符串，必须接住它','join() 把列表拼回字符串，upper() 全大写'],
stages:[
  { t:'choice',
    q:'这段代码会打印出什么？',
    code:'s = "  Hi Python  "\nprint(len(s.strip()))',
    options:['9','11','13','直接报错'],
    answer:0,
    why:'strip() 只去掉首尾的空白，"Hi Python" 一共 9 个字符（中间的空格会保留）。',
    hints:['strip 只管头和尾，不管中间','数一数 "Hi Python"：H、i、空格、P、y、t、h、o、n'] },
  { t:'fill',
    q:'把水果清单拆开，补全代码打印出 banana',
    goal:'运行结果：banana',
    code:'s = "apple,banana,cherry"\nparts = s.[[0]]([[1]])\nprint(parts[1])',
    blanks:['split','","'],
    chips:['split','join','replace','","',',',';'],
    hints:['切字符串要用“按逗号切开”的方法；逗号本身是文字，要加引号','s.split(",") 得到列表，下标 1 正好是第二个'] },
  { t:'fix',
    q:'这段代码想把 java 换成 Python，可运行后一点变化都没有，找出原因',
    goal:'运行结果应该是：I love Python',
    code:'s = "I love java"\ns.replace("java", "Python")\nprint(s)',
    checks:[
      'assert _out.strip() == "I love Python", "输出要正好是：I love Python"',
      'assert "java" not in _out, "java 还留在输出里——replace 的结果要接住才算数"'
    ],
    sol:'s = "I love java"\ns = s.replace("java", "Python")\nprint(s)',
    hints:['字符串是不可变的：replace 不会修改原字符串，而是返回一个新字符串','把替换结果重新接住：s = s.replace(...)'] },
  { t:'write',
    q:'最终挑战：值日表 s = "xmu,ai,2026"',
    goal:'把 s 按逗号拆开、全部转成大写、再用 " | " 连接起来，打印出一行：XMU | AI | 2026',
    starter:'s = "xmu,ai,2026"\n\n',
    checks:[
      'assert "XMU" in _out, "字母要先转成大写（upper()）"',
      'assert _out.strip() == "XMU | AI | 2026", "最终要正好打印：XMU | AI | 2026（分隔符是 空格竖线空格）"'
    ],
    sol:'s = "xmu,ai,2026"\nparts = s.split(",")\nprint(" | ".join(parts).upper())',
    hints:['先 split(",") 得到列表，再用 join 拼回去；upper 可以最后整行用','一行搞定：print(" | ".join(s.split(",")).upper())'] }
]});

L({ id:6, name:'操场入口', mon:'bat', boss:false, item:'号码布',
story:'运动会开幕，操场入口的检录机只认"真"和"假"。',
points:['True / False 是比较的结果（布尔值）','== 判断是否相等，= 才是赋值','!= 是不相等，in 判断子串是否存在'],
stages:[
  { t:'choice',
    q:'这段代码会打印出什么？',
    code:'a = 5\nb = 5\nprint(a == b, a != b)',
    options:['True False','False True','5 5','报错：比较应该用 ='],
    answer:0,
    why:'== 是"是否相等"（相等，打印 True），!= 是"是否不相等"（其实相等，打印 False）；= 是赋值，根本不能用来比较。',
    hints:['print 里放的是两个"判断题"，答案只会是 True 或 False','a 和 b 相等，所以"等于吗？"是 True，"不等于吗？"是 False'] },
  { t:'fill',
    q:'检录核对：补全代码，让程序打印出：True True',
    goal:'运行结果：True True',
    code:'name = "xiaobu"\nbib = 2026\nok = bib [[0]] 2026\nprint(ok, "bu" [[1]] name)',
    blanks:['==','in'],
    chips:['==','=','in','not in','!=','>'],
    hints:['第一个空是"号码是否相等"的判断；第二个空是"bu 是不是 name 里的一部分"','相等判断用 ==（一个 = 是赋值）；判断子串用 in'] },
  { t:'write',
    q:'检录处：speed = 8.5（米/秒），record = 8.0（校纪录）',
    goal:'定义布尔变量 passed（speed 是否打破 record，即 speed 更快），打印 passed；再打印一行 speed == record 的结果',
    starter:'speed = 8.5\nrecord = 8.0\n\n',
    checks:[
      'assert isinstance(_g.get("passed"), bool), "passed 应该是一个 True/False 值，比较式子的结果就是布尔值"',
      'assert _g.get("passed") == True, "8.5 比 8.0 快，passed 应该是 True，用 speed > record 来算"',
      'assert "True" in _out, "passed 算好了，还要用 print(passed) 把它打印出来"',
      'assert "False" in _out, "还要打印一行 speed == record 的结果——8.5 和 8.0 相等吗？"'
    ],
    sol:'speed = 8.5\nrecord = 8.0\npassed = speed > record\nprint(passed)\nprint(speed == record)',
    hints:['比较式子的结果就是 True/False，可以先存进变量再打印','passed = speed > record；print(passed)；再 print(speed == record)'] }
]});

L({ id:7, name:'红色跑道', mon:'bat', boss:false, item:'能量胶',
story:'红色跑道上，分道牌会根据道次喊出不同口令。',
points:['if / elif / else：按顺序检查，先成立先执行','条件后面别忘冒号，分支体要缩进','else 兜底：前面都不成立时执行'],
stages:[
  { t:'choice',
    q:'t = 25 时，这段代码会打印出什么？',
    code:'t = 25\nif t >= 30:\n    print("太热")\nelif t >= 20:\n    print("舒适")\nelse:\n    print("有点冷")',
    options:['太热','舒适','有点冷','舒适和有点冷都打印'],
    answer:1,
    why:'if/elif 从上往下检查，25 不满足 >= 30，但满足 >= 20，执行"舒适"后整条分支就结束了，不会再看 else。',
    hints:['把 25 挨个代入条件：第一个成立吗？第二个呢？','分支是单行道：一旦命中一个，后面的都不会执行'] },
  { t:'fix',
    q:'这段代码想给 85 分打印"良好"，结果打印了"及格"，帮它改对',
    goal:'运行结果应该是：良好',
    code:'score = 85\nif score >= 60:\n    print("及格")\nelif score >= 80:\n    print("良好")\nelif score >= 90:\n    print("优秀")',
    checks:[
      'assert _out.strip() == "良好", "85 分应该打印：良好"',
      'assert "及格" not in _out, "85 先命中了 >= 60 就停下了——要求高的条件要放在前面"'
    ],
    sol:'score = 85\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelse:\n    print("及格")',
    hints:['85 满足 >= 60，所以第一个分支就"截胡"了——if/elif 是先成立先执行','把条件从高往低排：先 90，再 80，最后用 else 兜底'] },
  { t:'write',
    q:'跑道分道：lane = 3',
    goal:'用 if / elif / else 打印：lane 是 1 打印"内道冲刺"，是 8 打印"外道观察"，其他情况打印"中道稳住"',
    starter:'lane = 3\n\n',
    checks:[
      'assert _g.get("lane") == 3, "lane 已经给好是 3，不要改动它"',
      'assert "中道稳住" in _out, "lane 是 3，不是 1 也不是 8，应该走 else 打印：中道稳住"',
      'assert "内道冲刺" not in _out and "外道观察" not in _out, "三个分支只会执行一个——lane 是 3，只有 else 该执行"'
    ],
    sol:'lane = 3\nif lane == 1:\n    print("内道冲刺")\nelif lane == 8:\n    print("外道观察")\nelse:\n    print("中道稳住")',
    hints:['两个具体道次用 if 和 elif 判断，剩下的所有情况交给 else','if lane == 1: … elif lane == 8: … else: 打印中道稳住'] }
]});

L({ id:8, name:'篮球场', mon:'bat', boss:false, item:'小哑铃挂饰',
story:'篮球场的投篮机卡住了，不喊 break 它就永远吐球。',
points:['while 条件：成立就继续，不成立才停','循环体里要让条件"越来越不成立"，否则死循环','break：立刻跳出整个循环'],
stages:[
  { t:'choice',
    q:'这段代码运行后会发生什么？',
    code:'n = 1\nwhile n <= 3:\n    print("投篮")',
    options:['打印 3 次后停下','只打印 1 次','一直打印"投篮"停不下来','直接报错'],
    answer:2,
    why:'循环体里没有改变 n，n 永远是 1，条件 n <= 3 永远成立——这就是死循环。',
    hints:['每转一圈都问问自己：n 变了吗？条件还成立吗？','n 从来没被修改过，条件永远为真，循环就永远出不来'] },
  { t:'fill',
    q:'补全代码：从 1 数到 5，每个数字打印一行',
    goal:'运行结果：1 2 3 4 5（每个数字一行）',
    code:'n = 1\nwhile n [[0]] 5:\n    print(n)\n    n = n [[1]] 1',
    blanks:['<=','+'],
    chips:['<=','<','+','-','==','='],
    hints:['5 也要打印出来，所以条件要"包含 5"；每圈 n 要往上长 1','包含 5 用 <=；往上加用 +（写成 - 就越数越小，永远停不下来）'] },
  { t:'write',
    q:'罚球练习：balls = 10 个球',
    goal:'用 while 循环 + break：每进 1 个打印一行"进球"，进满 3 个就提前收工，最后打印一行"收工"',
    starter:'balls = 10\ncount = 0\n\n',
    checks:[
      'lines = [l for l in _out.strip().split("\\n") if l.strip()]\nassert len(lines) == 4, "应该一共打印 4 行：3 行进球，最后 1 行收工"',
      'assert _out.count("进球") == 3, "「进球」要恰好 3 次——够了 3 个就用 break 跳出循环"',
      'assert _out.strip().endswith("收工"), "循环结束后，别忘了打印最后一行：收工"',
      'assert _g.get("count") == 3, "count 要一圈圈数到 3，break 时正好停住（别忘了 count = count + 1）"'
    ],
    sol:'balls = 10\ncount = 0\nwhile count < balls:\n    print("进球")\n    count = count + 1\n    if count == 3:\n        break\nprint("收工")',
    hints:['循环里先打印、再 count = count + 1，然后用 if 判断够不够 3 个，够了就 break','if count == 3: break（break 要缩进在 if 里面）；少了自增那一行就会死循环'] }
]});

L({ id:9, name:'看台', mon:'bat', boss:false, item:'加油棒',
story:'看台上的加油棒一排排亮起，节奏全靠 range 来数。',
points:['range(n)：从 0 数到 n-1','range(a, b)：从 a 数到 b-1；range(a, b, step) 跨步数','for 循环配累加：total = total + i'],
stages:[
  { t:'choice',
    q:'这段代码会打印出什么？',
    code:'for i in range(2, 6):\n    print(i)',
    options:['2 3 4 5 6','3 4 5 6','0 1 2 3 4 5','2 3 4 5'],
    answer:3,
    why:'range(2, 6) 从 2 开始，到 6 前面为止——终点 6 永远够不着，所以是 2 3 4 5。',
    hints:['range(a, b) 的两个数字：起点包含，终点不包含','从 2 开始数：2、3、4、5——再下一个是 6，但 6 被挡在门外'] },
  { t:'fix',
    q:'这段代码想算 1+2+3+4+5，结果算出来是 10，帮它改对',
    goal:'运行结果应该是：15',
    code:'total = 0\nfor i in range(5):\n    total = total + i\nprint(total)',
    checks:[
      'assert _out.strip() == "15", "1+2+3+4+5 应该等于 15"',
      'assert _g.get("total") == 15, "range(5) 只能数到 4——要加上 5，得写 range(1, 6)"'
    ],
    sol:'total = 0\nfor i in range(1, 6):\n    total = total + i\nprint(total)',
    hints:['range(5) 数出来的是 0 1 2 3 4，既漏了 5 又多了个 0','改成 range(1, 6)：从 1 开始，终点写 6 才能包含 5'] },
  { t:'write',
    q:'看台人浪：只让偶数排的加油棒亮起来',
    goal:'用 for + range 打印 2 4 6 8 10（每个数字一行），最后一行打印它们的和',
    starter:'total = 0\n\n',
    checks:[
      'assert "30" in _out, "最后要打印偶数之和：2+4+6+8+10 = 30"',
      'for n in [2, 4, 6, 8, 10]:\n    assert str(n) in _out, "2 4 6 8 10 每个数字都要打印出来，试试 range(2, 11, 2)"',
      'assert _g.get("total") == 30, "total 要在循环里一个个累加：total = total + i"'
    ],
    sol:'total = 0\nfor i in range(2, 11, 2):\n    print(i)\n    total = total + i\nprint(total)',
    hints:['range 的三个参数：起点、终点（不含）、每次跨几步','range(2, 11, 2) 正好给出 2 4 6 8 10；循环里 print(i) 并 total = total + i'] }
]});

L({ id:10, name:'运动会决赛', mon:'boss', boss:true, item:'冠军奖杯',
story:'运动会决赛日，小布要用一个循环算出整张成绩单！',
points:['total = 0 起步，循环里 total = total + s 累加求和','count 计数：满足条件就 count = count + 1','追最大值：best 起步，遇到更大就更新 best = s','一个循环可以同时干好几件事：求和、计数、找最值'],
stages:[
  { t:'choice',
    q:'这段代码在追踪最大值，它会打印出什么？',
    code:'best = 0\nfor t in [3, 9, 5, 9, 2]:\n    if t > best:\n        best = t\nprint(best)',
    options:['9','28','2','5'],
    answer:0,
    why:'best 只在遇到更大的数时才更新：3→9，后面的 5、9、2 都不比 9 大，所以最终是 9（9 出现两次也不影响）。',
    hints:['拿笔跟着循环走一遍：best 每次被谁刷新？','只有"比当前 best 还大"才会更新，相等不算——第二个 9 不会刷新'] },
  { t:'fix',
    q:'这段代码想统计及格（60 分及以上）的人数，结果少算了，帮它改对',
    goal:'运行结果应该是：4',
    code:'scores = [58, 60, 75, 60, 90]\ncount = 0\nfor s in scores:\n    if s > 60:\n        count = count + 1\nprint(count)',
    checks:[
      'assert _out.strip() == "4", "60、75、60、90 都及格，一共应该是 4 个"',
      'assert _g.get("count") == 4, "两个 60 分被漏掉了——「大于」和「大于等于」不一样"'
    ],
    sol:'scores = [58, 60, 75, 60, 90]\ncount = 0\nfor s in scores:\n    if s >= 60:\n        count = count + 1\nprint(count)',
    hints:['60 分算及格吗？s > 60 会把恰好 60 分的同学拒之门外','把 > 改成 >=：大于等于 60 才算及格'] },
  { t:'fill',
    q:'补全代码，算出四位选手的总成绩：13 + 11 + 15 + 12',
    goal:'运行结果：51',
    code:'times = [13, 11, 15, 12]\ntotal = [[0]]\nfor t in [[1]]:\n    total = total + t\nprint(total)',
    blanks:['0','times'],
    chips:['0','1','times','t','total','"times"'],
    hints:['total 要从"一无所有"开始累加；for 要从装着所有成绩的列表里逐个取','累加从 0 起步；循环对象是列表 times，不是单个的 t'] },
  { t:'write',
    q:'最终挑战：决赛成绩单 scores = [72, 88, 65, 90, 79]',
    goal:'用一个 for 循环同时算出三件事，并分三行打印：总分、及格（>=60）人数、最高分',
    starter:'scores = [72, 88, 65, 90, 79]\n\n',
    checks:[
      'lines = [l for l in _out.strip().split("\\n") if l.strip()]\nassert len(lines) >= 3, "要打印三行：总分、及格人数、最高分"',
      'assert "394" in _out, "总分：72+88+65+90+79 = 394，用 total 累加"',
      'assert "5" in _out, "所有人都 >= 60，及格人数是 5，用 count 计数"',
      'assert "90" in _out, "最高分是 90：用 best 边循环边更新，遇到更大就 best = s"'
    ],
    sol:'scores = [72, 88, 65, 90, 79]\ntotal = 0\ncount = 0\nbest = scores[0]\nfor s in scores:\n    total = total + s\n    if s >= 60:\n        count = count + 1\n    if s > best:\n        best = s\nprint(total)\nprint(count)\nprint(best)',
    hints:['循环前准备好三个变量：total 累加、count 计数、best 追最高，一个 for 里全做完','循环体里：total = total + s；if s >= 60: count = count + 1；if s > best: best = s'] }
]});

/* ==================== 第三区 · 图书馆（片段：第 11~15 关） ==================== */

L({ id:11, name:'图书馆门厅', mon:'ghost', boss:false, item:'木质书签',
story:'图书馆门厅的感应门只放行带着书单的同学。',
points:['列表用方括号创建：[ "a", "b" ]','下标从 0 开始，lst[0] 是第一个元素','append() 在列表末尾添加元素','len() 数个数，in 判断“在不在”'],
stages:[
  { t:'choice',
    q:'这段代码运行后，屏幕上会出现什么？',
    code:`books = ["Python", "C语言"]
books.append("算法")
print(len(books), books[1])`,
    options:['2 Python','3 Python','3 C语言','2 C语言'],
    answer:2,
    why:'append 会在末尾加一本书，长度变成 3；下标从 0 开始数，books[1] 是第二本 “C语言”。',
    hints:['先想想 append 之后，列表里一共有几本书？','len 数的是总本数；下标从 0 开始，[1] 指的是第二本'] },
  { t:'fill',
    q:'补全代码，把“字典”放上书架并检查一下',
    goal:'运行结果：True 3',
    code:`shelf = ["小说", "漫画"]
shelf.[[0]]("字典")
print("字典" [[1]] shelf)
print([[2]](shelf))`,
    blanks:['append','in','len'],
    chips:['append','add','in','on','len','count'],
    hints:['三个空分别是：往末尾加一本、判断“在不在”、数一共有几本','加书用 append，判断在用 in，数个数用 len'] },
  { t:'write',
    q:'入学书单：把想借的书整理成一个列表',
    goal:'创建列表 wish，先放进两本书名（字符串），再 append 一本书；最后分两行打印 len(wish) 和 wish[0]',
    starter:`# 第 1 行：创建列表 wish，先放进两本书名（记得加引号）
# 第 2 行：用 append 再加一本
# 第 3、4 行：分别 print 书的数量和第一本
`,
    checks:[
      'assert isinstance(_g.get("wish"), list), "要创建一个名叫 wish 的列表，用方括号 [ ... ]"',
      'assert len(_g.get("wish", [])) >= 3, "wish 里先放两本、再 append 一本，至少要有 3 本书"',
      'assert str(len(_g["wish"])) in _out, "别忘了 print(len(wish)) 打印一共有几本"',
      'assert str(_g["wish"][0]) in _out, "还要 print(wish[0]) 打印第一本书"'
    ],
    sol:`wish = ["Python入门", "算法图解"]
wish.append("漫画Python")
print(len(wish))
print(wish[0])`,
    hints:['列表用方括号，书名是文字要加引号；append 直接写在列表名后面','wish = ["Python入门", "算法图解"]，然后 wish.append(...)，最后两行 print'] }
]});

L({ id:12, name:'书架区', mon:'ghost', boss:false, item:'借阅卡',
story:'书架区的书东倒西歪，管理员请你帮忙排一排、抽一抽。',
points:['insert(i, x) 在 i 号位插入，remove(x) 按内容删除','pop() 弹出最后一个元素，并把它“还给你”','sort() 就地排序，返回 None（大坑！）','sorted() 返回新列表，原列表不变'],
stages:[
  { t:'choice',
    q:'这段代码运行后，屏幕上会出现什么？',
    code:`nums = [3, 1, 2]
result = nums.sort()
print(result)`,
    options:['[1, 2, 3]','None','[3, 1, 2]','报错'],
    answer:1,
    why:'sort() 是“就地排序”：它直接改好原列表，返回值是 None。想看到排序结果，要 print(nums)，或者用 sorted(nums)。',
    hints:['sort() 会直接改原列表，它不会“还给你”一个新列表','print(result) 打印的是 sort 的返回值——它什么都没还回来，只是 None'] },
  { t:'fix',
    q:'这段代码想把成绩从小到大排好再打印，结果打印出 None，帮它改对',
    goal:'运行结果应该是：[68, 75, 88, 92]',
    code:`scores = [88, 75, 92, 68]
scores = scores.sort()
print(scores)`,
    checks:[
      'assert "[68, 75, 88, 92]" in _out, "输出里应该出现排好序的 [68, 75, 88, 92]"',
      'assert "None" not in _out, "sort() 的返回值是 None——它直接改原列表，别再用 = 接住它"'
    ],
    sol:`scores = [88, 75, 92, 68]
scores.sort()
print(scores)`,
    hints:['问题出在 scores = scores.sort()：sort 不返回排好的列表','把 = 接住的那一步去掉：单独写一行 scores.sort()，再 print(scores)'] },
  { t:'write',
    q:'整理书架：books = ["C++", "Python", "Java"]',
    goal:'先在 1 号位 insert 插入 "Go"，再 remove 删掉 "Java"，再 pop() 弹出最后一本；最后分两行打印 books 和 len(books)',
    starter:`books = ["C++", "Python", "Java"]
# 第 2 行：用 insert 在 1 号位插入 "Go"
# 第 3 行：用 remove 删掉 "Java"
# 第 4 行：用 pop() 弹出最后一本
# 最后两行：分别 print(books) 和 print(len(books))
`,
    checks:[
      'assert isinstance(_g.get("books"), list), "列表 books 不见了？第一行定义别删哦"',
      'assert "[\'C++\', \'Go\']" in _out, "最后要 print(books) 打印整理后的书架"',
      'assert "2" in _out, "还要 print(len(books)) 打印剩下几本"',
      'assert _g.get("books") == ["C++", "Go"], "顺序很重要：insert(1, ...) → remove(...) → pop()，想想最后剩下谁"'
    ],
    sol:`books = ["C++", "Python", "Java"]
books.insert(1, "Go")
books.remove("Java")
books.pop()
print(books)
print(len(books))`,
    hints:['insert/remove/pop 都直接改原列表，不用接住返回值；remove 按内容删，pop 不加参数就弹最后一本','books.insert(1, "Go")、books.remove("Java")、books.pop()，一步一步来'] }
]});

L({ id:13, name:'阅览室', mon:'ghost', boss:false, item:'橡皮章',
story:'阅览室安静得只剩翻页声，正好一口气把一摞书“遍历”完。',
points:['切片 lst[a:b]：从 a 开始，到 b 前面为止','for x in 列表：把元素一个一个拿出来用','sum / max / min：列表统计三兄弟'],
stages:[
  { t:'choice',
    q:'这段代码运行后，屏幕上会出现什么？',
    code:`nums = [10, 20, 30, 40, 50]
print(nums[1:4], sum(nums))`,
    options:['[10, 20, 30] 150','[20, 30, 40, 50] 140','[20, 30, 40] 140','[20, 30, 40] 150'],
    answer:3,
    why:'切片 [1:4] 从下标 1 开始、到下标 4 前面为止，拿到 20、30、40；sum 是全部相加：10+20+30+40+50 = 150。',
    hints:['切片到“终点前一个”为止，不含终点本身','先确定切片拿到哪三个数；sum 不管切片，它把整个列表都加起来'] },
  { t:'fill',
    q:'补全代码：遍历打印每本书名，最后打印最厚那本书的页数',
    goal:'运行结果：依次打印 小说、诗集、画册，最后一行是 320',
    code:`books = ["小说", "诗集", "画册"]
for b [[0]] books:
    print(b)
pages = [200, 320, 150]
print([[1]](pages))`,
    blanks:['in','max'],
    chips:['in','of','max','min','sum','largest'],
    hints:['for 后面的固定搭配是“in 列表”；要最大的那本，用“求最大”的函数','for b in books:；最大用 max()，最小才是 min()'] },
  { t:'write',
    q:'成绩统计处：scores = [78, 92, 85, 60]',
    goal:'第一行打印总分，第二行打印最高分，第三行打印最低分，第四行用切片打印前两个分数组成的列表',
    starter:`scores = [78, 92, 85, 60]
# 1. print 总分（sum）
# 2. print 最高分（max）
# 3. print 最低分（min）
# 4. 用切片 print 前两个分数
`,
    checks:[
      'assert "315" in _out, "第一行打印总分：sum(scores)，78+92+85+60 是多少？"',
      'assert "92" in _out and "60" in _out, "最高分用 max()，最低分用 min()，各占一行"',
      'assert "[78, 92]" in _out, "前两个分数用切片 scores[:2] 取出来打印"'
    ],
    sol:`scores = [78, 92, 85, 60]
print(sum(scores))
print(max(scores))
print(min(scores))
print(scores[:2])`,
    hints:['sum / max / min 直接把整个列表塞进去就行；前两个是切片 [0:2]','print(sum(scores)) 这样写；切片 scores[:2] 里的 0 可以省略'] }
]});

L({ id:14, name:'检索台', mon:'ghost', boss:false, item:'牛皮笔记本',
story:'检索台的电脑只会按“键”找书，一报错它就害羞地闪红灯。',
points:['字典用花括号：{"键": 值}，按键取值 d["键"]','d.get("键", 备胎)：找不到也不报错','in 判断的是“键”在不在，不是值','d["新键"] = 值 直接添加；d["旧键"] = 新值 直接修改'],
stages:[
  { t:'choice',
    q:'这段代码运行后，屏幕上会出现什么？',
    code:`d = {"Python": 3, "算法": 5}
print(d.get("漫画", 0))`,
    options:['0','None','报错：键不存在','5'],
    answer:0,
    why:'get() 的第二个参数是“找不到时的备胎”：字典里没有 “漫画” 这个键，就安安稳稳返回 0，不会报错。',
    hints:['get() 和 d["键"] 不一样：找不到键也不会报错','get 的第二个参数就是“找不到时返回什么”'] },
  { t:'fix',
    q:'这段代码想打印 “Python” 的库存数量，结果一运行就报 KeyError，帮它改对',
    goal:'运行结果应该是：3',
    code:`stock = {"Python": 3, "算法": 0}
print(stock["python"])`,
    checks:[
      'assert _out.strip() == "3", "输出要正好是数字 3"',
      'assert "KeyError" not in _out and "Traceback" not in _out, "字典的键区分大小写：“python” 和 “Python” 是两个不同的键"'
    ],
    sol:`stock = {"Python": 3, "算法": 0}
print(stock["Python"])`,
    hints:['KeyError 意思是“这个键不存在”——去字典里对对看，键到底是怎么写的？','字典里的键是大写开头的 “Python”，取的时候大小写要一模一样'] },
  { t:'write',
    q:'读者登记：为同学 “小布” 建一张检索卡',
    goal:'创建字典 info：{"name": "小布", "id": 2026}；把 "id" 改成 2027；再添加新键 "dept" 值 "计算机"；最后分两行打印 info["name"] 和 len(info)',
    starter:`# 第 1 行：创建字典 info，含 "name": "小布" 和 "id": 2026
# 第 2 行：把 "id" 改成 2027
# 第 3 行：添加 "dept": "计算机"
# 最后两行：打印 info["name"] 和 len(info)
`,
    checks:[
      'assert isinstance(_g.get("info"), dict), "要创建一个名叫 info 的字典，用花括号 { ... }"',
      'assert len(_g.get("info", {})) == 3, "info 最终应该有 3 个键：name、id、dept"',
      'assert _g["info"].get("id") == 2027, "id 要从 2026 改成 2027：info[“id”] = 2027"',
      'assert "小布" in _out, "最后要 print(info[“name”]) 把名字打印出来"'
    ],
    sol:`info = {"name": "小布", "id": 2026}
info["id"] = 2027
info["dept"] = "计算机"
print(info["name"])
print(len(info))`,
    hints:['改和加长一个样：info[“键”] = 值，键已存在就是改，不存在就是加','info = {"name": "小布", "id": 2026}，然后两行 info[...] = ...'] }
]});

L({ id:15, name:'期末找书', mon:'boss', boss:true, item:'期末通行证',
story:'期末前的图书馆灯火通明，找到那本“对的书”，就能拿到通行证！',
points:['列表里可以装字典：先 [下标] 取字典，再 ["键"] 取值','for 遍历 + if 判断 = 按条件筛选','“数个数”用 count += 1，“求总量”用 total += 值','字典的键区分大小写，取之前先看清楚'],
stages:[
  { t:'choice',
    q:'这段代码运行后，屏幕上会出现什么？',
    code:`books = [{"name": "Python", "stock": 3}, {"name": "算法", "stock": 0}]
print(books[1]["name"], books[0]["stock"])`,
    options:['Python 3','算法 0','算法 3','Python 0'],
    answer:2,
    why:'books[1] 先取出列表里第 2 个字典（下标从 0 数），再用 ["name"] 取出 “算法”；books[0]["stock"] 是第 1 本的库存 3。',
    hints:['列表套字典要分两步：先 [下标] 取出一本字典，再 ["键"] 取里面的值','books[1] 是第二个元素，它是哪本书？books[0] 又是哪本？'] },
  { t:'fill',
    q:'补全代码：打印每本“有库存”的书名，最后统计有几本',
    goal:'运行结果：依次打印 Python入门、画册，最后一行是 2',
    code:`books = [{"name": "Python入门", "stock": 3}, {"name": "算法图解", "stock": 0}, {"name": "画册", "stock": 5}]
count = 0
for b in books:
    if b[[[0]]] > 0:
        print(b[[[1]]])
        count += [[2]]
print(count)`,
    blanks:['"stock"','"name"','1'],
    chips:['"stock"','stock','"name"','name','1','0'],
    hints:['b 是一本“字典”，取库存和书名都要按“键”取，键是文字必须带引号','b["stock"] 判断库存，b["name"] 打印书名；每找到一本 count 加 1'] },
  { t:'fix',
    q:'这段代码想统计“库存一共有多少册”，可算出来的结果不对，帮它改对',
    goal:'运行结果应该是：8',
    code:`books = [{"name": "Python入门", "stock": 3}, {"name": "算法图解", "stock": 0}, {"name": "画册", "stock": 5}]
total = 0
for b in books:
    total += 1
print(total)`,
    checks:[
      'assert _out.strip() == "8", "要算的是库存册数之和：3 + 0 + 5 = 8"',
      'assert _g.get("total") == 8, "total += 1 数的是“有几种书”；要加的是每本的库存：total += b[“stock”]"'
    ],
    sol:`books = [{"name": "Python入门", "stock": 3}, {"name": "算法图解", "stock": 0}, {"name": "画册", "stock": 5}]
total = 0
for b in books:
    total += b["stock"]
print(total)`,
    hints:['现在每次只加 1，加出来的是“有几种书”，不是“一共几册”','把 1 换成每本书自己的库存：total += b["stock"]'] },
  { t:'write',
    q:'最终挑战：从书单里找出还能借的书',
    goal:'逐行打印每本有库存（stock > 0）的书的书名；用变量 count 统计有库存的书有几种，最后一行打印 count',
    starter:`books = [{"name": "Python入门", "stock": 2}, {"name": "算法图解", "stock": 0}, {"name": "漫画Python", "stock": 4}]
count = 0
# 遍历 books：每本 b 是一个字典
# 如果 b["stock"] > 0：打印 b["name"]，并 count += 1
# 循环结束后 print(count)
`,
    checks:[
      'assert isinstance(_g.get("count"), int), "用一个整数变量 count 来统计有库存的书有几种"',
      'assert "Python入门" in _out and "漫画Python" in _out, "有库存（stock > 0）的书名都要逐行打印出来"',
      'assert "算法图解" not in _out, "库存为 0 的“算法图解”不该出现——遍历时记得用 if 判断"',
      'assert _g["count"] == 2 and "2" in _out, "count 应该等于 2，最后一行别忘了 print(count)"'
    ],
    sol:`books = [{"name": "Python入门", "stock": 2}, {"name": "算法图解", "stock": 0}, {"name": "漫画Python", "stock": 4}]
count = 0
for b in books:
    if b["stock"] > 0:
        print(b["name"])
        count += 1
print(count)`,
    hints:['for b in books: 取出每本字典，里面套一个 if b["stock"] > 0:','if 里面做两件事：print(b["name"]) 和 count += 1，循环外最后 print(count)'] }
]});

L({ id:16, name:'海边栈道', mon:'crab', boss:false, item:'贝壳',
story:'栈道尽头的贝壳会说话，可它只听得懂“有返回值”的函数。',
points:['def 定义函数，参数是递进去的材料','return 把结果交回给调用者；print 只是打印给人看','函数忘了 return，外面接到的就是 None','调用函数：名字(参数)，返回值还能继续用'],
stages:[
  { t:'choice',
    q:'这段代码运行后，屏幕上会出现什么？',
    code:`def hi(name):
    print("你好，" + name)
r = hi("小布")
print(r)`,
    options:['先打印“你好，小布”，再打印 None','只打印“你好，小布”','只打印 None','报错：r 不能接收函数结果'],
    answer:0,
    why:'hi 里只有 print 没有 return：print 是“喊出来给人看”，并没有把结果交回来，所以 r 接到的是函数默认的返回值 None。',
    hints:['print 和 return 是两回事：一个“喊出来”，一个“交回去”','函数里没有 return 时，默认返回 None——所以 r 是 None'] },
  { t:'fill',
    q:'补全函数 square，算出并打印 5 的平方',
    goal:'运行结果：25',
    code:`def square(n):
    [[0]] n * n
print(square([[1]]))`,
    blanks:['return','5'],
    chips:['return','print','5','"5"','25','def'],
    hints:['函数交出结果要靠 return，不是 print','第一个空填 return；调用处传数字 5（不加引号），5 的平方是 25'] },
  { t:'write',
    q:'栈道喊话器：写一个函数 welcome(name)',
    goal:'定义 welcome(name)，return 一句 “欢迎来海边，” + name；然后 print(welcome("小布"))',
    starter:`# 第 1 步：def welcome(name):，里面 return 欢迎语
# 第 2 步：print(welcome("小布"))
`,
    checks:[
      `assert callable(_g.get("welcome")), "还没有定义函数 welcome——用 def welcome(name): 开头"`,
      `assert _g["welcome"]("小明") == "欢迎来海边，小明", "welcome 要用 return 交出拼好的欢迎语；如果只是 print，外面接到的就是 None"`,
      `assert "欢迎来海边，小布" in _out, "函数写好之后，还要 print(welcome('小布')) 把话打印出来"`
    ],
    sol:`def welcome(name):
    return "欢迎来海边，" + name
print(welcome("小布"))`,
    hints:['函数想交出结果要用 return；print 只是打印，不会把结果“交回来”','def welcome(name): 下一行缩进 return "欢迎来海边，" + name，最后 print(welcome("小布"))'] }
]});

L({ id:17, name:'白城沙滩', mon:'crab', boss:false, item:'海玻璃',
story:'白城沙滩的浪一次推上来两颗海玻璃，像 return 一次带回两个值。',
points:['默认参数：def f(name="游客")，不传就用默认值','return a, b 一次返回多个值，用 x, y = f() 解包接住','函数里的变量是局部的，改不动外面同名的变量'],
stages:[
  { t:'choice',
    q:'这段代码运行后，会打印出什么？',
    code:`x = 10
def f():
    x = 99
f()
print(x)`,
    options:['99','10','None','报错：x 重复定义'],
    answer:1,
    why:'函数里的 x = 99 是一个局部变量，出了函数就失效；外面的 x 还是原来的 10，一点没受影响。',
    hints:['函数里给 x 赋值，改的是“函数内部的那份 x”','局部变量出了函数就消失，外面的 x 纹丝不动'] },
  { t:'fix',
    q:'这段代码想靠默认参数打招呼，可打印出来的却是 None，帮它改对',
    goal:'运行结果应该是：你好，游客',
    code:`def greet(name="游客"):
    msg = "你好，" + name
print(greet())`,
    checks:[
      `assert _out.strip() == "你好，游客", "输出应该正好是：你好，游客——函数要用 return 把结果交回来，不是只在心里算"`,
      `assert callable(_g.get("greet")) and _g["greet"]() == "你好，游客" and _g["greet"]("小布") == "你好，小布", "greet() 不传参数要用默认的 游客；传了名字就要用名字，两种情况都得 return 对"`
    ],
    sol:`def greet(name="游客"):
    msg = "你好，" + name
    return msg
print(greet())`,
    hints:['print 是喊给人看，return 才是把结果交出去；现在 greet 什么都没交回来','在函数里补一行 return msg（注意缩进对齐），默认参数 name="游客" 本身没毛病'] },
  { t:'write',
    q:'一次要两个答案：写一个函数 stats(a, b)',
    goal:'stats(a, b) 同时 return 两个值：和 与 差(a-b)；用 s, d = stats(9, 4) 接住，分两行打印 13 和 5',
    starter:`def stats(a, b):
    # 在这里 return 两个值

# 用 s, d = stats(9, 4) 接住，再各 print 一行
`,
    checks:[
      `assert callable(_g.get("stats")), "先定义函数 stats(a, b)"`,
      `assert _g["stats"](9, 4) == (13, 5), "stats 要 return 两个值：和 与 差，写法是 return a + b, a - b"`,
      `assert _g["stats"](10, 1) == (11, 9), "换一组数试试：stats(10, 1) 应该返回 (11, 9)"`,
      `assert "13" in _out and "5" in _out, "把接住的两个结果分别 print 出来"`
    ],
    sol:`def stats(a, b):
    return a + b, a - b
s, d = stats(9, 4)
print(s)
print(d)`,
    hints:['return 后面写两个值用逗号隔开；接的时候也用逗号：s, d = stats(9, 4)','return a + b, a - b，然后 s, d = stats(9, 4)，再 print(s) print(d)'] }
]});

L({ id:18, name:'礁石区', mon:'crab', boss:false, item:'小船模型',
story:'礁石区浪花噼啪，小布数着浪花里藏着的数字，给小船模型换上了新帆。',
points:['for ch in 字符串：一个字符一个字符地遍历','计数器套路：count = 0 起步，满足条件就 +1','ch in "0123456789" 可以判断字符是不是数字'],
stages:[
  { t:'choice',
    q:'这段代码运行后，会打印出什么？',
    code:`count = 0
for ch in "banana":
    if ch == "a":
        count = count + 1
print(count)`,
    options:['1','2','3','banana'],
    answer:2,
    why:'循环逐个检查 b-a-n-a-n-a，碰到 a 就 +1，一共有 3 个 a，所以 count 是 3。',
    hints:['一个一个字符过：b→a→n→a→n→a，数数 a 出现几次','count 只在 ch == "a" 时 +1，一共碰到 3 次'] },
  { t:'fill',
    q:'数出 "sea breeze" 里有几个字母 e，补全代码',
    goal:'运行结果：4',
    code:`s = "sea breeze"
count = 0
for ch in s:
    if ch == "e":
        count = count [[0]] 1
print([[1]])`,
    blanks:['+','count'],
    chips:['+','-','*','count','ch','"count"'],
    hints:['“+1”是在原有基础上累加：count = count + 1','打印的是累加结果 count（变量名不加引号）'] },
  { t:'write',
    q:'礁石密码：code = "Py3thon8" 里藏着几个数字？',
    goal:'遍历字符串，数出数字字符的个数存进 count，最后 print(count)，答案应该是 2',
    starter:`code = "Py3thon8"
# 从 0 开始数：逐个字符判断是不是数字
`,
    checks:[
      `assert isinstance(_g.get("count"), int), "用一个变量 count 从 0 开始累加"`,
      `assert _g.get("count") == 2, "“Py3thon8”里有几个数字？逐个字符判断 ch in '0123456789'"`,
      `assert "2" in _out, "数好了还要 print(count)"`
    ],
    sol:`code = "Py3thon8"
count = 0
for ch in code:
    if ch in "0123456789":
        count = count + 1
print(count)`,
    hints:['判断“是不是数字字符”可以写 ch in "0123456789"','count = 0 开头；for ch in code: 里面 if ch in "0123456789": count = count + 1'] }
]});

L({ id:19, name:'灯塔下', mon:'crab', boss:false, item:'灯塔钥匙扣',
story:'灯塔下，小布把潮水高度排成队，亮着的灯光只留给够高的浪。',
points:['列表推导式 [h for h in 列表 if 条件]，一行筛出新列表','enumerate(列表, 1)：序号从 1 开始，名字和编号一起拿','zip(a, b) 把两个列表配对，长度不齐时以短的为准'],
stages:[
  { t:'choice',
    q:'这段代码运行后，会打印出什么？',
    code:`names = ["甲", "乙", "丙"]
scores = [90, 85]
print(list(zip(names, scores)))`,
    options:["[('甲', 90), ('乙', 85), ('丙', None)]",'报错：两个列表长度不一样',"[('甲', 90), ('乙', 85), ('丙', 0)]","[('甲', 90), ('乙', 85)]"],
    answer:3,
    why:'zip 配对到最短的列表用完就停，多出来的“丙”会被悄悄丢掉——用 zip 前最好确认两边一样长。',
    hints:['zip 像拉链：一边一个对齐拉在一起','拉到短的用完就停了——想想“丙”还拉得上吗？'] },
  { t:'fix',
    q:'这段代码想给三位同学从第 1 名开始编号，可编号却从 0 开始了，帮它改对',
    goal:'运行结果应该是：第 1 名: 小明 / 第 2 名: 小红 / 第 3 名: 小刚（各占一行）',
    code:`names = ["小明", "小红", "小刚"]
for i in range(len(names)):
    print("第", i, "名:", names[i])`,
    checks:[
      `assert "小明" in _out and "小红" in _out and "小刚" in _out, "三个名字一个都不能少，都要带编号打印出来"`,
      `lines = [l for l in _out.strip().split("\\n") if l.strip()]
assert len(lines) == 3 and "1" in lines[0] and "2" in lines[1] and "3" in lines[2], "编号要从 1 开始：第 1 名、第 2 名、第 3 名——试试 enumerate(names, 1)"`
    ],
    sol:`names = ["小明", "小红", "小刚"]
for i, name in enumerate(names, 1):
    print("第", i, "名:", name)`,
    hints:['编号从 0 开始是 range 的习惯；想从 1 开始编号，用 enumerate 更顺手','for i, name in enumerate(names, 1): 同时拿到编号和名字，编号从 1 起'] },
  { t:'write',
    q:'灯塔只照亮够高的浪：heights = [120, 80, 200, 60, 150]',
    goal:'用列表推导式筛出 ≥100 的高度存进 big，再 print(big)，应显示 [120, 200, 150]',
    starter:`heights = [120, 80, 200, 60, 150]
# 用一行列表推导式筛出 >= 100 的，存进 big

`,
    checks:[
      `assert isinstance(_g.get("big"), list), "把筛选结果装进一个列表变量 big"`,
      `assert _g.get("big") == [120, 200, 150], "big 应该正好是 [120, 200, 150]——试试 [h for h in heights if h >= 100]"`,
      `assert "[120, 200, 150]" in _out, "big 生成好了，别忘了 print(big)"`
    ],
    sol:`heights = [120, 80, 200, 60, 150]
big = [h for h in heights if h >= 100]
print(big)`,
    hints:['列表推导式的骨架：[表达式 for 变量 in 列表 if 条件]','big = [h for h in heights if h >= 100]，然后 print(big)'] }
]});

L({ id:20, name:'灯塔守护者', mon:'boss', boss:true, item:'像素毕业证书',
story:'灯塔顶端灯光大亮，守护者把像素毕业证书交给小布：这片海，以后就由你来守护！',
points:['try / except：给会翻车的代码铺安全垫，程序不崩溃','int() 转不动会抛 ValueError，except 要接对类型','把容错转换封装成函数，主程序清清爽爽','字典存成绩：split 拆开、sum 算总分、max(key=...) 找最高'],
stages:[
  { t:'choice',
    q:'这段代码运行后，会打印出什么？',
    code:`try:
    n = int("三点五")
    print(n)
except ValueError:
    print("转换失败")`,
    options:['三点五','转换失败','程序报 ValueError 直接中断','None'],
    answer:1,
    why:'int("三点五") 转不动会抛 ValueError，except ValueError 正好接住它，于是执行 except 里的打印，程序没有崩。',
    hints:['int() 转不动文字时会抛错，但 try 外面有 except 在守着','except ValueError 正好接住这个错，程序接着走 except 里的 print'] },
  { t:'fix',
    q:'成绩单里混进了捣乱的“八十”，程序一读到它就崩溃，帮它兜底',
    goal:'运行结果应该是：[90, 0, 75]',
    code:`raw = ["90", "八十", "75"]
scores = []
for s in raw:
    scores.append(int(s))
print(scores)`,
    checks:[
      `assert "[90, 0, 75]" in _out, "输出里应该出现 [90, 0, 75]——“八十”转不了就记 0"`,
      `assert _g.get("scores") == [90, 0, 75], "scores 列表要正好是 [90, 0, 75]，用 try/except 兜住 ValueError"`
    ],
    sol:`raw = ["90", "八十", "75"]
scores = []
for s in raw:
    try:
        scores.append(int(s))
    except ValueError:
        scores.append(0)
print(scores)`,
    hints:['int("八十") 会抛 ValueError，程序直接中断；要用 try/except 给它兜底','把转换放进 try: 里，except ValueError: 里面 scores.append(0)'] },
  { t:'fill',
    q:'补全代码：统计字典里的成绩——算出平均分，再找出最高分的同学',
    goal:'运行结果会打印平均分（约 84.33）和 小明',
    code:`scores = {"小明": 90, "小红": 85, "小刚": 78}
total = 0
for name in scores:
    total = total + scores[[0]]
avg = total / [[1]](scores)
best = [[2]](scores, key=scores.get)
print(avg, best)`,
    blanks:['[name]','len','max'],
    chips:['[name]','name','len','max','min','count'],
    hints:['遍历字典拿到的是“名字”（键），分数要用 scores[name] 去取','平均分 = 总分 / len(scores)；最高分同学用 max(scores, key=scores.get)'] },
  { t:'write',
    q:'收官挑战：raw = ["小明:90", "小红:八十", "小刚:75", "小美:88"]',
    goal:'写函数 to_score(text) 容错转换分数（失败记 0）；遍历 raw 建出字典 scores；打印平均分（63.25）和最高分同学 小明',
    starter:`def to_score(text):
    # try 转成 int 返回，失败(except ValueError)返回 0

raw = ["小明:90", "小红:八十", "小刚:75", "小美:88"]
# 遍历 raw，用 split(":") 拆出名字和分数，存进字典 scores
# 打印平均分
# 打印最高分同学的名字
`,
    checks:[
      `assert callable(_g.get("to_score")), "先写一个函数 to_score(text)，负责把分数文字安全地转成数字"`,
      `assert _g["to_score"]("88") == 88 and _g["to_score"]("八十") == 0, "to_score 要用 try/except：能转就返回整数，转不了就返回 0，不许让程序崩掉"`,
      `assert _g.get("scores") == {"小明": 90, "小红": 0, "小刚": 75, "小美": 88}, "遍历 raw，用 split(':') 拆开名字和分数文字，把结果存进字典 scores"`,
      `assert "63" in _out and "小明" in _out, "最后要打印平均分（90+0+75+88 再除以 4，约 63.25）和最高分同学的名字 小明"`
    ],
    sol:`def to_score(text):
    try:
        return int(text)
    except ValueError:
        return 0
raw = ["小明:90", "小红:八十", "小刚:75", "小美:88"]
scores = {}
for item in raw:
    name, s = item.split(":")
    scores[name] = to_score(s)
avg = sum(scores.values()) / len(scores)
best = max(scores, key=scores.get)
print("平均分:", avg)
print("最高分:", best)`,
    hints:['拆字符串用 split(":")；字典存成绩用 scores[name] = 分数；找最高分用 max(scores, key=scores.get)','to_score 里 try: return int(text)，except ValueError: return 0；主程序 for item in raw: name, s = item.split(":")，scores[name] = to_score(s)'] }
]});

