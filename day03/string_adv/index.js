const coffee = 'americano';

coffee.includes('cano'); // true (포함유무)
coffee.indexOf('i'); // 4 없으면 -1 (해당문자가 몇번째에 있는지)
coffee.replace('a', 'z'); // a를 z로 바꿔라
coffee.startsWith('ame'); // true (ame로 시작하나?)
coffee.endsWith('cano'); // true (cano로 끝나나?)

// 자르고 돌려주기
coffee.slice(0,5) //ameri

// 대소문자 변경
coffee.toUpperCase() // AMERICANO
coffee.toLowerCase() // america

// 배열화
coffee.split("i") // ["amer","cano"]

// 반복
coffee.repeat(3) // americanoamericanoamericano


